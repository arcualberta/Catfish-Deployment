import{d as x,ay as L,az as q,j as o,k as i,l,s as r,aA as g,F as C,y as N,u as p,p as v,aB as z,aC as A,r as _,f as D,aD as I,z as O,B as S,A as c,m as w,C as P,D as T,aE as B,q as V}from"./index.f0ace652.js";const U={class:"row entryRow"},$={class:"col-sm-3"},G=x({__name:"ListEntry",props:{entry:null},setup(b){const t=b,s=_(!1),n=_(!1),u=L(),d=D(()=>u.apiRoot),k=D(()=>I);console.log("stateList",k);const f=()=>s.value=!s.value,h=()=>n.value=!n.value,E=(y,e)=>{u.deleteObject(y,e),s.value=!s.value},R=(y,e,m)=>{u.changeStatus(y,e,m),n.value=!n.value},j="/read/"+t.entry.id,F="/update/"+t.entry.id;return""+t.entry.id,""+t.entry.id,(y,e)=>{const m=O("router-link");return o(),i("div",U,[S(m,{to:j,class:"col-6"},{default:c(()=>[r(w(b.entry.name),1)]),_:1}),S(m,{to:F,class:"col-2"},{default:c(()=>[r("Update")]),_:1}),l("a",{onClick:e[0]||(e[0]=a=>h()),class:"col-2 change-state-link"},"Change State"),n.value?(o(),v(B,{key:0},{header:c(()=>[r(" Change State. "),l("button",{type:"button",class:"btn-close",onClick:e[1]||(e[1]=a=>n.value=!1)}," x ")]),body:c(()=>[r(" Please select new State. "),l("div",$,[P(l("select",{class:"form-select","onUpdate:modelValue":e[2]||(e[2]=a=>t.entry.state=a)},[(o(!0),i(C,null,N(p(k),a=>(o(),i("option",null,w(a),1))),256))],512),[[T,t.entry.state]])])]),footer:c(()=>[l("button",{type:"button",class:"modal-confirm-btn",onClick:e[3]||(e[3]=a=>R(p(d)+"/change-state/"+t.entry.id,t.entry.id,t.entry.state)),"aria-label":"Close modal"}," Confirm "),l("button",{type:"button",class:"modal-cancel-btn",onClick:e[4]||(e[4]=a=>h()),"aria-label":"Close modal"}," Cancel ")]),_:1})):V("",!0),l("a",{onClick:e[5]||(e[5]=a=>f()),class:"col-2 delete-link"},"Delete"),s.value?(o(),v(B,{key:1},{header:c(()=>[r(" Delete Confirmation. "),l("button",{type:"button",class:"btn-close",onClick:e[6]||(e[6]=a=>s.value=!1)}," x ")]),body:c(()=>[r(" Do you want to delete this Item? ")]),footer:c(()=>[l("button",{type:"button",class:"modal-delete-btn",onClick:e[7]||(e[7]=a=>E(p(d)+"/"+t.entry.id,t.entry.id)),"aria-label":"Close modal"}," Delete "),l("button",{type:"button",class:"modal-cancel-btn",onClick:e[8]||(e[8]=a=>f()),"aria-label":"Close modal"}," Cancel ")]),_:1})):V("",!0)])}}}),H=A(G,[["__scopeId","data-v-087fa61d"]]),Q=x({__name:"List",setup(b){const t=L(),{entries:s}=q(t);return(n,u)=>(o(),i(C,null,[l("h4",null,[r("List "),g(n.$slots,"object-type"),r("s")]),(o(!0),i(C,null,N(p(s),d=>(o(),i("div",{key:d.id.toString()},[g(n.$slots,"list-entry-delegate",{},()=>[(o(),v(z(H),{entry:d},null,8,["entry"]))])]))),128))],64))}});export{Q as default};