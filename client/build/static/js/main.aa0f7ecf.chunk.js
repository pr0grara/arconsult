(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),r=n.n(i),s=n(12),a=n.n(s),o=(n(44),n(15)),u=n(19),d=n(3),l=n(32),j=n(33),b=n(14),h=n(38),O=n(37),p=n.p+"static/media/ideas.c7c90679.jpg",f=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).handleSubmit=c.handleSubmit.bind(Object(b.a)(c)),c}return Object(j.a)(n,[{key:"gatherAnswers",value:function(){document.querySelectorAll(".answer");this.props.sendSMS()}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.gatherAnswers()}},{key:"render",value:function(){return Object(c.jsxs)("div",{id:"landing",children:[Object(c.jsx)("img",{id:"main-photo",src:p,alt:"landing"}),Object(c.jsxs)("div",{id:"welcome-message",children:[Object(c.jsx)("p",{children:"Hi \ud83d\udc4b , I'm Ara."}),Object(c.jsx)("p",{children:"A born builder with a keen eye for design. Wether it is full stack web applications or circuit boards and sensors the medium is not so important as the art itself."}),Object(c.jsx)("p",{id:"stunner",children:"Idea \u2192 Manifestation = The Art of Building"}),Object(c.jsx)("p",{children:"Do you have a project you'd like me to help with? Send me a text right now"}),Object(c.jsxs)("div",{id:"sms-form",children:[Object(c.jsx)("label",{children:"what is your name?"}),Object(c.jsx)("input",{className:"answer",type:"text"}),Object(c.jsx)("label",{children:"your company?"}),Object(c.jsx)("input",{className:"answer",type:"text"}),Object(c.jsx)("label",{children:"what do you want to build?"}),Object(c.jsx)("textarea",{className:"answer"}),Object(c.jsx)("div",{className:"submit",onClick:this.handleSubmit,children:"Text Ara"})]})]})]})}}]),n}(r.a.Component),m=n(34),x=n.n(m),g=function(e){return function(e){return x.a.post("/api/sms/send",e)}(e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},v=Object(o.b)((function(e){return{}}),(function(e){return{sendSMS:function(e){return g(e)}}}))(f);n(67);var w,y=function(){return Object(c.jsx)("div",{id:"App",children:Object(c.jsx)(d.c,{children:Object(c.jsx)(d.a,{exact:!0,path:"/",component:v})})})},S=function(e){var t=e.store;return Object(c.jsx)(o.a,{store:t,children:Object(c.jsx)(u.a,{children:Object(c.jsx)(y,{})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))},A=n(9),C=n(35),F=n(36),I=n.n(F),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;Object.freeze(e);var n=Object.assign({},e);return t.type,n},N=Object(A.c)({users:M}),T=Object(A.c)({entities:N});w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(A.d)(T,e,Object(A.a)(C.a,I.a))}({}),window.getState=w.getState,a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(S,{store:w})}),document.getElementById("root")),k()}},[[69,1,2]]]);
//# sourceMappingURL=main.aa0f7ecf.chunk.js.map