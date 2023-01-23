"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[908],{2908:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,o,s,l,d,c,u,x,p,m,h,f=t(9439),b=t(2791),g=t(9434),Z=t(3871),j=t(6351),v=t(8174),w=t(168),y=t(6444),k=y.ZP.form(r||(r=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 500px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  padding: 30px;\n\n  margin: 0 auto;\n"]))),P=y.ZP.h2(a||(a=(0,w.Z)(["\n  text-align: center;\n  margin: 0;\n  margin-bottom: 20px;\n  padding: 0;\n"]))),C=y.ZP.label(i||(i=(0,w.Z)(["\n  margin-bottom: 5px;\n  font-weight: 700;\n\n  &:not(:first-child) {\n    margin-top: 10px;\n  }\n"]))),A=y.ZP.input(o||(o=(0,w.Z)(["\n  height: 20px;\n  padding-left: 5px;\n\n  transition: all 300ms ease-in-out;\n\n  &:focus {\n    border-color: #ff7b00;\n    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);\n    outline: none;\n    border-radius: 5px;\n  }\n"]))),F=y.ZP.button(s||(s=(0,w.Z)(["\n  margin-top: 40px;\n  height: 30px;\n  background-color: #ff7b00;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #fff;\n  font-weight: 600;\n"]))),z=t(184),D=function(){var n=(0,b.useState)(""),e=(0,f.Z)(n,2),t=e[0],r=e[1],a=(0,b.useState)(""),i=(0,f.Z)(a,2),o=i[0],s=i[1],l=(0,g.I0)(),d=(0,g.v9)(j.Af),c=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":s(a);break;default:return}};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(P,{children:"Phonebook"}),(0,z.jsxs)(k,{onSubmit:function(n){n.preventDefault(),d.find((function(n){return n.name===t}))?v.Am.warning("There is already a contact with such a name."):l((0,Z.uK)({name:t,number:o})),r(""),s("")},children:[(0,z.jsxs)(C,{htmlFor:"name",children:["Name",(0,z.jsx)("br",{})]}),(0,z.jsx)(A,{id:"name",type:"text",value:t,name:"name",placeholder:"e.g. Stephen King",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:c}),(0,z.jsxs)(C,{htmlFor:"number",children:["Number",(0,z.jsx)("br",{})]}),(0,z.jsx)(A,{id:"number",type:"text",value:o,name:"number",placeholder:"+38-000-000-00-00",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:c}),(0,z.jsx)(F,{type:"submit",children:"Add contact"})]})]})},I=y.ZP.ul(l||(l=(0,w.Z)(["\n  width: 300px;\n  margin: 0 auto;\n  display: flex;\n  position: relative;\n  padding: 0;\n  flex-direction: column;\n"]))),S=t(8494),_=y.ZP.li(d||(d=(0,w.Z)(["\n  display: flex;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),K=y.ZP.p(c||(c=(0,w.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),L=y.ZP.button(u||(u=(0,w.Z)(["\n  background-color: #ff7b00;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #fff;\n  font-weight: 600;\n  position: absolute;\n  right: 0;\n\n  display: flex;\n  align-items: center;\n"]))),N=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,i=(0,g.I0)();return(0,z.jsxs)(_,{children:[(0,z.jsxs)(K,{children:[r,": ",a]}),(0,z.jsxs)(L,{type:"button",onClick:function(){return i((0,Z.GK)(t))},children:["Delete",(0,z.jsx)(S.sQZ,{style:{color:"red",width:"10",marginLeft:"5"}})]})]})},q=function(){var n=(0,g.v9)(j.Af),e=(0,g.v9)(j.AD),t=(0,b.useMemo)((function(){return n.filter((function(n){return n.name.toLowerCase().includes(e.trim().toLowerCase())}))}),[n,e]);return(0,z.jsx)(I,{children:t.map((function(n){return(0,z.jsx)(N,{contact:n},n.id)}))})},M=t(6895),B=y.ZP.div(x||(x=(0,w.Z)(["\n  text-align: center;\n"]))),E=y.ZP.h2(p||(p=(0,w.Z)(["\n  text-align: center;\n  margin-top: 60px;\n"]))),G=y.ZP.label(m||(m=(0,w.Z)(["\n  font-weight: 700;\n  margin-bottom: 5px;\n  display: block;\n"]))),J=y.ZP.input(h||(h=(0,w.Z)(["\n  height: 20px;\n  width: 300px;\n  padding-left: 5px;\n  margin-bottom: 20px;\n  transition: all 300ms ease-in-out;\n\n  &:focus {\n    border-color: #ff7b00;\n    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);\n    outline: none;\n    border-radius: 5px;\n  }\n"]))),Q=function(){var n=(0,g.v9)(j.AD),e=(0,g.I0)();return(0,z.jsxs)(B,{children:[(0,z.jsx)(E,{children:"Contacts"}),(0,z.jsxs)(G,{htmlFor:"text",children:["Find contacts by name",(0,z.jsx)("br",{})]}),(0,z.jsx)(J,{id:"text",type:"text",value:n,onChange:function(n){var t=n.target.value;e((0,M.a)(t))}})]})},T=t(8402),U=function(){var n=(0,g.v9)(j.xU),e=(0,g.v9)(j.zh),t=(0,g.I0)();return(0,b.useEffect)((function(){t((0,Z.yF)())}),[t]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(D,{}),(0,z.jsx)(Q,{}),n&&!e&&(0,z.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,z.jsx)(T.s5,{strokeColor:"#ff7b00",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0})}),(0,z.jsx)(q,{})]})}}}]);
//# sourceMappingURL=908.b3eaa8d1.chunk.js.map