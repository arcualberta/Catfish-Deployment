import{d as u,Q as p,j as g,E as d,o as _,c as f,b as m,e as o,g as L,a,y as v,F as R,h as t}from"./index.dad407f1.js";const h=a("div",null,"Login View ",-1),V=u({__name:"LoginView",setup(k){const s=t.tenantId,i=t.authorizationApiRoot,r=p(),e=g(null),c=n=>{console.log("user token: ",n),e.value=JSON.parse(n),r.setUserLoginResult(e.value)};return(n,I)=>{const l=d("Login");return _(),f(R,null,[h,m(l,{"pinia-instance":o(L)(),tenantId:o(s),apiRoot:o(i),onGetJwtLoginResult:c},null,8,["pinia-instance","tenantId","apiRoot"]),a("div",null,v(e.value),1)],64)}}});export{V as default};
