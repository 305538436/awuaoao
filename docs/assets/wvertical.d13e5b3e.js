import{_ as I}from"./wpreload-helper.41c905a7.js";import{h as y,ap as P,ar as T,aq as $,K as q,a as C,o as R,aK as V,w as W,a9 as c,j as s,v as p,x as i,k,F as g,Z as E,u,D as d,l as f,C as h,a0 as M,$ as O}from"./wvue.740b6138.js";import{u as j}from"./wthemeConfig.d0b0ef54.js";import{o as F}from"./wother.adfb51b2.js";import"./windex.b0c33291.js";import"./windex.2b3aae5b.js";import"./w_commonjsHelpers.35101cd5.js";import"./windex.21ed4667.js";import"./wkeepAliveNames.6557c4c5.js";import"./wroutesList.596526a5.js";import"./wstorage.542a95ff.js";import"./wuserInfo.dc6fc220.js";import"./wloading.8fd7309f.js";import"./wtagsViewRoutes.e33e101a.js";import"./wrequest.2ffe388a.js";import"./windex.e5dbaf17.js";import"./windex.1bceac5d.js";import"./windex.68010d60.js";import"./wvue-i18n.cjs.04c9b675.js";import"./wtoolsValidate.7cb139e2.js";const H=y({name:"navMenuVertical"}),pe=y({...H,props:{menuList:{type:Array,default:()=>[]}},setup(L){const A=L,D=P(()=>I(()=>import("./wsubItem.d2ac5ebd.js"),["./wsubItem.d2ac5ebd.js","./wvue.740b6138.js","./wother.adfb51b2.js","./wpreload-helper.41c905a7.js","./windex.b0c33291.js","./windex.2b3aae5b.js","./w_commonjsHelpers.35101cd5.js","./windex.21ed4667.js","./wkeepAliveNames.6557c4c5.js","./wroutesList.596526a5.js","./wthemeConfig.d0b0ef54.js","./wstorage.542a95ff.js","./wuserInfo.dc6fc220.js","./wloading.8fd7309f.js","./wloading.70fbfd85.css","./wtagsViewRoutes.e33e101a.js","./wrequest.2ffe388a.js","./windex.e5dbaf17.js","./windex.1bceac5d.js","./windex.8b89e2e0.css","./windex.68010d60.js","./wvue-i18n.cjs.04c9b675.js","./wtoolsValidate.7cb139e2.js"],import.meta.url)),b=j(),{themeConfig:a}=T(b),l=$(),o=q({defaultActive:l.meta.isDynamic?l.meta.isDynamicPath:l.path,isCollapse:!1}),S=C(()=>A.menuList),v=C(()=>a.value),_=n=>{const{path:r,meta:t}=n,m=t!=null&&t.isDynamic?t.isDynamicPath.split("/"):r.split("/");return m.length>=4&&(t==null?void 0:t.isHide)?m.splice(0,3).join("/"):r},w=n=>{F.handleOpenLink(n)};return R(()=>{o.defaultActive=_(l)}),V(n=>{o.defaultActive=_(n),document.body.clientWidth<1e3&&(a.value.isCollapse=!1)}),W(a.value,()=>{document.body.clientWidth<=1e3?o.isCollapse=!1:o.isCollapse=a.value.isCollapse},{immediate:!0}),(n,r)=>{const t=c("SvgIcon"),m=c("el-sub-menu"),x=c("el-menu-item"),B=c("el-menu");return s(),p(B,{router:"","default-active":o.defaultActive,"background-color":"transparent",collapse:o.isCollapse,"unique-opened":u(v).isUniqueOpened,"collapse-transition":!1},{default:i(()=>[(s(!0),k(g,null,E(u(S),e=>(s(),k(g,null,[e.children&&e.children.length>0?(s(),p(m,{index:e.path,key:e.path},{title:i(()=>[d(t,{name:e.meta.icon},null,8,["name"]),f("span",null,h(n.$t(e.meta.title)),1)]),default:i(()=>[d(u(D),{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(s(),p(x,{index:e.path,key:e.path},M({default:i(()=>[d(t,{name:e.meta.icon},null,8,["name"])]),_:2},[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?{name:"title",fn:i(()=>[f("span",null,h(n.$t(e.meta.title)),1)]),key:"0"}:{name:"title",fn:i(()=>[f("a",{class:"w100",onClick:O(K=>w(e),["prevent"])},h(n.$t(e.meta.title)),9,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active","collapse","unique-opened"])}}});export{pe as default};
