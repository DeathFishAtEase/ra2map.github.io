import{d,o as a,c,a as r,l as T,V as w,s as h,M as x,t as v,e as m,f as y,n as b,F as B,r as M,y as $,h as k,k as S,g as Y,ab as H}from"./app-DgD459NU.js";import{r as D}from"./helper-f8z8uJIo.js";const E={class:"yun-notice m-auto"},L=["innerHTML"],Q=d({__name:"YunNotice",props:{content:{}},setup(p){return(e,n)=>(a(),c("div",E,[r("span",{innerHTML:e.content},null,8,L),T(e.$slots,"default")]))}}),N={class:"say"},V={key:0,class:"say-content animate-fade-in animate-iteration-1"},z={key:1,class:"say-author"},F={key:2,class:"say-from"},R=d({__name:"YunSay",setup(p){const e=w(),n=h(""),l=h(""),u=h("");function _(){const o=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;o&&fetch(o).then(t=>{if(t.ok)t.json().then(s=>{if(e.value.say.hitokoto.enable)n.value=s.hitokoto,l.value=s.from_who,u.value=s.from;else{const i=s[Math.floor(Math.random()*s.length)];i.content?(n.value=i.content,l.value=i.author,u.value=i.from):n.value=i}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${t.status}`)}).catch(t=>{console.error(t.message)})}return x(()=>{_()}),(o,t)=>(a(),c("div",N,[n.value?(a(),c("span",V,v(n.value),1)):m("v-if",!0),l.value?(a(),c("span",z,v(l.value),1)):m("v-if",!0),u.value?(a(),c("span",F,v(u.value),1)):m("v-if",!0)]))}}),A=r("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),G=[A],j=d({__name:"YunGoDown",setup(p){function e(){const n=document.getElementById("yun-banner");n&&window.scrollTo({top:n.clientHeight,behavior:"smooth"})}return(n,l)=>(a(),c("button",{class:"go-down","aria-label":"go-down",onClick:e},G))}}),I={class:"banner-line-container"},P={class:"banner-char-container"},q={class:"char"},J={class:"banner-line-container bottom"},U=d({__name:"YunBanner",setup(p){const e=w(),n=y(()=>{const o=[];for(let t=0;t<e.value.banner.title.length;t++){const s=D(1.5,3.5);o.push(s)}return o}),l=y(()=>n.value.reduce((o,t)=>o+t,0)/2),u=y(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${l.value}rem)`})),_=h(!0);return(o,t)=>{var g;const s=H,i=j;return a(),c("div",{id:"yun-banner",style:$(u.value)},[r("div",I,[r("div",{class:b(["banner-line vertical-line-top",{active:_.value}])},null,2)]),r("div",P,[(a(!0),c(B,null,M(k(e).banner.title,(C,f)=>(a(),c("div",{key:f,class:"char-box"},[r("span",{class:b([f%2!==0?"char-right":"char-left"]),style:$({"--banner-char-size":`${n.value[f]}rem`})},[r("span",q,v(C),1)],6)]))),128))]),r("div",J,[r("div",{class:b(["banner-line vertical-line-bottom",{active:_.value}])},null,2)]),(g=k(e).banner.cloud)!=null&&g.enable?(a(),S(s,{key:0})):m("v-if",!0),Y(i)],4)}}});export{U as _,R as a,Q as b};
