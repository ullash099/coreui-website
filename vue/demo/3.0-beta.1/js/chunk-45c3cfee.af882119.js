(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45c3cfee"],{9962:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("CRow",[s("CCol",{attrs:{sm:"12"}},[s("CCard",[s("CCardHeader",[s("CIcon",{attrs:{name:"cil-grid"}}),e._v(" Advanced "),s("CLink",{attrs:{href:"https://coreui.io/vue/docs/components/table",target:"blank"}},[e._v(" CDataTable ")]),e._v(" application ")],1),s("CCardBody",[s("CDataTable",{attrs:{items:e.usersData,fields:e.fields,"column-filter":"","table-filter":"","items-per-page-select":"","items-per-page":5,hover:"",sorter:"",pagination:""},scopedSlots:e._u([{key:"status",fn:function(t){var r=t.item;return[s("td",[s("CBadge",{attrs:{color:e.getBadge(r.status)}},[e._v(" "+e._s(r.status)+" ")])],1)]}},{key:"show_details",fn:function(t){t.item;var r=t.index;return[s("td",{staticClass:"py-2"},[s("CButton",{attrs:{color:"primary",variant:"outline",square:"",size:"sm"},on:{click:function(t){return e.toggleDetails(r)}}},[e._v(" "+e._s(e.details.includes(r)?"Hide":"Show")+" ")])],1)]}},{key:"details",fn:function(t){var r=t.item,a=t.index;return[s("CCollapse",{attrs:{show:e.details.includes(a)}},[s("CCardBody",[e._v(" "+e._s(a+1)+" - "+e._s(r)+" ")])],1)]}}])})],1)],1)],1)],1)},a=[],i=s("bd76"),n=[{key:"username",_style:"width:40%"},"registered",{key:"role",_style:"width:20%;"},{key:"status",_style:"width:20%;"},{key:"show_details",label:"",_style:"width:1%",sorter:!1,filter:!1}],u={name:"AdvancedTables",data:function(){return{usersData:i["a"],fields:n,details:[]}},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},toggleDetails:function(e){var t=this.details.indexOf(e);-1!==t?this.details.splice(t,1):this.details.push(e)}}},d=u,l=s("2877"),o=Object(l["a"])(d,r,a,!1,null,null,null);t["default"]=o.exports},bd76:function(e,t,s){"use strict";var r=[{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned",_classes:"table-success"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active",_classes:"table-success"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive",_classes:"table-danger"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}];t["a"]=r}}]);
//# sourceMappingURL=chunk-45c3cfee.af882119.js.map