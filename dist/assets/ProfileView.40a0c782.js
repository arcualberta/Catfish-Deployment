import{d as C,y as t,V as B,W as N,X as V,Y as T,o,c as i,e,i as n,z as a,b as D,u as H,R as z,U as A,G as F,f as K,H as M,g as h,B as l,F as d,E as m,Z as S,$ as U,a0 as W,a1 as q,a2 as G,a3 as X,a4 as Y,a5 as Z,a6 as J,a7 as O,a8 as Q,A as ee}from"./index.671883ec.js";const se={class:"research-projects-background"},te={class:"container project-list-entry"},oe={class:"project-list"},ie=e("span",{class:"project-list-headers"},"Project Title : ",-1),ae={class:"project-list"},ne=e("span",{class:"project-list-headers"},"Project Description : ",-1),ce=["innerHTML"],le={class:"project-list"},re=e("span",{class:"project-list-headers"},"Research Initiated By : ",-1),de={class:"project-list"},_e=e("span",{class:"project-list-headers"},"Role Played By Community In Project : ",-1),ue=C({__name:"ProjectListEntry",props:{model:{}},setup(g){const s=g,_=t(()=>B(s.model)),u=t(()=>"<p>"+N(s.model).split(`
`).join("</p><p>")+"</p>"),r=t(()=>V(s.model)),p=t(()=>T(s.model));return(f,v)=>(o(),i("div",se,[e("div",te,[e("div",oe,[ie,n(" "+a(_.value),1)]),e("div",ae,[ne,n(),e("div",{innerHTML:u.value},null,8,ce)]),e("div",le,[re,n(" "+a(r.value),1)]),e("div",de,[_e,n(a(p.value),1)])])]))}});const pe={class:"green-bar"},ve={class:"container"},he={id:"profile",class:"container"},me={class:"profile-edit"},ge={class:"row space-bottom"},fe=e("div",{class:"col-sm-4"},[e("img",{class:"results-image",src:S})],-1),ye={class:"col-sm-8"},Pe={class:"profile-name"},ke={class:"psh"},je={class:"psh"},be={class:"email-value"},we={key:0,class:"psh"},$e={class:"pronounce-value"},Ce={key:1,class:"psh"},Le={class:"pronounce-value"},Re=["href"],Ee={class:"row space-bottom"},xe={class:"Keywords"},Ie={class:"keyword-block"},Be={key:0,class:"communities-org psh space-bottom"},Ne={class:"pronounce-value"},Ve={key:0,class:"container research-project"},Te={class:"container"},De=e("div",{class:"container"},[e("div",{class:"contact-link"}," Have a question? "),e("div",{class:"contact-us"},[n(" Contact us at "),e("a",{href:"mailto:skipp@ualberta.ca",class:"mail-to-link"},"skipp@ualberta.ca")])],-1),ze=C({__name:"ProfileView",setup(g){const s=D(),_=H(),u=z(),r=_.params.id;s.setActiveProfile(r);const p=t(()=>U(s.activeProfile)),f=t(()=>W(s.activeProfile)),v=t(()=>q(s.activeProfile)),L=t(()=>G(s.activeProfile)),R=t(()=>X(s.activeProfile)),y=t(()=>Y(s.activeProfile)),E=t(()=>Z(s.activeProfile)),P=t(()=>J(s.activeProfile)),k=t(()=>O(s.activeProfile)),j=t(()=>Q(s.activeProfile)),x=b=>{u.push({path:"/edit-profile/"+b})};return A(()=>{window.scrollTo(0,0)}),(b,w)=>{var $;const I=F("router-link");return o(),i(d,null,[e("div",pe,[e("div",ve,[K(I,{to:"/",class:"navigation-menu-box"},{default:M(()=>[n("Return to Directory")]),_:1})])]),e("div",he,[e("div",me,[h(s).isAdmin||v.value==h(s).currentUserEmail?(o(),i("button",{key:0,onClick:w[0]||(w[0]=c=>x(h(r))),class:"profilr-edit-button"},"Edit")):l("",!0)]),e("div",ge,[fe,e("div",ye,[e("div",Pe,a(p.value),1),e("div",ke,a(f.value)+" | "+a(R.value),1),e("div",je,[n("Email: "),e("span",be,a(v.value),1)]),y.value?(o(),i("div",we,[n("Pronounce: "),e("span",$e,a(y.value),1)])):l("",!0),P.value?(o(),i("div",Ce,[n("Indigenous Nation / Community: "),e("span",Le,a(P.value),1)])):l("",!0),e("div",null,[(o(!0),i(d,null,m(E.value,c=>(o(),i("div",null,[e("a",{class:"psh worklinks",target:"_blank",href:c},a(c),9,Re)]))),256))])])]),e("div",Ee,[e("div",xe,[n("Research Keywords: "),(o(!0),i(d,null,m(L.value,c=>(o(),i("button",Ie,a(c),1))),256))])]),k.value?(o(),i("div",Be,[n("Recently Engaged Indigenous Communities / Nation(s) / organization(s): "),e("span",Ne,a(k.value),1)])):l("",!0)]),(($=j.value)==null?void 0:$.length)>0?(o(),i("div",Ve," Recent Indigenous-Engaged Research Projects ")):l("",!0),e("div",null,[e("div",Te,[(o(!0),i(d,null,m(j.value,c=>(o(),ee(ue,{key:c.id,model:c},null,8,["model"]))),128))])]),De],64)}}});export{ze as default};