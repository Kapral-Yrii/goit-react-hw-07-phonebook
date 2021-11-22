(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,a){t.exports={form:"ContactForm_form__tBfFN",label:"ContactForm_label__c_y-h ContactForm_form__tBfFN",input:"ContactForm_input__11bdB",button:"ContactForm_button__3mDJn ContactForm_input__11bdB"}},18:function(t,e,a){t.exports={app:"App_app__HOhlY",title:"App_title__1m7d9"}},21:function(t,e,a){t.exports={item:"ContactListItem_item__3TeZg",button:"ContactListItem_button__W5WzX"}},22:function(t,e,a){t.exports={list:"ContactList_list__107GJ",filterNote:"ContactList_filterNote__3_11v"}},23:function(t,e,a){t.exports={label:"Filter_label__4VGGr",input:"Filter_input__12yeS"}},27:function(t,e,a){t.exports={title:"Notification_title__nsdVz"}},32:function(t,e,a){},58:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),s=(a(32),a(18)),i=a.n(s),u=a(11),l=a(12),b=a.n(l),j=a(4),d=function(t){return t.contacts.filter},O=function(t){return t.contacts.items},p=a(25),m=a(8),h=Object(p.a)({reducerPath:"contactsApi",baseQuery:Object(m.d)({baseUrl:"https://619a0d669022ea0017a7b006.mockapi.io/api/v1"}),tagTypes:["Contact"],endpoints:function(t){return{fetchContacts:t.query({query:function(){return"/contacts"},providesTags:["Contact"]}),createContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:t}},invalidatesTags:["Contact"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE"}},invalidatesTags:["Contact"]})}}}),f=h.useFetchContactsQuery,_=h.useCreateContactMutation,x=h.useDeleteContactMutation,C=a(16),g=a.n(C),v=a(6),N=a(2);function y(){var t=Object(n.useState)(""),e=Object(u.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(""),o=Object(u.a)(r,2),s=o[0],i=o[1],l=Object(j.e)(O),d=_(),p=Object(u.a)(d,2),m=p[0],h=p[1],f=h.isLoading,x=h.isSuccess,C=h.isError,y=Object(n.useCallback)((function(t){switch(t.target.name){case"name":c(t.target.value);break;case"number":i(t.target.value);break;default:return}}),[]),w=Object(n.useCallback)((function(t){t.preventDefault();var e={name:a,phone:s},n=l.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}));n?Object(v.b)("".concat(n.name," is already in contacts"),{position:"top-center"}):m(e),F()}),[m,l,a,s]),F=function(){c(""),i("")};return Object(n.useEffect)((function(){x&&v.b.success("Contact created"),C&&v.b.error("Oops, there was an error. Contact not created")}),[x,C]),Object(N.jsxs)("form",{onSubmit:w,className:b.a.form,children:[Object(N.jsxs)("label",{className:b.a.label,children:["Name",Object(N.jsx)("input",{className:b.a.input,onChange:y,type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(N.jsxs)("label",{className:b.a.label,children:["Number",Object(N.jsx)("input",{className:b.a.input,onChange:y,type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(N.jsx)("button",{type:"submit",className:b.a.button,disabled:f,children:f?Object(N.jsx)(g.a,{type:"Oval",color:"black",height:46,width:46}):Object(N.jsx)(N.Fragment,{children:"Add contact"})}),x&&Object(N.jsx)(v.a,{position:"top-right"}),C&&Object(N.jsx)(v.a,{position:"top-right"})]})}var w=a(26),F=a(21),k=a.n(F);function L(t){var e=t.name,a=t.phone,c=t.id,r=x(),o=Object(u.a)(r,2),s=o[0],i=o[1],l=i.isLoading,b=i.isSuccess,j=i.isError;return Object(n.useEffect)((function(){b&&v.b.success("Contact deleted"),j&&v.b.error("Oops, there was an error. Contact not deleted")}),[b,j]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("li",{className:k.a.item,children:[e,": ",a,Object(N.jsx)("button",{className:k.a.button,onClick:function(){return s(c)},disabled:l,children:l?Object(N.jsx)(g.a,{type:"Oval",color:"black",height:10,width:10}):Object(N.jsx)(N.Fragment,{children:"X"})})]}),b&&Object(N.jsx)(v.a,{position:"top-right"}),j&&Object(N.jsx)(v.a,{position:"top-right"})]})}var E=a(22),S=a.n(E),A=a(1),T=Object(A.b)("contacts/add"),B=Object(A.b)("contacts/filterByName");function q(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),a=e[0],c=e[1],r=Object(j.e)(d),o=Object(j.d)(),s=f(),i=s.data,l=s.isSuccess,b=s.isError,O=s.isLoading;return Object(n.useEffect)((function(){O&&v.b.success("Contacts list updated");var t=r.toLowerCase();try{c(i.filter((function(e){return e.name.toLowerCase().includes(t)}))),o(T(i))}catch(e){return b&&v.b.error("Oops, there was an error. Contact list not updated"),e}}),[i,o,r,b,O,l]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("ul",{className:S.a.list,children:a.map((function(t){return Object(N.jsx)(L,Object(w.a)({},t),t.id)}))}),""!==r&&0===a.length&&Object(N.jsxs)("p",{className:S.a.filterNote,children:["Contact with name ",Object(N.jsx)("b",{children:r})," not found"]}),l&&Object(N.jsx)(v.a,{position:"top-right"}),b&&Object(N.jsx)(v.a,{position:"top-right"})]})}var z=a(23),J=a.n(z);function D(){var t=Object(j.d)(),e=Object(n.useCallback)((function(e){var a=e.target.value.toLowerCase();t(B(a))}),[t]);return Object(N.jsxs)("label",{className:J.a.label,children:["Find contact by name",Object(N.jsx)("input",{className:J.a.input,type:"text",onChange:e})]})}var M=a(27),P=a.n(M);function Z(){return Object(N.jsx)("p",{className:P.a.title,children:"Contact list is empty"})}var G=function(){var t=Object(j.e)(O);return Object(N.jsxs)("div",{className:i.a.app,children:[Object(N.jsx)("h1",{className:i.a.title,children:"Phonebook"}),Object(N.jsx)(y,{}),Object(N.jsx)("h2",{className:i.a.title,children:"Contacts"}),t.length>1&&Object(N.jsx)(D,{}),0===t.length&&Object(N.jsx)(Z,{}),Object(N.jsx)(q,{})]})},I=a(17),Q=a(10),V=a(7),W=Object(A.d)([],Object(Q.a)({},T,(function(t,e){var a=e.payload;return Object(I.a)(a)}))),X=Object(A.d)("",Object(Q.a)({},B,(function(t,e){return e.payload}))),H=Object(V.b)({items:W,filter:X}),U=Object(A.a)({reducer:Object(Q.a)({contacts:H},h.reducerPath,h.reducer),devTools:!1,middleware:function(t){return[].concat(Object(I.a)(t()),[h.middleware])}});o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(j.a,{store:U,children:Object(N.jsx)(G,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.198d043d.chunk.js.map