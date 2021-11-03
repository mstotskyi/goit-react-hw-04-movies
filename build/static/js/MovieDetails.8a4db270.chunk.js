(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{57:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(59);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(a=(r=o.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==o.return||o.return()}finally{if(c)throw i}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},58:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(58);function c(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(15),c=n(16),i=function(){function e(){Object(a.a)(this,e),this.searchQuery="",this.page=1,this.movieId=null}return Object(c.a)(e,[{key:"fetchSearchMovies",value:function(){var e="".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb","&language=en-US&query=").concat(this.searchQuery,"&page=").concat(this.page,"&include_adult=false");return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"fetchTrendingFilms",value:function(){var e="".concat("https://api.themoviedb.org/3/","trending/movie/day?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb","&page=").concat(this.page);return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"fetchMoviesById",value:function(){var e="".concat("https://api.themoviedb.org/3/","movie/").concat(this.movieId,"?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb");return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"fetchCastById",value:function(){var e="".concat("https://api.themoviedb.org/3/","movie/").concat(this.movieId,"/credits?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb");return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"fetchReviewsById",value:function(){var e="".concat("https://api.themoviedb.org/3/","movie/").concat(this.movieId,"/reviews?api_key=").concat("51424edfe4a0fc9e4606a6acf74e98bb","&language=en-US&page=1");return fetch(e).then((function(e){return e.json()})).then((function(e){return e}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"getHits",value:function(e){this.total_results=e}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"movieId",get:function(){return this.id},set:function(e){this.id=e}}]),e}()},61:function(e,t,n){"use strict";t.a=n.p+"static/media/default.5797bfb5.jpg"},68:function(e,t,n){e.exports={castGallery:"Cast_castGallery__1Y_Qk",ImgThumb:"Cast_ImgThumb__2n8qA",CastImage:"Cast_CastImage__3XELE"}},69:function(e,t,n){e.exports={container:"MovieDetails_container__2rS2n",MovieDetails:"MovieDetails_MovieDetails__3X94r",MovieDetailsItem:"MovieDetails_MovieDetailsItem__2Mn2S",MovieDetails__image:"MovieDetails_MovieDetails__image__1kOe3",moviedetails__link:"MovieDetails_moviedetails__link__18t1O",link:"MovieDetails_link__30Dv5",activeLink:"MovieDetails_activeLink__3979S MovieDetails_link__30Dv5",GoBackBtn:"MovieDetails_GoBackBtn__2qarh"}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(57),c=n(0),i=n(2),r=n(9),o=n(61),s=n(60),l=n(68),u=n.n(l),h=n(14),v=n(1),f=new s.a;function j(){var e=Object(i.h)().movieId,t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],s=n[1],l=Object(c.useState)(!1),j=Object(a.a)(l,2),d=j[0],b=j[1];return Object(c.useEffect)((function(){b(!0),f.movieId=e,f.fetchCastById().then((function(e){s(e.cast),b(!1)})).catch((function(e){}))}),[e]),Object(v.jsxs)(v.Fragment,{children:[d&&Object(v.jsx)(h.a,{}),Object(v.jsx)("div",{children:r.length>0?Object(v.jsx)("ul",{className:u.a.castGallery,children:r.map((function(e){return Object(v.jsxs)("li",{children:[Object(v.jsx)("div",{className:u.a.ImgThumb,children:e.profile_path?Object(v.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(e.profile_path),alt:e.name,className:u.a.CastImage}):Object(v.jsx)("img",{src:o.a,alt:e.name,width:"200"})}),Object(v.jsx)("p",{children:e.name}),Object(v.jsxs)("p",{children:["Character: ",e.character]})]},e.cast_id)}))}):"We don't have cast info for this movie."})]})}var d=new s.a;function b(){var e=Object(i.h)().movieId,t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],o=n[1],s=Object(c.useState)(!1),l=Object(a.a)(s,2),u=l[0],f=l[1];return Object(c.useEffect)((function(){f(!0),d.movieId=e,d.fetchReviewsById().then((function(e){o(e.results),f(!1)})).catch((function(e){}))}),[e]),Object(v.jsxs)("div",{children:[u&&Object(v.jsx)(h.a,{}),r.length>0?Object(v.jsx)("ul",{children:r.map((function(e){return Object(v.jsxs)("li",{children:[Object(v.jsx)("h3",{children:e.author}),Object(v.jsx)("p",{children:e.content})]},e.author)}))}):"We don't have any reviews for this movie."]})}var m=n(69),O=n.n(m),p=new s.a;function _(){var e,t,n,s=Object(i.h)().movieId,l=Object(i.i)(),u=l.url,h=l.path,f=Object(c.useState)([]),d=Object(a.a)(f,2),m=d[0],_=d[1],g=Object(i.f)(),y=Object(i.g)();Object(c.useEffect)((function(){p.movieId=s,p.fetchMoviesById().then((function(e){_(e)})).catch((function(e){}))}),[s]);return Object(v.jsxs)("div",{className:O.a.container,children:[Object(v.jsx)("button",{type:"button",onClick:function(){var e,t,n;g.push(null!==(e=null===y||void 0===y||null===(t=y.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.location)&&void 0!==e?e:"/movies")},className:O.a.GoBackBtn,children:null!==(e=null===y||void 0===y||null===(t=y.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.label)&&void 0!==e?e:"Back to results"}),Object(v.jsxs)("div",{className:O.a.MovieDetails,children:[m.poster_path?Object(v.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(m.poster_path),alt:m.original_title,className:O.a.MovieDetails__image}):Object(v.jsx)("img",{src:o.a,alt:"",width:"320",height:"480"}),Object(v.jsxs)("div",{className:O.a.MovieDescr,children:[m.title?Object(v.jsx)("h1",{children:m.title}):Object(v.jsx)("h1",{children:m.original_title}),Object(v.jsxs)("p",{children:["Vote average: ",m.vote_average]}),Object(v.jsx)("h2",{children:"Overview"}),Object(v.jsx)("p",{children:m.overview}),Object(v.jsx)("h2",{children:"Genres"}),Object(v.jsx)("ul",{children:m.genres&&m.genres.map((function(e){return Object(v.jsx)("li",{children:e.name},e.id)}))})]})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{className:O.a.MovieDetails__link,children:[Object(v.jsx)(r.c,{to:{pathname:"".concat(u,"/cast"),state:{from:{location:y.state.from.location,label:"Back to results"}}},className:O.a.link,activeClassName:O.a.activeLink,children:"Cast"}),Object(v.jsx)(r.c,{to:{pathname:"".concat(u,"/reviews"),state:{from:{location:y.state.from.location,label:"Back to results"}}},className:O.a.link,activeClassName:O.a.activeLink,children:"Reviews"})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)(i.c,{children:[Object(v.jsx)(i.a,{path:"".concat(h,"/cast"),children:Object(v.jsx)(j,{})}),Object(v.jsx)(i.a,{path:"".concat(h,"/reviews"),children:Object(v.jsx)(b,{})})]})]})}}}]);
//# sourceMappingURL=MovieDetails.8a4db270.chunk.js.map