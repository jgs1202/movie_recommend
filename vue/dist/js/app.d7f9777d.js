(function(t){function e(e){for(var a,s,c=e[0],i=e[1],l=e[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"13ec":function(t,e,n){"use strict";var a=n("96c6"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",[n("HeadBar"),n("v-content",[n(t.currentPage,{tag:"component"})],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"HeadBar"}},[n("v-app-bar",{attrs:{app:"",dense:"",color:"primary",dark:""}},[n("v-btn",{attrs:{text:"",height:"100%",color:"white"},on:{click:t.toTop}},[t._v(" てけとー映画診断 ")]),n("v-spacer")],1)],1)},c=[],i={name:"HeadBar",data:function(){return{}},methods:{toTop:function(){var t=this;t.$parent.$parent.currentPage="Top"}}},l=i,u=n("2877"),f=n("6544"),d=n.n(f),v=n("40dc"),p=n("8336"),m=n("2fa4"),h=Object(u["a"])(l,s,c,!1,null,null,null),g=h.exports;d()(h,{VAppBar:v["a"],VBtn:p["a"],VSpacer:m["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},_=[],x={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},y=x,w=n("62ad"),C=n("a523"),S=n("adda"),$=n("0fd9"),j=Object(u["a"])(y,b,_,!1,null,null,null),V=j.exports;d()(j,{VCol:w["a"],VContainer:C["a"],VImg:S["a"],VRow:$["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"SendSentence"}},[n("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[n("v-col",{attrs:{aligin:"center",cols:"9"}},[n("v-card",[n("v-card-text",[t._v(" "+t._s(t.sentence)+" ")])],1)],1)],1),n("v-row",{staticClass:"text-center"},[n("v-col",[n("v-btn",{staticClass:"ma-2",attrs:{color:"success",loading:t.loading},on:{click:t.sendData}},[t._v("確定")])],1),n("v-col",[n("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:t.backToChars}},[t._v("やり直す")])],1)],1)],1)},P=[],T=(n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d"),n("1157")),O=n.n(T),E={name:"SendSentence",data:function(){return{sentence:null,loading:!1}},mounted:function(){var t=this;console.log("send sentence"),t.sentence=t.$parent.$parent.$parent.completeSentence},methods:{sendData:function(){var t=this;t.loading=!0;var e=new URLSearchParams;e.set("sentence",this.sentence);var n="http://140.227.124.201/uwsgi/data/".concat(e.toString());O.a.ajax({url:n,type:"GET",timeout:1e4}).done((function(e){t.loading=!1,console.log(e),t.$parent.$parent.$parent.recommends=e.data,t.$parent.$parent.$parent.currentPage="Result"})).fail((function(t,e,n){console.log("error!"),console.log(t),console.log(e),console.log(n)}))},backToChars:function(){var t=this;t.$parent.$parent.$parent.currentPage="Drafting"},backToSenteces:function(){}}},R=E,B=(n("13ec"),n("b0af")),D=n("99d9"),q=Object(u["a"])(R,k,P,!1,null,null,null),A=q.exports;d()(q,{VBtn:p["a"],VCard:B["a"],VCardText:D["a"],VCol:w["a"],VRow:$["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-img",{attrs:{src:"http://drive.google.com/uc?export=view&id=1aYihPqyZrFiCA6-TlxVV1arqBch39-KX"}})],1),n("v-col",{attrs:{cols:"10"}},[n("div",[t._v("あなたがてけとーに作成した文章に類似したAmazon Prime Videoの映画をてけとーにお勧めするよ！")]),n("br"),n("v-btn",{attrs:{large:"",color:"primary"},on:{click:function(e){return t.transPage("Drafting")}}},[t._v("診断開始！")])],1)],1)},M=[],H={name:"Top",data:function(){return{sentence:null}},mounted:function(){console.log("asi")},methods:{transPage:function(t){var e=this;e.$parent.$parent.$parent.currentPage=t}}},L=H,I=Object(u["a"])(L,F,M,!1,null,null,null),W=I.exports;d()(I,{VBtn:p["a"],VCol:w["a"],VImg:S["a"],VRow:$["a"]});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.movies,(function(t){return n("MovieCard",{key:t.id,attrs:{title:t.title,abstract:t.abstract,imgSrc:t.img_src,url:t.url}})})),1)},J=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto",on:{click:function(e){return t.newTab(t.url)}}},[n("v-container",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-img",{attrs:{width:"20rem",height:"15rem",src:t.imgSrc}})],1),n("v-col",{attrs:{cols:"8","max-width":"50%"}},[n("v-card-title",[t._v(t._s(t.title))]),n("v-card-text",{staticClass:"text--primary"},[n("div",[t._v(t._s(t.abstract))])])],1)],1)],1)],1)],1)},U=[],z={name:"MovieCard",props:["title","imgSrc","abstract","url"],data:function(){return{}},mounted:function(){},methods:{newTab:function(t){window.open(t,"_blank")}}},K=z,Q=Object(u["a"])(K,N,U,!1,null,null,null),X=Q.exports;d()(Q,{VCard:B["a"],VCardText:D["a"],VCardTitle:D["b"],VCol:w["a"],VContainer:C["a"],VImg:S["a"],VRow:$["a"]});var Y={name:"Result",components:{MovieCard:X},data:function(){return{sentence:null,movies:[]}},mounted:function(){var t=this;t.movies=t.$parent.$parent.$parent.recommends},methods:{transPage:function(t){var e=this;e.$parent.$parent.$parent.currentPage=t}}},Z=Y,tt=Object(u["a"])(Z,G,J,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.flagShowForm?n("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8"}},[n("v-form",{ref:"form"},[n("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[n("v-col",[t._v("登場人物を設定してね")])],1),n("v-text-field",{attrs:{label:"主人公",required:""},model:{value:t.hero,callback:function(e){t.hero=e},expression:"hero"}}),n("v-text-field",{attrs:{label:"登場人物A",required:""},model:{value:t.friend_a,callback:function(e){t.friend_a=e},expression:"friend_a"}}),n("v-text-field",{attrs:{label:"登場人物B",required:""},model:{value:t.friend_b,callback:function(e){t.friend_b=e},expression:"friend_b"}}),n("v-btn",{staticClass:"mr-4",attrs:{color:"primary",loading:t.loading},on:{click:t.define}},[t._v("決定")])],1)],1)],1):t._e(),t.flagShowSelection?n("v-container",[n("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[n("v-col",[t._v("文章を選択してね")])],1),n("v-row",[n("v-col",{attrs:{cols:"6",justify:"center"}},[n("v-card",{staticClass:"mx-auto",on:{click:function(e){return t.selectSentence(t.sentences[0])}}},[n("v-card-text",{staticClass:"text--primary"},[t._v(t._s(t.sentences[0]))])],1)],1),n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"mx-auto",on:{click:function(e){return t.selectSentence(t.sentences[1])}}},[n("v-card-text",{staticClass:"text--primary"},[t._v(t._s(t.sentences[1]))])],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"6",justify:"center"}},[n("v-card",{staticClass:"mx-auto",on:{click:function(e){return t.selectSentence(t.sentences[2])}}},[n("v-card-text",{staticClass:"text--primary"},[t._v(t._s(t.sentences[2]))])],1)],1),n("v-col",{attrs:{cols:"6"}},[n("v-card",{staticClass:"mx-auto",on:{click:function(e){return t.selectSentence(t.sentences[3])}}},[n("v-card-text",{staticClass:"text--primary"},[t._v(t._s(t.sentences[3]))])],1)],1)],1)],1):t._e()],1)},at=[],rt={name:"Drafting",data:function(){return{sentences:[0,1,2,3],sentence0:0,hero:"",friend_a:"",friend_b:"",flagShowForm:!0,flagShowSelection:!1,flagShowComplete:!1,stage:0,loading:!1,draftData:null,complete:""}},mounted:function(){},methods:{transPage:function(t){var e=this;e.$parent.$parent.$parent.currentPage=t},define:function(){var t=this;t.loading=!0,""==t.hero&&(t.hero="主人公"),""==t.friend_a&&(t.friend_a="太郎さん"),""==t.friend_b&&(t.friend_b="桃子さん"),t.sendRequest()},updateSelection:function(){for(var t=this,e=0;e<4;++e)t.$set(t.sentences,e,t.draftData[t.stage][e].sentence);t.stage+=1},sendRequest:function(){var t=this,e=new URLSearchParams;e.set("hero",t.hero),e.set("friend_a",t.friend_a),e.set("friend_b",t.friend_b);var n="http://140.227.124.201/uwsgi/draft/".concat(e.toString());O.a.ajax({url:n,type:"GET",timeout:1e4}).done((function(e){t.loading=!1,t.draftData=e.data,t.loading=!1,t.flagShowForm=!1,t.flagShowSelection=!0,t.updateSelection()})).fail((function(t,e,n){console.log("error!"),console.log(t),console.log(e),console.log(n)}))},selectSentence:function(t){var e=this;e.complete+=""+t,e.stage<4?e.updateSelection():(console.log(e.complete),e.showComplete())},showComplete:function(){var t=this;t.flagShowSelection=!1,t.$parent.$parent.$parent.completeSentence=t.complete,t.$parent.$parent.$parent.currentPage="sendSentence"}}},ot=rt,st=n("4bd4"),ct=n("8654"),it=Object(u["a"])(ot,nt,at,!1,null,null,null),lt=it.exports;d()(it,{VBtn:p["a"],VCard:B["a"],VCardText:D["a"],VCol:w["a"],VContainer:C["a"],VForm:st["a"],VRow:$["a"],VTextField:ct["a"]});var ut={name:"App",components:{HeadBar:g,SendSentence:A,Top:W,HelloWorld:V,Result:et,Drafting:lt},data:function(){return{currentPage:"Top",active:!0,recommends:null,completeSentence:""}},mounted:function(){var t=this;console.log(t.currentPage)},methods:{transPage:function(t){var e=this;e.currentPage=t}}},ft=ut,dt=n("7496"),vt=n("a75b"),pt=Object(u["a"])(ft,r,o,!1,null,null,null),mt=pt.exports;d()(pt,{VApp:dt["a"],VContainer:C["a"],VContent:vt["a"]});var ht=n("f309");a["a"].use(ht["a"]);var gt=new ht["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:gt,render:function(t){return t(mt)}}).$mount("#app")},"96c6":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.d7f9777d.js.map