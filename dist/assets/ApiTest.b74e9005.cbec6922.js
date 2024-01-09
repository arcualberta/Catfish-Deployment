import{d as R,aq as V,r as n,ar as i,w as r,as as c,at as u,au as _,av as A,j as E,k as C,m as a,q as b,l,s as o,F as q,aw as P,a6 as B}from"./index.4e91d7a9.js";class W extends P{constructor(){super(`${B.dataRepositoryApiRoot}/api/collections`)}}class G extends P{constructor(){super(`${B.dataRepositoryApiRoot}/api/items`)}}const I={key:0,class:"alert alert-danger mt-2"},$={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},j=l("h4",null,"Entity Template List",-1),D={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},z=l("h4",null,"Entity Template",-1),H={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},K=l("h4",null,"New Entity Template",-1),M={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},Q=l("h4",null,"Updated Entity Template",-1),X={class:"alert alert-success mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},Y=l("h4",null,"Form Listing",-1),Z={class:"alert alert-success mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},tt=l("h4",null,"A Form ",-1),lt={class:"alert alert-success mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},et=l("h4",null," New Form ",-1),at={class:"alert alert-success mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},st=l("h4",null," Updated Form ",-1),ot={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},nt=l("h4",null,"Workflows List",-1),rt={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},it=l("h4",null,"A Workflow",-1),ct={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},ut=l("h4",null,"New Workflow",-1),vt={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},ht=l("h4",null,"Updated Workflow",-1),mt={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},yt=l("h4",null,"Collections List",-1),pt={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},dt=l("h4",null,"A Collection",-1),ft={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},gt=l("h4",null,"Updated Collection",-1),wt={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},xt=l("h4",null,"New Collection",-1),Nt={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},St=l("h4",null,"Items List",-1),Ot={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},Tt=l("h4",null,"An Item",-1),Jt={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},kt=l("h4",null,"FormSubmission List",-1),Ft={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},Lt=l("h4",null,"A Form Submission Data",-1),At=R({__name:"ApiTest",setup(O){V();const s=n(""),v=n([]);i.List().then(t=>v.value=t).catch(t=>s.value=t);const T=n(null);r(()=>v.value,async t=>{t.length>0&&i.Get(t[0].id).then(e=>T.value=e).catch(e=>s.value=e)});const h=n({name:"Test Entity Template",description:"This is a test entity template."});i.Post(h.value).catch(t=>s.value=t);const m=n(JSON.parse(JSON.stringify(h.value)));m.value.name="Updated Entity Template",i.Put(m.value).then(t=>{}).catch(t=>s.value="Updated Entity Template: "+t);const y=n([]);c.List().then(t=>y.value=t).catch(t=>s.value=t);const J=n(null);r(()=>y.value,async t=>{t.length>0&&c.Get(t[0].id).then(e=>J.value=e).catch(e=>s.value=e)});const p=n({name:"Test Form Template",description:"This is a test form template."});c.Post(p.value).catch(t=>s.value=t);const d=n(JSON.parse(JSON.stringify(p.value)));d.value.name="Updated Form Template",c.Put(d.value).then(t=>{}).catch(t=>s.value="Updated Form Template: "+t);const f=n([]);u.List().then(t=>f.value=t).catch(t=>s.value=t);const k=n(null);r(()=>f.value,async t=>{t.length>0&&u.Get(t[0].id).then(e=>k.value=e).catch(e=>s.value=e)});const g=n({id:_(),name:"Test Workflow Template",description:"This is a test workflow template."});u.Post(g.value).catch(t=>s.value=t);const w=n(JSON.parse(JSON.stringify(g.value)));w.value.name="Updated Workflow Template",u.Put(w.value).then(t=>{}).catch(t=>s.value="Updated workflow Template: "+t);const x=n([]);W.List().then(t=>x.value=t).catch(t=>s.value=t);const F=n(null);r(()=>x.value,async t=>{t.length>0&&W.Get(t[0].id).then(e=>F.value=e).catch(e=>s.value=e)});const N=n([]);G.List().then(t=>N.value=t).catch(t=>s.value=t);const L=n(null);r(()=>N.value,async t=>{t.length>0&&G.Get(t[0].id).then(e=>L.value=e).catch(e=>s.value=e)});const S=n([]);A.List().then(t=>S.value=t).catch(t=>s.value=t);const U=n(null);return r(()=>S.value,async t=>{t.length>0&&A.Get(t[0]).then(e=>U.value=e).catch(e=>s.value=e)}),(t,e)=>(E(),C(q,null,[s.value?(E(),C("div",I,a(s.value),1)):b("",!0),l("div",$,[j,o(" "+a(v.value),1)]),l("div",D,[z,o(" "+a(T.value),1)]),l("div",H,[K,o(" "+a(JSON.parse(JSON.stringify(h.value))),1)]),l("div",M,[Q,o(" "+a(JSON.parse(JSON.stringify(m.value))),1)]),l("div",X,[Y,o(" "+a(JSON.stringify(y.value)),1)]),l("div",Z,[tt,o(" "+a(JSON.stringify(J.value)),1)]),l("div",lt,[et,o(" "+a(JSON.stringify(p.value)),1)]),l("div",at,[st,o(" "+a(JSON.stringify(d.value)),1)]),l("div",ot,[nt,o(" "+a(JSON.stringify(f.value)),1)]),l("div",rt,[it,o(" "+a(JSON.stringify(k.value)),1)]),l("div",ct,[ut,o(" "+a(JSON.stringify(g.value)),1)]),l("div",vt,[ht,o(" "+a(JSON.stringify(w.value)),1)]),l("div",mt,[yt,o(" "+a(x.value),1)]),l("div",pt,[dt,o(" "+a(F.value),1)]),l("div",ft,[gt,o(" "+a(t.updatedCollection),1)]),l("div",wt,[xt,o(" "+a(t.newCollection),1)]),l("div",Nt,[St,o(" "+a(N.value),1)]),l("div",Ot,[Tt,o(" "+a(L.value),1)]),l("div",Jt,[kt,o(" "+a(JSON.stringify(S.value)),1)]),l("div",Ft,[Lt,o(" "+a(JSON.stringify(U.value)),1)])],64))}});export{At as default};
