import{_ as y,u as x,w as m,a as w,o as v,c as B,b as c,t as D,d as H}from"./entry-2bd808ff.mjs";const M={async setup(h,{expose:_}){_();let s,t;const r=x();let i;if(r.params.slug){let l=r.params.slug,o="",a="";Array.isArray(l)&&(a=l[0],o=l[1]);const n=`https://${a}/api/post/getBlogBySlug?slug=${o}`,p=([s,t]=m(()=>fetch(n)),s=await s,t(),s),d=([s,t]=m(()=>p.json()),s=await s,t(),s);let u=[];if(d.code==1){i=d.data;const e={};e.title=i.title,e.og_image=i.image,e.description="",e.url=r.fullPath;let f=[{property:"og:image",content:e.og_image},{property:"og:image:width",content:"600"},{property:"og:image:height",content:"300"},{property:"og:image:type",content:"website"},{property:"og:title",content:e.title},{property:"og:url",content:e.url}];u.push(...f),w({title:e==null?void 0:e.title,meta:[...u],link:[{rel:"icon",sizes:"32x32",href:"/_nuxt/assets/img/32x32.png"},{rel:"icon",sizes:"192x192",href:"/_nuxt/assets/img/192x192.png"},{rel:"apple-touch-icon",href:"/_nuxt/assets/img/180x180.png"}]})}else throw{statusCode:404,message:"Post not found"}}const g={route:r,data:i,formatDate:function(l){let o=new Date(l),a=""+(o.getMonth()+1),n=""+o.getDate(),p=o.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[p,a,n].join("-")}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}},T={key:0,class:"post"},b=["innerHTML"],j={class:"post-meta"},k={class:"date me-1"},A=["innerHTML"];function L(h,_,s,t,r,i){return t.data?(v(),B("div",T,[c("h1",{class:"title mt-3",innerHTML:t.data.title},null,8,b),c("div",j,[c("span",k,D(t.formatDate(t.data.created_at)),1)]),c("div",{class:"post-content mt-2",innerHTML:t.data.description},null,8,A)])):H("",!0)}var P=y(M,[["render",L],["__scopeId","data-v-34ed485c"]]);export{P as default};