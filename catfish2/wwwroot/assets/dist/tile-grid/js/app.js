(function(e){function t(t){for(var r,a,l=t[0],i=t[1],u=t[2],d=0,b=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0f57":function(e,t,n){"use strict";n("7b80")},"152b":function(e,t,n){},"4ae2":function(e,t,n){"use strict";n("7033")},"515e":function(e,t,n){"use strict";n("152b")},7033:function(e,t,n){},"7b80":function(e,t,n){},a424:function(e,t,n){"use strict";n("c957")},c957:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"row"};function o(e,t,n,o,a,l){var i=Object(r["q"])("KeywordFilter");return Object(r["k"])(),Object(r["e"])("div",c,[Object(r["h"])(i,{keywords:e.keywords,"page-id":e.pageId,"block-id":e.blockId},null,8,["keywords","page-id","block-id"])])}n("b0c0"),n("d3b7"),n("ddb0");Object(r["m"])("data-v-36cb4df4");var a={class:"col-md-3 text-left"},l={key:0},i={key:0,class:"font-weight-bold"},u=["value","onUpdate:modelValue"],s={class:"ml-1"},d={class:"col-md-9 mb-4"},b={key:0},f={key:0},O={key:1},p=Object(r["f"])("option",null,"25",-1),j=Object(r["f"])("option",null,"50",-1),v=Object(r["f"])("option",null,"100",-1),m=[p,j,v],h={key:1};function g(e,t,n,c,o,p){var j,v,g=Object(r["q"])("ItemList");return Object(r["k"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",a,[(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(null===(j=e.keywordQueryModel)||void 0===j?void 0:j.containers,(function(n,c){var o,a;return Object(r["k"])(),Object(r["e"])("div",{key:n},[(null===(o=e.keywordQueryModel)||void 0===o?void 0:o.containers.length)>1&&(null===n||void 0===n||null===(a=n.name)||void 0===a?void 0:a.length)>0?(Object(r["k"])(),Object(r["e"])("div",l,Object(r["r"])(n.name),1)):Object(r["d"])("",!0),(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(n.fields,(function(n,o){return Object(r["k"])(),Object(r["e"])("div",{key:n,class:"mb-3"},[n.name.length>0?(Object(r["k"])(),Object(r["e"])("div",i,Object(r["r"])(n.name),1)):Object(r["d"])("",!0),(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(n.values,(function(n,a){return Object(r["k"])(),Object(r["e"])("div",{key:n},[Object(r["w"])(Object(r["f"])("input",{type:"checkbox",value:n,"onUpdate:modelValue":function(t){return e.keywordQueryModel.containers[c].fields[o].selected[a]=t},onChange:t[0]||(t[0]=function(){return e.runFreshSearch&&e.runFreshSearch.apply(e,arguments)})},null,40,u),[[r["t"],e.keywordQueryModel.containers[c].fields[o].selected[a]]]),Object(r["f"])("label",s,Object(r["r"])(n),1)])})),128))])})),128))])})),128))]),Object(r["f"])("div",d,[(null===(v=e.items)||void 0===v?void 0:v.length)>0?(Object(r["k"])(),Object(r["e"])("div",b,[e.first>1?(Object(r["k"])(),Object(r["e"])("span",f,[Object(r["f"])("i",{class:"fas fa-angle-double-left",onClick:t[1]||(t[1]=function(){return e.previousPage&&e.previousPage.apply(e,arguments)})})])):Object(r["d"])("",!0),Object(r["g"])(" "+Object(r["r"])(e.first)+"-"+Object(r["r"])(e.last)+" of "+Object(r["r"])(e.count)+" ",1),e.count>e.last?(Object(r["k"])(),Object(r["e"])("span",O,[Object(r["f"])("i",{class:"fas fa-angle-double-right",onClick:t[2]||(t[2]=function(){return e.nextPage&&e.nextPage.apply(e,arguments)})})])):Object(r["d"])("",!0),Object(r["f"])("span",null,[Object(r["w"])(Object(r["f"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.searchParams.max=t}),class:"pull-right",onChange:t[4]||(t[4]=function(){return e.runFreshSearch&&e.runFreshSearch.apply(e,arguments)})},m,544),[[r["u"],e.searchParams.max]])])])):(Object(r["k"])(),Object(r["e"])("div",h,"No results found.")),Object(r["h"])(g)])],64)}Object(r["l"])();n("25f0");var y,k,S=n("ade3"),I=n("1da1");n("96cf"),n("99af");(function(e){e["SET_SOURCE"]="SET_SOURCE",e["SET_KEYWORDS"]="SET_KEYWORDS",e["SET_TILES"]="SET_TILES"})(k||(k={}));var E,w,T=(y={},Object(S["a"])(y,k.SET_SOURCE,(function(e,t){e.pageId=t.pageId,e.blockId=t.blockId})),Object(S["a"])(y,k.SET_KEYWORDS,(function(e,t){console.log("SET_KEYWORDS Payload: ",t),e.keywordQueryModel=t})),Object(S["a"])(y,k.SET_TILES,(function(e,t){console.log("SET_TILES Payload: ",t),e.searchResult=t})),y);(function(e){e["INIT_FILTER"]="INIT_FILTER",e["FILTER_BY_KEYWORDS"]="FILTER_BY_KEYWORDS",e["NEXT_PAGE"]="NEXT_PAGE",e["PREVIOUS_PAGE"]="PREVIOUS_PAGE"})(w||(w={}));var _=(E={},Object(S["a"])(E,w.INIT_FILTER,(function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit(k.SET_SOURCE,t),r=window.location.origin+"/api/tilegrid/keywords/page/".concat(t.pageId,"/block/").concat(t.blockId),console.log("Keyword Load API: ",r),n.next=5,fetch(r);case 5:return c=n.sent,n.next=8,c.json();case 8:o=n.sent,e.commit(k.SET_KEYWORDS,o);case 10:case"end":return n.stop()}}),n)})))()})),Object(S["a"])(E,w.FILTER_BY_KEYWORDS,(function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=window.location.origin+"/api/tilegrid/items/",console.log("Item Load API: ",r),c=new FormData,e.state.pageId&&c.append("pageId",e.state.pageId.toString()),e.state.blockId&&c.append("blockId",e.state.blockId.toString()),c.append("offset",null===t||void 0===t?void 0:t.offset.toString()),c.append("max",null===t||void 0===t?void 0:t.max.toString()),c.append("queryParams",JSON.stringify(e.state.keywordQueryModel)),console.log("Form Data: ",c),fetch(r,{method:"POST",body:c}).then((function(e){return e.json()})).then((function(t){e.commit(k.SET_TILES,t)})).catch((function(e){console.error("Error:",e)}));case 10:case"end":return n.stop()}}),n)})))()})),E),P=(n("a4d3"),n("e01a"),n("5502")),R={keywordQueryModel:null,searchResult:null,offset:0,max:25,pageId:null,blockId:null},x={},F=Symbol(),L=Object(P["a"])({state:R,mutations:T,actions:_,getters:x});function M(){return Object(P["b"])(F)}var Y=n("90ba");Object(r["m"])("data-v-bc56b030");var K={class:"data-items"},D={class:"container row"};function U(e,t,n,c,o,a){var l=Object(r["q"])("tile");return Object(r["k"])(),Object(r["e"])("div",K,[Object(r["f"])("div",D,[(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["p"])(e.items,(function(e){return Object(r["k"])(),Object(r["e"])("div",{key:e,class:"col-md-4"},[Object(r["h"])(l,{item:e},null,8,["item"])])})),128))])])}Object(r["l"])();n("a15b");Object(r["m"])("data-v-491ba382");var A={class:"data-item"},N=["href"],Q=["src"],W={class:"cat-outer"},C={class:"cat-inner col-6"},G=["href"],q={class:"content"};function V(e,t,n,c,o,a){var l;return Object(r["k"])(),Object(r["e"])("div",A,[Object(r["f"])("a",{href:e.item.detailedViewUrl},[Object(r["f"])("img",{class:"thumbnail",src:e.item.thumbnail},null,8,Q)],8,N),Object(r["f"])("div",W,[Object(r["f"])("div",C,Object(r["r"])(null===(l=e.item.categories)||void 0===l?void 0:l.join(", ")),1)]),Object(r["f"])("h3",null,[Object(r["f"])("a",{href:e.item.detailedViewUrl},Object(r["r"])(e.item.title),9,G)]),Object(r["f"])("div",q,Object(r["r"])(e.item.content),1)])}Object(r["l"])();var J=Object(r["i"])({name:"Tile",props:{item:null}}),B=(n("515e"),n("6b0d")),X=n.n(B);const $=X()(J,[["render",V],["__scopeId","data-v-491ba382"]]);var z=$,H=Object(r["i"])({name:"ItemList",components:{Tile:z},setup:function(){var e=M();return{items:Object(r["b"])((function(){var t;return null===(t=e.state.searchResult)||void 0===t?void 0:t.items}))}}});n("0f57");const Z=X()(H,[["render",U],["__scopeId","data-v-bc56b030"]]);var ee=Z,te=Object(r["i"])({name:"KeywordFilter",components:{ItemList:ee},props:{pageId:{required:!0,type:null},blockId:{required:!0,type:null},keywords:{required:!0,type:Array}},setup:function(e){var t=Object(r["o"])({}),n=Object(r["s"])(e),c=n.pageId,o=Object(r["s"])(e),a=o.blockId;console.log("localStorage.keywordSearchParams: ",localStorage.keywordSearchParams),t.value=localStorage.keywordSearchParams?JSON.parse(localStorage.keywordSearchParams):{keywords:[],offset:0,max:25},Object(r["v"])([c,a],(function(){c.toString()!==Y["Guid"].EMPTY&&a.toString()!==Y["Guid"].EMPTY&&d()}));var l=M(),i=function(){t.value.offset=0,d()},u=function(){t.value.offset=Math.max(0,t.value.offset-t.value.max),d()},s=function(){t.value.offset=+t.value.offset+ +t.value.max,d()},d=function(){localStorage.keywordSearchParams=JSON.stringify(t.value),t.value.pageId=c.value,t.value.blockId=a.value,l.dispatch(w.FILTER_BY_KEYWORDS,t.value)};return{searchParams:t,runFreshSearch:i,previousPage:u,nextPage:s,dispatchSearch:d,keywordQueryModel:Object(r["b"])((function(){return l.state.keywordQueryModel})),items:Object(r["b"])((function(){var e;return null===(e=l.state.searchResult)||void 0===e?void 0:e.items})),count:Object(r["b"])((function(){var e;return null===(e=l.state.searchResult)||void 0===e?void 0:e.count})),first:Object(r["b"])((function(){var e;return null===(e=l.state.searchResult)||void 0===e?void 0:e.first})),last:Object(r["b"])((function(){var e;return null===(e=l.state.searchResult)||void 0===e?void 0:e.last}))}}});n("4ae2");const ne=X()(te,[["render",g],["__scopeId","data-v-36cb4df4"]]);var re=ne,ce=Object(r["i"])({name:"App",components:{KeywordFilter:re},setup:function(){var e=Object(r["o"])([""]),t=Object(r["o"])(Y["Guid"].EMPTY),n=Object(r["o"])(Y["Guid"].EMPTY);return{keywords:e,pageId:t,blockId:n}},mounted:function(){this.pageId=this.$el.parentElement.getAttribute("page-id"),this.blockId=this.$el.parentElement.getAttribute("block-id");var e=M();e.dispatch(w.INIT_FILTER,{pageId:this.pageId,blockId:this.blockId})}});n("a424");const oe=X()(ce,[["render",o]]);var ae=oe,le=Object(r["c"])(ae);le.use(L,F).mount("#app")}});
//# sourceMappingURL=app.js.map