webpackJsonp([40],{268:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),c=n.n(o),i=n(6),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggle=n.toggle.bind(n),n.state={dropdownOpen:new Array(6).fill(!1)},n}return r(t,e),m(t,[{key:"toggle",value:function(e){var t=this.state.dropdownOpen.map(function(t,n){return n===e&&!t});this.setState({dropdownOpen:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(i._8,null,c.a.createElement(i.u,{xs:"12"},c.a.createElement(i.i,null,c.a.createElement(i.n,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Dropdowns"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("a",{href:"https://reactstrap.github.io/components/dropdowns/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},c.a.createElement("small",{className:"text-muted"},"docs")))),c.a.createElement(i.j,null,c.a.createElement(i.y,{isOpen:this.state.dropdownOpen[0],toggle:function(){e.toggle(0)}},c.a.createElement(i.B,{caret:!0},"Dropdown"),c.a.createElement(i.A,null,c.a.createElement(i.z,{header:!0},"Header"),c.a.createElement(i.z,{disabled:!0},"Action"),c.a.createElement(i.z,null,"Another Action"),c.a.createElement(i.z,{divider:!0}),c.a.createElement(i.z,null,"Another Action"))))),c.a.createElement(i.i,null,c.a.createElement(i.n,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Dropdowns"),c.a.createElement("small",null," alignment")),c.a.createElement(i.j,null,c.a.createElement(i.y,{isOpen:this.state.dropdownOpen[1],toggle:function(){e.toggle(1)}},c.a.createElement(i.B,{caret:!0},"This dropdown's menu is right-aligned"),c.a.createElement(i.A,{right:!0,style:{right:"auto"}},c.a.createElement(i.z,{header:!0},"Header"),c.a.createElement(i.z,{disabled:!0},"Action"),c.a.createElement(i.z,null,"Another Action"),c.a.createElement(i.z,{divider:!0}),c.a.createElement(i.z,null,"Another Action"))))),c.a.createElement(i.i,null,c.a.createElement(i.n,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Dropdowns"),c.a.createElement("small",null," sizing")),c.a.createElement(i.j,null,c.a.createElement(i.y,{isOpen:this.state.dropdownOpen[2],toggle:function(){e.toggle(2)},size:"lg",className:"mb-3"},c.a.createElement(i.B,{caret:!0},"Large Dropdown"),c.a.createElement(i.A,null,c.a.createElement(i.z,{header:!0},"Header"),c.a.createElement(i.z,{disabled:!0},"Action"),c.a.createElement(i.z,null,"Another Action"),c.a.createElement(i.z,{divider:!0}),c.a.createElement(i.z,null,"Another Action"))),c.a.createElement(i.y,{isOpen:this.state.dropdownOpen[3],toggle:function(){e.toggle(3)},className:"mb-3"},c.a.createElement(i.B,{caret:!0},"Normal Dropdown"),c.a.createElement(i.A,null,c.a.createElement(i.z,{header:!0},"Header"),c.a.createElement(i.z,{disabled:!0},"Action"),c.a.createElement(i.z,null,"Another Action"),c.a.createElement(i.z,{divider:!0}),c.a.createElement(i.z,null,"Another Action"))),c.a.createElement(i.y,{isOpen:this.state.dropdownOpen[4],toggle:function(){e.toggle(4)},size:"sm"},c.a.createElement(i.B,{caret:!0},"Small Dropdown"),c.a.createElement(i.A,null,c.a.createElement(i.z,{header:!0},"Header"),c.a.createElement(i.z,{disabled:!0},"Action"),c.a.createElement(i.z,null,"Another Action"),c.a.createElement(i.z,{divider:!0}),c.a.createElement(i.z,null,"Another Action"))))),c.a.createElement(i.i,null,c.a.createElement(i.n,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Custom Dropdowns")),c.a.createElement(i.j,null,c.a.createElement(i.y,{isOpen:this.state.dropdownOpen[5],toggle:function(){e.toggle(5)}},c.a.createElement(i.B,{tag:"span",onClick:function(){e.toggle(5)},"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen[5]},"Custom Dropdown Content ",c.a.createElement("strong",null," * ")),c.a.createElement(i.A,null,c.a.createElement("div",{className:"dropdown-item",onClick:function(){e.toggle(5)}},"Custom dropdown item 1"),c.a.createElement("div",{className:"dropdown-item",onClick:function(){e.toggle(5)}},"Custom dropdown item 2"),c.a.createElement("div",{className:"dropdown-item-text",onClick:function(){e.toggle(5)}},"Custom dropdown text 3"),c.a.createElement("hr",{className:"my-0 dropdown-item-text"}),c.a.createElement("div",{onClick:function(){e.toggle(5)}},"Custom dropdown item 4"))))),c.a.createElement(i.i,null,c.a.createElement(i.n,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Uncontrolled Dropdown")),c.a.createElement(i.j,null,c.a.createElement(i._13,null,c.a.createElement(i.B,{caret:!0},"Uncontrolled Dropdown"),c.a.createElement(i.A,null,c.a.createElement(i.z,{header:!0},"Header"),c.a.createElement(i.z,{disabled:!0},"Action"),c.a.createElement(i.z,null,"Another Action"),c.a.createElement(i.z,{divider:!0}),c.a.createElement(i.z,null,"Another Action"))))))))}}]),t}(o.Component);t.default=s}});
//# sourceMappingURL=40.2a11e391.chunk.js.map