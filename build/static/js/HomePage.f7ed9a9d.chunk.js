(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{56:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(58);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(u){c=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},57:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},58:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(57);function c(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(14),c=n(15),a=function(){function t(){Object(r.a)(this,t),this.searchQuery="",this.page=1,this.movieId=null}return Object(c.a)(t,[{key:"fetchSearchMovies",value:function(){var t="".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb","&language=en-US&query=").concat(this.searchQuery,"&page=").concat(this.page,"&include_adult=false");return fetch(t).then((function(t){return t.json()})).then((function(t){return t}))}},{key:"fetchTrendingFilms",value:function(){var t="".concat("https://api.themoviedb.org/3/","trending/movie/day?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb","&page=").concat(this.page);return fetch(t).then((function(t){return t.json()})).then((function(t){return t}))}},{key:"fetchMoviesById",value:function(){var t="".concat("https://api.themoviedb.org/3/","movie/").concat(this.movieId,"?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb");return fetch(t).then((function(t){return t.json()})).then((function(t){return t}))}},{key:"fetchCastById",value:function(){var t="".concat("https://api.themoviedb.org/3/","movie/").concat(this.movieId,"/credits?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb");return fetch(t).then((function(t){return t.json()})).then((function(t){return t}))}},{key:"fetchReviewsById",value:function(){var t="".concat("https://api.themoviedb.org/3/","movie/").concat(this.movieId,"/reviews?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb","&language=en-US&page=1");return fetch(t).then((function(t){return t.json()})).then((function(t){return t}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"getHits",value:function(t){this.total_results=t}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}},{key:"movieId",get:function(){return this.id},set:function(t){this.id=t}}]),t}()},61:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(62),c=n.n(r),a=n(1);function o(t){var e=t.handleOnClick;return Object(a.jsx)("button",{type:"button",className:c.a.Button,onClick:e,children:"LoadMore"})}},62:function(t,e,n){t.exports={Button:"Button_Button__2P0Iw"}},63:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(57);var c=n(58);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},64:function(t,e,n){t.exports={link:"HomePage_link__3fdRP"}},69:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var r=n(63),c=n(56),a=n(0),o=n(9),i=n(59),u=n(61),s=n(2),f=n(64),h=n.n(f),l=n(1),d=new i.a;function b(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],i=e[1],f=Object(a.useState)(null),b=Object(c.a)(f,2),v=b[0],m=b[1],y=Object(a.useState)(null),p=Object(c.a)(y,2),g=p[0],j=p[1],O=Object(s.g)();Object(a.useEffect)((function(){0===n.length&&d.fetchTrendingFilms().then((function(t){i(t.results),m(t.total_pages),j(t.page)})).catch((function(t){}))}));return Object(l.jsxs)(l.Fragment,{children:[n.length>0&&Object(l.jsx)("ul",{className:h.a.MoviesGallery,children:n.map((function(t,e){return Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:{pathname:"/movies/".concat(t.id),state:{from:{location:O,label:"back to home"}}},movie_id:t.id,className:h.a.link,children:t.title})},e)}))}),g!==v&&Object(l.jsx)(u.a,{handleOnClick:function(t){d.incrementPage(),d.fetchTrendingFilms().then((function(t){i((function(e){return[].concat(Object(r.a)(e),Object(r.a)(t.results))})),m(t.total_pages),j(t.page),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){}))}})]})}}}]);
//# sourceMappingURL=HomePage.f7ed9a9d.chunk.js.map