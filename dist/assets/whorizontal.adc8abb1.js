import{_ as P}from"./wpreload-helper.41c905a7.js";import{h as $,ap as V,r as j,ar as k,aq as F,K as N,a as q,b as J,o as W,aJ as K,a9 as l,j as a,k as p,D as i,x as r,F as C,Z as U,u as y,v as L,l as g,C as f,a0 as Y,B as S,$ as R,J as Z}from"./wvue.543fafcc.js";import{u as G}from"./wroutesList.b4999d7a.js";import{u as Q}from"./wthemeConfig.4ccac927.js";import{o as X}from"./wother.174cc23e.js";import{e as ee}from"./wmitt.7f99bbc0.js";import{_ as te}from"./w_plugin-vue_export-helper.c27b6911.js";import"./windex.cc27eb80.js";import"./windex.58f86341.js";import"./w_commonjsHelpers.35101cd5.js";import"./windex.648b1846.js";import"./wkeepAliveNames.9e4e0144.js";import"./wstorage.542a95ff.js";import"./wuserInfo.c27839b7.js";import"./wloading.07a582de.js";import"./wtagsViewRoutes.ea10ebfc.js";import"./wrequest.acec0f73.js";import"./windex.23774c5f.js";import"./windex.f419634e.js";import"./windex.d0536d1b.js";import"./wvue-i18n.cjs.fce01098.js";import"./wtoolsValidate.7cb139e2.js";const ne={class:"el-menu-horizontal-warp"},oe=$({name:"navMenuHorizontal"}),se=$({...oe,props:{menuList:{type:Array,default:()=>[]}},setup(v){const x=v,z=V(()=>P(()=>import("./wsubItem.38f086a7.js"),["./wsubItem.38f086a7.js","./wvue.543fafcc.js","./wother.174cc23e.js","./wpreload-helper.41c905a7.js","./windex.cc27eb80.js","./windex.58f86341.js","./w_commonjsHelpers.35101cd5.js","./windex.648b1846.js","./wkeepAliveNames.9e4e0144.js","./wroutesList.b4999d7a.js","./wthemeConfig.4ccac927.js","./wstorage.542a95ff.js","./wuserInfo.c27839b7.js","./wloading.07a582de.js","./wloading.70fbfd85.css","./wtagsViewRoutes.ea10ebfc.js","./wrequest.acec0f73.js","./windex.23774c5f.js","./windex.f419634e.js","./windex.8b89e2e0.css","./windex.d0536d1b.js","./wvue-i18n.cjs.fce01098.js","./wtoolsValidate.7cb139e2.js"],import.meta.url)),c=j(),A=G(),M=Q(),{routesList:b}=k(A),{themeConfig:d}=k(M),w=F(),u=N({defaultActive:""}),D=q(()=>x.menuList),B=n=>{const e=n.wheelDelta||-n.deltaY*40;c.value.$refs.wrapRef.scrollLeft=c.value.$refs.wrapRef.scrollLeft+e/4},H=()=>{Z(()=>{let n=document.querySelector(".el-menu.el-menu--horizontal li.is-active");if(!n)return!1;c.value.$refs.wrapRef.scrollLeft=n.offsetLeft})},_=n=>n.filter(e=>{var t;return!((t=e.meta)!=null&&t.isHide)}).map(e=>(e=Object.assign({},e),e.children&&(e.children=_(e.children)),e)),I=n=>{const e=n.split("/");let t={children:[]};return _(b.value).map((s,m)=>{s.path===`/${e[1]}`&&(s.k=m,t.item={...s},t.children=[{...s}],s.children&&(t.children=s.children))}),t},h=n=>{const{path:e,meta:t}=n;if(d.value.layout==="classic")u.defaultActive=`/${e==null?void 0:e.split("/")[1]}`;else{const s=t!=null&&t.isDynamic?t.isDynamicPath.split("/"):e.split("/");s.length>=4&&(t==null?void 0:t.isHide)?u.defaultActive=s.splice(0,3).join("/"):u.defaultActive=e}},T=n=>{X.handleOpenLink(n)};return J(()=>{h(w)}),W(()=>{H()}),K(n=>{h(n);let{layout:e,isClassicSplitMenu:t}=d.value;e==="classic"&&t&&ee.emit("setSendClassicChildren",I(n.path))}),(n,e)=>{const t=l("SvgIcon"),s=l("el-sub-menu"),m=l("el-menu-item"),E=l("el-menu"),O=l("el-scrollbar");return a(),p("div",ne,[i(O,{onWheel:R(B,["prevent"]),ref_key:"elMenuHorizontalScrollRef",ref:c},{default:r(()=>[i(E,{router:"","default-active":u.defaultActive,ellipsis:!1,"background-color":"transparent",mode:"horizontal"},{default:r(()=>[(a(!0),p(C,null,U(y(D),o=>(a(),p(C,null,[o.children&&o.children.length>0?(a(),L(s,{index:o.path,key:o.path},{title:r(()=>[i(t,{name:o.meta.icon},null,8,["name"]),g("span",null,f(n.$t(o.meta.title)),1)]),default:r(()=>[i(y(z),{chil:o.children},null,8,["chil"])]),_:2},1032,["index"])):(a(),L(m,{index:o.path,key:o.path},Y({_:2},[!o.meta.isLink||o.meta.isLink&&o.meta.isIframe?{name:"title",fn:r(()=>[i(t,{name:o.meta.icon},null,8,["name"]),S(" "+f(n.$t(o.meta.title)),1)]),key:"0"}:{name:"title",fn:r(()=>[g("a",{class:"w100",onClick:R(ie=>T(o),["prevent"])},[i(t,{name:o.meta.icon},null,8,["name"]),S(" "+f(n.$t(o.meta.title)),1)],8,["onClick"])]),key:"1"}]),1032,["index"]))],64))),256))]),_:1},8,["default-active"])]),_:1},8,["onWheel"])])}}});const Ae=te(se,[["__scopeId","data-v-53f97f90"]]);export{Ae as default};
