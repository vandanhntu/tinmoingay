import{_ as f,u as y,w as u,a as x,o as w,c as v,b as p,t as b,d as B}from"./entry-a506c9e7.mjs";const D={async setup(m,{expose:_}){_();let o,t;const r=y();let i;if(r.params.slug){let l=r.params.slug,s="";Array.isArray(l)&&(s=l[1]);const a=`https://pub.metaconex.io/api/post/getBlogByCode?code=${s}`,n=([o,t]=u(()=>fetch(a)),o=await o,t(),o),c=([o,t]=u(()=>n.json()),o=await o,t(),o);let g=[];if(c.code==1){i=c.data;const e={};e.title=i.title,e.og_image=i.image,e.description="",e.url=r.fullPath;let h=[{property:"og:image",content:e.og_image},{property:"og:image:width",content:"600"},{property:"og:image:height",content:"300"},{property:"og:image:type",content:"website"},{property:"og:title",content:e.title},{property:"og:url",content:e.url}];g.push(...h),x({title:e==null?void 0:e.title,meta:[...g],link:[{rel:"icon",sizes:"32x32",href:"/_nuxt/assets/img/32x32.png"},{rel:"icon",sizes:"192x192",href:"/_nuxt/assets/img/192x192.png"},{rel:"apple-touch-icon",href:"/_nuxt/assets/img/180x180.png"}]})}else throw{statusCode:404,message:"Post not found"}}const d={route:r,data:i,formatDate:function(l){let s=new Date(l),a=""+(s.getMonth()+1),n=""+s.getDate(),c=s.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[c,a,n].join("-")}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},H={key:0,class:"post"},M=["innerHTML"],T={class:"post-meta"},j={class:"date me-1"},k=["innerHTML"];function A(m,_,o,t,r,i){return t.data?(w(),v("div",H,[p("h1",{class:"title mt-3",innerHTML:t.data.title},null,8,M),p("div",T,[p("span",j,b(t.formatDate(t.data.created_at)),1)]),p("div",{class:"post-content mt-2",innerHTML:t.data.description},null,8,k)])):B("",!0)}var P=f(D,[["render",A],["__scopeId","data-v-415762e2"]]);export{P as default};
