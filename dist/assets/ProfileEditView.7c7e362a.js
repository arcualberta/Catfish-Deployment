import{d as c,a as m,u,y as p,T as l,o as d,c as f,e as _,f as o,J as A,g as S,S as g,r as y,i as v}from"./index.ca4ec01d.js";import{F as P}from"./arc-form-submission.51a605d5.js";const k={class:"container"},E=c({__name:"ProfileEditView",setup(D){const e=m(),a=u(),s=t=>{t==g.OK&&y.push({name:"success"})},i=a.params.id;e.setActiveProfile(i),e.formSubmissionMode="UPDATE";const r=p(()=>e.getFormData),n=v.solrApiRoot;return l(()=>{e.loadApiKey()}),(t,F)=>(d(),f("div",k,[_(o(P),{"api-root":o(n),"data-store":"Solr",securityToken:o(e).getApiKey,"form-template":o(A),formData:r.value,"is-update":!0,"pinia-instance":o(S)(),"tanent-id":"a4a50d9f-fd20-4d74-8274-2acad28a6553",msg:"",onArcFormSubmit:s},null,8,["api-root","securityToken","form-template","formData","pinia-instance"])]))}});export{E as default};
