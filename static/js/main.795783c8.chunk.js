(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),r=n.n(i),s=(n(11),n(6)),o=n(4),j=n(0),h=function(e){var t,n=e.title,c=e.poster_path,a=e.overview,i=e.vote_average;return Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+c,alt:n}),Object(j.jsxs)("div",{className:"movie-info",children:[Object(j.jsx)("h3",{children:n}),Object(j.jsx)("span",{className:"tag ".concat((t=i,t>=8?"green":t>=6?"orange":"red")),children:i})]}),Object(j.jsxs)("div",{className:"movie-over",children:[Object(j.jsx)("h2",{children:"Overview:"}),Object(j.jsx)("p",{children:a})]})]})},d=n(3),l=n.n(d);var u=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),d=r[0],u=r[1];Object(c.useEffect)((function(){b(l.a.FEATURED_API)}),[]);var b=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.results)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),d&&(b(l.a.SEARCHED_API+d),u(""))},children:Object(j.jsx)("input",{className:"search",type:"search",placeholder:"Search...",value:d,onChange:function(e){u(e.target.value)}})})}),Object(j.jsx)("div",{className:"movie-container",children:n.length>0&&n.map((function(e){return Object(j.jsx)(h,Object(s.a)({},e),e.id)}))})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),b()},3:function(e,t){e.exports={FEATURED_API:"https://api.themoviedb.org/3/discover/movie?api_key=211ad7c9e563f6ea964fdafbe396953a&sort_by=popularity.desc&page=1",SEARCHED_API:"https://api.themoviedb.org/3/search/movie?api_key=211ad7c9e563f6ea964fdafbe396953a&query="}}},[[13,1,2]]]);
//# sourceMappingURL=main.795783c8.chunk.js.map