import{d as $,f as t,P as L,Q as R,R as x,S as C,T as E,j as n,k as i,l as e,B as a,m as o,H as N,U as T,V as A,W as B,N as k,L as V,X as D,Y as z,y as H,A as F,z as K,q as g,F as u,x as P,Z as M,$ as O,a0 as q,a1 as W,a2 as G,a3 as J,a4 as Q,a5 as U,a6 as X,a7 as Y,a8 as Z,p as ee}from"./index.eb006bcc.js";const se={class:"container project-list-entry"},te={class:"project-list"},oe=e("span",{class:"project-list-headers"},"Project Title : ",-1),ne={class:"project-list"},ae=e("span",{class:"project-list-headers"},"Project Description : ",-1),ie=["innerHTML"],ce={class:"project-list"},le=e("span",{class:"project-list-headers"},"Research Initiated By : ",-1),re={class:"project-list"},de=e("span",{class:"project-list-headers"},"Role Played By Community In Project : ",-1),ue=$({__name:"ProjectListEntry",props:{model:{}},setup(l){const s=l,c=t(()=>L(s.model)),_=t(()=>"<p>"+R(s.model).split(`
`).join("</p><p>")+"</p>"),v=t(()=>x(s.model)),p=t(()=>C(s.model)),h=t(()=>E(s.model));function m(d){return d%2===0?"Even":"Odd"}return(d,f)=>(n(),i("div",{class:N(m(h.value)==="Even"?"research-projects-background":"")},[e("div",se,[e("div",te,[oe,a(" "+o(c.value),1)]),e("div",ne,[ae,a(),e("div",{innerHTML:_.value},null,8,ie)]),e("div",ce,[le,a(" "+o(v.value),1)]),e("div",re,[de,a(o(p.value),1)])])],2))}});T();const S=A("ProfileStore",{state:()=>({...B,activeProfile:null,userInfo:null,profileDeleteStatus:""}),getters:{isAdmin(){var l,s;return!!((s=(l=this.userInfo)==null?void 0:l.roles)!=null&&s.includes("SysAdmin"))}},actions:{setActiveProfile(l){if(l){const s=`${k.solrApiRoot}/api/SolrSearch/get-document/${l}`;fetch(s,{method:"GET",headers:{"Tenant-Id":`${k.tenantId}`}}).then(c=>c.json()).then(c=>{this.activeProfile=c}).catch(c=>{console.error("Solr get-document API error:",c)})}else this.activeProfile=null}}}),_e={class:"green-bar"},ve={class:"container"},pe={id:"profile",class:"container"},he={class:"row space-bottom"},me=e("div",{class:"col-sm-4"},[e("img",{class:"results-image",src:M})],-1),fe={class:"col-sm-8"},ge={class:"profile-name"},Pe={class:"psh"},ye={class:"psh"},je={class:"email-value"},ke={key:0,class:"psh"},Se={class:"pronounce-value"},$e={key:1,class:"psh"},we={class:"pronounce-value"},be=["href"],Ie={class:"row space-bottom"},Le={class:"Keywords"},Re={class:"keyword-block"},xe={key:0,class:"psh"},Ce={class:"pronounce-value"},Ee=e("div",{class:"container research-project"}," Recent Indigenous-Engaged Research Projects ",-1),Ne={class:"container"},Te=e("div",{class:"container"},[e("div",{class:"contact-link"}," Have a question? "),e("div",{class:"contact-us"},[a(" Contact us at "),e("a",{href:"mailto:skipp@ualberta.ca",class:"mail-to-link"},"skipp@ualberta.ca")])],-1),De=$({__name:"ProfileView",setup(l){const s=S();S();const c=V();D();const _=c.params.id;s.setActiveProfile(_),console.log("activeProfile",JSON.stringify(s.activeProfile));const v=t(()=>O(s.activeProfile)),p=t(()=>q(s.activeProfile)),h=t(()=>W(s.activeProfile)),m=t(()=>G(s.activeProfile)),d=t(()=>J(s.activeProfile)),f=t(()=>Q(s.activeProfile)),w=t(()=>U(s.activeProfile)),y=t(()=>X(s.activeProfile)),j=t(()=>Y(s.activeProfile)),b=t(()=>Z(s.activeProfile));return z(()=>{window.scrollTo(0,0)}),(Ae,Be)=>{const I=H("router-link");return n(),i(u,null,[e("div",_e,[e("div",ve,[F(I,{to:"/",class:"navigation-menu-box"},{default:K(()=>[a("Return to Directory")]),_:1})])]),e("div",pe,[e("div",he,[me,e("div",fe,[e("div",ge,o(v.value),1),e("div",Pe,o(p.value)+" | "+o(d.value),1),e("div",ye,[a("Email: "),e("span",je,o(h.value),1)]),f.value?(n(),i("div",ke,[a("Pronounce: "),e("span",Se,o(f.value),1)])):g("",!0),y.value?(n(),i("div",$e,[a("Indigenous Nation / Community: "),e("span",we,o(y.value),1)])):g("",!0),e("div",null,[(n(!0),i(u,null,P(w.value,r=>(n(),i("div",null,[e("a",{class:"psh worklinks",target:"_blank",href:r},o(r),9,be)]))),256))])])]),e("div",Ie,[e("div",Le,[a("Research Keywords: "),(n(!0),i(u,null,P(m.value,r=>(n(),i("button",Re,o(r),1))),256))])]),j.value?(n(),i("div",xe,[a("Recently Engaged Indigenous Communities / Nation(s) / organization(s): "),e("span",Ce,o(j.value),1)])):g("",!0)]),Ee,e("div",null,[e("div",Ne,[(n(!0),i(u,null,P(b.value,r=>(n(),ee(ue,{key:r.id,model:r},null,8,["model"]))),128))])]),Te],64)}}});export{De as default};
