(this["webpackJsonpdl-final"]=this["webpackJsonpdl-final"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(11),o=n.n(a),r=(n(22),n(5)),i=(n(23),n(34)),u=n(2);function j(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("./dl_final/README.md").then((function(e){return e.text()})).then((function(e){console.log(e),s(e)}))})),Object(u.jsx)(i.a,{children:n})}var l=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),o=Object(r.a)(a,2),i=o[0],l=o[1],d=Object(c.useState)(!1),p=Object(r.a)(d,2),b=p[0],f=p[1];return Object(u.jsx)("div",{className:"App",children:i?Object(u.jsx)(j,{}):Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n),"dlrocks"===n?l(!0):f(!0)},className:"app__password-container",children:[Object(u.jsx)("p",{children:"Please enter the passkey to continue:"}),b&&Object(u.jsx)("p",{children:"Wrong passkey!"}),Object(u.jsx)("input",{className:"app__password-form",name:"password",id:"password",type:"password",placeholder:"Passkey",onChange:function(e){s(e.target.value)},required:!0}),Object(u.jsx)("button",{type:"submit",className:"app__password-submit",children:"Login"})]})})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),d()}},[[29,1,2]]]);
//# sourceMappingURL=main.df1f53f7.chunk.js.map