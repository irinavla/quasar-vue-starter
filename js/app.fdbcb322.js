(function(t){function a(a){for(var e,o,r=a[0],n=a[1],c=a[2],u=0,p=[];u<r.length;u++)o=r[u],i[o]&&p.push(i[o][0]),i[o]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);d&&d(a);while(p.length)p.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var t,a=0;a<l.length;a++){for(var s=l[a],e=!0,r=1;r<s.length;r++){var n=s[r];0!==i[n]&&(e=!1)}e&&(l.splice(a--,1),t=o(o.s=s[0]))}return t}var e={},i={app:0},l=[];function o(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,a,s){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)o.d(s,e,function(a){return t[a]}.bind(null,e));return s},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/quasar-vue-starter/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=n;l.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("64a9"),i=s.n(e);i.a},"248a":function(t,a,s){t.exports=s.p+"img/mountains.e8bb0326.jpg"},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{id:"q-app",view:"lHh Lpr lFf"}},[e("q-layout-header",{staticClass:"layout-header"},[e("q-toolbar",{staticClass:"toolbar bg-primary"},[e("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(a){t.leftDrawerOpen=!t.leftDrawerOpen}}}),e("q-item",{staticClass:"logo"},[e("img",{attrs:{alt:"Quasar logo",src:s("cf05")}})])],1)],1),e("q-layout-drawer",{attrs:{"content-class":"mat"===t.$q.theme?"bg-grey-2":null},model:{value:t.leftDrawerOpen,callback:function(a){t.leftDrawerOpen=a},expression:"leftDrawerOpen"}},[e("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[e("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[e("q-item",{staticClass:"sidemenu-link"},[t._v("Link 1")]),e("q-item",{staticClass:"sidemenu-link"},[t._v("Link 2")]),e("q-item",{staticClass:"sidemenu-link"},[t._v("Link 3")]),e("q-item",{staticClass:"sidemenu-link",nativeOn:{click:function(a){return t.openURL("http://quasar-framework.org")}}},[t._v("External Link")])],1)],1)],1),e("q-page-container",[e("HelloWorld")],1)],1)},l=[],o=s("e083"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"row justify-center q-pa-md gutter-md"},[e("div",{staticClass:"col-xs-12 section"},[e("div",{staticClass:"q-display-1"},[t._v("Typography")]),e("hr"),e("h1",[t._v("Light 112sp")]),e("div",{staticClass:"q-display-4"},[t._v("Light 112sp")]),e("h2",[t._v("Regular 56sp")]),e("div",{staticClass:"q-display-3"},[t._v("Regular 56sp")]),e("h3",[t._v("Regular 45sp")]),e("div",{staticClass:"q-display-2"},[t._v("Regular 45sp")]),e("h4",[t._v("Regular 34sp")]),e("div",{staticClass:"q-display-1"},[t._v("Regular 34sp")]),e("h5",[t._v("Regular 24sp")]),e("div",{staticClass:"q-headline"},[t._v("Regular 24sp")]),e("h6",[t._v("Medium 20sp")]),e("div",{staticClass:"q-title"},[t._v("Medium 20sp")]),e("div",{staticClass:"q-subheading"},[t._v("Regular 16sp")]),e("div",{staticClass:"q-body-2"},[t._v("Medium 14sp")]),e("div",{staticClass:"q-body-1"},[t._v("Regular 14sp")]),e("div",{staticClass:"q-caption"},[t._v("Regular 12sp")])]),e("div",{staticClass:"col-xs-12 section"},[e("div",{staticClass:"q-display-1"},[t._v("Buttons")]),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-xs-12"},[e("div",[e("p",{staticClass:"caption"},[t._v("Standard Button")]),e("q-btn",{attrs:{color:"primary",label:"Primary"}}),e("q-btn",{attrs:{color:"secondary",label:"Secondary"}})],1),e("div",[e("p",{staticClass:"caption"},[t._v("Custom Color Examples")]),e("q-btn",{staticStyle:{background:"#FF0080",color:"white"},attrs:{label:"Fuchsia"}}),e("q-btn",{staticStyle:{color:"#FF0080"},attrs:{flat:"",label:"Fuchsia Flat"}}),e("q-btn",{staticStyle:{color:"goldenrod"},attrs:{outline:"",label:"Goldenrod"}})],1),e("div",[e("p",{staticClass:"caption"},[t._v("Button with icons")]),e("q-btn",{attrs:{color:"primary",icon:"mail",label:"On Left"}}),e("q-btn",{attrs:{color:"secondary","icon-right":"mail",label:"On Right"}}),e("q-btn",{attrs:{color:"red",icon:"mail","icon-right":"send",label:"On Left and Right"}})],1),e("div",[e("p",{staticClass:"caption"},[t._v("Button with custom text color")]),e("q-btn",{attrs:{color:"amber","text-color":"purple",icon:"camera_enhance",label:"Purple text"}})],1),e("div",[e("p",{staticClass:"caption"},[t._v("Round Button")]),e("q-btn",{attrs:{round:"",color:"primary",icon:"shopping_cart"}}),e("q-btn",{attrs:{round:"",color:"secondary",icon:"navigation"}})],1),e("div",[e("p",{staticClass:"caption"},[t._v("Custom sizes")]),e("q-btn",{attrs:{color:"primary",size:"xs",icon:"navigation",label:"button size"}}),e("q-btn",{attrs:{color:"secondary",size:"md",icon:"navigation",label:"button size"}}),e("q-btn",{attrs:{color:"secondary",size:"1.5rem",icon:"navigation",label:"button size"}})],1)]),e("div",{staticClass:"col-md-6 col-xs-12"},[e("div",[e("p",{staticClass:"caption"},[t._v("Flat button")]),e("q-btn",{attrs:{flat:"",color:"primary",label:"Flat"}}),e("q-btn",{attrs:{flat:"",rounded:"",color:"primary",label:"Flat Rounded"}}),e("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"card_giftcard"}})],1),e("div",[e("p",{staticClass:"caption"},[t._v("Outline buttons")]),e("q-btn",{attrs:{outline:"",color:"primary",label:"Outline"}}),e("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"Outline Rounded"}}),e("q-btn",{attrs:{outline:"",round:"",color:"primary",icon:"card_giftcard"}})],1),e("div",[e("p",{staticClass:"caption"},[t._v("Push button")]),e("q-btn",{attrs:{push:"",color:"primary",label:"Push"}}),e("q-btn",{attrs:{push:"",rounded:"",color:"primary",label:"Push Rounded"}}),e("q-btn",{attrs:{push:"",round:"",color:"primary",icon:"card_giftcard"}})],1),e("div",[e("p",{staticClass:"caption"},[t._v("Block button")]),e("q-btn",{staticClass:"block",attrs:{color:"primary",icon:"alarm",label:"Block"}}),e("q-btn",{staticClass:"block",attrs:{color:"secondary",label:"Block"}})],1),e("div",[e("p",{staticClass:"caption"},[t._v("Full width button (or use flex classes on parent)")]),e("q-btn",{staticClass:"full-width q-mb-sm",attrs:{color:"primary",label:"Full-width"}}),e("q-btn",{staticClass:"full-width",attrs:{color:"secondary",label:"Full-width"}})],1)])])]),e("div",{staticClass:"col-xs-12 section"},[e("div",{staticClass:"q-display-1"},[t._v("Navigation")]),e("hr"),e("p",{staticClass:"caption"},[t._v("Basic toolbar")]),e("q-toolbar",{staticClass:"q-mb-md",attrs:{color:"secondary"}},[e("q-toolbar-title",[t._v("Toolbar title")]),e("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"}})],1),e("p",{staticClass:"caption"},[t._v("Tab Panes below (shadow, animated, swipeable)")]),e("q-tabs",{staticClass:"shadow-1 q-mb-md",attrs:{animated:"",swipeable:"",color:"primary",align:"center"}},[e("q-tab",{attrs:{slot:"title",default:"",name:"mails",icon:"mail",label:"Mails"},slot:"title"}),e("q-tab",{attrs:{slot:"title",name:"alarms",icon:"alarm",label:"Alarms"},slot:"title"}),e("q-tab",{attrs:{slot:"title",name:"movies",icon:"movie",label:"Movies"},slot:"title"}),e("q-tab-pane",{attrs:{name:"mails"}},[t._v("Emails tab")]),e("q-tab-pane",{attrs:{name:"alarms"}},[t._v("Alarms tab")]),e("q-tab-pane",{attrs:{name:"movies"}},[t._v("Movies tab")])],1),e("p",{staticClass:"caption"},[t._v("Tab Panes below (inverted)")]),e("q-tabs",{staticClass:"q-mb-md",attrs:{animated:"",swipeable:"",inverted:"",color:"secondary",align:"justify"}},[e("q-tab",{attrs:{slot:"title",default:"",name:"mails",icon:"mail",label:"Mails"},slot:"title"}),e("q-tab",{attrs:{slot:"title",name:"alarms",icon:"alarm",label:"Alarms"},slot:"title"}),e("q-tab",{attrs:{slot:"title",name:"movies",icon:"movie",label:"Movies"},slot:"title"}),e("q-tab-pane",{attrs:{name:"mails"}},[t._v("Emails tab")]),e("q-tab-pane",{attrs:{name:"alarms"}},[t._v("Alarms tab")]),e("q-tab-pane",{attrs:{name:"movies"}},[t._v("Movies tab")])],1)],1),e("div",{staticClass:"col-xs-12 section"},[e("div",{staticClass:"q-display-1"},[t._v("Cards")]),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[e("q-card",[e("q-card-title",[t._v("Card Title")]),e("q-card-separator"),e("q-card-main",[t._v("Card Content")])],1)],1),e("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[e("q-card",{attrs:{color:"secondary",dark:""}},[e("q-card-title",[t._v("\n            Title\n            "),e("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Subtitle")]),e("q-icon",{attrs:{slot:"right",name:"alarm"},slot:"right"})],1),e("q-card-main",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nemo odio quos provident non error eveniet velit autem quasi explicabo.")]),e("q-card-separator"),e("q-card-actions",[e("q-btn",{attrs:{flat:""}},[t._v("Action 1")]),e("q-btn",{attrs:{flat:""}},[t._v("Action 2")])],1)],1)],1),e("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[e("q-card",[e("q-card-media",[e("img",{attrs:{src:s("248a")}})]),e("q-card-title",[t._v("\n            Title\n            "),e("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Subtitle")])]),e("q-card-main",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde est magni obcaecati nulla deserunt.")]),e("q-card-separator",{attrs:{inset:""}}),e("q-card-actions",[e("q-btn",{attrs:{flat:""}},[t._v("Action 1")]),e("q-btn",{attrs:{flat:""}},[t._v("Action 2")])],1)],1)],1),e("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[e("q-card",[e("q-card-title",[t._v("List in card")]),e("q-card-separator"),e("q-list",[e("q-item",[e("q-item-side",[e("q-item-tile",{attrs:{color:"primary",icon:"local bar"}})],1),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v("Bar XYZ")]),e("q-item-tile",{attrs:{sublabel:""}},[t._v("Have a drink.")])],1)],1),e("q-item",[e("q-item-side",[e("q-item-tile",{attrs:{color:"red",icon:"local gas station"}})],1),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v("Gas Station")]),e("q-item-tile",{attrs:{sublabel:""}},[t._v("Fill your gas tank.")])],1)],1),e("q-item",[e("q-item-side",[e("q-item-tile",{attrs:{color:"amber",icon:"local movies"}})],1),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v("Cinema XYZ")]),e("q-item-tile",{attrs:{sublabel:""}},[t._v("Watch a movie.")])],1)],1),e("q-collapsible",{attrs:{icon:"explore",label:"First"}},[e("div",[t._v("Lorem ipsum dolor sit amet...")])]),e("q-collapsible",{attrs:{icon:"perm_identity",label:"Second"}},[e("div",[t._v("Lorem ipsum dolor sit amet...")])])],1)],1)],1)])]),e("div",{staticClass:"col-xs-12 section"},[e("div",{staticClass:"q-display-1"},[t._v("Collapsible (Accordion)")]),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[e("p",{staticClass:"caption"},[t._v("Basic collapsible item")]),e("q-collapsible",{attrs:{icon:"explore",label:"Explore"}},[e("div",[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores impedit, distinctio quo nisi animi expedita!")])])],1),e("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[e("p",{staticClass:"caption"},[t._v("Basic collapsible item")]),e("q-list",{attrs:{separator:""}},[e("q-collapsible",{attrs:{avatar:"../assets/boy-avatar.png",label:"With avatar"}},[e("div",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, impedit.")])]),e("q-collapsible",{attrs:{icon:"drafts",label:"Disabled",disable:""}},[e("div",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consequuntur.")])]),e("q-collapsible",{attrs:{letter:"J","right-avatar":"../assets/boy-avatar.png",label:"Jim"}},[e("div",[t._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quas?")])])],1)],1),e("div",{staticClass:"col-md-4 col-xs-12 q-pa-sm"},[e("p",{staticClass:"caption"},[t._v("Group a.k.a Accordion (opening one closes the other)")]),e("q-list",[e("q-collapsible",{attrs:{group:"somegroup",icon:"explore",label:"First",opened:""}},[e("div",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ea!")])]),e("q-collapsible",{attrs:{group:"somegroup",icon:"perm_identity",label:"Second","header-class":"text-red"}},[e("div",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, earum!")])]),e("q-collapsible",{attrs:{group:"somegroup",icon:"shopping_cart",label:"Third"}},[e("div",[t._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, enim.")])])],1)],1)])])])},n=[],c={name:"HelloWorld"},d=c,u=s("2877"),p=Object(u["a"])(d,r,n,!1,null,null,null),m=p.exports,b={name:"LayoutDefault",components:{HelloWorld:m},data:function(){return{leftDrawerOpen:!1}},methods:{openURL:o["b"]}},v=b,f=(s("034f"),Object(u["a"])(v,i,l,!1,null,null,null)),q=f.exports;s("a4ac"),s("4a91"),s("2826"),s("7e57");e["a"].use(o["a"],{config:{}}),e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(q)}}).$mount("#app")},"64a9":function(t,a,s){},"97cb":function(t,a,s){var e={"./bounce.css":"3d49","./bounceIn.css":"0a58","./bounceInDown.css":"a4a9","./bounceInLeft.css":"5965","./bounceInRight.css":"da80","./bounceInUp.css":"b60e","./bounceOut.css":"f39d","./bounceOutDown.css":"a9b5","./bounceOutLeft.css":"06dd","./bounceOutRight.css":"66bc","./bounceOutUp.css":"908f","./fadeIn.css":"1070","./fadeInDown.css":"1625","./fadeInDownBig.css":"9338","./fadeInLeft.css":"0c2e","./fadeInLeftBig.css":"f357","./fadeInRight.css":"ef8f","./fadeInRightBig.css":"747a","./fadeInUp.css":"e7fb","./fadeInUpBig.css":"b8af","./fadeOut.css":"25cd","./fadeOutDown.css":"93ea","./fadeOutDownBig.css":"c888","./fadeOutLeft.css":"5f1d","./fadeOutLeftBig.css":"a555","./fadeOutRight.css":"8934","./fadeOutRightBig.css":"9438","./fadeOutUp.css":"351b","./fadeOutUpBig.css":"23a5","./flash.css":"58a5","./flip.css":"bda0","./flipInX.css":"58b8","./flipInY.css":"5902","./flipOutX.css":"72c5","./flipOutY.css":"b8ad","./headShake.css":"2289","./hinge.css":"085e","./jello.css":"8014","./lightSpeedIn.css":"eb7d","./lightSpeedOut.css":"d043","./pulse.css":"ab98","./rollIn.css":"dc73","./rollOut.css":"592c","./rotateIn.css":"487d","./rotateInDownLeft.css":"bf6b","./rotateInDownRight.css":"7b96","./rotateInUpLeft.css":"89f8","./rotateInUpRight.css":"cb8c","./rotateOut.css":"de65","./rotateOutDownLeft.css":"8134","./rotateOutDownRight.css":"1ea7","./rotateOutUpLeft.css":"63d1","./rotateOutUpRight.css":"fcc3","./rubberBand.css":"aab2","./shake.css":"15f1","./slideInDown.css":"79ea","./slideInLeft.css":"a963","./slideInRight.css":"3b76","./slideInUp.css":"21e3","./slideOutDown.css":"abed","./slideOutLeft.css":"f857","./slideOutRight.css":"0a43","./slideOutUp.css":"5706","./swing.css":"b968","./tada.css":"3391","./wobble.css":"ed5b","./zoomIn.css":"38f3","./zoomInDown.css":"2577","./zoomInLeft.css":"1992","./zoomInRight.css":"ef68","./zoomInUp.css":"97a1","./zoomOut.css":"cc15","./zoomOutDown.css":"2ac6","./zoomOutLeft.css":"1fd4","./zoomOutRight.css":"fa2f","./zoomOutUp.css":"91e5"};function i(t){var a=l(t);return s(a)}function l(t){var a=e[t];if(!(a+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a}i.keys=function(){return Object.keys(e)},i.resolve=l,t.exports=i,i.id="97cb"},a4ac:function(t,a,s){},cf05:function(t,a,s){t.exports=s.p+"img/logo.8c4120b4.png"}});
//# sourceMappingURL=app.fdbcb322.js.map