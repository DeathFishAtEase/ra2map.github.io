import{_ as g,a as k,b as w}from"./YunBanner.vue_vue_type_style_index_0_lang-DC1GaRhU.js";import{d as y,V as $,i as C,f as r,j as V,o as n,c as i,g as l,F as u,h as a,k as s,e as o,l as m,al as Y}from"./app-DgD459NU.js";import"./helper-f8z8uJIo.js";const x=y({__name:"home",setup(B){const t=$(),_=C(),c=r(()=>_.path.startsWith("/page")),f=r(()=>{const e=t.value.notice;return e.enable&&(c.value?!e.hideInPages:!0)});return(e,N)=>{const p=Y,d=g,h=k,b=w,v=V("RouterView");return n(),i(u,null,[l(p,{"show-hamburger":!1}),c.value?o("v-if",!0):(n(),i(u,{key:0},[a(t).banner.enable?(n(),s(d,{key:0})):o("v-if",!0),a(t).say.enable?(n(),s(h,{key:1,w:"full"})):o("v-if",!0)],64)),f.value?(n(),s(b,{key:1,content:a(t).notice.content,mt:"4"},null,8,["content"])):o("v-if",!0),m(e.$slots,"board"),m(e.$slots,"default",{},()=>[l(v)]),o(`<main class="yun-main flex-center" :class="(isHome && !app.isSidebarOpen) ? 'pl-0' : 'md:pl-$va-sidebar-width'"
    flex="~ col" w="full">

    <YunFooter />
  </main>`)],64)}}});export{x as default};
