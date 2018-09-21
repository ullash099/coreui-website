(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2362ef5f"],{"11e7":function(r,o,t){"use strict";t.r(o);var e=function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("div",{staticClass:"animated fadeIn"},[t("b-card",{attrs:{"header-tag":"header"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"icon-drop"}),r._v(" Theme colors\n    ")]),t("b-card-body",[t("b-row",[t("color-theme",{attrs:{color:"bg-primary"}},[t("h6",[r._v("Brand Primary Color")])]),t("color-theme",{attrs:{color:"bg-secondary"}},[t("h6",[r._v("Brand Secondary Color")])]),t("color-theme",{attrs:{color:"bg-success"}},[t("h6",[r._v("Brand Success Color")])]),t("color-theme",{attrs:{color:"bg-danger"}},[t("h6",[r._v("Brand Danger Color")])]),t("color-theme",{attrs:{color:"bg-warning"}},[t("h6",[r._v("Brand Warning Color")])]),t("color-theme",{attrs:{color:"bg-info"}},[t("h6",[r._v("Brand Info Color")])]),t("color-theme",{attrs:{color:"bg-light"}},[t("h6",[r._v("Brand Light Color")])]),t("color-theme",{attrs:{color:"bg-dark"}},[t("h6",[r._v("Brand Dark Color")])])],1)],1)],1),t("b-card",{attrs:{"header-tag":"header"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"icon-drop"}),r._v(" Grays\n    ")]),t("b-card-body",[t("b-row",[t("color-theme",{attrs:{color:"bg-gray-100"}},[t("h6",[r._v("Brand 100 Color")])]),t("color-theme",{attrs:{color:"bg-gray-200"}},[t("h6",[r._v("Brand 200 Color")])]),t("color-theme",{attrs:{color:"bg-gray-300"}},[t("h6",[r._v("Brand 300 Color")])]),t("color-theme",{attrs:{color:"bg-gray-400"}},[t("h6",[r._v("Brand 400 Color")])]),t("color-theme",{attrs:{color:"bg-gray-500"}},[t("h6",[r._v("Brand 500 Color")])]),t("color-theme",{attrs:{color:"bg-gray-600"}},[t("h6",[r._v("Brand 600 Color")])]),t("color-theme",{attrs:{color:"bg-gray-700"}},[t("h6",[r._v("Brand 700 Color")])]),t("color-theme",{attrs:{color:"bg-gray-800"}},[t("h6",[r._v("Brand 800 Color")])]),t("color-theme",{attrs:{color:"bg-gray-900"}},[t("h6",[r._v("Brand 900 Color")])])],1)],1)],1),t("b-card",{attrs:{"header-tag":"header"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"icon-drop"}),r._v(" Additional colors\n    ")]),t("b-card-body",[t("b-row",[t("color-theme",{attrs:{color:"bg-blue"}},[t("h6",[r._v("Brand Blue Color")])]),t("color-theme",{attrs:{color:"bg-indigo"}},[t("h6",[r._v("Brand Indigo Color")])]),t("color-theme",{attrs:{color:"bg-purple"}},[t("h6",[r._v("Brand Purple Color")])]),t("color-theme",{attrs:{color:"bg-pink"}},[t("h6",[r._v("Brand Pink Color")])]),t("color-theme",{attrs:{color:"bg-red"}},[t("h6",[r._v("Brand Red Color")])]),t("color-theme",{attrs:{color:"bg-orange"}},[t("h6",[r._v("Brand Orange Color")])]),t("color-theme",{attrs:{color:"bg-yellow"}},[t("h6",[r._v("Brand Yellow Color")])]),t("color-theme",{attrs:{color:"bg-green"}},[t("h6",[r._v("Brand Green Color")])]),t("color-theme",{attrs:{color:"bg-teal"}},[t("h6",[r._v("Brand Teal Color")])]),t("color-theme",{attrs:{color:"bg-cyan"}},[t("h6",[r._v("Brand Cyan Color")])])],1)],1)],1)],1)},a=[],n=function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("b-col",{staticClass:"mb-4",attrs:{xl:"2",md:"4",sm:"6",xs:"12"}},[t("div",{class:[r.classObj,r.color],style:{paddingTop:"75%"}}),r._t("default"),t("color-view")],2)},l=[],s=function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("table",{staticClass:"w-100"},[t("tbody",[t("tr",[t("td",{staticClass:"text-muted"},[r._v("HEX:")]),t("td",{staticClass:"font-weight-bold"},[r._v(r._s(this.hexColor))])]),t("tr",[t("td",{staticClass:"text-muted"},[r._v("RGB:")]),t("td",{staticClass:"font-weight-bold"},[r._v(r._s(this.bgColor))])])])])},c=[],i=t("a73e"),d={name:"ColorView",data:function(){return{bgColor:"rgb(255, 255, 255)"}},computed:{hexColor:function(){return Object(i["rgbToHex"])(this.bgColor)}},methods:{setColor:function(){var r=this.$parent.$el.children[0],o=window.getComputedStyle(r).getPropertyValue("background-color");this.bgColor=o||this.bgColor}},mounted:function(){this.setColor()}},h=d,g=t("2877"),u=Object(g["a"])(h,s,c,!1,null,null,null);u.options.__file="ColorView.vue";var b=u.exports,m={name:"ColorTheme",components:{ColorView:b},props:{classObj:{type:String,default:"theme-color w-75 rounded mb-3"},color:{type:String,default:"bg-secondary"}}},v=m,f=Object(g["a"])(v,n,l,!1,null,null,null);f.options.__file="ColorTheme.vue";var p=f.exports,C={name:"colors",components:{ColorTheme:p}},_=C,w=Object(g["a"])(_,e,a,!1,null,null,null);w.options.__file="Colors.vue";o["default"]=w.exports},a73e:function(r,o,t){
/*!
  * CoreUI Pro v2.0.7 (https://coreui.io/pro/)
  * Copyright 2018 Łukasz Holeczek
  */
(function(r,t){t(o)})(0,function(r){"use strict";var o=function(){for(var r={},o=document.styleSheets,t="",e=o.length-1;e>-1;e--){for(var a=o[e].cssRules,n=a.length-1;n>-1;n--)if(".ie-custom-properties"===a[n].selectorText){t=a[n].cssText;break}if(t)break}return t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}")),t.split(";").forEach(function(o){if(o){var t=o.split(": ")[0],e=o.split(": ")[1];t&&e&&(r["--"+t.trim()]=e.trim())}}),r},t=10,e=function(){return Boolean(document.documentMode)&&document.documentMode>=t},a=function(r){return r.match(/^--.*/i)},n=function(r,t){var n;if(void 0===t&&(t=document.body),a(r)&&e()){var l=o();n=l[r]}else n=window.getComputedStyle(t,null).getPropertyValue(r).replace(/^\s/,"");return n},l=function(r){if("undefined"===typeof r)throw new Error("Hex color is not defined");var o,t,e,a=r.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!a)throw new Error(r+" is not a valid hex color");return 7===r.length?(o=parseInt(r.substring(1,3),16),t=parseInt(r.substring(3,5),16),e=parseInt(r.substring(5,7),16)):(o=parseInt(r.substring(1,2),16),t=parseInt(r.substring(2,3),16),e=parseInt(r.substring(3,5),16)),"rgba("+o+", "+t+", "+e+")"},s=function(r,o){if(void 0===o&&(o=100),"undefined"===typeof r)throw new Error("Hex color is not defined");var t,e,a,n=r.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!n)throw new Error(r+" is not a valid hex color");return 7===r.length?(t=parseInt(r.substring(1,3),16),e=parseInt(r.substring(3,5),16),a=parseInt(r.substring(5,7),16)):(t=parseInt(r.substring(1,2),16),e=parseInt(r.substring(2,3),16),a=parseInt(r.substring(3,5),16)),"rgba("+t+", "+e+", "+a+", "+o/100+")"},c=function(r){if("undefined"===typeof r)throw new Error("Hex color is not defined");var o=r.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!o)throw new Error(r+" is not a valid rgb color");var t="0"+parseInt(o[1],10).toString(16),e="0"+parseInt(o[2],10).toString(16),a="0"+parseInt(o[3],10).toString(16);return"#"+t.slice(-2)+e.slice(-2)+a.slice(-2)};r.getStyle=n,r.hexToRgb=l,r.hexToRgba=s,r.rgbToHex=c,Object.defineProperty(r,"__esModule",{value:!0})})}}]);
//# sourceMappingURL=chunk-2362ef5f.db77b117.js.map