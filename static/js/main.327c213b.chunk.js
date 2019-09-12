(window["webpackJsonpcra-contact-list"]=window["webpackJsonpcra-contact-list"]||[]).push([[0],{102:function(e,a,t){e.exports=t(244)},243:function(e,a,t){},244:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(98),s=t.n(r),m=t(56),o=function(e){return n.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-teal-500 p-6"},n.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},n.a.createElement("span",{className:"font-semibold text-xl tracking-tight"},"Simple Contact App")),n.a.createElement("div",{className:"block lg:hidden"},n.a.createElement("button",{className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"},n.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Menu"),n.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),n.a.createElement("div",{className:"w-full block flex-grow lg:flex lg:items-center lg:w-auto"},n.a.createElement("div",{className:"text-sm lg:flex-grow"},n.a.createElement("a",{className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",onClick:e.onGotoHome},"Contact List")),n.a.createElement("div",null,n.a.createElement("a",{className:"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0",onClick:e.onNewContact},"Create New Contact"))))},c=t(6),i=t(8),d=function(e){return n.a.createElement(c.b,{initialValues:{id:0,firstName:"",lastName:"",gender:"",email:"",phone:"",address:"",getCallback:!1},validationSchema:i.object().shape({firstName:i.string().required("first name is required"),lastName:i.string().required("last name is required"),email:i.string().required("required").email("Email is not valid"),gender:i.mixed().oneOf(["male","female"]),phone:i.string().required("required").matches(/^\d{10}$/,{message:"Please enter valid phone number must be of 10 digits.",excludeEmptyString:!1}),address:i.string()}),onSubmit:function(a,t){console.log("submit",a),e.onAddContact(a)},render:function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit,className:"w-full max-w-lg"},n.a.createElement("div",{className:"font-bold text-xl mb-2","data-test":"data-new-contact"},"Create New Contact"),n.a.createElement("div",{className:"flex flex-wrap content-center"},n.a.createElement("div",{className:"w-full lg:w-1/2 px-3 mb-6 md:mb-0"},n.a.createElement("label",{htmlFor:"firstName",className:"text-sm block font-bold  pt-2 pb-2"},"First Name"),n.a.createElement(c.a,{name:"firstName",render:function(e){var a=e.field,t=e.form;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",Object.assign({name:"firstName","data-test":"input-firstName",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 ",placeholder:"First Name"},a)),n.a.createElement("span",{className:"text-red-500 text-xs italic"},t.touched.firstName&&t.errors.firstName&&t.errors.firstName))}})),n.a.createElement("div",{className:"w-full lg:w-1/2 px-3 mb-6 md:mb-0"},n.a.createElement("label",{htmlFor:"lastName",className:"text-sm block font-bold  pt-2 pb-2"},"Last Name"),n.a.createElement(c.a,{name:"lastName",render:function(e){var a=e.field,t=e.form;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",Object.assign({name:"lastName","data-test":"input-lastName",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 ",placeholder:"Last Name"},a)),n.a.createElement("span",{className:"text-red-500 text-xs italic"},t.touched.lastName&&t.errors.lastName&&t.errors.lastName))}})),n.a.createElement("div",{className:"w-full lg:w-1/2 px-3 mb-6 md:mb-0"},n.a.createElement("label",{htmlFor:"gender",className:"text-sm block font-bold  pt-2 pb-2"},"Gender"),n.a.createElement(c.a,{name:"gender",render:function(a){var t=a.field,l=a.form;return n.a.createElement(n.a.Fragment,null,n.a.createElement("select",{name:"gender",className:"block appearance-none w-full border rounded text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline border-blue-300",onChange:function(a){console.log(l.errors),e.setFieldValue(t.name,a.target.value)},style:{display:"block"}},n.a.createElement("option",{value:"",label:"Select Gender"}),n.a.createElement("option",{value:"male",label:"Male"}),n.a.createElement("option",{value:"female",label:"Female"})),n.a.createElement("span",{className:"text-red-500 text-xs italic"},l.touched.gender&&l.errors.gender&&l.errors.gender))}})),n.a.createElement("div",{className:"w-full lg:w-1/2 px-3 mb-6 md:mb-0"},n.a.createElement("label",{htmlFor:"email",className:"text-sm block font-bold pt-2 pb-2"},"email address"),n.a.createElement(c.a,{name:"email",render:function(e){var a=e.field,t=e.form;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",Object.assign({name:"email","data-test":"input-email",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 ",placeholder:"Email"},a)),n.a.createElement("span",{className:"text-red-500 text-xs italic"},t.touched.email&&t.errors.email&&t.errors.email))}})),n.a.createElement("div",{className:"w-full lg:w-1/1 px-3 mb-6 md:mb-0"},n.a.createElement("label",{htmlFor:"email",className:"text-sm block font-bold pt-2 pb-2 pm-3"},"Phone Number"),n.a.createElement(c.a,{name:"phone",render:function(e){var a=e.field,t=e.form;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",Object.assign({name:"phone","data-test":"input-phone",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 ",placeholder:"Phone"},a)),n.a.createElement("span",{className:"text-red-500 text-xs italic"},t.touched.phone&&t.errors.phone&&t.errors.phone))}})),n.a.createElement("div",{className:"w-full lg:w-1/1 px-3 mb-6 md:mb-0"},n.a.createElement("label",{htmlFor:"address",className:"text-sm block font-bold pt-2 pb-2"},"Address"),n.a.createElement(c.a,{name:"address",render:function(e){var a=e.field,t=e.form;return n.a.createElement(n.a.Fragment,null,n.a.createElement("textarea",Object.assign({name:"address","data-test":"input-address",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 ",placeholder:"Address"},a)),n.a.createElement("span",{className:"text-red-500 text-xs italic"},t.touched.address&&t.errors.address&&t.errors.address))}})),n.a.createElement("div",{className:"w-full lg:w-2/3 px-3 mb-6 md:mb-0"},n.a.createElement("label",{htmlFor:"email",className:"text-sm block font-bold pt-2 pb-2"},"Would like to get callback"),n.a.createElement(c.a,{name:"getCallback",render:function(e){var a=e.field;e.form;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",Object.assign({name:"getCallback",type:"checkbox",className:"mr-2 leading-tight",placeholder:"getCallback"},a)))}})),n.a.createElement("div",{className:"w-full lg:w-1/1 px-3 mb-6 md:mb-0"},n.a.createElement("button",{"data-test":"btn-add-contact",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"},"Create"))))}})},u=function(e){var a=e.contactList;return n.a.createElement("div",{className:"p-4"},n.a.createElement("div",{className:"font-bold text-xl mb-2"},"Contact List"),n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"flex-1 bg-gray-400 h-6"},"First Name"),n.a.createElement("div",{className:"flex-1 bg-gray-400 h-6"},"Last Name"),n.a.createElement("div",{className:"flex-1 bg-gray-400 h-6"},"Email"),n.a.createElement("div",{className:"flex-1 bg-gray-400 h-6"},"Phone Number"),n.a.createElement("div",{className:"flex-1 bg-gray-400 h-6"},"Address")),0===a.length&&n.a.createElement("div",null,"No records"),a.map((function(e){return n.a.createElement("div",{className:"flex _contact-item_",key:e.id},n.a.createElement("div",{className:"flex-1 h-6"},e.firstName),n.a.createElement("div",{className:"flex-1 h-6"},e.lastName),n.a.createElement("div",{className:"flex-1 h-6"},e.email),n.a.createElement("div",{className:"flex-1 h-6"},e.phone),n.a.createElement("div",{className:"flex-1 h-6"},e.address))})))},b=[];var f=function(){var e=Object(l.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(l.useState)(b),c=Object(m.a)(s,2),i=c[0],f=c[1];return console.log("TCL: App -> contactList",i),n.a.createElement("div",null,n.a.createElement(o,{onGotoHome:function(){return r(!1)},onNewContact:function(){return r(!0)}}),t?n.a.createElement(d,{onAddContact:function(e){var a=i.length;e.id=a+1,f(i.concat(e)),r(!1)}}):n.a.createElement(u,{contactList:i}))};t(243),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[102,1,2]]]);
//# sourceMappingURL=main.327c213b.chunk.js.map