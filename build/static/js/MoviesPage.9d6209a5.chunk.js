(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{57:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(59);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){c=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},58:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(58);function c(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(15),c=n(16),a=function(){function e(){Object(r.a)(this,e),this.searchQuery="",this.page=1,this.movieId=null}return Object(c.a)(e,[{key:"fetchSearchMovies",value:function(){var e="".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb","&language=en-US&query=").concat(this.searchQuery,"&page=").concat(this.page,"&include_adult=false");return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"fetchTrendingFilms",value:function(){var e="".concat("https://api.themoviedb.org/3/","trending/movie/day?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb","&page=").concat(this.page);return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"fetchMoviesById",value:function(){var e="".concat("https://api.themoviedb.org/3/","movie/").concat(this.movieId,"?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb");return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"fetchCastById",value:function(){var e="".concat("https://api.themoviedb.org/3/","movie/").concat(this.movieId,"/credits?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb");return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"fetchReviewsById",value:function(){var e="".concat("https://api.themoviedb.org/3/","movie/").concat(this.movieId,"/reviews?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb","&language=en-US&page=1");return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"getHits",value:function(e){this.total_results=e}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"movieId",get:function(){return this.id},set:function(e){this.id=e}}]),e}()},61:function(e,t,n){"use strict";t.a=n.p+"static/media/default.5797bfb5.jpg"},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(63),c=n.n(r),a=n(1);function o(e){var t=e.handleOnClick;return Object(a.jsx)("button",{type:"button",className:c.a.Button,onClick:t,children:"LoadMore"})}},63:function(e,t,n){e.exports={Button:"Button_Button__2P0Iw"}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(58);var c=n(59);function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},66:function(e,t,n){e.exports={SearchForm:"Searchbar_SearchForm__1jPOC",SearchForm__button:"Searchbar_SearchForm__button__2ZVX5",SearchForm__button__label:"Searchbar_SearchForm__button__label__1x_QW",SearchForm__input:"Searchbar_SearchForm__input__2B9zz"}},67:function(e,t,n){e.exports={link:"MoviesPage_link__2Ngtw",MoviesGallery:"MoviesPage_MoviesGallery__KPVm9",MovieCard:"MoviesPage_MovieCard__1b8Ff"}},71:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n(64);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n(57),u=n(0),s=n(2),l=n(9),f=n(60),h=n(66),b=n.n(h),j=n(1);function p(e){var t=e.getSearchQuery,n=Object(u.useState)(""),r=Object(i.a)(n,2),c=r[0],a=r[1];return Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c),a("")},children:[Object(j.jsx)("input",{className:b.a.SearchForm__input,value:c,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("button",{type:"submit",className:b.a.SearchForm__button,children:Object(j.jsx)("span",{className:b.a.SearchForm__button__label,children:"Search"})})]})}var d=n(14),m=n(61),v=n(62),y=n(67),O=n.n(y),g=new f.a;function _(){var e=Object(s.f)(),t=Object(s.g)(),n=Object(s.i)().url,c=Object(u.useState)([]),a=Object(i.a)(c,2),f=a[0],h=a[1],b=Object(u.useState)("init"),y=Object(i.a)(b,2),_=y[0],S=y[1],x=Object(u.useState)(null),w=Object(i.a)(x,2),k=w[0],P=w[1],F=Object(u.useState)(null),I=Object(i.a)(F,2),M=I[0],C=I[1],A=Object(u.useState)(!1),B=Object(i.a)(A,2),N=B[0],Q=B[1],E=function(n){e.push(o(o({},t),{},{search:"query=".concat(n)}))},q=new URLSearchParams(t.search).get("query");Object(u.useEffect)((function(){q&&""!==q&&(S("pending"),g.query=q,g.resetPage(),g.fetchSearchMovies().then((function(e){h(e.results),P(e.total_pages),S("success")})).catch((function(e){S("error")})))}),[q]);return"init"===_?Object(j.jsx)(p,{getSearchQuery:E}):"pending"===_?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{getSearchQuery:E}),Object(j.jsx)(d.a,{})]}):"success"===_?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{getSearchQuery:E}),N&&Object(j.jsx)(d.a,{}),f.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:O.a.MoviesGallery,children:f.map((function(e,r){return Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:{pathname:"".concat(n,"/").concat(e.id),state:{from:{location:t,label:"Back to results"}}},className:O.a.link,children:Object(j.jsxs)("div",{children:[e.poster_path?Object(j.jsx)("div",{className:O.a.ImageThumb,children:Object(j.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),alt:"".concat(e.title)})}):Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:"".concat(m.a),alt:"".concat(e.title)})}),e.title?Object(j.jsx)("p",{children:e.title}):e.original_title,Object(j.jsxs)("p",{children:["Rating ",e.vote_average]})]})})},r)}))}),M!==k&&Object(j.jsx)(v.a,{handleOnClick:function(e){Q(!0),g.incrementPage(),g.fetchSearchMovies().then((function(e){h((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.results))})),console.log(e),Q(!1),P(e.total_pages),C(e.page),S("success"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){S("error")}))}})]}):Object(j.jsx)("p",{children:"Sorry, nothing was found for your query!"})]}):void("error"===_&&alert("ERROR!!"))}}}]);
//# sourceMappingURL=MoviesPage.9d6209a5.chunk.js.map