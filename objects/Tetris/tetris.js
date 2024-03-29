var canvas = document.getElementById('tetris');
var context = canvas.getContext('2d');

context.scale(20,20);

function arenaSweep () {
    var rowCount = 1; 
    outer: for (var y = arena.length - 1; y > 0; --y) {
        for (var x =0; x < arena[y].length; ++x) {
            if (arena[y][x] === 0) continue outer;
        }
        var row  = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;

        player.score += rowCount * 10;
        rowCount *= 2;
    }
}

function collide(arena, player) {
    const [m , o] = [player.matrix, player.pos];
    for (var y =0; y < m.length; y++) {
        for (var x= 0; x <m[y].length; x++) {
            if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}
function createMatrix(w, h) {
    var matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function createPiece(type) {
    if (type  === 'T') {
        return [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0]
        ];
    } else if (type === 'O') {
        return [
            [2,2],
            [2,2]
        ];
    }else if (type === 'J') {
        return [
            [0,3,0],
            [0,3,0],
            [3,3,0]
        ];
    }else if (type === 'L') {
        return [
            [0,4,0],
            [0,4,0],
            [0,4,4]
        ];
    }else if (type === 'I') {
        return [
            [0,5,0,0],
            [0,5,0,0],
            [0,5,0,0],
            [0,5,0,0]
        ];
    }else if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0]
        ];
    }else if(type === 'Z') {
        return [
            [7,7,0],
            [0,7,7],
            [0,0,0]
        ];
    }
}

function draw () {
    context.fillStyle = "#000";
    context.fillRect(0,0,canvas.width,canvas.height);

    drawMatrix({x:0, y: 0},arena);
    drawMatrix(player.pos, player.matrix);
}

function drawMatrix(offset, matrix) {
    matrix.forEach(function(row, y) {
        row.forEach(function(value ,x) {
            if(value != 0) {
                context.fillStyle = colors[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        })
    })
}
var dropCounter = 0;
var dropInterval = 1000;
var lastTime = 0;
function update(time = 0) {
    var deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;
    if(dropCounter > dropInterval) {
        playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}

function merge(arena, player) {
    player.matrix.forEach(function (row, y) {
        row.forEach(function (value, x) {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        }); 
    });
}

function playerDrop () {
        player.pos.y++;
        if(collide(arena, player)) {
            player.pos.y--;
            merge(arena, player);
            playerReset();
            arenaSweep();
            updateScore();
        }
        dropCounter = 0;
}

function playerMove (dir) {
    player.pos.x += dir;
    if (collide(arena, player)) {
        player.pos.x -= dir;
    }
}

function playerReset() {
    var pieces = "ILJOTSZ";
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
    console.log(player.pos.x);

    if (collide(arena, player)) {
        arena.forEach(function (row) {
            row.fill(0);
            player.score = 0;
            updateScore();
        });
    }
}
function playerRotate (dir) {
    var pos = player.pos.x;
    var offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > player.matrix[0].length) {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

function rotate(matrix, dir) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < y; x++) {
            [
                matrix[x][y],
                matrix[y][x]
            ] = [
                matrix[y][x],
                matrix[x][y]
            ];

        }
    }
    if (dir > 0) {
        matrix.forEach(function (row) {
            row.reverse();
        })
    } else {
        matrix.reverse();
    }
}

function updateScore () {
    document.getElementById('score').innerHTML = player.score;
}
var colors = [
    null,
    '#ffcc99',
    '#ff99ff',
    '#99ffff',
    '#66ff99',
    '#008B8B',
    '#FFEC8B',
    '#00FFFF'
];

var arena = createMatrix(12, 20);
var player = {
    pos : {x: 0, y:0},
    matrix : null,
    score: 0
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) {
        playerMove(-1);
    }else if(event.keyCode === 39) {
        playerMove(1);
    }else if(event.keyCode === 40) {
        playerDrop();
    }else if(event.keyCode === 38) {
        playerRotate(1);
    }
});

playerReset();
updateScore();
update();