(this["webpackJsonphackernews-clone-react-app"]=this["webpackJsonphackernews-clone-react-app"]||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(13),a=n.n(s),o=n(8),i=n(2),u=n(1),l=function(){return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)("h1",{children:"Hacker News Clone"}),Object(u.jsxs)("div",{className:"nav-link",children:[Object(u.jsx)(o.c,{to:"/top",activeClassName:"active",children:"Top Stories"}),Object(u.jsx)(o.c,{to:"/new",activeClassName:"active",children:"Latest Stories"}),Object(u.jsx)(o.c,{to:"/best",activeClassName:"active",children:"Best Stories"})]})]})},j=function(e){var t=e.url,n=e.title;return Object(u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:n})},d=function(e){var t=e.story,n=t.id,c=t.by,r=t.title,s=t.kids,a=t.time,o=t.url;return Object(u.jsxs)("div",{className:"story",children:[Object(u.jsx)("div",{className:"story-title",children:Object(u.jsx)(j,{url:o,title:r})}),Object(u.jsxs)("div",{className:"story-info",children:[Object(u.jsxs)("span",{children:["by"," ",Object(u.jsx)(j,{url:"https://news.ycombinator.com/user?id=".concat(c),title:c})]}),"|",Object(u.jsx)("span",{children:new Date(1e3*a).toLocaleDateString("en-US",{hour:"numeric",minute:"numeric"})}),"|",Object(u.jsx)("span",{children:Object(u.jsx)(j,{url:"https://news.ycombinator.com/item?id=".concat(n),title:"".concat(s&&s.length>0?s.length:0," comments")})})]})]})},b=n(11),h=n(12),p=n.n(h),O=n(18),m=n(19),f=n.n(m),x="https://hacker-news.firebaseio.com/v0",v=function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/item/").concat(t,".json"));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error while getting a story.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/").concat(t,"stories.json"));case 3:return n=e.sent,c=n.data,e.next=7,Promise.all(c.slice(0,30).map(v));case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.log("Error while getting list of stories.");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(!1),o=Object(b.a)(a,2),i=o[0],u=o[1];return Object(c.useEffect)((function(){u(!0),g(e).then((function(e){s(e),u(!1)})).catch((function(){u(!1)}))}),[e]),{isLoading:i,stories:r}},y=function(e){var t=Object(c.useState)(document.createElement("div")),n=Object(b.a)(t,1)[0],r=document.querySelector("#loader");return Object(c.useEffect)((function(){r.appendChild(n).classList.add("message")}),[r,n]),Object(c.useEffect)((function(){e.show?(r.classList.remove("hide"),document.body.classList.add("loader-open")):(r.classList.add("hide"),document.body.classList.remove("loader-open"))}),[r,e.show]),a.a.createPortal(e.children,n)},k=function(e){var t=e.type,n=w(t||"top"),c=n.isLoading,s=n.stories;return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)(y,{show:c,children:"Loading..."}),Object(u.jsx)(r.a.Fragment,{children:s.map((function(e){var t=e.data;return Object(u.jsx)(d,{story:t},t.id)}))})]})},L=function(){return Object(u.jsxs)("p",{children:["Page Not found. Go to ",Object(u.jsx)(o.b,{to:"/",children:"Home"})]})},N=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(l,{}),Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{path:"/",render:function(){return Object(u.jsx)(i.a,{to:"/top"})},exact:!0}),Object(u.jsx)(i.b,{path:"/:type",render:function(e){var t=e.match.params.type;return["top","new","best"].includes(t)?Object(u.jsx)(k,{type:t}):Object(u.jsx)(i.a,{to:"/"})}}),Object(u.jsx)(i.b,{component:L})]})]})})};n(59),n(60);a.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.d8b6d557.chunk.js.map