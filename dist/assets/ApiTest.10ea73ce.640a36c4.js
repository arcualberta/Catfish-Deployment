import{a3 as R,M as u,d as D,a4 as $,R as r,a5 as v,H as c,a6 as y,a7 as m,a8 as W,o as b,c as C,t as s,a9 as B,a,q as i,F as M}from"./index.9e7bd0c1.js";var H=Object.defineProperty,V=(o,e,n)=>e in o?H(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,h=(o,e,n)=>(V(o,typeof e!="symbol"?e+"":e,n),n);class d{static async List(){return await this._crudProxy.List()}static async Get(e){return await this._crudProxy.Get(e)}static async Post(e){return await this._crudProxy.Post(e)}static async Put(e){return await this._crudProxy.Put(e.id,e)}static async Delete(e){return await this._crudProxy.Delete(e)}}h(d,"_crudProxy",new R(`${u.dataRepositoryApiRoot}/api/collections`)),h(d,"getApiRoot",()=>`${u.dataRepositoryApiRoot}/api/collections`);class p{static async List(){return await this._crudProxy.List()}static async Get(e){return await this._crudProxy.Get(e)}static async Post(e){return await this._crudProxy.Post(e)}static async Put(e){return await this._crudProxy.Put(e.id,e)}static async Delete(e){return await this._crudProxy.Delete(e)}}h(p,"_crudProxy",new R(`${u.dataRepositoryApiRoot}/api/items`)),h(p,"getApiRoot",()=>`${u.dataRepositoryApiRoot}/api/items`);class f{static async List(){return await this._crudProxy.List()}static async Get(e){return await this._crudProxy.Get(e)}static async Post(e){return await this._crudProxy.Post(e)}static async Put(e){return await this._crudProxy.Put(e.id,e)}static async Delete(e){return await this._crudProxy.Delete(e)}}h(f,"_crudProxy",new R(`${u.dataRepositoryApiRoot}/api/form-submissions`)),h(f,"getApiRoot",()=>`${u.dataRepositoryApiRoot}/api/form-submissions`);const j={key:0,class:"alert alert-danger mt-2"},I={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},q=a("h4",null,"Entity Template List",-1),z={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},K=a("h4",null,"Entity Template",-1),Q={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},X=a("h4",null,"New Entity Template",-1),Y={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},Z=a("h4",null,"Updated Entity Template",-1),tt={class:"alert alert-success mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},et=a("h4",null,"Form Listing",-1),at={class:"alert alert-success mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},lt=a("h4",null,"A Form ",-1),st={class:"alert alert-success mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},it=a("h4",null," New Form ",-1),rt={class:"alert alert-success mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},ot=a("h4",null," Updated Form ",-1),nt={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},ct=a("h4",null,"Workflows List",-1),ut={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},ht=a("h4",null,"A Workflow",-1),vt={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},yt=a("h4",null,"New Workflow",-1),mt={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},dt=a("h4",null,"Updated Workflow",-1),pt={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},ft=a("h4",null,"Collections List",-1),wt={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},xt=a("h4",null,"A Collection",-1),gt={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},Pt=a("h4",null,"Updated Collection",-1),Nt={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},St=a("h4",null,"New Collection",-1),Ot={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},Tt=a("h4",null,"Items List",-1),Jt={class:"alert alert-warning mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},_t=a("h4",null,"An Item",-1),Lt={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},Rt=a("h4",null,"FormSubmission List",-1),At={class:"alert alert-info mt-2",style:{"max-height":"200px","overflow-y":"scroll"}},kt=a("h4",null,"A Form Submission Data",-1),Gt=D({__name:"ApiTest",setup(o){$();const e=r(""),n=r([]);v.List().then(t=>n.value=t).catch(t=>e.value=t);const A=r(null);c(()=>n.value,async t=>{t.length>0&&v.Get(t[0].id).then(l=>A.value=l).catch(l=>e.value=l)});const w=r({name:"Test Entity Template",description:"This is a test entity template."});v.Post(w.value).catch(t=>e.value=t);const x=r(JSON.parse(JSON.stringify(w.value)));x.value.name="Updated Entity Template",v.Put(x.value).then(t=>{}).catch(t=>e.value="Updated Entity Template: "+t);const g=r([]);y.List().then(t=>g.value=t).catch(t=>e.value=t);const k=r(null);c(()=>g.value,async t=>{t.length>0&&y.Get(t[0].id).then(l=>k.value=l).catch(l=>e.value=l)});const P=r({name:"Test Form Template",description:"This is a test form template."});y.Post(P.value).catch(t=>e.value=t);const N=r(JSON.parse(JSON.stringify(P.value)));N.value.name="Updated Form Template",y.Put(N.value).then(t=>{}).catch(t=>e.value="Updated Form Template: "+t);const S=r([]);m.List().then(t=>S.value=t).catch(t=>e.value=t);const F=r(null);c(()=>S.value,async t=>{t.length>0&&m.Get(t[0].id).then(l=>F.value=l).catch(l=>e.value=l)});const O=r({id:W(),name:"Test Workflow Template",description:"This is a test workflow template."});m.Post(O.value).catch(t=>e.value=t);const T=r(JSON.parse(JSON.stringify(O.value)));T.value.name="Updated Workflow Template",m.Put(T.value).then(t=>{}).catch(t=>e.value="Updated workflow Template: "+t);const J=r([]);d.List().then(t=>J.value=t).catch(t=>e.value=t);const G=r(null);c(()=>J.value,async t=>{t.length>0&&d.Get(t[0].id).then(l=>G.value=l).catch(l=>e.value=l)});const _=r([]);p.List().then(t=>_.value=t).catch(t=>e.value=t);const U=r(null);c(()=>_.value,async t=>{t.length>0&&p.Get(t[0].id).then(l=>U.value=l).catch(l=>e.value=l)});const L=r([]);f.List().then(t=>L.value=t).catch(t=>e.value=t);const E=r(null);return c(()=>L.value,async t=>{t.length>0&&f.Get(t[0]).then(l=>E.value=l).catch(l=>e.value=l)}),(t,l)=>(b(),C(M,null,[e.value?(b(),C("div",j,s(e.value),1)):B("",!0),a("div",I,[q,i(" "+s(n.value),1)]),a("div",z,[K,i(" "+s(A.value),1)]),a("div",Q,[X,i(" "+s(JSON.parse(JSON.stringify(w.value))),1)]),a("div",Y,[Z,i(" "+s(JSON.parse(JSON.stringify(x.value))),1)]),a("div",tt,[et,i(" "+s(JSON.stringify(g.value)),1)]),a("div",at,[lt,i(" "+s(JSON.stringify(k.value)),1)]),a("div",st,[it,i(" "+s(JSON.stringify(P.value)),1)]),a("div",rt,[ot,i(" "+s(JSON.stringify(N.value)),1)]),a("div",nt,[ct,i(" "+s(JSON.stringify(S.value)),1)]),a("div",ut,[ht,i(" "+s(JSON.stringify(F.value)),1)]),a("div",vt,[yt,i(" "+s(JSON.stringify(O.value)),1)]),a("div",mt,[dt,i(" "+s(JSON.stringify(T.value)),1)]),a("div",pt,[ft,i(" "+s(J.value),1)]),a("div",wt,[xt,i(" "+s(G.value),1)]),a("div",gt,[Pt,i(" "+s(t.updatedCollection),1)]),a("div",Nt,[St,i(" "+s(t.newCollection),1)]),a("div",Ot,[Tt,i(" "+s(_.value),1)]),a("div",Jt,[_t,i(" "+s(U.value),1)]),a("div",Lt,[Rt,i(" "+s(JSON.stringify(L.value)),1)]),a("div",At,[kt,i(" "+s(JSON.stringify(E.value)),1)])],64))}});export{Gt as default};
