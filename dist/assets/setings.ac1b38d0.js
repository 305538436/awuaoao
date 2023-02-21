import{u as pe}from"./vue-i18n.cjs.f888bd5c.js";import{h as K,ar as he,K as _e,a as Ce,o as xe,J as Ve,a4 as we,a9 as g,j as $e,k as Be,D as n,x as b,B as w,C as i,l,u as a,q as _,n as S,aE as Te,aF as Ie}from"./vue.543fafcc.js";import{u as Se}from"./themeConfig.9ce93220.js";import{ay as M}from"./index.070d5527.js";import{a as ke}from"./toolsValidate.7cb139e2.js";import{L as C}from"./storage.542a95ff.js";import{c as Me}from"./commonFunction.2c1a7c45.js";import{o as ze}from"./other.1cef4232.js";import{e as k}from"./mitt.7f99bbc0.js";import{_ as Ue}from"./plugin-vue_export-helper.c27b6911.js";import"./commonjsHelpers.35101cd5.js";import"./index.3b68140d.js";import"./formatTime.29ac8c52.js";import"./preload-helper.41c905a7.js";import"./index.302a91f9.js";import"./index.18e5bded.js";import"./keepAliveNames.cf66da55.js";import"./routesList.76e57b72.js";import"./userInfo.4391f3f6.js";import"./loading.7efee3a8.js";import"./tagsViewRoutes.69b270cc.js";import"./index.4ac74e37.js";import"./index.9d1ed2fc.js";function z(){return{hexToRgb:r=>{let f="";if(!/^\#?[0-9A-Fa-f]{6}$/.test(r))return M.warning("输入错误的hex"),"";r=r.replace("#",""),f=r.match(/../g);for(let d=0;d<3;d++)f[d]=parseInt(f[d],16);return f},rgbToHex:(r,f,T)=>{let d=/^\d{1,3}$/;if(!d.test(r)||!d.test(f)||!d.test(T))return M.warning("输入错误的rgb颜色值"),"";let c=[r.toString(16),f.toString(16),T.toString(16)];for(let e=0;e<3;e++)c[e].length==1&&(c[e]=`0${c[e]}`);return`#${c.join("")}`},getDarkColor:(r,f)=>{if(!/^\#?[0-9A-Fa-f]{6}$/.test(r))return M.warning("输入错误的hex颜色值"),"";let d=z().hexToRgb(r);for(let c=0;c<3;c++)d[c]=Math.floor(d[c]*(1-f));return z().rgbToHex(d[0],d[1],d[2])},getLightColor:(r,f)=>{if(!/^\#?[0-9A-Fa-f]{6}$/.test(r))return M.warning("输入错误的hex颜色值"),"";let d=z().hexToRgb(r);for(let c=0;c<3;c++)d[c]=Math.floor((255-d[c])*f+d[c]);return z().rgbToHex(d[0],d[1],d[2])}}}const J=v=>{const x="1.23452384164.123412416";document.getElementById(x)!==null&&document.body.removeChild(document.getElementById(x));const B=document.createElement("canvas");B.width=200,B.height=130;const I=B.getContext("2d");I.rotate(-20*Math.PI/180),I.font="12px Vedana",I.fillStyle="rgba(200, 200, 200, 0.30)",I.textBaseline="middle",I.fillText(v,B.width/10,B.height/2);const r=document.createElement("div");return r.id=x,r.style.pointerEvents="none",r.style.top="0px",r.style.left="0px",r.style.position="fixed",r.style.zIndex="10000000",r.style.width=`${document.documentElement.clientWidth}px`,r.style.height=`${document.documentElement.clientHeight}px`,r.style.background=`url(${B.toDataURL("image/png")}) left top repeat`,document.body.appendChild(r),x},P={set:v=>{let x=J(v);document.getElementById(x)===null&&(x=J(v))},del:()=>{let v="1.23452384164.123412416";document.getElementById(v)!==null&&document.body.removeChild(document.getElementById(v))}},$=v=>(Te("data-v-813cba48"),v=v(),Ie(),v),De={class:"layout-breadcrumb-seting"},Le={class:"layout-breadcrumb-seting-bar-flex"},Ae=$(()=>l("div",{class:"layout-breadcrumb-seting-bar-flex-label"},"primary",-1)),Ee={class:"layout-breadcrumb-seting-bar-flex-value"},Ge={class:"layout-breadcrumb-seting-bar-flex mt15"},Fe={class:"layout-breadcrumb-seting-bar-flex-label"},He={class:"layout-breadcrumb-seting-bar-flex-value"},Re={class:"layout-breadcrumb-seting-bar-flex"},Pe={class:"layout-breadcrumb-seting-bar-flex-label"},We={class:"layout-breadcrumb-seting-bar-flex-value"},qe={class:"layout-breadcrumb-seting-bar-flex"},Oe={class:"layout-breadcrumb-seting-bar-flex-label"},Ne={class:"layout-breadcrumb-seting-bar-flex-value"},je={class:"layout-breadcrumb-seting-bar-flex mt10"},Je={class:"layout-breadcrumb-seting-bar-flex-label"},Ke={class:"layout-breadcrumb-seting-bar-flex-value"},Qe={class:"layout-breadcrumb-seting-bar-flex"},Xe={class:"layout-breadcrumb-seting-bar-flex-label"},Ye={class:"layout-breadcrumb-seting-bar-flex-value"},Ze={class:"layout-breadcrumb-seting-bar-flex"},el={class:"layout-breadcrumb-seting-bar-flex-label"},ll={class:"layout-breadcrumb-seting-bar-flex-value"},al={class:"layout-breadcrumb-seting-bar-flex"},tl={class:"layout-breadcrumb-seting-bar-flex-label"},sl={class:"layout-breadcrumb-seting-bar-flex-value"},ol={class:"layout-breadcrumb-seting-bar-flex mt14"},nl={class:"layout-breadcrumb-seting-bar-flex-label"},il={class:"layout-breadcrumb-seting-bar-flex-value"},rl={class:"layout-breadcrumb-seting-bar-flex-label"},ul={class:"layout-breadcrumb-seting-bar-flex-value"},dl={class:"layout-breadcrumb-seting-bar-flex-label"},ml={class:"layout-breadcrumb-seting-bar-flex-value"},cl={class:"layout-breadcrumb-seting-bar-flex-label"},bl={class:"layout-breadcrumb-seting-bar-flex-value"},yl={class:"layout-breadcrumb-seting-bar-flex-label"},gl={class:"layout-breadcrumb-seting-bar-flex-value"},vl={class:"layout-breadcrumb-seting-bar-flex-label"},fl={class:"layout-breadcrumb-seting-bar-flex-value"},pl={class:"layout-breadcrumb-seting-bar-flex-label"},hl={class:"layout-breadcrumb-seting-bar-flex-value"},_l={class:"layout-breadcrumb-seting-bar-flex mt15"},Cl={class:"layout-breadcrumb-seting-bar-flex-label"},xl={class:"layout-breadcrumb-seting-bar-flex-value"},Vl={class:"layout-breadcrumb-seting-bar-flex-label"},wl={class:"layout-breadcrumb-seting-bar-flex-value"},$l={class:"layout-breadcrumb-seting-bar-flex mt15"},Bl={class:"layout-breadcrumb-seting-bar-flex-label"},Tl={class:"layout-breadcrumb-seting-bar-flex-value"},Il={class:"layout-breadcrumb-seting-bar-flex mt11"},Sl={class:"layout-breadcrumb-seting-bar-flex-label"},kl={class:"layout-breadcrumb-seting-bar-flex-value"},Ml={class:"layout-breadcrumb-seting-bar-flex mt15"},zl={class:"layout-breadcrumb-seting-bar-flex-label"},Ul={class:"layout-breadcrumb-seting-bar-flex-value"},Dl={class:"layout-breadcrumb-seting-bar-flex-label"},Ll={class:"layout-breadcrumb-seting-bar-flex-value"},Al={class:"layout-breadcrumb-seting-bar-flex mt15"},El={class:"layout-breadcrumb-seting-bar-flex-label"},Gl={class:"layout-breadcrumb-seting-bar-flex-value"},Fl={class:"layout-breadcrumb-seting-bar-flex mt15"},Hl={class:"layout-breadcrumb-seting-bar-flex-label"},Rl={class:"layout-breadcrumb-seting-bar-flex-value"},Pl={class:"layout-breadcrumb-seting-bar-flex mt15"},Wl={class:"layout-breadcrumb-seting-bar-flex-label"},ql={class:"layout-breadcrumb-seting-bar-flex-value"},Ol={class:"layout-breadcrumb-seting-bar-flex mt15"},Nl={class:"layout-breadcrumb-seting-bar-flex-label"},jl={class:"layout-breadcrumb-seting-bar-flex-value"},Jl={class:"layout-breadcrumb-seting-bar-flex-label"},Kl={class:"layout-breadcrumb-seting-bar-flex-value"},Ql={class:"layout-breadcrumb-seting-bar-flex mt15"},Xl={class:"layout-breadcrumb-seting-bar-flex-label"},Yl={class:"layout-breadcrumb-seting-bar-flex-value"},Zl={class:"layout-breadcrumb-seting-bar-flex mt15"},ea={class:"layout-breadcrumb-seting-bar-flex-label"},la={class:"layout-breadcrumb-seting-bar-flex-value"},aa={class:"layout-breadcrumb-seting-bar-flex mt15"},ta={class:"layout-breadcrumb-seting-bar-flex-label"},sa={class:"layout-breadcrumb-seting-bar-flex-value"},oa={class:"layout-breadcrumb-seting-bar-flex mt15"},na={class:"layout-breadcrumb-seting-bar-flex-label"},ia={class:"layout-breadcrumb-seting-bar-flex-value"},ra={class:"layout-breadcrumb-seting-bar-flex mt15"},ua={class:"layout-breadcrumb-seting-bar-flex-label"},da={class:"layout-breadcrumb-seting-bar-flex-value"},ma={class:"layout-breadcrumb-seting-bar-flex mt14"},ca={class:"layout-breadcrumb-seting-bar-flex-label"},ba={class:"layout-breadcrumb-seting-bar-flex-value"},ya={class:"layout-breadcrumb-seting-bar-flex mt15"},ga={class:"layout-breadcrumb-seting-bar-flex-label"},va={class:"layout-breadcrumb-seting-bar-flex-value"},fa={class:"layout-breadcrumb-seting-bar-flex mt15"},pa={class:"layout-breadcrumb-seting-bar-flex-label"},ha={class:"layout-breadcrumb-seting-bar-flex-value"},_a={class:"layout-breadcrumb-seting-bar-flex-label"},Ca={class:"layout-breadcrumb-seting-bar-flex-value"},xa={class:"layout-breadcrumb-seting-bar-flex-label"},Va={class:"layout-breadcrumb-seting-bar-flex-value"},wa={class:"layout-drawer-content-flex"},$a=$(()=>l("aside",{class:"el-aside",style:{width:"20px"}},null,-1)),Ba=$(()=>l("section",{class:"el-container is-vertical"},[l("header",{class:"el-header",style:{height:"10px"}}),l("main",{class:"el-main"})],-1)),Ta=[$a,Ba],Ia={class:"layout-tips-box"},Sa={class:"layout-tips-txt"},ka=$(()=>l("header",{class:"el-header",style:{height:"10px"}},null,-1)),Ma=$(()=>l("section",{class:"el-container"},[l("aside",{class:"el-aside",style:{width:"20px"}}),l("section",{class:"el-container is-vertical"},[l("main",{class:"el-main"})])],-1)),za=[ka,Ma],Ua={class:"layout-tips-box"},Da={class:"layout-tips-txt"},La=$(()=>l("header",{class:"el-header",style:{height:"10px"}},null,-1)),Aa=$(()=>l("section",{class:"el-container"},[l("section",{class:"el-container is-vertical"},[l("main",{class:"el-main"})])],-1)),Ea=[La,Aa],Ga={class:"layout-tips-box"},Fa={class:"layout-tips-txt"},Ha=$(()=>l("aside",{class:"el-aside-dark",style:{width:"10px"}},null,-1)),Ra=$(()=>l("aside",{class:"el-aside",style:{width:"20px"}},null,-1)),Pa=$(()=>l("section",{class:"el-container is-vertical"},[l("header",{class:"el-header",style:{height:"10px"}}),l("main",{class:"el-main"})],-1)),Wa=[Ha,Ra,Pa],qa={class:"layout-tips-box"},Oa={class:"layout-tips-txt"},Na={class:"copy-config"},ja=K({name:"layoutBreadcrumbSeting"}),Ja=K({...ja,setup(v,{expose:x}){const{locale:B}=pe(),I=Se(),{themeConfig:r}=he(I),{copyText:f}=Me(),{getLightColor:T,getDarkColor:d}=z(),c=_e({isMobile:!1}),e=Ce(()=>r.value),W=()=>{if(!e.value.primary)return M.warning("全局主题 primary 颜色值不能为空");document.documentElement.style.setProperty("--el-color-primary-dark-2",`${d(e.value.primary,.1)}`),document.documentElement.style.setProperty("--el-color-primary",e.value.primary);for(let o=1;o<=9;o++)document.documentElement.style.setProperty(`--el-color-primary-light-${o}`,`${T(e.value.primary,o/10)}`);R()},y=o=>{document.documentElement.style.setProperty(`--next-bg-${o}`,r.value[o]),o==="menuBar"&&document.documentElement.style.setProperty("--next-bg-menuBar-light-1",T(e.value.menuBar,.05)),A(),E(),G(),R()},A=()=>{F(".layout-navbars-breadcrumb-index",e.value.isTopBarColorGradual,e.value.topBar)},E=()=>{F(".layout-container .el-aside",e.value.isMenuBarColorGradual,e.value.menuBar)},G=()=>{F(".layout-container .layout-columns-aside",e.value.isColumnsMenuBarColorGradual,e.value.columnsMenuBar)},F=(o,t,p)=>{setTimeout(()=>{let h=document.querySelector(o);if(!h)return!1;document.documentElement.style.setProperty("--el-menu-bg-color",document.documentElement.style.getPropertyValue("--next-bg-menuBar")),t?h.setAttribute("style",`background:linear-gradient(to bottom left , ${p}, ${T(p,.6)}) !important;`):h.setAttribute("style",""),u()},200)},Q=()=>{u()},X=()=>{R()},Y=()=>{e.value.isFixedHeaderChange=!e.value.isFixedHeader,u()},Z=()=>{e.value.isBreadcrumb=!1,u(),k.emit("getBreadcrumbIndexSetFilterRoutes")},ee=()=>{e.value.isShowLogoChange=!e.value.isShowLogo,u()},le=()=>{e.value.layout==="classic"&&(e.value.isClassicSplitMenu=!1),u()},ae=()=>{k.emit("openOrCloseSortable"),u()},te=()=>{k.emit("openShareTagsView"),u()},U=o=>{o==="grayscale"?e.value.isGrayscale&&(e.value.isInvert=!1):e.value.isInvert&&(e.value.isGrayscale=!1);const t=o==="grayscale"?`grayscale(${e.value.isGrayscale?1:0})`:`invert(${e.value.isInvert?"80%":"0%"})`;document.body.setAttribute("style",`filter: ${t}`),u()},q=()=>{const o=document.documentElement;e.value.isIsDark?o.setAttribute("data-theme","dark"):o.setAttribute("data-theme","")},O=()=>{e.value.isWartermark?P.set(e.value.wartermarkText):P.del(),u()},se=o=>{if(e.value.wartermarkText=ke(o),e.value.wartermarkText==="")return!1;e.value.isWartermark&&P.set(e.value.wartermarkText),u()},D=o=>{if(C.set("oldLayout",o),e.value.layout===o)return!1;o==="transverse"&&(e.value.isCollapse=!1),e.value.layout=o,e.value.isDrawer=!1,H()},H=()=>{y("menuBar"),y("menuBarColor"),y("menuBarActiveColor"),y("topBar"),y("topBarColor"),y("columnsMenuBar"),y("columnsMenuBarColor")},oe=()=>{e.value.isFixedHeaderChange=!1,e.value.isShowLogoChange=!1,e.value.isDrawer=!1,u()},ne=()=>{e.value.isDrawer=!0},R=()=>{u(),ie()},u=()=>{C.remove("themeConfig"),C.set("themeConfig",e.value)},ie=()=>{C.set("themeConfigStyle",document.documentElement.style.cssText)},re=()=>{let o=C.get("themeConfig");o.isDrawer=!1,f(JSON.stringify(o)).then(()=>{e.value.isDrawer=!1})},ue=()=>{C.clear(),window.location.reload(),C.set("version","2.4.21")},de=()=>{A(),E(),G()};return xe(()=>{Ve(()=>{C.get("frequency")||H(),C.set("frequency",1),k.on("layoutMobileResize",o=>{e.value.layout=o.layout,e.value.isDrawer=!1,H(),c.isMobile=ze.isMobile()}),setTimeout(()=>{W(),e.value.isGrayscale&&U("grayscale"),e.value.isInvert&&U("invert"),e.value.isIsDark&&q(),O(),C.get("themeConfig")&&(B.value=C.get("themeConfig").globalI18n),de()},100)})}),we(()=>{k.off("layoutMobileResize",()=>{})}),x({openDrawer:ne}),(o,t)=>{const p=g("el-divider"),h=g("el-color-picker"),m=g("el-switch"),me=g("el-input-number"),ce=g("el-input"),V=g("el-option"),L=g("el-select"),be=g("el-alert"),ye=g("ele-CopyDocument"),N=g("el-icon"),j=g("el-button"),ge=g("ele-RefreshRight"),ve=g("el-scrollbar"),fe=g("el-drawer");return $e(),Be("div",De,[n(fe,{title:o.$t("message.layout.configTitle"),modelValue:a(e).isDrawer,"onUpdate:modelValue":t[49]||(t[49]=s=>a(e).isDrawer=s),direction:"rtl","destroy-on-close":"",size:"260px",onClose:oe},{default:b(()=>[n(ve,{class:"layout-breadcrumb-seting-bar"},{default:b(()=>[n(p,{"content-position":"left"},{default:b(()=>[w(i(o.$t("message.layout.oneTitle")),1)]),_:1}),l("div",Le,[Ae,l("div",Ee,[n(h,{modelValue:a(e).primary,"onUpdate:modelValue":t[0]||(t[0]=s=>a(e).primary=s),size:"default",onChange:W},null,8,["modelValue"])])]),l("div",Ge,[l("div",Fe,i(o.$t("message.layout.fourIsDark")),1),l("div",He,[n(m,{modelValue:a(e).isIsDark,"onUpdate:modelValue":t[1]||(t[1]=s=>a(e).isIsDark=s),size:"small",onChange:q},null,8,["modelValue"])])]),n(p,{"content-position":"left"},{default:b(()=>[w(i(o.$t("message.layout.twoTopTitle")),1)]),_:1}),l("div",Re,[l("div",Pe,i(o.$t("message.layout.twoTopBar")),1),l("div",We,[n(h,{modelValue:a(e).topBar,"onUpdate:modelValue":t[2]||(t[2]=s=>a(e).topBar=s),size:"default",onChange:t[3]||(t[3]=s=>y("topBar"))},null,8,["modelValue"])])]),l("div",qe,[l("div",Oe,i(o.$t("message.layout.twoTopBarColor")),1),l("div",Ne,[n(h,{modelValue:a(e).topBarColor,"onUpdate:modelValue":t[4]||(t[4]=s=>a(e).topBarColor=s),size:"default",onChange:t[5]||(t[5]=s=>y("topBarColor"))},null,8,["modelValue"])])]),l("div",je,[l("div",Je,i(o.$t("message.layout.twoIsTopBarColorGradual")),1),l("div",Ke,[n(m,{modelValue:a(e).isTopBarColorGradual,"onUpdate:modelValue":t[6]||(t[6]=s=>a(e).isTopBarColorGradual=s),size:"small",onChange:A},null,8,["modelValue"])])]),n(p,{"content-position":"left"},{default:b(()=>[w(i(o.$t("message.layout.twoMenuTitle")),1)]),_:1}),l("div",Qe,[l("div",Xe,i(o.$t("message.layout.twoMenuBar")),1),l("div",Ye,[n(h,{modelValue:a(e).menuBar,"onUpdate:modelValue":t[7]||(t[7]=s=>a(e).menuBar=s),size:"default",onChange:t[8]||(t[8]=s=>y("menuBar"))},null,8,["modelValue"])])]),l("div",Ze,[l("div",el,i(o.$t("message.layout.twoMenuBarColor")),1),l("div",ll,[n(h,{modelValue:a(e).menuBarColor,"onUpdate:modelValue":t[9]||(t[9]=s=>a(e).menuBarColor=s),size:"default",onChange:t[10]||(t[10]=s=>y("menuBarColor"))},null,8,["modelValue"])])]),l("div",al,[l("div",tl,i(o.$t("message.layout.twoMenuBarActiveColor")),1),l("div",sl,[n(h,{modelValue:a(e).menuBarActiveColor,"onUpdate:modelValue":t[11]||(t[11]=s=>a(e).menuBarActiveColor=s),size:"default","show-alpha":"",onChange:t[12]||(t[12]=s=>y("menuBarActiveColor"))},null,8,["modelValue"])])]),l("div",ol,[l("div",nl,i(o.$t("message.layout.twoIsMenuBarColorGradual")),1),l("div",il,[n(m,{modelValue:a(e).isMenuBarColorGradual,"onUpdate:modelValue":t[13]||(t[13]=s=>a(e).isMenuBarColorGradual=s),size:"small",onChange:E},null,8,["modelValue"])])]),n(p,{"content-position":"left",style:_({opacity:a(e).layout!=="columns"?.5:1})},{default:b(()=>[w(i(o.$t("message.layout.twoColumnsTitle")),1)]),_:1},8,["style"]),l("div",{class:"layout-breadcrumb-seting-bar-flex",style:_({opacity:a(e).layout!=="columns"?.5:1})},[l("div",rl,i(o.$t("message.layout.twoColumnsMenuBar")),1),l("div",ul,[n(h,{modelValue:a(e).columnsMenuBar,"onUpdate:modelValue":t[14]||(t[14]=s=>a(e).columnsMenuBar=s),size:"default",onChange:t[15]||(t[15]=s=>y("columnsMenuBar")),disabled:a(e).layout!=="columns"},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex",style:_({opacity:a(e).layout!=="columns"?.5:1})},[l("div",dl,i(o.$t("message.layout.twoColumnsMenuBarColor")),1),l("div",ml,[n(h,{modelValue:a(e).columnsMenuBarColor,"onUpdate:modelValue":t[16]||(t[16]=s=>a(e).columnsMenuBarColor=s),size:"default",onChange:t[17]||(t[17]=s=>y("columnsMenuBarColor")),disabled:a(e).layout!=="columns"},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt14",style:_({opacity:a(e).layout!=="columns"?.5:1})},[l("div",cl,i(o.$t("message.layout.twoIsColumnsMenuBarColorGradual")),1),l("div",bl,[n(m,{modelValue:a(e).isColumnsMenuBarColorGradual,"onUpdate:modelValue":t[18]||(t[18]=s=>a(e).isColumnsMenuBarColorGradual=s),size:"small",onChange:G,disabled:a(e).layout!=="columns"},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt14",style:_({opacity:a(e).layout!=="columns"?.5:1})},[l("div",yl,i(o.$t("message.layout.twoIsColumnsMenuHoverPreload")),1),l("div",gl,[n(m,{modelValue:a(e).isColumnsMenuHoverPreload,"onUpdate:modelValue":t[19]||(t[19]=s=>a(e).isColumnsMenuHoverPreload=s),size:"small",onChange:Q,disabled:a(e).layout!=="columns"},null,8,["modelValue","disabled"])])],4),n(p,{"content-position":"left"},{default:b(()=>[w(i(o.$t("message.layout.threeTitle")),1)]),_:1}),l("div",{class:"layout-breadcrumb-seting-bar-flex",style:_({opacity:a(e).layout==="transverse"?.5:1})},[l("div",vl,i(o.$t("message.layout.threeIsCollapse")),1),l("div",fl,[n(m,{modelValue:a(e).isCollapse,"onUpdate:modelValue":t[20]||(t[20]=s=>a(e).isCollapse=s),disabled:a(e).layout==="transverse",size:"small",onChange:X},null,8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:a(e).layout==="transverse"?.5:1})},[l("div",pl,i(o.$t("message.layout.threeIsUniqueOpened")),1),l("div",hl,[n(m,{modelValue:a(e).isUniqueOpened,"onUpdate:modelValue":t[21]||(t[21]=s=>a(e).isUniqueOpened=s),disabled:a(e).layout==="transverse",size:"small",onChange:u},null,8,["modelValue","disabled"])])],4),l("div",_l,[l("div",Cl,i(o.$t("message.layout.threeIsFixedHeader")),1),l("div",xl,[n(m,{modelValue:a(e).isFixedHeader,"onUpdate:modelValue":t[22]||(t[22]=s=>a(e).isFixedHeader=s),size:"small",onChange:Y},null,8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:a(e).layout!=="classic"?.5:1})},[l("div",Vl,i(o.$t("message.layout.threeIsClassicSplitMenu")),1),l("div",wl,[n(m,{modelValue:a(e).isClassicSplitMenu,"onUpdate:modelValue":t[23]||(t[23]=s=>a(e).isClassicSplitMenu=s),disabled:a(e).layout!=="classic",size:"small",onChange:Z},null,8,["modelValue","disabled"])])],4),l("div",$l,[l("div",Bl,i(o.$t("message.layout.threeIsLockScreen")),1),l("div",Tl,[n(m,{modelValue:a(e).isLockScreen,"onUpdate:modelValue":t[24]||(t[24]=s=>a(e).isLockScreen=s),size:"small",onChange:u},null,8,["modelValue"])])]),l("div",Il,[l("div",Sl,i(o.$t("message.layout.threeLockScreenTime")),1),l("div",kl,[n(me,{modelValue:a(e).lockScreenTime,"onUpdate:modelValue":t[25]||(t[25]=s=>a(e).lockScreenTime=s),"controls-position":"right",min:1,max:9999,onChange:u,size:"default",style:{width:"90px"}},null,8,["modelValue"])])]),n(p,{"content-position":"left"},{default:b(()=>[w(i(o.$t("message.layout.fourTitle")),1)]),_:1}),l("div",Ml,[l("div",zl,i(o.$t("message.layout.fourIsShowLogo")),1),l("div",Ul,[n(m,{modelValue:a(e).isShowLogo,"onUpdate:modelValue":t[26]||(t[26]=s=>a(e).isShowLogo=s),size:"small",onChange:ee},null,8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:a(e).layout==="classic"||a(e).layout==="transverse"?.5:1})},[l("div",Dl,i(o.$t("message.layout.fourIsBreadcrumb")),1),l("div",Ll,[n(m,{modelValue:a(e).isBreadcrumb,"onUpdate:modelValue":t[27]||(t[27]=s=>a(e).isBreadcrumb=s),disabled:a(e).layout==="classic"||a(e).layout==="transverse",size:"small",onChange:le},null,8,["modelValue","disabled"])])],4),l("div",Al,[l("div",El,i(o.$t("message.layout.fourIsBreadcrumbIcon")),1),l("div",Gl,[n(m,{modelValue:a(e).isBreadcrumbIcon,"onUpdate:modelValue":t[28]||(t[28]=s=>a(e).isBreadcrumbIcon=s),size:"small",onChange:u},null,8,["modelValue"])])]),l("div",Fl,[l("div",Hl,i(o.$t("message.layout.fourIsTagsview")),1),l("div",Rl,[n(m,{modelValue:a(e).isTagsview,"onUpdate:modelValue":t[29]||(t[29]=s=>a(e).isTagsview=s),size:"small",onChange:u},null,8,["modelValue"])])]),l("div",Pl,[l("div",Wl,i(o.$t("message.layout.fourIsTagsviewIcon")),1),l("div",ql,[n(m,{modelValue:a(e).isTagsviewIcon,"onUpdate:modelValue":t[30]||(t[30]=s=>a(e).isTagsviewIcon=s),size:"small",onChange:u},null,8,["modelValue"])])]),l("div",Ol,[l("div",Nl,i(o.$t("message.layout.fourIsCacheTagsView")),1),l("div",jl,[n(m,{modelValue:a(e).isCacheTagsView,"onUpdate:modelValue":t[31]||(t[31]=s=>a(e).isCacheTagsView=s),size:"small",onChange:u},null,8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:c.isMobile?.5:1})},[l("div",Jl,i(o.$t("message.layout.fourIsSortableTagsView")),1),l("div",Kl,[n(m,{modelValue:a(e).isSortableTagsView,"onUpdate:modelValue":t[32]||(t[32]=s=>a(e).isSortableTagsView=s),disabled:!!c.isMobile,size:"small",onChange:ae},null,8,["modelValue","disabled"])])],4),l("div",Ql,[l("div",Xl,i(o.$t("message.layout.fourIsShareTagsView")),1),l("div",Yl,[n(m,{modelValue:a(e).isShareTagsView,"onUpdate:modelValue":t[33]||(t[33]=s=>a(e).isShareTagsView=s),size:"small",onChange:te},null,8,["modelValue"])])]),l("div",Zl,[l("div",ea,i(o.$t("message.layout.fourIsFooter")),1),l("div",la,[n(m,{modelValue:a(e).isFooter,"onUpdate:modelValue":t[34]||(t[34]=s=>a(e).isFooter=s),size:"small",onChange:u},null,8,["modelValue"])])]),l("div",aa,[l("div",ta,i(o.$t("message.layout.fourIsGrayscale")),1),l("div",sa,[n(m,{modelValue:a(e).isGrayscale,"onUpdate:modelValue":t[35]||(t[35]=s=>a(e).isGrayscale=s),size:"small",onChange:t[36]||(t[36]=s=>U("grayscale"))},null,8,["modelValue"])])]),l("div",oa,[l("div",na,i(o.$t("message.layout.fourIsInvert")),1),l("div",ia,[n(m,{modelValue:a(e).isInvert,"onUpdate:modelValue":t[37]||(t[37]=s=>a(e).isInvert=s),size:"small",onChange:t[38]||(t[38]=s=>U("invert"))},null,8,["modelValue"])])]),l("div",ra,[l("div",ua,i(o.$t("message.layout.fourIsWartermark")),1),l("div",da,[n(m,{modelValue:a(e).isWartermark,"onUpdate:modelValue":t[39]||(t[39]=s=>a(e).isWartermark=s),size:"small",onChange:O},null,8,["modelValue"])])]),l("div",ma,[l("div",ca,i(o.$t("message.layout.fourWartermarkText")),1),l("div",ba,[n(ce,{modelValue:a(e).wartermarkText,"onUpdate:modelValue":t[40]||(t[40]=s=>a(e).wartermarkText=s),size:"default",style:{width:"90px"},onInput:se},null,8,["modelValue"])])]),n(p,{"content-position":"left"},{default:b(()=>[w(i(o.$t("message.layout.fiveTitle")),1)]),_:1}),l("div",ya,[l("div",ga,i(o.$t("message.layout.fiveTagsStyle")),1),l("div",va,[n(L,{modelValue:a(e).tagsStyle,"onUpdate:modelValue":t[41]||(t[41]=s=>a(e).tagsStyle=s),placeholder:"请选择",size:"default",style:{width:"90px"},onChange:u},{default:b(()=>[n(V,{label:"风格1",value:"tags-style-one"}),n(V,{label:"风格4",value:"tags-style-four"}),n(V,{label:"风格5",value:"tags-style-five"})]),_:1},8,["modelValue"])])]),l("div",fa,[l("div",pa,i(o.$t("message.layout.fiveAnimation")),1),l("div",ha,[n(L,{modelValue:a(e).animation,"onUpdate:modelValue":t[42]||(t[42]=s=>a(e).animation=s),placeholder:"请选择",size:"default",style:{width:"90px"},onChange:u},{default:b(()=>[n(V,{label:"slide-right",value:"slide-right"}),n(V,{label:"slide-left",value:"slide-left"}),n(V,{label:"opacitys",value:"opacitys"})]),_:1},8,["modelValue"])])]),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15",style:_({opacity:a(e).layout!=="columns"?.5:1})},[l("div",_a,i(o.$t("message.layout.fiveColumnsAsideStyle")),1),l("div",Ca,[n(L,{modelValue:a(e).columnsAsideStyle,"onUpdate:modelValue":t[43]||(t[43]=s=>a(e).columnsAsideStyle=s),placeholder:"请选择",size:"default",style:{width:"90px"},disabled:a(e).layout!=="columns",onChange:u},{default:b(()=>[n(V,{label:"圆角",value:"columns-round"}),n(V,{label:"卡片",value:"columns-card"})]),_:1},8,["modelValue","disabled"])])],4),l("div",{class:"layout-breadcrumb-seting-bar-flex mt15 mb27",style:_({opacity:a(e).layout!=="columns"?.5:1})},[l("div",xa,i(o.$t("message.layout.fiveColumnsAsideLayout")),1),l("div",Va,[n(L,{modelValue:a(e).columnsAsideLayout,"onUpdate:modelValue":t[44]||(t[44]=s=>a(e).columnsAsideLayout=s),placeholder:"请选择",size:"default",style:{width:"90px"},disabled:a(e).layout!=="columns",onChange:u},{default:b(()=>[n(V,{label:"水平",value:"columns-horizontal"}),n(V,{label:"垂直",value:"columns-vertical"})]),_:1},8,["modelValue","disabled"])])],4),n(p,{"content-position":"left"},{default:b(()=>[w(i(o.$t("message.layout.sixTitle")),1)]),_:1}),l("div",wa,[l("div",{class:"layout-drawer-content-item",onClick:t[45]||(t[45]=s=>D("defaults"))},[l("section",{class:S(["el-container el-circular",{"drawer-layout-active":a(e).layout==="defaults"}])},Ta,2),l("div",{class:S(["layout-tips-warp",{"layout-tips-warp-active":a(e).layout==="defaults"}])},[l("div",Ia,[l("p",Sa,i(o.$t("message.layout.sixDefaults")),1)])],2)]),l("div",{class:"layout-drawer-content-item",onClick:t[46]||(t[46]=s=>D("classic"))},[l("section",{class:S(["el-container is-vertical el-circular",{"drawer-layout-active":a(e).layout==="classic"}])},za,2),l("div",{class:S(["layout-tips-warp",{"layout-tips-warp-active":a(e).layout==="classic"}])},[l("div",Ua,[l("p",Da,i(o.$t("message.layout.sixClassic")),1)])],2)]),l("div",{class:"layout-drawer-content-item",onClick:t[47]||(t[47]=s=>D("transverse"))},[l("section",{class:S(["el-container is-vertical el-circular",{"drawer-layout-active":a(e).layout==="transverse"}])},Ea,2),l("div",{class:S(["layout-tips-warp",{"layout-tips-warp-active":a(e).layout==="transverse"}])},[l("div",Ga,[l("p",Fa,i(o.$t("message.layout.sixTransverse")),1)])],2)]),l("div",{class:"layout-drawer-content-item",onClick:t[48]||(t[48]=s=>D("columns"))},[l("section",{class:S(["el-container el-circular",{"drawer-layout-active":a(e).layout==="columns"}])},Wa,2),l("div",{class:S(["layout-tips-warp",{"layout-tips-warp-active":a(e).layout==="columns"}])},[l("div",qa,[l("p",Oa,i(o.$t("message.layout.sixColumns")),1)])],2)])]),l("div",Na,[n(be,{title:o.$t("message.layout.tipText"),type:"warning",closable:!1},null,8,["title"]),n(j,{size:"default",class:"copy-config-btn",type:"primary",ref:"copyConfigBtnRef",onClick:re},{default:b(()=>[n(N,{class:"mr5"},{default:b(()=>[n(ye)]),_:1}),w(" "+i(o.$t("message.layout.copyText")),1)]),_:1},512),n(j,{size:"default",class:"copy-config-btn-reset",type:"info",onClick:ue},{default:b(()=>[n(N,{class:"mr5"},{default:b(()=>[n(ge)]),_:1}),w(" "+i(o.$t("message.layout.resetText")),1)]),_:1})])]),_:1})]),_:1},8,["title","modelValue"])])}}});const pt=Ue(Ja,[["__scopeId","data-v-813cba48"]]);export{pt as default};
