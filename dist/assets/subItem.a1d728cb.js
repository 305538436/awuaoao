import{h as u,a as x,a9 as o,j as t,k as i,Z as b,F as s,v as c,x as a,D as m,l,C as p,$ as g,B,u as L}from"./vue.543fafcc.js";import{o as $}from"./other.1cef4232.js";import"./preload-helper.41c905a7.js";import"./index.3b68140d.js";import"./index.302a91f9.js";import"./commonjsHelpers.35101cd5.js";import"./index.18e5bded.js";import"./keepAliveNames.cf66da55.js";import"./routesList.76e57b72.js";import"./themeConfig.9ce93220.js";import"./storage.542a95ff.js";import"./userInfo.4391f3f6.js";import"./loading.7efee3a8.js";import"./tagsViewRoutes.69b270cc.js";import"./index.4ac74e37.js";import"./index.070d5527.js";import"./index.9d1ed2fc.js";import"./vue-i18n.cjs.f888bd5c.js";import"./toolsValidate.7cb139e2.js";const I=["onClick"],S=u({name:"navMenuSubItem"}),U=u({...S,props:{chil:{type:Array,default:()=>[]}},setup(_){const d=_,h=x(()=>d.chil),k=n=>{$.handleOpenLink(n)};return(n,w)=>{const r=o("SvgIcon"),f=o("sub-item",!0),y=o("el-sub-menu"),C=o("el-menu-item");return t(!0),i(s,null,b(L(h),e=>(t(),i(s,null,[e.children&&e.children.length>0?(t(),c(y,{index:e.path,key:e.path},{title:a(()=>[m(r,{name:e.meta.icon},null,8,["name"]),l("span",null,p(n.$t(e.meta.title)),1)]),default:a(()=>[m(f,{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(t(),c(C,{index:e.path,key:e.path},{default:a(()=>[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?(t(),i(s,{key:0},[m(r,{name:e.meta.icon},null,8,["name"]),l("span",null,p(n.$t(e.meta.title)),1)],64)):(t(),i("a",{key:1,class:"w100",onClick:g(N=>k(e),["prevent"])},[m(r,{name:e.meta.icon},null,8,["name"]),B(" "+p(n.$t(e.meta.title)),1)],8,I))]),_:2},1032,["index"]))],64))),256)}}});export{U as default};
