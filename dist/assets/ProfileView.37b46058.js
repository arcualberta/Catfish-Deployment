import{P as S,Q as w,R as x,N as A,d as L,L as N,S as b,f as i,j as c,k as r,l as e,m as n,s as u,q as I,F as p,y as f,T as V,U as q,V as C,W as E,X as R,Y as B,Z as D,$ as F,a0 as K}from"./index.3cb1385d.js";S();const h=w("ProfileStore",{state:()=>({...x,activeProfile:null,userInfo:null,profileDeleteStatus:""}),getters:{isAdmin(){var a,s;return!!((s=(a=this.userInfo)==null?void 0:a.roles)!=null&&s.includes("SysAdmin"))}},actions:{setActiveProfile(a){if(a){let s="id:"+a;console.log("query",s);const o=new FormData;o.append("query",s),o.append("offset","0"),o.append("max","1"),o.append("filterQuery",""),o.append("sortBy",""),o.append("fieldList",""),o.append("maxHiglightSnippets","1");const _=`${A.dataRepositoryApiRoot}/api/solr-search`;fetch(_,{method:"POST",body:o}).then(t=>t.json()).then(t=>{const l=t==null?void 0:t.resultEntries;this.activeProfile=(l==null?void 0:l.length)>0?l[0]:null}).catch(t=>{console.error("Item Load API Error:",t)})}else this.activeProfile=null}}}),T={class:"container"},W={class:"row"},j=e("div",{class:"col-sm-4"},[e("img",{class:"results-image",src:V})],-1),O={class:"col-sm-8"},Q={class:"profile-name"},U={class:"psh"},$={class:"psh"},z={class:"email-value"},H={class:"psh"},J={class:"pronounce-value"},X={key:0,class:"psh"},Y={class:"pronounce-value"},Z={class:"row"},G={class:"Keywords"},M={class:"keyword-block"},ee={class:"external-links"},se={class:"container"},oe=e("div",{class:"ch1"}," Work links ",-1),te=["href"],le=L({__name:"ProfileView",setup(a){const s=h();h();const o=N();b();const _=o.params.id;s.setActiveProfile(_),console.log("activeProfile",JSON.stringify(s.activeProfile));const t=i(()=>q(s.activeProfile)),l=i(()=>C(s.activeProfile)),m=i(()=>E(s.activeProfile)),g=i(()=>R(s.activeProfile)),P=i(()=>B(s.activeProfile)),y=i(()=>D(s.activeProfile)),k=i(()=>F(s.activeProfile)),v=i(()=>K(s.activeProfile));return(ie,ne)=>(c(),r(p,null,[e("div",T,[e("div",W,[j,e("div",O,[e("div",Q,n(t.value),1),e("div",U,n(l.value)+" | "+n(P.value),1),e("div",$,[u("Email: "),e("span",z,n(m.value),1)]),e("div",H,[u("Pronounce: "),e("span",J,n(y.value),1)]),v.value?(c(),r("div",X,[u("Indigenous Nation / Community: "),e("span",Y,n(v.value),1)])):I("",!0)])]),e("div",Z,[e("div",G,[u("Keywords: "),(c(!0),r(p,null,f(g.value,d=>(c(),r("span",M,n(d),1))),256))])])]),e("div",ee,[e("div",se,[oe,(c(!0),r(p,null,f(k.value,d=>(c(),r("div",null,[e("a",{target:"_blank",href:d,class:"worklinks"},n(d),9,te)]))),256))])])],64))}});export{le as default};
