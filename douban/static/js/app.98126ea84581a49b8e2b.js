webpackJsonp([0],{"+SUM":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"main"},[s("div",[s("div",{staticClass:"desc"},[s("a",{attrs:{href:""}},[s("img",{attrs:{src:t.avatar,alt:t.name}})]),t._v(" "),s("a",{attrs:{href:""}},[s("div",{staticClass:"user-info"},[s("strong",[t._v(t._s(t.name)+" "),s("span",[t._v(t._s(t.active))])]),t._v(" "),s("div",{staticClass:"timestamp"},[t._v(t._s(t.time))])])])]),t._v(" "),s("a",{attrs:{href:""}},[s("div",{staticClass:"content"},[s("div",[t._v("\n                    "+t._s(t.text)+"\n                ")])])])]),t._v(" "),t.isCard()?s("div",{staticClass:"feed-card"},[s("a",{attrs:{href:""}},[s("div",{staticClass:"title"},[t._v(t._s(t.card.title))]),t._v(" "),s("div",{staticClass:"detail",class:t.card.image?"has-cover":""},[s("div",{staticClass:"text"},[t._v(t._s(t.card.subtitle))]),t._v(" "),t.card.image?s("div",{staticClass:"cover",style:{backgroundImage:"url("+t.card.image.normal.url+")"}}):t._e()])])]):t.images[0]?s("div",{staticClass:"feed-image"},t._l(t.images,function(t){return s("div",{key:t.id,staticClass:"itemimg"},[s("img",{attrs:{src:t.normal.url,alt:""}})])})):t._e(),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"ic-btn ic-btn-like left"},[s("span",[t._v(t._s(t.like))])]),t._v(" "),s("div",{staticClass:"ic-btn ic-btn-comment left"},[s("span",[t._v(t._s(t.comments))])]),t._v(" "),s("div",{staticClass:"ic-btn ic-btn-retweet left"},[s("span",[t._v(t._s(t.reshares))])]),t._v(" "),s("div",{staticClass:"ic-btn ic-btn-more right"})])])},i=[],n={render:e,staticRenderFns:i};a.a=n},0:function(t,a){},"1VdJ":function(t,a,s){"use strict";a.a={name:"indexItem",props:["indexdata"],data:function(){return{img:this.indexdata.target.cover_url,title:this.indexdata.title,content:this.indexdata.target.desc,author:this.indexdata.target.author.name,source:this.indexdata.source_cn.replace("："," "),layout:this.indexdata.layout,morePic:[this.indexdata.target.more_pic_urls[0],this.indexdata.target.more_pic_urls[1]],leftPic:this.indexdata.target.photos_count-3}},methods:{layoutShow:function(){return 5!=this.layout}},mounted:function(){console.log(this.indexdata)}}},"2/OR":function(t,a){},3317:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("section",[s("header",[s("h2",[t._v(t._s(t.data.name))])]),t._v(" "),s("div",{staticClass:"section-content"},[s("ul",{staticClass:"group-list"},t._l(t.data.groups,function(a){return s("li",{key:a.id},[s("a",{staticClass:"group",attrs:{href:""}},[s("div",{staticClass:"group-meta"},[s("img",{staticClass:"group-icon",attrs:{src:a.avatar,alt:""}}),t._v(" "),s("span",{staticClass:"group-name"},[t._v(t._s(a.name))]),t._v(" "),s("span",{staticClass:"group-member"},[t._v(t._s(a.member_count+"人"))])]),t._v(" "),s("div",{staticClass:"group-topic"},[s("span",{staticClass:"topic-title"},[t._v(t._s(a.desc_abstract))])])])])}))])]),t._v(" "),t._m(0)])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"more-group"},[s("a",{attrs:{href:""}},[t._v("更多相关小组")])])}],n={render:e,staticRenderFns:i};a.a=n},"5Lnx":function(t,a){},"5bKQ":function(t,a,s){"use strict";var e=s("4YfN"),i=s.n(e),n=s("hYFZ"),o=s("ld9u"),r=s("pEzz"),c=s("b8FZ"),l=s("Vdk4");a.a={name:"movie",data:function(){return{show:!1}},components:{item:n.a,interests:o.a,types:r.a,downloadApp:c.a},methods:i()({},s.i(l.b)(["postMovie","getMovieData","postMovieInter"])),computed:i()({},s.i(l.c)(["getMovie","getMovieInt"])),mounted:function(){1!=this.getMovie.show?(this.postMovie(),this.postMovieInter(),this.$watch("getMovie.show",function(){this.show=!0},{deep:!0})):this.show=!0}}},"6UQO":function(t,a){},"8CmQ":function(t,a,s){"use strict";a.a={}},"D/Ky":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"interests"},[s("header",[s("h2",[t._v(t._s(t.title))])]),t._v(" "),s("div",{staticClass:"section-content"},[s("ul",[t._l(t.list1,function(a){return s("li",{key:a.id,style:{borderColor:a.color}},[s("a",{style:{color:a.color},attrs:{href:""}},[t._v(t._s(a.name))])])}),t._v(" "),s("li",{staticClass:"line"}),t._v(" "),t._l(t.list2,function(a){return s("li",{key:a.id,style:{borderColor:a.color}},[s("a",{style:{color:a.color},attrs:{href:""}},[t._v(t._s(a.name))])])})],2)])])},i=[],n={render:e,staticRenderFns:i};a.a=n},DV0N:function(t,a,s){"use strict";a.a={name:"item",props:["data"],data:function(){return{img:{backgroundImage:"url("+this.data.cover.url+")"},title:this.data.title,rating:this.data.rating,full:{backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==)"},gray:{backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=)"}}},methods:{stars:function(){for(var t=[],a=this.rating.value/2-1,s=0;s<=a;s++)t[s]=this.full;for(var e=4;e>a;e--)t[e]=this.gray;return t},ratingValue:function(){return this.rating.value%1==0?this.rating.value+".0":this.rating.value}},mounted:function(){}}},EfaT:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("section",{staticClass:"recommend-feed"},[t.get?s("div",[t._l(t.getIndex,function(a){return s("div",{key:a.id},[t.getToday(a.date)?s("div",{staticClass:"item-date"},[t._v(t._s(a.date))]):t._e(),t._v(" "),t._l(a.recommend_feeds,function(t){return s("div",{key:t.id,staticClass:"feed"},[s("indexItem",{attrs:{indexdata:t}})],1)})],2)}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"loadImg"},[s("img",{attrs:{src:"https://img3.doubanio.com/f/talion/bf2ef8c5c1a8c84dddfd1135656857e73582c5d8/pics/card/loading_grey.gif",alt:"loading"}})])],2):s("div",{staticClass:"loading"},[s("img",{attrs:{src:"https://img3.doubanio.com/f/talion/326df52f00a7dd43b9d23e2bbc7b7d3de5b9fd9e/pics/card/loading_green.gif",alt:"loading"}})])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"quick-nav"},[s("li",[s("a",{attrs:{href:""}},[t._v("影院热映")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("欧美新碟榜")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("豆瓣时间")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("使用豆瓣App")])])])}],n={render:e,staticRenderFns:i};a.a=n},ElJv:function(t,a){},FnBv:function(t,a,s){"use strict";function e(t){s("Qo47")}var i=s("t80d"),n=s("SMKY"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-14cf7899",null);a.a=c.exports},GXIf:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("div",{staticClass:"card"},[t.show?s("div",t._l(t.getGroup.items,function(t){return s("group-item",{key:t.id,attrs:{data:t}})})):t._e()]),t._v(" "),s("download-app")],1)},i=[],n={render:e,staticRenderFns:i};a.a=n},H4MD:function(t,a){},Hmey:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("router-link",{attrs:{to:"/"}},[s("h2",{staticClass:"logo"},[t._v("豆瓣")])]),t._v(" "),s("nav",[s("ul",[s("li",[s("router-link",{attrs:{to:"/movie"}},[s("a",{staticStyle:{color:"#2384E8"},attrs:{href:""}},[t._v("电影")])])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/book"}},[s("a",{staticStyle:{color:"#9F7860"},attrs:{href:""}},[t._v("图书")])])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/broadcast"}},[s("a",{staticStyle:{color:"#E4A813"},attrs:{href:""}},[t._v("广播")])])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/group"}},[s("a",{staticStyle:{color:"#2AB8CC"},attrs:{href:""}},[t._v("小组")])])],1)]),t._v(" "),s("span")])],1)},i=[],n={render:e,staticRenderFns:i};a.a=n},IOit:function(t,a,s){"use strict";function e(t){s("5Lnx")}var i=s("tPQ6"),n=s("+SUM"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-638f5f1e",null);a.a=c.exports},IiTr:function(t,a){},KKhS:function(t,a,s){"use strict";a.a={name:"types",props:["data"],data:function(){return{list:this.data.types}},methods:{last:function(){return this.list.length%2!=0}}}},LpAa:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("div",{staticClass:"card"},[s("section",{staticClass:"movie_showing"},[t._m(0),t._v(" "),t.show?s("div",{staticClass:"section-content"},[s("ul",{staticClass:"row items"},t._l(t.getMovie.movie_showing,function(t){return s("li",{key:t.id,staticClass:"item"},[s("item",{attrs:{data:t}})],1)}))]):t._e()]),t._v(" "),s("section",{staticClass:"movie_free_stream"},[t._m(1),t._v(" "),t.show?s("div",{staticClass:"section-content"},[s("ul",{staticClass:"row items"},t._l(t.getMovie.movie_free_stream,function(t){return s("li",{key:t.id,staticClass:"item"},[s("item",{attrs:{data:t}})],1)}))]):t._e()]),t._v(" "),s("section",{staticClass:"movie_latest"},[t._m(2),t._v(" "),t.show?s("div",{staticClass:"section-content"},[s("ul",{staticClass:"row items"},t._l(t.getMovie.movie_latest,function(t){return s("li",{key:t.id,staticClass:"item"},[s("item",{attrs:{data:t}})],1)}))]):t._e()]),t._v(" "),t.show?s("interests",{attrs:{data:t.getMovieInt}}):t._e(),t._v(" "),t.show?s("types",{attrs:{data:t.getMovieInt}}):t._e()],1),t._v(" "),s("download-app")],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h2",[t._v("影院热映")]),s("a",{attrs:{href:""}},[t._v("更多")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h2",[t._v("免费在线观影")]),s("a",{attrs:{href:""}},[t._v("更多")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h2",[t._v("新片速递")]),s("a",{attrs:{href:""}},[t._v("更多")])])}],n={render:e,staticRenderFns:i};a.a=n},M93x:function(t,a,s){"use strict";function e(t){s("xU8u")}var i=s("ajUD"),n=s("bkj+"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,null,null);a.a=c.exports},MFsm:function(t,a,s){"use strict";function e(t){s("U7G+")}var i=s("nj5i"),n=s("fxyf"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-2e0db010",null);a.a=c.exports},MPcy:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:""}},[s("div",{staticClass:"item-poster",style:t.img}),t._v(" "),s("span",{staticClass:"item-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"item-rating"},[s("div",{staticClass:"rank"},[t.rating?s("div",[s("span",{staticClass:"rating-stars"},t._l(t.stars(),function(t){return s("span",{key:t.id,staticClass:"rating-star",style:t})})),t._v(" "),s("span",[t._v(t._s(t.ratingValue()))])]):t.data.price?s("span",[t._v(t._s("¥ "+t.data.price))]):s("span",[t._v("暂无评分")])])])])},i=[],n={render:e,staticRenderFns:i};a.a=n},N3hH:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("2HEv"),i=s("M93x"),n=s("YaEn"),o=s("y0Fx"),r=s("Vdk4"),c=s("D0oh"),l=(s.n(c),s("B29u")),u=s.n(l);e.a.use(o.a),e.a.use(r.a),e.a.use(u.a,{error:"https://img3.doubanio.com/f/talion/326df52f00a7dd43b9d23e2bbc7b7d3de5b9fd9e/pics/card/loading_grey.gif",loading:"https://img3.doubanio.com/f/talion/326df52f00a7dd43b9d23e2bbc7b7d3de5b9fd9e/pics/card/loading_green.gif",attempt:3,listenEvents:["scroll"]}),e.a.config.productionTip=!1;new e.a({el:"#app",router:n.a,template:"<App/>",components:{App:i.a},http:{headers:{Referer:"https://m.douban.com/"}}})},Okg5:function(t,a){},OlYo:function(t,a,s){"use strict";s("Vdk4");a.a={name:"interests",props:["data"],data:function(){return{list1:this.data.list1,list2:this.data.list2,title:this.data.title}},mounted:function(){console.log(this.data)}}},Poav:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),s.d(a,"getIndex",function(){return e}),s.d(a,"getCount",function(){return i}),s.d(a,"getMovie",function(){return n}),s.d(a,"getBook",function(){return o}),s.d(a,"getBookInt",function(){return r}),s.d(a,"getMovieInt",function(){return c}),s.d(a,"getColor",function(){return l}),s.d(a,"getBroad",function(){return u}),s.d(a,"getGroup",function(){return d});var e=function(t){return t.indexData},i=function(t){return t.getNum},n=function(t){return t.movieData},o=function(t){return t.bookData},r=function(t){return t.bookInter},c=function(t){return t.movieInter},l=function(t){return t.color},u=function(t){return t.broadcast},d=function(t){return t.group}},Q2L3:function(t,a,s){"use strict";function e(t){s("Okg5")}var i=s("y+j0"),n=s("zdsQ"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-1b9e052a",null);a.a=c.exports},Q9AJ:function(t,a){},Qo47:function(t,a){},SMKY:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("promo",{attrs:{data:t.promoStr}}),t._v(" "),t._m(0),t._v(" "),s("download-app"),t._v(" "),s("a",{staticClass:"open-in-app-float",attrs:{href:""}},[t._v("App 内打开")])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card"},[s("section",{staticClass:"header"},[s("h1",{staticClass:"title"},[t._v("极夜逐光")]),t._v(" "),s("div",{staticClass:"user-title"},[s("span",{staticClass:"info"},[t._v("书童张")]),t._v(" "),s("span",{staticClass:"timestamp"},[t._v("2017-10-15")])])]),t._v(" "),s("div",{staticClass:"share-flat-btns"},[s("div",{staticClass:"icon wechat"}),t._v(" "),s("div",{staticClass:"icon qq"}),t._v(" "),s("div",{staticClass:"icon weibo"}),t._v(" "),s("div",{staticClass:"icon more"})]),t._v(" "),s("section",{staticClass:"note-content"},[s("div",{staticClass:"note-body"},[s("div",{staticClass:"rich-note"},[s("div",{staticClass:"content"},[s("div",{staticClass:"introduction"},[s("p",[t._v("这一刻，北斗高悬，天穹旋转，世界纯粹得只剩下雪、夜、极光与星空。我站在宇宙中如尘埃般渺小的一颗星球上，面前停着这一幕巨大的轻纱，穿过去，就是另一个世界。")])]),t._v(" "),s("div",{staticClass:"image-container"},[s("div",{staticClass:"image-wrapper"},[s("img",{attrs:{src:"https://img3.doubanio.com/view/note/l/public/p46002264.webp",alt:""}})]),t._v(" "),s("div",{staticClass:"image-caption-wrapper"},[s("div",{staticClass:"image-caption"},[t._v("Aurora Sky Station，截图自youtube")])])]),t._v(" "),s("p",[t._v("七年前的一个冬夜，在瑞典留学的朋友小白给我发来了一个网址，点开它的那一瞬间，我就被摄去了心魂——那是一栋建造在雪山上的小木屋，暖黄色的灯光透出窗户，闪烁在乌蓝色的星夜下，而横跨在屋顶上的，是一抹如梦如幻的北极光。")]),t._v(" "),s("p",[t._v("在瑞典靠近挪威的北部边境，远在北极圈以北 200 公里处，有一座叫 Abisko 的国家公园。它深藏在属于圣诞老人、驯鹿和雪橇狗的拉普兰地区，隐匿于拥有极夜、极昼和无数神话的斯堪的纳维亚山脉之间。而我们心心念念的小木屋，便半悬在公园内一座名为 Nuolja 的山上。")]),t._v(" "),s("p",[t._v("小木屋海拔 900 米，本是一处供滑雪者使用的缆车站，后因远离光源、地势得天独厚，逐渐被用于观测极光。当地人给它起了一个难忘而动人的名字，叫天空站（Sky Station）。 联合国宣布 2015 年为国际光年时，Lonely Planet 的作者 Sarah Baxter 撰文评写「世界上十大逐光胜地」，「天空站」得以荣登榜首。")]),t._v(" "),s("p",[t._v("我们很快就决定动身前往那里。好不容易踏入北极圈，没想到却遇上了连日的阴雪天，一举打消了我们关于极光的所有念头。直到那天晚上，向导 Sandra 带着另外两位日本游客全副武装地出现在我们面前，那只剩星火的期待才再次被点燃——果然，当我们走出旅店大门的时候，竟发现头顶有了几颗疏星——尽管此时大部份天幕都被厚重的云层遮挡住了、天空也依然飘着小雪，却再难浇熄我们心底的渴望。")]),t._v(" "),s("div",{staticClass:"image-container"},[s("div",{staticClass:"image-wrapper"},[s("img",{attrs:{width:"1200",src:"https://img1.doubanio.com/view/note/large/public/p45981508.jpg",alt:""}})]),t._v(" "),s("div",{staticClass:"image-caption-wrapper"},[s("div",{staticClass:"image-caption"},[t._v("The Chair Lift. Credit: Maria Globetrotter ")])])]),t._v(" "),s("p",[t._v("缆车在夜色中缓慢地爬升，四周弥散着触手可及的白雾，星光半掩于迷雾，散落在我们的正前方与两旁。将停的小雪轻柔地落在肩头，尘世远在身后。渐渐地，星星多起来，顺着山势朝前方最亮的那颗望去，只觉轨道的那端似乎连着另一个星球——这缆车建在极地的边缘，是为了接引我们朝另一个空间去。")]),t._v(" "),s("p",[t._v("二十分钟后，我们便来到了缆车的尽头。在这漆黑冰寒的山野里，天空站确如宇宙中漂浮的小小空间站。这里有姜饼和热可可，有温暖的炉火和红酒。伴随着木头着火的松脆声响，我们慢吞吞地享用了一顿由北极红鱼和熏鹿肉组成的烛光晚餐。窗外山脚下，有一摊清浅的光亮，那是百来号人口的小村庄。")]),t._v(" "),s("p",[t._v("这一刻，北斗高悬，天穹旋转，世界纯粹得只剩下雪、夜、极光与星空。我站在宇宙中如尘埃般渺小的一颗星球上，面前停着这一幕巨大的轻纱，穿过去，就是另一个世界。")]),t._v(" "),s("div",{staticClass:"image-container"},[s("div",{staticClass:"image-wrapper"},[s("img",{attrs:{src:"https://img1.doubanio.com/view/note/l/public/p45981618.webp",alt:""}})]),t._v(" "),s("div",{staticClass:"image-caption-wrapper"},[s("div",{staticClass:"image-caption"},[t._v("Credit: 终于肯把手从温暖的口袋里拿出来照相的书童张")])])]),t._v(" "),s("div",{staticClass:"separator"},[s("hr")]),t._v(" "),s("div",{staticClass:"image-container"},[s("div",{staticClass:"image-wrapper"},[s("img",{attrs:{width:"512",src:"https://img3.doubanio.com/view/note/large/public/p45981953.jpg",alt:""}})]),t._v(" "),s("div",{staticClass:"image-caption-wrapper"},[s("div",{staticClass:"image-caption"},[t._v("长按识别二维码，关注「书童张」")])])])]),t._v(" "),s("div",{staticClass:"copyright-notice"},[t._v("©本文版权归 书童张 所有, 任何形式转载请联系作者。")]),t._v(" "),s("div",{staticClass:"like-btn"},[t._v("14")])])])]),t._v(" "),s("section",{staticClass:"tags"},[s("p",[t._v("查看更多主题的豆瓣日记和相册")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:""}},[t._v("旅行")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("极光")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("瑞典")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("穷游")])]),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("自由行")])])])]),t._v(" "),s("section",{staticClass:"author"},[s("a",{staticClass:"note-author",attrs:{href:""}},[s("img",{staticClass:"avatar",attrs:{src:"https://img1.doubanio.com/icon/up55634576-8.jpg",alt:""}}),t._v(" "),s("div",{staticClass:"author-info"},[t._v("\n                    作者\n                    "),s("span",{staticClass:"author-name"},[t._v("书童张")]),t._v(" "),s("div",{staticClass:"author-details"},[s("span",{staticClass:"notes"},[t._v("12日记")]),t._v(" "),s("span",{staticClass:"albums"},[t._v("2相册")])])])])]),t._v(" "),s("section",{staticClass:"note-comments"},[s("h2",[t._v("全部回应 2 条")]),t._v(" "),s("ul",{staticClass:"comment-list"},[s("li",[s("div",{staticClass:"desc"},[s("a",{attrs:{href:""}},[s("img",{attrs:{src:"https://img3.doubanio.com/icon/up2179521-40.jpg",alt:""}})]),t._v(" "),s("div",{staticClass:"user-info"},[s("strong",[t._v("车前")]),t._v(" "),s("div",{staticClass:"timestamp"},[t._v("2017-10-16 08:26:31")])])]),t._v(" "),s("div",{staticClass:"content"},[t._v("写的真好")])]),t._v(" "),s("li",[s("div",{staticClass:"desc"},[s("a",{attrs:{href:""}},[s("img",{attrs:{src:"https://img3.doubanio.com/icon/up75886294-2.jpg",alt:""}})]),t._v(" "),s("div",{staticClass:"user-info"},[s("strong",[t._v("一蓑烟雨任平生")]),t._v(" "),s("div",{staticClass:"timestamp"},[t._v("2017-10-19 04:43:24")])])]),t._v(" "),s("div",{staticClass:"content"},[t._v("写得很有文采。我在挪威看了一星期极光大晴天漫天都是星星也没这么深的感想。。")])])]),t._v(" "),s("a",{staticClass:"list-link",attrs:{href:""}},[t._v("添加回应")])])])}],n={render:e,staticRenderFns:i};a.a=n},"U7G+":function(t,a){},WdKR:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("router-link",{attrs:{to:"/note"}},[s("a",{staticClass:"feed-item",attrs:{href:""}},[t.layoutShow()?s("div",{staticClass:"feed-content"},[t.indexdata.target.cover_url?s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.img,expression:"img",arg:"background-image"}],staticClass:"cover"},[s("div",{staticStyle:{"padding-top":"100%"}})]):t._e(),t._v(" "),s("h3",[t._v(t._s(t.title))]),t._v(" "),s("p",[t._v(t._s(t.content))])]):s("div",{staticClass:"feed-content"},[s("div",{staticClass:"photos"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.img,expression:"img",arg:"background-image"}],staticClass:"main"}),t._v(" "),s("div",{staticClass:"aside"},[s("div",{staticClass:"aside-pic"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.morePic[0],expression:"morePic[0]",arg:"background-image"}]},[s("div",{staticStyle:{"padding-top":"100%"}})])]),t._v(" "),s("div",{staticClass:"aside-pic"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.morePic[1],expression:"morePic[1]",arg:"background-image"}]},[s("div",{staticStyle:{"padding-top":"100%"}})]),s("div",{staticClass:"more-pic"},[s("span",[t._v(t._s(t.leftPic+"+"))])])])])])]),t._v(" "),s("div",{staticClass:"author"},[t._v("by "),s("span",[t._v(t._s(t.author))])]),t._v(" "),s("span",{staticClass:"feed-label"},[t._v(t._s(t.source))])])])},i=[],n={render:e,staticRenderFns:i};a.a=n},YaEn:function(t,a,s){"use strict";var e=s("2HEv"),i=s("u28b"),n=s("dAjm"),o=s("o62O"),r=s("MFsm"),c=s("Q2L3"),l=s("eYYZ"),u=s("FnBv");e.a.use(i.a),a.a=new i.a({mode:"history",routes:[{path:"/",name:"index",component:n.a},{path:"/movie",name:"movie",component:o.a},{path:"/book",name:"book",component:r.a},{path:"/broadcast",name:"broadcast",component:c.a},{path:"/group",name:"group",component:l.a},{path:"/note",name:"note",component:u.a}],scrollBehavior:function(t,a,s){return s||{x:0,y:0}}})},YtJ0:function(t,a,s){"use strict";var e=s("2HEv"),i=s("Vdk4"),n=s("arq6"),o=s("Poav");e.a.use(i.a);var r={indexData:[],movieData:{show:!1,count:0},bookData:{show:!1,count:0,market_header:{}},getNum:null,movieInter:{},bookInter:{},broadcast:{show:!1},group:{show:!1}},c={INIT_INDEX:function(t,a){t.indexData.push(a),t.getNum=0},NEXT_INDEX:function(t,a){t.indexData[++t.getNum]=a},INIT_MOVIE:function(t,a){t.movieData[a.subject_collection.id]=a.subject_collection_items,3==++t.movieData.count&&(t.movieData.show=1)},INIT_BOOK:function(t,a){"market_product_book_mobile_web"==a.subject_collection.id&&(t.bookData.market_header=a.header),t.bookData[a.subject_collection.id]=a.subject_collection_items,3==++t.bookData.count&&(t.bookData.show=1)},INIT_BOOKINTER:function(t,a){t.bookInter=a},INIT_MOVIEINTER:function(t,a){t.movieInter=a},INIT_BROAD:function(t,a){t.broadcast.items=a.items,t.broadcast.show=!0},INIT_GROUP:function(t,a){t.group.items=a,t.group.show=!0}};a.a=new i.a.Store({state:r,mutations:c,getters:o,actions:n})},ajUD:function(t,a,s){"use strict";var e=s("lfLh"),i=s("YtJ0");a.a={name:"app",components:{navbar:e.a},store:i.a}},arq6:function(t,a,s){"use strict";function e(t){return function(a){for(var s=arguments.length,e=Array(s>1?s-1:0),i=1;i<s;i++)e[i-1]=arguments[i];return a.dispatch.apply(void 0,[t].concat(e))}}Object.defineProperty(a,"__esModule",{value:!0}),s.d(a,"getIndexData",function(){return n}),s.d(a,"getMovieData",function(){return o}),s.d(a,"getBookData",function(){return r}),s.d(a,"postBookInter",function(){return c}),s.d(a,"postMovieInter",function(){return l}),s.d(a,"getBroadData",function(){return u}),s.d(a,"getGroupData",function(){return d}),s.d(a,"postIndex",function(){return v}),s.d(a,"postMovie",function(){return m}),s.d(a,"postBook",function(){return _}),s.d(a,"postBroad",function(){return f}),s.d(a,"postGroup",function(){return p});var i=s("2HEv"),n=(s("YtJ0"),function(t){var a=t.commit,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i.a.http.jsonp("https://m.douban.com/rexxar/api/v2/recommend_feed",{params:{next_date:s}}).then(function(t){s?a("NEXT_INDEX",t.body):a("INIT_INDEX",t.body)},function(t){console.log("Error:",t)})}),o=function(t){var a=t.commit;["https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items","https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items","https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items"].forEach(function(t){i.a.http.jsonp(t,{params:{count:8}}).then(function(t){a("INIT_MOVIE",t.body)},function(t){console.log("Error:",t)})})},r=function(t){var a=t.commit;["https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items","https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items","https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items"].forEach(function(t){i.a.http.jsonp(t,{params:{count:8}}).then(function(t){a("INIT_BOOK",t.body)},function(t){console.log("Error:",t)})})},c=function(t){var a=t.commit,s=["#FF4055","#FFAC2D","#4F9DED","#CC3344","#3BA94D","#2384E8","#FFC46C","#42BD56"];a("INIT_BOOKINTER",{title:"发现好图书",list1:[{name:"小波看书",color:s[Math.floor(8*Math.random())]},{name:"村上春树周边",color:s[Math.floor(8*Math.random())]},{name:"我凭名字认定了你",color:s[Math.floor(8*Math.random())]},{name:"不可饶恕的女人们",color:s[Math.floor(8*Math.random())]}],list2:[{name:"爱欲书",color:s[Math.floor(8*Math.random())]},{name:"他们还写侦探小说",color:s[Math.floor(8*Math.random())]},{name:"人生识字始忧患",color:s[Math.floor(8*Math.random())]},{name:"诗歌书店",color:s[Math.floor(8*Math.random())]}],types:["小说","爱情","历史","外国文学","青春","励志","随笔","传记","推理","旅行","奇幻","经管"]})},l=function(t){var a=t.commit,s=["#FF4055","#FFAC2D","#4F9DED","#CC3344","#3BA94D","#2384E8","#FFC46C","#42BD56"];a("INIT_MOVIEINTER",{title:"发现好电影",list1:[{name:"同时入选IMDB250和豆瓣电影250的电影",color:s[Math.floor(8*Math.random())]},{name:"带你进入不正常的世界",color:s[Math.floor(8*Math.random())]},{name:"用电【影】来祭奠逝去的岁月",color:s[Math.floor(8*Math.random())]},{name:"女孩们的故事【电影】",color:s[Math.floor(8*Math.random())]}],list2:[{name:"科幻是未来的钥匙——科幻启示录【科幻题材】",color:s[Math.floor(8*Math.random())]},{name:"美国生活面面观",color:s[Math.floor(8*Math.random())]},{name:"2015终极期待",color:s[Math.floor(8*Math.random())]},{name:"经典韩国电影——收集100部",color:s[Math.floor(8*Math.random())]}],types:["经典","冷门佳片","豆瓣高分","动作","喜剧","爱情","悬疑","恐怖","科幻","治愈","文艺","成长","动画","华语","欧美","韩国","日本"]})},u=function(t){var a=t.commit;i.a.http.jsonp("https://m.douban.com/rexxar/api/v2/status/anonymous_timeline",{}).then(function(t){a("INIT_BROAD",t.body)},function(t){console.log("Error:",t)})},d=function(t){var a=t.commit;i.a.http.jsonp("https://m.douban.com/rexxar/api/v2/group/rec_groups_for_newbies",{}).then(function(t){a("INIT_GROUP",t.body.rec_groups[0].classified_groups),console.log(t.body.rec_groups[0].classified_groups)},function(t){console.log("Error:",t)})},v=function(t){(0,t.dispatch)("getIndexData",arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")},m=e("getMovieData"),_=e("getBookData"),f=e("getBroadData"),p=e("getGroupData")},b8FZ:function(t,a,s){"use strict";function e(t){s("smv2")}var i=s("q92i"),n=s("iSIA"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-7d1f3ca2",null);a.a=c.exports},"bkj+":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("navbar"),t._v(" "),s("router-view")],1)},i=[],n={render:e,staticRenderFns:i};a.a=n},"cVE+":function(t,a,s){"use strict";function e(t){s("Q9AJ")}var i=s("nizT"),n=s("3317"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-15108a1b",null);a.a=c.exports},dAjm:function(t,a,s){"use strict";function e(t){s("N3hH")}var i=s("hODE"),n=s("EfaT"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-2512b58a",null);a.a=c.exports},eYYZ:function(t,a,s){"use strict";function e(t){s("2/OR")}var i=s("m2zC"),n=s("GXIf"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-75985730",null);a.a=c.exports},fxyf:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("div",{staticClass:"card"},[s("section",{staticClass:"book_fiction"},[t._m(0),t._v(" "),t.show?s("div",{staticClass:"section-content"},[s("ul",{staticClass:"row items"},t._l(t.getBook.book_fiction,function(t){return s("li",{key:t.id,staticClass:"item item_book"},[s("item",{attrs:{data:t}})],1)}))]):t._e()]),t._v(" "),s("section",{staticClass:"book_nonfiction"},[t._m(1),t._v(" "),t.show?s("div",{staticClass:"section-content"},[s("ul",{staticClass:"row items"},t._l(t.getBook.book_nonfiction,function(t){return s("li",{key:t.id,staticClass:"item item_book"},[s("item",{attrs:{data:t}})],1)}))]):t._e()]),t._v(" "),s("section",{staticClass:"market_product_book_mobile_web"},[s("div",{staticClass:"book_header"},[t._m(2),t._v(" "),t.show?s("a",{staticClass:"promBook",attrs:{href:""}},[s("img",{staticClass:"cover",attrs:{src:t.getBook.market_header.cover.url,alt:t.getBook.market_header.title}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[s("span",{staticClass:"price"},[t._v(t._s("¥"+t.getBook.market_header.price))]),t._v(" "),s("p",{staticClass:"name"},[t._v(t._s(t.getBook.market_header.title))])]),t._v(" "),s("p",{staticClass:"infoWithoutReviewer"},[t._v(t._s(t.getBook.market_header.info))])])]):t._e()]),t._v(" "),t.show?s("div",{staticClass:"section-content"},[s("ul",{staticClass:"row items"},t._l(t.getBook.market_product_book_mobile_web,function(t){return s("li",{key:t.id,staticClass:"item item_book"},[s("item",{attrs:{data:t}})],1)}))]):t._e()]),t._v(" "),t.show?s("interests",{attrs:{data:t.getBookInt}}):t._e(),t._v(" "),t.show?s("types",{attrs:{data:t.getBookInt}}):t._e()],1),t._v(" "),s("download-app")],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h2",[t._v("最受关注图书｜虚构类")]),t._v(" "),s("a",{attrs:{href:""}},[t._v("更多")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h2",[t._v("最受关注图书｜非虚构类")]),t._v(" "),s("a",{attrs:{href:""}},[t._v("更多")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h2",[t._v("豆瓣书店")]),t._v(" "),s("a",{attrs:{href:""}},[t._v("更多")])])}],n={render:e,staticRenderFns:i};a.a=n},hODE:function(t,a,s){"use strict";var e=s("4YfN"),i=s.n(e),n=s("nCNO"),o=s("Vdk4");a.a={name:"index",data:function(){return{get:!1,load:!1,sw:!0}},components:{indexItem:n.a},computed:i()({},s.i(o.c)(["getIndex","getCount"])),methods:i()({},s.i(o.b)(["postIndex","getIndexData"]),{getTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=new Date,s=a.getTime(),e=s-864e5*t,i=new Date(e);return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},getToday:function(t){var a=new Date,s="";return s=a.getDate()<=9?"0"+a.getDate():a.getDate(),a.getFullYear()+"-"+(a.getMonth()+1)+"-"+s!=t}}),mounted:function(){null==this.getCount?this.postIndex():this.get=!0;var t=this,a=0;this.$watch("getCount",function(){this.get=!0,this.load=!1,this.sw=!0},{deep:!0}),window.addEventListener("scroll",function(){if((document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)+window.innerHeight>=document.documentElement.offsetHeight-5&&t.sw){t.sw=!1,t.load=!0;var s=t.getTime(a);t.postIndex(s),a++}})}}},hYFZ:function(t,a,s){"use strict";function e(t){s("6UQO")}var i=s("DV0N"),n=s("MPcy"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-067e698c",null);a.a=c.exports},iSIA:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"download-app"},[s("div",{staticClass:"info"},[s("img",{attrs:{src:"https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png"}}),t._v(" "),s("div",{staticClass:"info-content"},[s("strong",[t._v("豆瓣")]),s("div",[t._v("我们的精神角落")])])]),t._v(" "),s("a",{attrs:{href:""}},[t._v("去 App Store 免费下载 iOS 客户端")])])}],n={render:e,staticRenderFns:i};a.a=n},jXun:function(t,a){},jn1t:function(t,a){},ld9u:function(t,a,s){"use strict";function e(t){s("jn1t")}var i=s("OlYo"),n=s("D/Ky"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-3d3d921c",null);a.a=c.exports},lfLh:function(t,a,s){"use strict";function e(t){s("IiTr")}var i=s("8CmQ"),n=s("Hmey"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-01a5fa17",null);a.a=c.exports},m2zC:function(t,a,s){"use strict";var e=s("4YfN"),i=s.n(e),n=s("Vdk4"),o=s("cVE+"),r=s("b8FZ");a.a={name:"group",components:{groupItem:o.a,downloadApp:r.a},data:function(){return{show:!1}},methods:i()({},s.i(n.b)(["postGroup","getGroupData"])),computed:i()({},s.i(n.c)(["getGroup"])),mounted:function(){this.getGroup.show?this.show=!0:(this.postGroup(),this.$watch("getGroup.show",function(){this.show=!0},{deep:!0}))}}},nCNO:function(t,a,s){"use strict";function e(t){s("r2ux")}var i=s("1VdJ"),n=s("WdKR"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-69ee8d24",null);a.a=c.exports},nizT:function(t,a,s){"use strict";a.a={name:"groupItem",props:["data"]}},nj5i:function(t,a,s){"use strict";var e=s("4YfN"),i=s.n(e),n=s("hYFZ"),o=s("ld9u"),r=s("pEzz"),c=s("b8FZ"),l=s("Vdk4");a.a={name:"book",components:{item:n.a,interests:o.a,types:r.a,downloadApp:c.a},data:function(){return{show:!1}},methods:i()({},s.i(l.b)(["postBook","getBookData","postBookInter"])),computed:i()({},s.i(l.c)(["getBook","getBookInt"])),mounted:function(){1!=this.getBook.show?(this.postBook(),this.postBookInter(),this.$watch("getBook.show",function(){this.show=!0,console.log(this.getBook)},{deep:!0})):this.show=!0}}},nrR2:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"promo_top_banner"},[t._m(0),t._v(" "),s("div",{staticClass:"banner_wrapper"},[s("div",{staticClass:"banner_inner"},[s("div",{staticClass:"promo_title"},[s("span",{staticClass:"promo_title_text"},[t._v(t._s(t.data[0]))]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"promo_title_text"},[t._v(t._s(t.data[1]))])]),t._v(" "),t._m(1)])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"banner_bg"},[s("img",{staticClass:"img",attrs:{src:"https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg",alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"button_wrapper"},[s("a",{staticClass:"promo_button download_app",attrs:{href:""}},[t._v("极速下载")]),t._v(" "),s("a",{staticClass:"promo_button open_app",attrs:{href:""}},[t._v("打开")])])}],n={render:e,staticRenderFns:i};a.a=n},o62O:function(t,a,s){"use strict";function e(t){s("H4MD")}var i=s("5bKQ"),n=s("LpAa"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-4859070e",null);a.a=c.exports},pEzz:function(t,a,s){"use strict";function e(t){s("ElJv")}var i=s("KKhS"),n=s("t4Pr"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-3d98a962",null);a.a=c.exports},q92i:function(t,a,s){"use strict";a.a={}},r2ux:function(t,a){},smv2:function(t,a){},t4Pr:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"types"},[t._m(0),t._v(" "),s("div",{staticClass:"section-content"},[s("ul",{staticClass:"type-list"},[t._l(t.list,function(a){return s("li",{key:a.id},[s("a",{attrs:{href:""}},[t._v(t._s(a)),s("span")])])}),t._v(" "),t.last()?s("li",[s("a",{attrs:{href:""}})]):t._e()],2)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h2",[t._v("分类浏览")])])}],n={render:e,staticRenderFns:i};a.a=n},t80d:function(t,a,s){"use strict";var e=(s("Vdk4"),s("yxgB")),i=s("b8FZ");a.a={name:"note",components:{promo:e.a,downloadApp:i.a},data:function(){return{promoStr:["用 App 打开","更多优质原创内容"]}},mounted:function(){}}},tPQ6:function(t,a,s){"use strict";a.a={name:"broadItem",props:["data"],data:function(){return{avatar:this.data.status.author.avatar,name:this.data.status.author.name,active:this.data.status.activity,time:this.data.status.create_time,text:this.data.status.text,images:this.data.status.images,comments:this.data.status.comments_count,like:this.data.status.like_count,reshares:this.data.status.reshares_count,card:this.data.status.card}},methods:{isCard:function(){return null!=this.card}},mounted:function(){}}},vr5N:function(t,a,s){"use strict";a.a={name:"promo",props:["data"]}},xU8u:function(t,a){},"y+j0":function(t,a,s){"use strict";var e=s("4YfN"),i=s.n(e),n=s("Vdk4"),o=s("yxgB"),r=s("IOit"),c=s("b8FZ");a.a={name:"broadcast",components:{promo:o.a,broadItem:r.a,downloadApp:c.a},data:function(){return{promoStr:["打开App, 回复广播"],show:!1,s:0,stl:{},op:{opacity:0},isTop:!0}},methods:i()({},s.i(n.b)(["postBroad","getBroadData"]),{move:function(t){if(this.isTop){var a=t.touches[0].clientY-this.s;a>=0&&(this.stl.transform="translateY("+a+"px)"),a>=100&&(this.op.opacity=1,this.op.transition="")}},start:function(t){t.path.reverse()[0].pageYOffset>0?this.isTop=!1:this.isTop=!0,this.s=t.touches[0].clientY,this.stl.transform="translateY(0px)",this.stl.transition=""},end:function(t){this.stl.transform="translateY(0px)",this.op.opacity=0,this.op.transition="800ms linear",this.stl.transition="500ms linear"}}),computed:i()({},s.i(n.c)(["getBroad"])),mounted:function(){this.getBroad.show?this.show=!0:(this.postBroad(),this.$watch("getBroad.show",function(){this.show=!0},{deep:!0}))}}},yxgB:function(t,a,s){"use strict";function e(t){s("jXun")}var i=s("vr5N"),n=s("nrR2"),o=s("o7Pn"),r=e,c=o(i.a,n.a,r,"data-v-24324210",null);a.a=c.exports},zdsQ:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("promo",{attrs:{data:t.promoStr}}),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"status-list"},[s("div",{staticClass:"pull-refresh-container"},[t._m(0),t._v(" "),s("div",{staticClass:"pull-refresh-loading",style:t.op}),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"status-list",style:t.stl,on:{touchstart:function(a){t.start(a)},touchmove:function(a){t.move(a)},touchend:function(a){t.end(a)}}},[t._l(t.getBroad.items,function(t){return s("broad-item",{key:t.id,attrs:{data:t}})}),t._v(" "),s("a",{staticClass:"list-link",attrs:{href:""}},[t._v("显示更多广播")])],2)])])]),t._v(" "),s("download-app")],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"status-editor-bar"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:"https://img1.doubanio.com/icon/user_normal.jpg",alt:"未登录"}})]),t._v(" "),s("div",{staticClass:"holder"},[t._v("登录发广播")]),t._v(" "),s("div",{staticClass:"icon icon-camera"}),t._v(" "),s("div",{staticClass:"icon icon-pen"})])}],n={render:e,staticRenderFns:i};a.a=n}},["NHnr"]);
//# sourceMappingURL=app.98126ea84581a49b8e2b.js.map