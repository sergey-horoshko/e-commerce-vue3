import{_ as m}from"./Product-DpesC2le.js";import{s as _}from"./index-CwMS0rzB.js";import{d as f,r as l,_ as h,a as u,b as v,o as s,c as a,e as p,F as y,f as k,g as x,h as S}from"./index-DLW0Bkq-.js";import{g as P}from"./products-rqLBrR2l.js";const w=f("products",()=>{const t=l(!0),o=l([]);return{pending:t,products:o,getData:async()=>{t.value=!0;try{o.value=await P()}catch(e){console.log(e)}finally{t.value=!1}}}}),B={setup(){const t=w(),o=u(()=>t.products),r=u(()=>t.pending),{getData:e}=t;return v(async()=>{if(await e(),localStorage.getItem("favorites")){const i=JSON.parse(localStorage.getItem("favorites"));o.value.forEach(n=>{n.isFavorite=!!i.find(c=>c.id===n.id)})}}),{products:o,pending:r}},components:{Product:m}},b={class:"flex min-h-60 w-full flex-col"},D=S("h1",{class:"mb-3 mr-auto text-[36px] font-bold"},"Каталог",-1),F={key:1,class:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"};function N(t,o,r,e,i,n){const c=_,g=m;return s(),a("div",b,[D,e.pending?(s(),p(c,{key:0})):(s(),a("div",F,[e.products.length?(s(!0),a(y,{key:0},k(e.products,d=>(s(),p(g,{key:d.id,item:d},null,8,["item"]))),128)):x("",!0)]))])}const H=h(B,[["render",N]]);export{H as default};