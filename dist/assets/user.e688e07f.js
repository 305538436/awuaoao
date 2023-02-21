import{_ as I}from"./preload-helper.41c905a7.js";import{h as P,ap as $,aH as Q,ar as B,r as W,K as X,a as Y,o as Z,a9 as f,j as ee,k as ne,D as n,x as o,B as a,C as m,l as c,n as M,u as w,q as oe}from"./vue.543fafcc.js";import{u as te}from"./vue-i18n.cjs.f888bd5c.js";import{u as se}from"./userInfo.4391f3f6.js";import{u as le}from"./themeConfig.9ce93220.js";import{o as re}from"./other.1cef4232.js";import{e as ae}from"./mitt.7f99bbc0.js";import{L as v,S as ie}from"./storage.542a95ff.js";import{ay as ue}from"./index.070d5527.js";import{J as ce}from"./index.4ac74e37.js";import{_ as de}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./index.3b68140d.js";import"./index.302a91f9.js";import"./index.18e5bded.js";import"./keepAliveNames.cf66da55.js";import"./routesList.76e57b72.js";import"./loading.7efee3a8.js";import"./tagsViewRoutes.69b270cc.js";import"./index.9d1ed2fc.js";import"./toolsValidate.7cb139e2.js";const O=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],g=(()=>{if(typeof document>"u")return!1;const l=O[0],r={};for(const t of O)if((t==null?void 0:t[1])in document){for(const[d,h]of t.entries())r[l[d]]=h;return r}return!1})(),T={change:g.fullscreenchange,error:g.fullscreenerror};let i={request(l=document.documentElement,r){return new Promise((t,p)=>{const d=()=>{i.off("change",d),t()};i.on("change",d);const h=l[g.requestFullscreen](r);h instanceof Promise&&h.then(d).catch(p)})},exit(){return new Promise((l,r)=>{if(!i.isFullscreen){l();return}const t=()=>{i.off("change",t),l()};i.on("change",t);const p=document[g.exitFullscreen]();p instanceof Promise&&p.then(t).catch(r)})},toggle(l,r){return i.isFullscreen?i.exit():i.request(l,r)},onchange(l){i.on("change",l)},onerror(l){i.on("error",l)},on(l,r){const t=T[l];t&&document.addEventListener(t,r,!1)},off(l,r){const t=T[l];t&&document.removeEventListener(t,r,!1)},raw:g};Object.defineProperties(i,{isFullscreen:{get:()=>Boolean(document[g.fullscreenElement])},element:{enumerable:!0,get:()=>document[g.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>Boolean(document[g.fullscreenEnabled])}});g||(i={isEnabled:!1});const E=i,me={class:"layout-navbars-breadcrumb-user-icon"},fe=["title"],ge={class:"layout-navbars-breadcrumb-user-icon"},pe=["title"],_e=["title"],be={class:"layout-navbars-breadcrumb-user-icon"},he=["title"],we={class:"layout-navbars-breadcrumb-user-link"},ve=["src"],Ce=P({name:"layoutBreadcrumbUser"}),Se=P({...Ce,setup(l){const r=$(()=>I(()=>import("./userNews.977374c7.js"),["./userNews.977374c7.js","./vue.543fafcc.js","./_plugin-vue_export-helper.c27b6911.js","./userNews.edecde0f.css"],import.meta.url)),t=$(()=>I(()=>import("./search.e4c828a2.js"),["./search.e4c828a2.js","./vue.543fafcc.js","./vue-i18n.cjs.f888bd5c.js","./_commonjsHelpers.35101cd5.js","./tagsViewRoutes.69b270cc.js","./storage.542a95ff.js","./_plugin-vue_export-helper.c27b6911.js","./search.2a7a69f2.css"],import.meta.url)),{locale:p,t:d}=te(),h=Q(),q=se(),x=le(),{userInfos:F}=B(q),{themeConfig:C}=B(x),y=W(),u=X({isScreenfull:!1,disabledI18n:"zh-cn",disabledSize:"large"}),L=Y(()=>{let e="";const{layout:_,isClassicSplitMenu:s}=C.value;return["defaults","columns"].includes(_)||_==="classic"&&!s?e="1":e="",e}),N=()=>{if(!E.isEnabled)return ue.warning("暂不不支持全屏"),!1;E.toggle(),E.on("change",()=>{E.isFullscreen?u.isScreenfull=!0:u.isScreenfull=!1})},R=()=>{ae.emit("openSetingsDrawer")},A=e=>{e==="logOut"?ce({closeOnClickModal:!1,closeOnPressEscape:!1,title:d("message.user.logOutTitle"),message:d("message.user.logOutMessage"),showCancelButton:!0,confirmButtonText:d("message.user.logOutConfirm"),cancelButtonText:d("message.user.logOutCancel"),buttonSize:"default",beforeClose:(_,s,b)=>{_==="confirm"?(s.confirmButtonLoading=!0,s.confirmButtonText=d("message.user.logOutExit"),setTimeout(()=>{b(),setTimeout(()=>{s.confirmButtonLoading=!1},300)},700)):b()}}).then(async()=>{ie.clear(),window.location.reload()}).catch(()=>{}):e==="wareHouse"?window.open("https://gitee.com/lyt-top/vue-next-admin"):h.push(e)},D=()=>{y.value.openSearch()},V=e=>{v.remove("themeConfig"),C.value.globalComponentSize=e,v.set("themeConfig",C.value),S("globalComponentSize","disabledSize"),window.location.reload()},H=e=>{v.remove("themeConfig"),C.value.globalI18n=e,v.set("themeConfig",C.value),p.value=e,re.useTitle(),S("globalI18n","disabledI18n")},S=(e,_)=>{u[_]=v.get("themeConfig")[e]};return Z(()=>{v.get("themeConfig")&&(S("globalComponentSize","disabledSize"),S("globalI18n","disabledI18n"))}),(e,_)=>{const s=f("el-dropdown-item"),b=f("el-dropdown-menu"),k=f("el-dropdown"),U=f("ele-Search"),z=f("el-icon"),j=f("ele-Bell"),J=f("el-badge"),K=f("el-popover"),G=f("ele-ArrowDown");return ee(),ne("div",{class:"layout-navbars-breadcrumb-user pr15",style:oe({flex:w(L)})},[n(k,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:V},{dropdown:o(()=>[n(b,null,{default:o(()=>[n(s,{command:"large",disabled:u.disabledSize==="large"},{default:o(()=>[a(m(e.$t("message.user.dropdownLarge")),1)]),_:1},8,["disabled"]),n(s,{command:"default",disabled:u.disabledSize==="default"},{default:o(()=>[a(m(e.$t("message.user.dropdownDefault")),1)]),_:1},8,["disabled"]),n(s,{command:"small",disabled:u.disabledSize==="small"},{default:o(()=>[a(m(e.$t("message.user.dropdownSmall")),1)]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[c("div",me,[c("i",{class:"iconfont icon-ziti",title:e.$t("message.user.title0")},null,8,fe)])]),_:1}),n(k,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:H},{dropdown:o(()=>[n(b,null,{default:o(()=>[n(s,{command:"zh-cn",disabled:u.disabledI18n==="zh-cn"},{default:o(()=>[a("简体中文")]),_:1},8,["disabled"]),n(s,{command:"en",disabled:u.disabledI18n==="en"},{default:o(()=>[a("English")]),_:1},8,["disabled"]),n(s,{command:"zh-tw",disabled:u.disabledI18n==="zh-tw"},{default:o(()=>[a("繁體中文")]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[c("div",ge,[c("i",{class:M(["iconfont",u.disabledI18n==="en"?"icon-fuhao-yingwen":"icon-fuhao-zhongwen"]),title:e.$t("message.user.title1")},null,10,pe)])]),_:1}),c("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:D},[n(z,{title:e.$t("message.user.title2")},{default:o(()=>[n(U)]),_:1},8,["title"])]),c("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:R},[c("i",{class:"icon-skin iconfont",title:e.$t("message.user.title3")},null,8,_e)]),c("div",be,[n(K,{placement:"bottom",trigger:"click",transition:"el-zoom-in-top",width:300,persistent:!1},{reference:o(()=>[n(J,{"is-dot":!0},{default:o(()=>[n(z,{title:e.$t("message.user.title4")},{default:o(()=>[n(j)]),_:1},8,["title"])]),_:1})]),default:o(()=>[n(w(r))]),_:1})]),c("div",{class:"layout-navbars-breadcrumb-user-icon mr10",onClick:N},[c("i",{class:M(["iconfont",u.isScreenfull?"icon-tuichuquanping":"icon-fullscreen"]),title:u.isScreenfull?e.$t("message.user.title6"):e.$t("message.user.title5")},null,10,he)]),n(k,{"show-timeout":70,"hide-timeout":50,onCommand:A},{dropdown:o(()=>[n(b,null,{default:o(()=>[n(s,{command:"/home"},{default:o(()=>[a(m(e.$t("message.user.dropdown1")),1)]),_:1}),n(s,{command:"wareHouse"},{default:o(()=>[a(m(e.$t("message.user.dropdown6")),1)]),_:1}),n(s,{command:"/personal"},{default:o(()=>[a(m(e.$t("message.user.dropdown2")),1)]),_:1}),n(s,{command:"/404"},{default:o(()=>[a(m(e.$t("message.user.dropdown3")),1)]),_:1}),n(s,{command:"/401"},{default:o(()=>[a(m(e.$t("message.user.dropdown4")),1)]),_:1}),n(s,{divided:"",command:"logOut"},{default:o(()=>[a(m(e.$t("message.user.dropdown5")),1)]),_:1})]),_:1})]),default:o(()=>[c("span",we,[c("img",{src:w(F).photo,class:"layout-navbars-breadcrumb-user-link-photo mr5"},null,8,ve),a(" "+m(w(F).userName===""?"common":w(F).userName)+" ",1),n(z,{class:"el-icon--right"},{default:o(()=>[n(G)]),_:1})])]),_:1}),n(w(t),{ref_key:"searchRef",ref:y},null,512)],4)}}});const Ue=de(Se,[["__scopeId","data-v-e4977559"]]);export{Ue as default};
