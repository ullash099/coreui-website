webpackJsonp([46],{261:function(e,a,t){"use strict";function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function n(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function r(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var c=t(0),o=t.n(c),s=t(6),m=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),i=function(e){function a(e){l(this,a);var t=n(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.toggle=t.toggle.bind(t),t.state={dropdownOpen:!1},t}return r(a,e),m(a,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement("div",{className:"email-app mb-4"},o.a.createElement("nav",null,o.a.createElement("a",{href:"#/apps/email/compose",className:"btn btn-danger btn-block"},"New Email"),o.a.createElement(s.W,null,o.a.createElement(s.X,null,o.a.createElement(s.Y,{href:"#/apps/email/inbox"},o.a.createElement("i",{className:"fa fa-inbox"})," Inbox ",o.a.createElement(s.b,{color:"danger"},"4"))),o.a.createElement(s.X,null,o.a.createElement(s.Y,{href:"#"},o.a.createElement("i",{className:"fa fa-star"})," Stared")),o.a.createElement(s.X,null,o.a.createElement(s.Y,{href:"#"},o.a.createElement("i",{className:"fa fa-rocket"})," Sent")),o.a.createElement(s.X,null,o.a.createElement(s.Y,{href:"#"},o.a.createElement("i",{className:"fa fa-trash-o"})," Trash")),o.a.createElement(s.X,null,o.a.createElement(s.Y,{href:"#"},o.a.createElement("i",{className:"fa fa-bookmark"})," Important",o.a.createElement(s.b,{color:"info"},"5"))),o.a.createElement(s.X,null,o.a.createElement(s.Y,{href:"#"},o.a.createElement("i",{className:"fa fa-exclamation-circle"})," Spam ",o.a.createElement(s.b,{color:"danger"},"4"))))),o.a.createElement("main",{className:"message"},o.a.createElement("div",{className:"toolbar"},o.a.createElement(s.g,{className:"mr-1"},o.a.createElement(s.e,{color:"light"},o.a.createElement("span",{className:"fa fa-star"})),o.a.createElement(s.e,{color:"light"},o.a.createElement("span",{className:"fa fa-star-o"})),o.a.createElement(s.e,{color:"light"},o.a.createElement("span",{className:"fa fa-bookmark-o"}))),o.a.createElement(s.g,{className:"mr-1"},o.a.createElement(s.e,{color:"light"},o.a.createElement("span",{className:"fa fa-mail-reply"})),o.a.createElement(s.e,{color:"light"},o.a.createElement("span",{className:"fa fa-mail-reply-all"})),o.a.createElement(s.e,{color:"light"},o.a.createElement("span",{className:"fa fa-mail-forward"}))),o.a.createElement(s.e,{color:"light",className:"mr-1"},o.a.createElement("span",{className:"fa fa-trash-o"})),o.a.createElement(s.f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},o.a.createElement(s.B,{caret:!0,color:"light"},o.a.createElement("span",{className:"fa fa-tags"})),o.a.createElement(s.A,null,o.a.createElement(s.z,null,"add label",o.a.createElement(s.b,{color:"danger"},"Home")),o.a.createElement(s.z,null,"add label",o.a.createElement(s.b,{color:"info"},"Job")),o.a.createElement(s.z,null,"add label",o.a.createElement(s.b,{color:"success"},"Clients")),o.a.createElement(s.z,null,"add label",o.a.createElement(s.b,{color:"warning"},"News"))))),o.a.createElement("div",{className:"details"},o.a.createElement("div",{className:"title"},"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."),o.a.createElement("div",{className:"header"},o.a.createElement("img",{className:"avatar",src:"assets/img/avatars/7.jpg",alt:"avatar"}),o.a.createElement("div",{className:"from"},o.a.createElement("span",null,"Lukasz Holeczek"),"lukasz@bootstrapmaster.com"),o.a.createElement("div",{className:"date"},"Today, ",o.a.createElement("b",null,"3:47 PM"))),o.a.createElement("div",{className:"content"},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),o.a.createElement("blockquote",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),o.a.createElement("div",{className:"attachments"},o.a.createElement("div",{className:"attachment"},o.a.createElement(s.b,{color:"danger"},"zip")," ",o.a.createElement("b",null,"bootstrap.zip")," ",o.a.createElement("i",null,"(2,5MB)"),o.a.createElement("span",{className:"menu"},o.a.createElement("a",{href:"#",className:"fa fa-search"},null),o.a.createElement("a",{href:"#",className:"fa fa-share"},null),o.a.createElement("a",{href:"#",className:"fa fa-cloud-download"},null))),o.a.createElement("div",{className:"attachment"},o.a.createElement(s.b,{color:"info"},"txt")," ",o.a.createElement("b",null,"readme.txt")," ",o.a.createElement("i",null,"(7KB)"),o.a.createElement("span",{className:"menu"},o.a.createElement("a",{href:"#",className:"fa fa-search"},null),o.a.createElement("a",{href:"#",className:"fa fa-share"},null),o.a.createElement("a",{href:"#",className:"fa fa-cloud-download"},null))),o.a.createElement("div",{className:"attachment"},o.a.createElement(s.b,{color:"success"},"xls")," ",o.a.createElement("b",null,"spreadsheet.xls")," ",o.a.createElement("i",null,"(984KB)"),o.a.createElement("span",{className:"menu"},o.a.createElement("a",{href:"#",className:"fa fa-search"},null),o.a.createElement("a",{href:"#",className:"fa fa-share"},null),o.a.createElement("a",{href:"#",className:"fa fa-cloud-download"},null)))),o.a.createElement("form",{method:"post",action:""},o.a.createElement(s.F,null,o.a.createElement(s.H,{type:"textarea",id:"message",name:"body",rows:"12",placeholder:"Click here to reply"})),o.a.createElement(s.F,null,o.a.createElement(s.e,{type:"submit",color:"success"},"Send message")))))))}}]),a}(c.Component);a.default=i}});
//# sourceMappingURL=46.515bd92c.chunk.js.map