(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{116:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(29),i=c.n(n),o=c(10),r=(c(72),c(20)),l=c(17),j=c(120),d=c(119),b=c(121),m=Object(a.createContext)(),u=(c(73),c(74),c(75),c(76),c(3));var h=function(){return Object(u.jsx)("div",{className:"container",id:"aboutart",children:Object(u.jsx)("p",{className:"para",children:"Art Collections intended to showcase the paintings done by Christy Shabu.  It contains mainly acrylic paintings, pencil drawings and crafts. This page gives importance to nature and tries to show that everyone needs to spend some time alone with nature to better know about themselves"})})};c(78);var O=function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("p",{className:"aboutmepara",children:"Btech graduate, currently working as System Engineer in Tata Consultancy Services. One of my big hobbies is Painting. In between the works, I always find time to do acrylic paintings. I gave more preference to nature for my Paintings as we all know nature is the best medicine for all our stress."})})};c(79);var x=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){window.pageYOffset>300?s(!0):s(!1)}))}),[]),Object(u.jsx)("div",{children:c&&Object(u.jsx)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"back-to-top",children:"\u21e7"})})};var p=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(o.a)(n,2),l=i[0],j=i[1];return Object(u.jsx)("div",{className:"about",id:"about",children:Object(u.jsx)("div",{className:"about-section section pt-120 pb-70",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:Object(u.jsxs)("div",{className:"about-item",children:[Object(u.jsxs)(r.a,{children:[Object(u.jsx)(r.b,{className:"image",to:"/aboutart",children:Object(u.jsx)("img",{onClick:function(){return s(!c)},className:"mypic1",src:"https://rukminim1.flixcart.com/image/416/416/ji3g70w0/art-craft-kit/h/c/y/24-color-art-colored-drawing-pencil-set-bgoing-premier-colored-original-imaf5ywjmmxzgyjt.jpeg?q=70"})}),c?Object(u.jsx)(h,{}):null]}),Object(u.jsx)("h4",{className:"title",children:"About Art Collections"})]})}),Object(u.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12",children:Object(u.jsxs)("div",{className:"about-item",children:[Object(u.jsxs)(r.a,{children:[Object(u.jsx)(r.b,{className:"image",to:"/aboutme",children:Object(u.jsx)("img",{onClick:function(){return j(!l)},className:"mypic",src:"christy_s.jpg"})}),l?Object(u.jsx)(O,{}):null]}),Object(u.jsx)("h4",{className:"title",children:"About Me"})]})}),Object(u.jsx)(x,{})]})})})})},f=c(47);var v=function(){Object(a.useContext)(m).photos;var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),i=Object(o.a)(n,2),r=i[0],l=i[1];return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"hero-section section-overlay",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"hero-content text-center col-12",children:[Object(u.jsx)("h1",{className:"art",children:Object(u.jsx)("strong",{children:"Art Collections"})}),Object(u.jsx)(f.a,{smooth:!0,to:"#about",children:Object(u.jsx)("button",{className:"read-more",onClick:function(){s(!c),l(!r)},children:r?"READ MORE":"READ LESS"})}),c?Object(u.jsx)(p,{}):null]})})})})})},g=(c(84),c(67)),N=(c(90),g.a.initializeApp({apiKey:"AIzaSyClGbpjIVqAr0EXpMB6C-Gt_L6eBCnjNaE",authDomain:"artcollections-9cad9.firebaseapp.com",databaseURL:"https://artcollections-9cad9-default-rtdb.firebaseio.com/",projectId:"artcollections-9cad9",storageBucket:"artcollections-9cad9.appspot.com",messagingSenderId:"599546222558",appId:"1:599546222558:web:1dac9848eaf65868356f4f"}).firestore());var w=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(o.a)(n,2),r=i[0],l=i[1],j=Object(a.useState)(""),d=Object(o.a)(j,2),b=d[0],m=d[1];return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row-justify-content-end",children:Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:Object(u.jsxs)("div",{className:"contact-section-warpper",children:[Object(u.jsx)("div",{className:"contact-info aos-init aos-animate","data-aos":"fade-up",children:Object(u.jsx)("span",{className:"mail",children:Object(u.jsx)("a",{className:"alink",href:"mailto:acrylic.arts000@gmail.com",children:" acrylic.arts000@gmail.com"})})}),Object(u.jsx)("div",{className:"contact-form aos-init aos-animate","data-aos":"fade-up","data-aos-duration":"600",children:Object(u.jsx)("form",{className:"contact-form action=",onSubmit:function(e){e.preventDefault(),N.collection("contactme").add({name:c,email:r,message:b}).then((function(){alert("Your Message has been successgully submitted")})).catch((function(e){alert(e.message)})),s(""),m(""),l("")},children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("div",{className:"single-form",children:Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Enter your name...",value:c,onChange:function(e){s(e.target.value)}})})}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("div",{className:"single-form",children:Object(u.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email...",value:r,onChange:function(e){l(e.target.value)}})})}),Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsx)("div",{className:"single-form",children:Object(u.jsx)("textarea",{name:"message",placeholder:"Here goes your message...",value:b,onChange:function(e){m(e.target.value)}})})}),Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsx)("div",{className:"form-btn",children:Object(u.jsx)("button",{type:"submit",children:"Send Message"})})})]})})})]})})})})};c(91),c(92),c(93);var y=function(){var e=Object(a.useContext)(m).photos;return Object(u.jsxs)("div",{className:"posterdiv",children:[e.map((function(e){return Object(u.jsx)("a",{href:e.media_url,children:Object(u.jsx)("img",{className:"poster",alt:"poster",src:e.media_url,pagination:!0})})})),Object(u.jsx)(x,{})]})};var k=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(u.jsx)("div",{className:"header-section section sticker",children:Object(u.jsx)("div",{className:"container custom container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsxs)("div",{className:"header-top",children:[Object(u.jsx)("img",{className:"logo fixed-top",src:"AC1.png"}),Object(u.jsxs)(r.a,{children:[Object(u.jsx)(j.a,{transparent:!0,variant:"dark",expand:"lg",expanded:c,children:Object(u.jsxs)(d.a,{fluid:!0,children:[Object(u.jsx)(j.a.Toggle,{onClick:function(){return s(!c&&"expanded")},"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(b.a,{className:"m-auto",children:[Object(u.jsx)(r.b,{to:"/",className:"nav-link ",onClick:function(){return s(!1)},children:"Home"}),Object(u.jsx)(r.b,{to:"/gallery",className:"nav-link ",onClick:function(){return s(!1)},children:"Gallery"}),Object(u.jsx)(r.b,{to:"/contactus",className:"nav-link",onClick:function(){return s(!1)},children:"Contact Me"})]})})]})}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/gallery",children:Object(u.jsx)(y,{})}),Object(u.jsx)(l.a,{path:"/contactus",children:Object(u.jsx)(w,{})}),Object(u.jsx)(l.a,{path:"/",children:Object(u.jsx)(v,{})})]})]})]})})})})})},S=(c(96),c(51)),C=c(52);var A=function(){return Object(u.jsxs)("div",{className:"socialfollow",children:["ArtCollection",Object(u.jsx)("a",{href:"https://www.facebook.com/",className:"facebook social",children:Object(u.jsx)(S.a,{icon:C.a})}),Object(u.jsx)("a",{href:"https://www.instagram.com/art.collection20/",className:"instagram social",children:Object(u.jsx)(S.a,{icon:C.b})})]})},E=c(66),V=c.n(E);var I=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(o.a)(n,2);return i[0],i[1],Object(a.useEffect)((function(){V.a.get("".concat("https://graph.instagram.com","/me/media?fields=media_url,permalink,media_id,id,media_type&access_token=").concat("IGQVJYc0VETWVwVXpUZAUtoWXpQS1BicXd3QjZASQmdURVBCVm55ZAEpYakxEcTFHcEt1VnAzSnBWbFNKR3hBWUxfRU4xcVhaVmVUQUM2NDlsSFlLS1k5T1ZAnajJwYUpSVDJObzVmSS1PTG5YT3ZAsd29iOAZDZD")).then((function(e){var t=e.data.data;console.log(e.data),s(t),console.log(c)}))}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)(m.Provider,{value:{photos:c},children:[Object(u.jsx)(k,{}),Object(u.jsx)(A,{})]})})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))},72:function(e,t,c){},73:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},84:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},96:function(e,t,c){}},[[116,1,2]]]);
//# sourceMappingURL=main.d44a06ab.chunk.js.map