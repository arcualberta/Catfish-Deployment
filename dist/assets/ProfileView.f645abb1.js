import{S as k,T as w,U as x,Q as A,d as b,O as C,V as E,u as i,o as c,c as r,a as e,v as a,E as u,z as I,F as p,C as f,W as L,X as N,Y as V,Z as q,$ as B,a0 as D,a1 as F,a2 as R,a3 as K}from"./index.3d324e24.js";k();const h=w("ProfileStore",{state:()=>({...x,activeProfile:null,userInfo:null,profileDeleteStatus:""}),getters:{isAdmin(){var n,s;return!!((s=(n=this.userInfo)==null?void 0:n.roles)!=null&&s.includes("SysAdmin"))}},actions:{setActiveProfile(n){if(n){let s="id:"+n;console.log("query",s);const o=new FormData;o.append("query",s),o.append("offset","0"),o.append("max","1"),o.append("filterQuery",""),o.append("sortBy",""),o.append("fieldList",""),o.append("maxHiglightSnippets","1");const _=`${A.dataRepositoryApiRoot}/api/solr-search`;fetch(_,{method:"POST",body:o}).then(t=>t.json()).then(t=>{const l=t==null?void 0:t.resultEntries;this.activeProfile=(l==null?void 0:l.length)>0?l[0]:null}).catch(t=>{console.error("Item Load API Error:",t)})}else this.activeProfile=null}}}),O={class:"container"},T={class:"row"},W=e("div",{class:"col-sm-4"},[e("img",{class:"results-image",src:L})],-1),z={class:"col-sm-8"},Q={class:"profile-name"},U={class:"psh"},$={class:"psh"},j={class:"email-value"},H={class:"psh"},J={class:"pronounce-value"},X={key:0,class:"psh"},Y={class:"pronounce-value"},Z={class:"row"},G={class:"Keywords"},M={class:"keyword-block"},ee={class:"external-links"},se={class:"container"},oe=e("div",{class:"ch1"}," Work links ",-1),te=["href"],le=b({__name:"ProfileView",setup(n){const s=h();h();const o=C();E();const _=o.params.id;s.setActiveProfile(_),console.log("activeProfile",JSON.stringify(s.activeProfile));const t=i(()=>N(s.activeProfile)),l=i(()=>V(s.activeProfile)),m=i(()=>q(s.activeProfile)),g=i(()=>B(s.activeProfile)),P=i(()=>D(s.activeProfile)),y=i(()=>F(s.activeProfile)),S=i(()=>R(s.activeProfile)),v=i(()=>K(s.activeProfile));return(ie,ae)=>(c(),r(p,null,[e("div",O,[e("div",T,[W,e("div",z,[e("div",Q,a(t.value),1),e("div",U,a(l.value)+" | "+a(P.value),1),e("div",$,[u("Email: "),e("span",j,a(m.value),1)]),e("div",H,[u("Pronounce: "),e("span",J,a(y.value),1)]),v.value?(c(),r("div",X,[u("Indigenous Nation / Community: "),e("span",Y,a(v.value),1)])):I("",!0)])]),e("div",Z,[e("div",G,[u("Keywords: "),(c(!0),r(p,null,f(g.value,d=>(c(),r("span",M,a(d),1))),256))])])]),e("div",ee,[e("div",se,[oe,(c(!0),r(p,null,f(S.value,d=>(c(),r("div",null,[e("a",{target:"_blank",href:d,class:"worklinks"},a(d),9,te)]))),256))])])],64))}});export{le as default};
