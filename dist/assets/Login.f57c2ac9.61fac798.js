import{d as u,E as r,G as i,p as c,H as l,o as p,I as h,h as a,J as d,M as m}from"./index.9e7bd0c1.js";const z=u({__name:"Login",setup(f){const t=r(),s=i(),n=c(()=>t.loginResult);l(()=>n.value,async o=>{o!=null&&o.success&&s.push("/")});const e=m.authorizationApiRoot;return(o,g)=>(p(),h(a(d),{"authorization-root":a(e)},null,8,["authorization-root"]))}});export{z as default};
