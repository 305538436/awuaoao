import{_ as c}from"./wpreload-helper.41c905a7.js";import{h as d,ap as u,r as H,aq as L,ar as m,a as t,o as M,a9 as a,j as _,v as p,x as f,D as s,u as e,A,q as E}from"./wvue.740b6138.js";import{u as N}from"./wtagsViewRoutes.e33e101a.js";import{u as P}from"./wthemeConfig.d0b0ef54.js";import{N as B}from"./wloading.8fd7309f.js";import"./wstorage.542a95ff.js";const D=d({name:"layoutMain"}),G=d({...D,setup(I,{expose:y}){const g=u(()=>c(()=>import("./wparent.cd52abb8.js"),["./wparent.cd52abb8.js","./wpreload-helper.41c905a7.js","./wvue.740b6138.js","./wkeepAliveNames.6557c4c5.js","./wthemeConfig.d0b0ef54.js","./wstorage.542a95ff.js","./wmitt.7f99bbc0.js"],import.meta.url)),x=u(()=>c(()=>import("./windex.9a49dd99.js"),["./windex.9a49dd99.js","./wvue.740b6138.js","./w_plugin-vue_export-helper.c27b6911.js","./windex.ea410eee.css"],import.meta.url)),r=H(),h=L(),v=N(),b=P(),{themeConfig:o}=m(b),{isTagsViewCurrenFull:k}=m(v),w=t(()=>o.value.isFooter&&!h.meta.isIframe),C=t(()=>o.value.isFixedHeader),T=t(()=>o.value.isFixedHeader?".layout-backtop-header-fixed .el-scrollbar__wrap":".layout-backtop .el-scrollbar__wrap"),l=t(()=>{if(k.value)return"0px";const{isTagsview:n,layout:i}=o.value;return n&&i!=="classic"?"85px":"51px"});return M(()=>{B.done(600)}),y({layoutMainScrollbarRef:r}),(n,i)=>{const R=a("el-scrollbar"),V=a("el-backtop"),F=a("el-main");return _(),p(F,{class:"layout-main",style:E(e(C)?`height: calc(100% - ${e(l)})`:`minHeight: calc(100% - ${e(l)})`)},{default:f(()=>[s(R,{ref_key:"layoutMainScrollbarRef",ref:r,class:"layout-main-scroll layout-backtop-header-fixed","wrap-class":"layout-main-scroll","view-class":"layout-main-scroll"},{default:f(()=>[s(e(g)),e(w)?(_(),p(e(x),{key:0})):A("",!0)]),_:1},512),s(V,{target:e(T)},null,8,["target"])]),_:1},8,["style"])}}});export{G as default};