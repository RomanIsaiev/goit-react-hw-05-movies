"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[911],{7:function(e,n,t){t.d(n,{$w:function(){return l},Df:function(){return c},HI:function(){return u},Pg:function(){return o},Xj:function(){return p}});var r=t(861),a=t(757),i=t.n(a),s=t(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGQzYjM3NjJjNjFkMmVmNDc5ZDA2MzRiYWY0ZTViZiIsInN1YiI6IjY1NWZiYzhiOTJlNTViMDBhY2FmZmE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bl8cqM_r4GNcw9sxGDSgqJJg5NQZK9yVoEpC7bP8rg4";var c=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/all/day?language=en-US");case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"?language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits?language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews?language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},911:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),a=t(439),i=t(757),s=t.n(i),c=t(7),u=t(184),o=function(e){var n=e.genres;return(0,u.jsx)("ul",{children:n.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)("p",{children:e.name})},e.id)}))})},l=t(791),p=t(689),h=t(87);function d(){var e,n,t=(0,l.useState)(null),i=(0,a.Z)(t,2),d=i[0],f=i[1],v=(0,p.UO)(),x=(0,p.TH)(),g=(0,l.useRef)(x);return(0,l.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Pg)(v.movieId).then((function(e){f(e.data)}));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:return e.prev=7,e.finish(7);case 9:case"end":return e.stop()}}),e,null,[[0,5,7,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"MovieDetails"}),(0,u.jsx)(h.rU,{to:null!==(e=null===(n=g.current.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies",children:"Back to movies"}),d&&(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:d.poster_path?"https://image.tmdb.org/t/p/w500/".concat(d.poster_path):"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",alt:d.title,width:300,height:400}),(0,u.jsx)("h2",{children:d.title}),(0,u.jsxs)("p",{children:["User Score: ",Math.round(d.vote_average)/10*100,"%"]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"Overview"}),(0,u.jsxs)("p",{children:[" ",d.overview]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"Genres"}),(0,u.jsx)(o,{genres:d.genres})]})]}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(h.OL,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(h.OL,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=911.404f482a.chunk.js.map