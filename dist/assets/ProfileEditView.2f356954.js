import{d as c,a as m,u,y as l,T as p,o as d,c as f,e as _,f as o,J as A,g as S,S as g,r as y,i as v}from"./index.41e1d9ae.js";import{F as P}from"./arc-form-submission.145f882d.js";const k={class:"container"},E=c({__name:"ProfileEditView",setup(D){const e=m(),a=u(),s=t=>{t==g.OK&&y.push({name:"success"})},i=a.params.id;e.setActiveProfile(i),e.formSubmissionMode="UPDATE";const r=l(()=>e.getFormData),n=v.solrApiRoot;return p(()=>{e.loadApiKey()}),(t,F)=>(d(),f("div",k,[_(o(P),{"api-root":o(n),"data-store":"Solr",securityToken:o(e).getApiKey,"form-template":o(A),formData:r.value,"is-update":!0,"pinia-instance":o(S)(),"tanent-id":"a4a50d9f-fd20-4d74-8274-2acad28a6553",msg:"",onArcFormSubmit:s},null,8,["api-root","securityToken","form-template","formData","pinia-instance"])]))}});export{E as default};