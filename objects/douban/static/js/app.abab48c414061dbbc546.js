webpackJsonp([1],{0:function(t,e){},"1VdJ":function(t,e,a){"use strict";e.a={name:"indexItem",props:["indexdata"],data:function(){return{img:{backgroundImage:"url("+this.indexdata.target.cover_url+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"},title:this.indexdata.title,content:this.indexdata.target.desc,author:this.indexdata.target.author.name,source:this.indexdata.source_cn.replace("："," "),layout:this.indexdata.layout,morePic:[{backgroundImage:"url("+this.indexdata.target.more_pic_urls[0]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"},{backgroundImage:"url("+this.indexdata.target.more_pic_urls[1]+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}],leftPic:this.indexdata.target.photos_count-3}},methods:{layoutShow:function(){return 5!=this.layout}},mounted:function(){}}},"5bKQ":function(t,e,a){"use strict";var n=a("4YfN"),i=a.n(n),s=a("tIpv"),o=a("Vdk4");e.a={name:"movie",data:function(){return{show:!1}},components:{movieItem:s.a},methods:i()({},a.i(o.b)(["postMovie","getMovieData"])),computed:i()({},a.i(o.c)(["getMovie"])),mounted:function(){this.postMovie(),this.$watch("getMovie.show",function(){this.show=!0},{deep:!0})}}},"82xM":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:""}},[a("div",{staticClass:"item-poster",style:t.img}),t._v(" "),a("span",{staticClass:"item-title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"item-rating"},[a("div",{staticClass:"rank"},[a("span",{staticClass:"rating-stars"},t._l(t.stars(),function(t){return a("span",{key:t.id,staticClass:"rating-star",style:t})})),t._v(" "),a("span",[t._v(t._s(t.rating))])])])])},i=[],s={render:n,staticRenderFns:i};e.a=s},"8CmQ":function(t,e,a){"use strict";e.a={}},EfaT:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("section",{staticClass:"recommend-feed"},[t.get?a("div",[t._l(t.getIndex,function(e){return a("div",{key:e.id},[t.getToday(e.date)?a("div",{staticClass:"item-date"},[t._v(t._s(e.date))]):t._e(),t._v(" "),t._l(e.recommend_feeds,function(t){return a("div",{key:t.id,staticClass:"feed"},[a("indexItem",{attrs:{indexdata:t}})],1)})],2)}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"loadImg"},[a("img",{attrs:{src:"https://img3.doubanio.com/f/talion/bf2ef8c5c1a8c84dddfd1135656857e73582c5d8/pics/card/loading_grey.gif",alt:"loading"}})])],2):a("div",{staticClass:"loading"},[a("img",{attrs:{src:"https://img3.doubanio.com/f/talion/326df52f00a7dd43b9d23e2bbc7b7d3de5b9fd9e/pics/card/loading_green.gif",alt:"loading"}})])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"quick-nav"},[a("li",[a("a",{attrs:{href:""}},[t._v("影院热映")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("欧美新碟榜")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("豆瓣时间")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("使用豆瓣App")])])])}],s={render:n,staticRenderFns:i};e.a=s},H4MD:function(t,e){},Hmey:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h2",{staticClass:"logo"},[t._v("豆瓣")]),t._v(" "),a("nav",[a("ul",[a("li",[a("router-link",{attrs:{to:"/movie"}},[a("a",{staticStyle:{color:"#2384E8"},attrs:{href:""}},[t._v("电影")])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),a("span")])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticStyle:{color:"#9F7860"},attrs:{href:""}},[t._v("图书")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticStyle:{color:"#E4A813"},attrs:{href:""}},[t._v("广播")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticStyle:{color:"#2AB8CC"},attrs:{href:""}},[t._v("小组")])])}],s={render:n,staticRenderFns:i};e.a=s},IiTr:function(t,e){},LpAa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"card"},[a("section",{staticClass:"movie_showing"},[t._m(0),t._v(" "),t.show?a("div",{staticClass:"section-content"},[a("ul",{staticClass:"row items"},t._l(t.getMovie.movie_showing,function(t){return a("li",{key:t.id,staticClass:"item"},[a("movieItem",{attrs:{data:t}})],1)}))]):t._e()]),t._v(" "),a("section",{staticClass:"movie_free_stream"},[t._m(1),t._v(" "),t.show?a("div",{staticClass:"section-content"},[a("ul",{staticClass:"row items"},t._l(t.getMovie.movie_free_stream,function(t){return a("li",{key:t.id,staticClass:"item"},[a("movieItem",{attrs:{data:t}})],1)}))]):t._e()]),t._v(" "),a("section",{staticClass:"movie_latest"},[t._m(2),t._v(" "),t.show?a("div",{staticClass:"section-content"},[a("ul",{staticClass:"row items"},t._l(t.getMovie.movie_latest,function(t){return a("li",{key:t.id,staticClass:"item"},[a("movieItem",{attrs:{data:t}})],1)}))]):t._e()]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),t._m(5)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("h2",[t._v("影院热映")]),a("a",{attrs:{href:""}},[t._v("更多")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("h2",[t._v("免费在线观影")]),a("a",{attrs:{href:""}},[t._v("更多")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("h2",[t._v("新片速递")]),a("a",{attrs:{href:""}},[t._v("更多")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"interests"},[a("header",[a("h2",[t._v("发现好电影")])]),t._v(" "),a("div",{staticClass:"section-content"},[a("ul",[a("li",{staticStyle:{"border-color":"#FF4055"}},[a("a",{staticStyle:{color:"#FF4055"},attrs:{href:""}},[t._v("同时入选IMDB250和豆瓣电影250的电影")])]),t._v(" "),a("li",{staticStyle:{"border-color":"#FFAC2D"}},[a("a",{staticStyle:{color:"#FFAC2D"},attrs:{href:""}},[t._v("带你进入不正常的世界")])]),t._v(" "),a("li",{staticStyle:{"border-color":"#4F9DED"}},[a("a",{staticStyle:{color:"#4F9DED"},attrs:{href:""}},[t._v("用电【影】来祭奠逝去的岁月")])]),t._v(" "),a("li",{staticStyle:{"border-color":"#CC3344"}},[a("a",{staticStyle:{color:"#CC3344"},attrs:{href:""}},[t._v("女孩们的故事【电影】")])]),t._v(" "),a("li",{staticClass:"line"}),t._v(" "),a("li",{staticStyle:{"border-color":"#3BA94D"}},[a("a",{staticStyle:{color:"#3BA94D"},attrs:{href:""}},[t._v("科幻是未来的钥匙——科幻启示录【科幻题材】")])]),t._v(" "),a("li",{staticStyle:{"border-color":"#2384E8"}},[a("a",{staticStyle:{color:"#2384E8"},attrs:{href:""}},[t._v("美国生活面面观")])]),t._v(" "),a("li",{staticStyle:{"border-color":"#FFC46C"}},[a("a",{staticStyle:{color:"#FFC46C"},attrs:{href:""}},[t._v("2015终极期待")])]),t._v(" "),a("li",{staticStyle:{"border-color":"#42BD56"}},[a("a",{staticStyle:{color:"#42BD56"},attrs:{href:""}},[t._v("经典韩国电影——收集100部")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"types"},[a("header",[a("h2",[t._v("分类浏览")])]),t._v(" "),a("div",{staticClass:"section-content"},[a("ul",{staticClass:"type-list"},[a("li",[a("a",{attrs:{href:""}},[t._v("经典"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("冷门佳片"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("豆瓣高分"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("动作"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("喜剧"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("爱情"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("悬疑"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("恐怖"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("科幻"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("治愈"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("文艺"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("成长"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("动画"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("华语"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("欧美"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("韩国"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("日本"),a("span")])]),t._v(" "),a("li",[a("a",{attrs:{href:""}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"download-app"},[a("div",{staticClass:"info"},[a("img",{attrs:{src:"https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png",width:"48"}}),t._v(" "),a("div",{staticClass:"info-content"},[a("strong",[t._v("豆瓣")]),a("div",[t._v("我们的精神角落")])])]),t._v(" "),a("a",{attrs:{href:""}},[t._v("去 App Store 免费下载 iOS 客户端")])])}],s={render:n,staticRenderFns:i};e.a=s},M93x:function(t,e,a){"use strict";function n(t){a("xU8u")}var i=a("ajUD"),s=a("bkj+"),o=a("o7Pn"),r=n,c=o(i.a,s.a,r,null,null);e.a=c.exports},N3hH:function(t,e){},NDt6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"hello"})},i=[],s={render:n,staticRenderFns:i};e.a=s},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("2HEv"),i=a("M93x"),s=a("YaEn"),o=a("y0Fx"),r=a("Vdk4"),c=a("D0oh");a.n(c);n.a.use(o.a),n.a.use(r.a),n.a.config.productionTip=!1;new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},Poav:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"getIndex",function(){return n}),a.d(e,"getCount",function(){return i}),a.d(e,"getMovie",function(){return s});var n=function(t){return t.indexData},i=function(t){return t.getNum},s=function(t){return t.movieData}},VjiJ:function(t,e){},WdKR:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"feed-item",attrs:{href:""}},[t.layoutShow()?a("div",{staticClass:"feed-content"},[t.indexdata.target.cover_url?a("div",{staticClass:"cover",style:t.img},[a("div",{staticStyle:{"padding-top":"100%"}})]):t._e(),t._v(" "),a("h3",[t._v(t._s(t.title))]),t._v(" "),a("p",[t._v(t._s(t.content))])]):a("div",{staticClass:"feed-content"},[a("div",{staticClass:"photos"},[a("div",{staticClass:"main",style:t.img}),t._v(" "),a("div",{staticClass:"aside"},[a("div",{staticClass:"aside-pic"},[a("div",{style:t.morePic[0]},[a("div",{staticStyle:{"padding-top":"100%"}})])]),t._v(" "),a("div",{staticClass:"aside-pic"},[a("div",{style:t.morePic[1]},[a("div",{staticStyle:{"padding-top":"100%"}})]),a("div",{staticClass:"more-pic"},[a("span",[t._v(t._s(t.leftPic+"+"))])])])])])]),t._v(" "),a("div",{staticClass:"author"},[t._v("by "),a("span",[t._v(t._s(t.author))])]),t._v(" "),a("span",{staticClass:"feed-label"},[t._v(t._s(t.source))])])},i=[],s={render:n,staticRenderFns:i};e.a=s},YaEn:function(t,e,a){"use strict";var n=a("2HEv"),i=a("u28b"),s=a("dAjm"),o=a("o62O");n.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"index",component:s.a},{path:"/movie",name:"movie",component:o.a}]})},YtJ0:function(t,e,a){"use strict";var n=a("2HEv"),i=a("Vdk4"),s=a("arq6"),o=a("Poav");n.a.use(i.a);var r={indexData:[],movieData:{show:!1,count:0},bookData:{},getNum:null},c={INIT_INDEX:function(t,e){t.indexData.push(e),t.getNum=0},NEXT_INDEX:function(t,e){t.indexData[++t.getNum]=e},INIT_MOVIE:function(t,e){t.movieData[e.subject_collection.id]=e.subject_collection_items,3==++t.movieData.count&&(t.movieData.show=!0)}};e.a=new i.a.Store({state:r,mutations:c,getters:o,actions:s})},ajUD:function(t,e,a){"use strict";var n=a("4YfN"),i=a.n(n),s=a("qSdX"),o=a("lfLh"),r=a("YtJ0"),c=a("Vdk4");e.a={name:"app",components:{navbar:o.a,hello:s.a},store:r.a,methods:i()({},a.i(c.b)(["postIndex","getIndexData"])),created:function(){this.postIndex()}}},arq6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"getIndexData",function(){return s}),a.d(e,"getMovieData",function(){return o}),a.d(e,"postIndex",function(){return r}),a.d(e,"postMovie",function(){return c});var n=a("2HEv"),i=a("y0Fx");a("YtJ0");n.a.use(i.a);var s=function(t){var e=t.commit,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n.a.http.jsonp("https://m.douban.com/rexxar/api/v2/recommend_feed",{params:{next_date:a}}).then(function(t){a?e("NEXT_INDEX",t.body):e("INIT_INDEX",t.body)},function(t){console.log("Error:",t)})},o=function(t){var e=t.commit;["https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items","https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items","https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items"].forEach(function(t){n.a.http.jsonp(t,{params:{count:8}}).then(function(t){e("INIT_MOVIE",t.body)},function(t){console.log("Error:",t)})})},r=function(t){(0,t.dispatch)("getIndexData",arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")},c=function(t){return function(e){for(var a=arguments.length,n=Array(a>1?a-1:0),i=1;i<a;i++)n[i-1]=arguments[i];return e.dispatch.apply(void 0,[t].concat(n))}}("getMovieData")},"auS+":function(t,e,a){"use strict";e.a={name:"movieItem",props:["data"],data:function(){return{img:{backgroundImage:"url("+this.data.cover.url+")"},title:this.data.title,rating:this.data.rating.value,full:{backgroundImage:"url(./static/img/full-star.png)"},gray:{backgroundImage:"url(./static/img/gray-star.png)"}}},methods:{stars:function(){for(var t=[],e=this.data.rating.value/2-1,a=0;a<e;a++)t[a]=this.full;for(var n=4;n>e;n--)t[n]=this.gray;return t}},mounted:function(){console.log(this.data)}}},"bkj+":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("router-view")],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},dAjm:function(t,e,a){"use strict";function n(t){a("N3hH")}var i=a("hODE"),s=a("EfaT"),o=a("o7Pn"),r=n,c=o(i.a,s.a,r,"data-v-2512b58a",null);e.a=c.exports},hODE:function(t,e,a){"use strict";var n=a("4YfN"),i=a.n(n),s=a("nCNO"),o=a("Vdk4");e.a={name:"index",data:function(){return{get:!1,load:!1,sw:!0}},components:{indexItem:s.a},computed:i()({},a.i(o.c)(["getIndex","getCount"])),methods:i()({},a.i(o.b)(["postIndex","getIndexData"]),{getTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new Date,a=e.getTime(),n=a-864e5*t,i=new Date(n);return i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()},getToday:function(t){var e=new Date,a="";return a=e.getDate()<=9?"0"+e.getDate():e.getDate(),e.getFullYear()+"-"+(e.getMonth()+1)+"-"+a!=t}}),mounted:function(){var t=this,e=0;this.$watch("getCount",function(){this.get=!0,this.load=!1,this.sw=!0},{deep:!0}),console.log(this.getIndex),window.addEventListener("scroll",function(){if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.offsetHeight-10&&(console.log(t.sw),t.sw)){t.sw=!1,t.load=!0;var a=t.getTime(e);t.postIndex(a),e++}})}}},jyiF:function(t,e){},lfLh:function(t,e,a){"use strict";function n(t){a("IiTr")}var i=a("8CmQ"),s=a("Hmey"),o=a("o7Pn"),r=n,c=o(i.a,s.a,r,"data-v-01a5fa17",null);e.a=c.exports},nCNO:function(t,e,a){"use strict";function n(t){a("r2ux")}var i=a("1VdJ"),s=a("WdKR"),o=a("o7Pn"),r=n,c=o(i.a,s.a,r,"data-v-69ee8d24",null);e.a=c.exports},o62O:function(t,e,a){"use strict";function n(t){a("H4MD")}var i=a("5bKQ"),s=a("LpAa"),o=a("o7Pn"),r=n,c=o(i.a,s.a,r,"data-v-4859070e",null);e.a=c.exports},q6Np:function(t,e,a){"use strict";e.a={name:"hello",data:function(){return{content:{},data:"",movie:{}}},methods:{Search:function(){var t=this;this.$http.jsonp("https://api.douban.com/v2/movie/search?q="+this.data,{}).then(function(e){t.content=e.body.subjects,console.log(t.content)},function(t){console.log("MainSection:",t)})},Top250:function(){var t=this;this.$http.jsonp("https://api.douban.com/v2/movie/search?tag=大陆",{}).then(function(e){t.content=e.body.subjects,console.log(t.content)},function(t){console.log("MainSection:",t)})},Movie:function(){var t=this;this.$http.jsonp("https://api.douban.com/v2/movie/search?tag=喜剧",{}).then(function(e){t.movie=e.body,console.log(t.movie)},function(t){console.log("MainSection:",t)})},getTags:function(){this.$http.jsonp("https://frodo.douban.com/api/v2/niffler/articles/731/audio",{params:{}}).then(function(t){console.log(t.body)},function(t){console.log("MainSection:",t)})}},created:function(){this.getTags()}}},qSdX:function(t,e,a){"use strict";function n(t){a("VjiJ")}var i=a("q6Np"),s=a("NDt6"),o=a("o7Pn"),r=n,c=o(i.a,s.a,r,"data-v-474295ca",null);e.a=c.exports},r2ux:function(t,e){},tIpv:function(t,e,a){"use strict";function n(t){a("jyiF")}var i=a("auS+"),s=a("82xM"),o=a("o7Pn"),r=n,c=o(i.a,s.a,r,"data-v-5626dc68",null);e.a=c.exports},xU8u:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.abab48c414061dbbc546.js.map