(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return r}))},RNiq:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("xkgm"),i=[{src:"https://galacticblue.net/img/slider-01.jpg",altText:"GalacticBlue",caption:"",header:"Welcome to GalacticBlue"},{src:"https://galacticblue.net/img/slider-02.jpg",altText:"Graphic Design",caption:"",header:"We Offer Graphic Design Services"},{src:"https://galacticblue.net/img/slider-03.jpg",altText:"Web Development",caption:"",header:"Top Notch Web Development Services"}],s=r.a.createElement,c=function(){return s(a.C,{controls:!1,indicators:!1,items:i})},l=n("1OyB"),u=n("vuIU"),d=n("JX7q"),f=n("Ji7U"),m=n("md7G"),p=n("foSv"),h=[{id:0,name:"WEB | development",img:"https://galacticblue.net/img/web-development-thumb.jpeg",button:"Learn More",content:"When GalacticBlue started a few years ago, our strength was building great sites. Even before then, our team members were experienced in creating websites for companies big and small. We update our standards regularly to keep up with the ever-changing times of the web industry and offer packages that will help you be able to build your own website and maintain the content on your site independently."},{id:1,name:"GRAPHIC | design",img:"https://galacticblue.net/img/graphic-design-thumb.jpg",button:"Learn More",content:"Aside from designing and developing websites for clients, our signature service has always been great graphic design. From business cards and stationary, billboards, shirt embroidery, lamp post banners, advertisement, and more, we are able to fit your business' needs, no matter how big or small the job is. We are also in connections with all the local businesses to help print and make your designs come to life."},{id:2,name:"LOGO | design",img:"https://galacticblue.net/img/logo-design-thumb.jpg",button:"Learn More",content:"Logos are, for better or worse, your first impression with potential customers. Why not make it a great first impression? Our team of brand marketing and design experts take a look at your business and the competition to help make you stand out from the crowd. We work closely with you to help you better understand good logo design standards and to help make the best brand identity and logo your company needs."}],b=r.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(m.a)(this,n)}}var y=function(e){Object(f.a)(n,e);var t=g(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={offers:h,modalHead:"",modalImage:"",modalBody:"",show:!1},o.showModal=o.showModal.bind(Object(d.a)(o)),o.hideModal=o.hideModal.bind(Object(d.a)(o)),o}return Object(u.a)(n,[{key:"showModal",value:function(e,t,n){this.setState({modalHead:e,modalImage:t,modalBody:n,show:!0})}},{key:"hideModal",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this;return b(a.e,null,this.state.offers.map((function(t,n){return b(a.c,{body:!0,inverse:!0,color:"primary",className:"text-center",key:n},b(a.f,{top:!0,width:"100%",src:t.img,alt:t.name}),b(a.d,null,b(a.g,{className:"display-5"},t.name),b(a.b,{onClick:function(){return e.showModal(t.name,t.img,t.content)}},t.button)))})),b(a.s,{isOpen:this.state.show,toggle:this.hideModal},b(a.v,{toggle:this.hideModal,className:"bg-primary"},b("h5",{className:"display-4 text-white"},b("img",{src:"https://galacticblue.net/img/gb-logo-3-dark.png",height:"32"}),this.state.modalHead)),b(a.t,null,b("img",{src:this.state.modalImage,width:"100%"}),b("p",{className:"text-primary display-5"},this.state.modalBody)),b(a.u,null,b(a.b,{color:"primary",onClick:this.hideModal},"Close")," ")))}}]),n}(r.a.Component),w=r.a.createElement;t.default=function(e){return w("div",null,w(a.o,null,w(c,null)),w(a.j,null,w("h1",{className:"display-2 text-primary"},"PROFESSIONAL WEB AND GRAPHIC BRANDING FOR YOUR PROFESSIONAL NEEDS"),w("p",{className:"display-4"},"GalacticBlue is not just a web development and graphic design firm, custom-suited for your professional web and graphic needs. We are more of a collaboration; a trusted member of your marketing and branding team. Our team of web development and graphic design professionals have combined over 10 years of web and graphic experience in the field and stay up-to-date on the latest trends and standards."),w("h2",{className:"display-3 text-primary"},"What Can GalacticBlue Offer You?"),w(y,null)))}},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},"m0L+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},md7G:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}n.d(t,"a",(function(){return i}));var a=n("JX7q");function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return r}))}},[["m0L+",0,1,2,3]]]);