import{d as x,r as k,ad as c,j as s,k as l,l as e,m as a,u as t,ae as B,B as n,A as I,F as m,y as L,af as T,ag as y,ah as p,s as f}from"./index.4e91d7a9.js";const V={class:"flex m-10",style:{width:"50%"}},w=e("h3",null,"List 1",-1),C={class:"alert alert-info"},E=e("h3",null,"List 1 Selections",-1),J=e("h3",null,"List 2",-1),N={class:"alert alert-info"},S=e("h3",null,"List 2 Selections",-1),F=x({__name:"Sandbox",setup(b){const i=k([{name:"John",id:1},{name:"Joao",id:2},{name:"Jean",id:3},{name:"Gerard",id:4}]),g=d=>{console.log(d)},o="store-1",r="store-2",h=c(o),v=c(r);return(d,_)=>(s(),l(m,null,[e("div",null,"2 x 3 = "+a(t(B.multiply)(2,2)),1),e("div",V,[n(t(T),{class:"dragArea list-group w-full",list:i.value,onChange:g},{default:I(()=>[(s(!0),l(m,null,L(i.value,u=>(s(),l("div",{class:"list-group-item bg-gray-300 m-1 p-3 rounded-md text-center",key:u.name},a(u.name),1))),128))]),_:1},8,["list"])]),w,n(p,{"store-id":o,entityType:t(y).Item},null,8,["entityType"]),e("div",C,[E,f(" "+a(t(h).selectedEntityIds),1)]),J,n(p,{"store-id":r,entityType:t(y).Item},null,8,["entityType"]),e("div",N,[S,f(" "+a(t(v).selectedEntityIds),1)])],64))}});export{F as default};
