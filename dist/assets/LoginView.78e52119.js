import{d as _,R as u,a as g,G as p,o as d,c as f,b as s,e as h,f as o,g as m,i as t}from"./index.6aec9276.js";const R={class:"container login-pannel"},v=s("div",{class:"login-lable"},"Login with Google",-1),L={class:"button-centre"},w=_({__name:"LoginView",setup(A){const i=u(),a=t.tenantId,c=t.authorizationApiRoot,n=g(),r=e=>{sessionStorage.setItem("authResult",JSON.stringify(e)),n.userLoginResult=e.loginResult,n.userLoginToken=e.jwtToken,i.go(-1)};return(e,I)=>{const l=p("Login");return d(),f("div",R,[v,s("div",L,[h(l,{"pinia-instance":o(m)(),tenantId:o(a),apiRoot:o(c),onAuthorizationResult:r},null,8,["pinia-instance","tenantId","apiRoot"])])])}}});export{w as default};
