import{_ as P}from"./preload-helper.41c905a7.js";import{h as $,ap as V,r as j,ar as k,aq as F,K as N,a as q,b as J,o as W,aJ as K,a9 as l,j as a,k as p,D as i,x as r,F as C,Z as U,u as y,v as L,l as g,C as f,a0 as Y,B as S,$ as R,J as Z}from"./vue.543fafcc.js";import{u as G}from"./routesList.76e57b72.js";import{u as Q}from"./themeConfig.9ce93220.js";import{o as X}from"./other.1cef4232.js";import{e as ee}from"./mitt.7f99bbc0.js";import{_ as te}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.3b68140d.js";import"./index.302a91f9.js";import"./_commonjsHelpers.35101cd5.js";import"./index.18e5bded.js";import"./keepAliveNames.cf66da55.js";import"./storage.542a95ff.js";import"./userInfo.4391f3f6.js";import"./loading.7efee3a8.js";import"./tagsViewRoutes.69b270cc.js";import"./index.4ac74e37.js";import"./index.070d5527.js";import"./index.9d1ed2fc.js";import"./vue-i18n.cjs.f888bd5c.js";import"./toolsValidate.7cb139e2.js";const ne={class:"el-menu-horizontal-warp"},oe=$({name:"navMenuHorizontal"}),se=$({...oe,props:{menuList:{type:Array,default:()=>[]}},setup(v){const x=v,z=V(()=>P(()=>import("./subItem.a1d728cb.js"),["./subItem.a1d728cb.js","./vue.543fafcc.js","./other.1cef4232.js","./preload-helper.41c905a7.js","./index.3b68140d.js","./index.302a91f9.js","./_commonjsHelpers.35101cd5.js","./index.18e5bded.js","./keepAliveNames.cf66da55.js","./routesList.76e57b72.js","./themeConfig.9ce93220.js","./storage.542a95ff.js","./userInfo.4391f3f6.js","./loading.7efee3a8.js","./loading.70fbfd85.css","./tagsViewRoutes.69b270cc.js","./index.4ac74e37.js","./index.070d5527.js","./index.8b89e2e0.css","./index.9d1ed2fc.js","./vue-i18n.cjs.f888bd5c.js","./toolsValidate.7cb139e2.js"],import.meta.url)),c=j(),A=G(),M=Q(),{routesList:b}=k(A),{themeConfig:d}=k(M),w=F(),u=N({defaultActive:""}),D=q(()=>x.menuList),B=n=>{const e=n.wheelDelta||-n.deltaY*40;c.value.$refs.wrapRef.scrollLeft=c.value.$refs.wrapRef.scrollLeft+e/4},H=()=>{Z(()=>{let n=document.querySelector(".el-menu.el-menu--horizontal li.is-active");if(!n)return!1;c.value.$refs.wrapRef.scrollLeft=n.offsetLeft})},_=n=>n.filter(e=>{var t;return!((t=e.meta)!=null&&t.isHide)}).map(e=>(e=Object.assign({},e),e.children&&(e.children=_(e.children)),e)),I=n=>{const e=n.split("/");let t={children:[]};return _(b.value).map((s,m)=>{s.path===`/${e[1]}`&&(s.k=m,t.item={...s},t.children=[{...s}],s.children&&(t.children=s.children))}),t},h=n=>{const{path:e,meta:t}=n;if(d.value.layout==="classic")u.defaultActive=`/${e==null?void 0:e.split("/")[1]}`;else{const s=t!=null&&t.isDynamic?t.isDynamicPath.split("/"):e.split("/");s.length>=4&&(t==null?void 0:t.isHide)?u.defaultActive=s.splice(0,3).join("/"):u.defaultActive=e}},T=n=>{X.handleOpenLink(n)};return J(()=>{h(w)}),W(()=>{H()}),K(n=>{h(n);let{layout:e,isClassicSplitMenu:t}=d.value;e==="classic"&&t&&ee.emit("setSendClassicChildren",I(n.path))}),(n,e)=>{const t=l("SvgIcon"),s=l("el-sub-menu"),m=l("el-menu-item"),E=l("el-menu"),O=l("el-scrollbar");return a(),p("div",ne,[i(O,{onWheel:R(B,["prevent"]),ref_key:"elMenuHorizontalScrollRef",ref:c},{default:r(()=>[i(E,{router:"","default-active":u.defaultActive,ellipsis:!1,"background-color":"transparent",mode:"horizontal"},{default:r(()=>[(a(!0),p(C,null,U(y(D),o=>(a(),p(C,null,[o.children&&o.children.length>0?(a(),L(s,{index:o.path,key:o.path},{title:r(()=>[i(t,{name:o.meta.icon},null,8,["name"]),g("span",null,f(n.$t(o.meta.title)),1)]),default:r(()=>[i(y(z),{chil:o.children},null,8,["chil"])]),_:2},1032,["index"])):(a(),L(m,{index:o.path,key:o.path},Y({_:2},[!o.meta.isLink||o.meta.isLink&&o.meta.isIframe?{name:"title",fn:r(()=>[i(t,{name:o.meta.icon},null,8,["name"]),S(" "+f(n.$t(o.meta.title)),1)]),key:"0"}:{name:"title",fn:r(()=>[g("a",{class:"w100",onClick:R(ie=>T(o),["prevent"])},[i(t,{name:o.meta.icon},null,8,["name"]),S(" "+f(n.$t(o.meta.title)),1)],8,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active"])]),_:1},8,["onWheel"])])}}});const ze=te(se,[["__scopeId","data-v-53f97f90"]]);export{ze as default};
