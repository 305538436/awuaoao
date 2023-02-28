import{_ as Ce}from"./wpreload-helper.41c905a7.js";import{h as te,ap as Te,r as D,ar as Y,aq as Re,aG as be,K as _e,a as O,b as xe,a4 as qe,aa as Se,o as De,aK as Ae,w as Ie,a9 as Z,j as h,k as T,D as E,x as ke,l as Q,n as M,u as d,F as v,Z as Pe,$ as R,A as b,v as j,C as Ue,J as N}from"./wvue.740b6138.js";import{S as $e}from"./wsortable.esm.1e7dbfeb.js";import{p as Oe}from"./windex.21ed4667.js";import{u as ee}from"./wtagsViewRoutes.e33e101a.js";import{u as Ee}from"./wthemeConfig.d0b0ef54.js";import{u as Me}from"./wkeepAliveNames.6557c4c5.js";import{S as y}from"./wstorage.542a95ff.js";import{i as se}from"./warrayOperation.b573dead.js";import{o as ae}from"./wother.adfb51b2.js";import{e as V}from"./wmitt.7f99bbc0.js";import{ay as je}from"./windex.1bceac5d.js";import{_ as Ne}from"./w_plugin-vue_export-helper.c27b6911.js";import"./windex.b0c33291.js";import"./windex.2b3aae5b.js";import"./w_commonjsHelpers.35101cd5.js";import"./wroutesList.596526a5.js";import"./wuserInfo.dc6fc220.js";import"./wloading.8fd7309f.js";import"./wrequest.2ffe388a.js";import"./windex.e5dbaf17.js";import"./windex.68010d60.js";import"./wvue-i18n.cjs.04c9b675.js";import"./wtoolsValidate.7cb139e2.js";const Be=["data-url","onContextmenu","onMousedown","onClick"],Fe={key:0,class:"iconfont icon-webicon318 layout-navbars-tagsview-ul-li-iconfont"},We=te({name:"layoutTagsView"}),He=te({...We,setup(Ke){const ie=Te(()=>Ce(()=>import("./wcontextmenu.166b53b4.js"),["./wcontextmenu.166b53b4.js","./wvue.740b6138.js","./w_plugin-vue_export-helper.c27b6911.js","./wcontextmenu.b1be0632.css"],import.meta.url)),f=D([]),_=D(),B=D(),ne=D(),re=ee(),le=Ee(),ue=ee(),{themeConfig:F}=Y(le),{tagsViewRoutes:ce}=Y(ue),w=Me(),m=Re(),o=be(),t=_e({routeActive:"",routePath:m.path,dropdown:{x:"",y:""},sortable:"",tagsRefsIndex:0,tagsViewList:[],tagsViewRoutesList:[]}),oe=O(()=>F.value.tagsStyle),u=O(()=>F.value),me=O(()=>s=>ae.setTagsViewNameI18n(s)),x=s=>u.value.isShareTagsView?s.path===t.routePath:s.query&&Object.keys(s.query).length||s.params&&Object.keys(s.params).length?s.url?s.url===t.routeActive:s.path===t.routeActive:s.path===t.routePath,g=s=>{y.set("tagsViewList",s)},W=async()=>{t.routeActive=await p(m),t.routePath=await m.meta.isDynamic?m.meta.isDynamicPath:m.path,t.tagsViewList=[],t.tagsViewRoutesList=ce.value,fe()},fe=async()=>{y.get("tagsViewList")&&u.value.isCacheTagsView?t.tagsViewList=await y.get("tagsViewList"):(await t.tagsViewRoutesList.map(s=>{var e;((e=s.meta)==null?void 0:e.isAffix)&&!s.meta.isHide&&(s.url=p(s),t.tagsViewList.push({...s}),w.addCachedView(s))}),await A(m.path,m)),J(u.value.isShareTagsView?t.routePath:t.routeActive)},H=async(s,e)=>{var i,l;let a=(i=e==null?void 0:e.meta)!=null&&i.isDynamic?e.meta.isDynamicPath:s;if(t.tagsViewList.filter(r=>{var c,C;return r.path===a&&se((c=e==null?void 0:e.meta)!=null&&c.isDynamic?r.params?r.params:null:r.query?r.query:null,(C=e==null?void 0:e.meta)!=null&&C.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)}).length<=0){let r=t.tagsViewRoutesList.find(c=>c.path===a);if(!r||r.meta.isAffix||r.meta.isLink&&!r.meta.isIframe)return!1;(l=e==null?void 0:e.meta)!=null&&l.isDynamic?r.params=e.params:r.query=e==null?void 0:e.query,r.url=p(r),t.tagsViewList.push({...r}),await w.addCachedView(r),g(t.tagsViewList)}},K=(s,e)=>{var n;let a=(n=e==null?void 0:e.meta)!=null&&n.isDynamic?e.meta.isDynamicPath:s;t.tagsViewList.forEach(i=>{var l,r,c;i.path===a&&!se((l=e==null?void 0:e.meta)!=null&&l.isDynamic?i.params?i.params:null:i.query?i.query:null,(r=e==null?void 0:e.meta)!=null&&r.isDynamic?e!=null&&e.params?e==null?void 0:e.params:null:e!=null&&e.query?e==null?void 0:e.query:null)&&((c=e==null?void 0:e.meta)!=null&&c.isDynamic?i.params=e.params:i.query=e==null?void 0:e.query,i.url=p(i),g(t.tagsViewList))})},A=(s,e)=>{N(async()=>{var n,i,l;let a;if((n=e==null?void 0:e.meta)!=null&&n.isDynamic){if(u.value.isShareTagsView?await K(s,e):await H(s,e),t.tagsViewList.some(r=>{var c;return r.path===((c=e==null?void 0:e.meta)==null?void 0:c.isDynamicPath)}))return g(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(r=>{var c;return r.path===((c=e==null?void 0:e.meta)==null?void 0:c.isDynamicPath)})}else{if(u.value.isShareTagsView?await K(s,e):await H(s,e),t.tagsViewList.some(r=>r.path===s))return g(t.tagsViewList),!1;a=t.tagsViewRoutesList.find(r=>r.path===s)}if(!a||((i=a==null?void 0:a.meta)==null?void 0:i.isLink)&&!a.meta.isIframe)return!1;(l=e==null?void 0:e.meta)!=null&&l.isDynamic?a.params=e!=null&&e.params?e==null?void 0:e.params:m.params:a.query=e!=null&&e.query?e==null?void 0:e.query:m.query,a.url=p(a),await w.addCachedView(a),await t.tagsViewList.push({...a}),await g(t.tagsViewList)})},z=async s=>{var n;const e=decodeURI(s);let a={};if(t.tagsViewList.forEach(i=>{i.transUrl=L(i),i.transUrl?i.transUrl===L(i)&&(a=i):i.path===e&&(a=i)}),!a)return!1;await w.delCachedView(a),V.emit("onTagsViewRefreshRouterView",s),(n=a.meta)!=null&&n.isKeepAlive&&w.addCachedView(a)},I=s=>{t.tagsViewList.map((e,a,n)=>{var i;(i=e.meta)!=null&&i.isAffix||(u.value.isShareTagsView?e.path===s:e.url===s)&&(w.delCachedView(e),t.tagsViewList.splice(a,1),setTimeout(()=>{(t.tagsViewList.length===a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)?n[n.length-1].meta.isDynamic?a!==n.length?o.push({name:n[a].name,params:n[a].params}):o.push({name:n[n.length-1].name,params:n[n.length-1].params}):a!==n.length?o.push({path:n[a].path,query:n[a].query}):o.push({path:n[n.length-1].path,query:n[n.length-1].query}):(t.tagsViewList.length!==a&&u.value.isShareTagsView?t.routePath===s:t.routeActive===s)&&(n[a].meta.isDynamic?o.push({name:n[a].name,params:n[a].params}):o.push({path:n[a].path,query:n[a].query}))},0))}),g(t.tagsViewList)},ge=s=>{y.get("tagsViewList")&&(t.tagsViewList=[],y.get("tagsViewList").map(e=>{var a;((a=e.meta)==null?void 0:a.isAffix)&&!e.meta.isHide&&(e.url=p(e),w.delOthersCachedViews(e),t.tagsViewList.push({...e}))}),A(s,m),g(t.tagsViewList))},pe=()=>{y.get("tagsViewList")&&(w.delAllCachedViews(),t.tagsViewList=[],y.get("tagsViewList").map(s=>{var e;((e=s.meta)==null?void 0:e.isAffix)&&!s.meta.isHide&&(s.url=p(s),t.tagsViewList.push({...s}),o.push({path:t.tagsViewList[t.tagsViewList.length-1].path}))}),g(t.tagsViewList))},we=async s=>{const e=t.tagsViewList.find(a=>u.value.isShareTagsView?a.path===s:a.url===s);e.meta.isDynamic?await o.push({name:e.name,params:e.params}):await o.push({name:e.name,query:e.query}),re.setCurrenFullscreen(!0)},G=s=>{let e={};return t.tagsViewList.forEach(a=>{a.transUrl=L(a),a.transUrl?a.transUrl===L(a)&&a.transUrl===s.commonUrl&&(e=a):a.path===decodeURI(s.path)&&(e=a)}),e||null},k=async s=>{if(s.commonUrl=L(s),!G(s))return je({type:"warning",message:"请正确输入路径及完整参数（query、params）"});const{path:e,name:a,params:n,query:i,meta:l,url:r}=G(s);switch(s.contextMenuClickId){case 0:l.isDynamic?await o.push({name:a,params:n}):await o.push({path:e,query:i}),z(m.fullPath);break;case 1:I(u.value.isShareTagsView?e:r);break;case 2:l.isDynamic?await o.push({name:a,params:n}):await o.push({path:e,query:i}),ge(e);break;case 3:pe();break;case 4:we(u.value.isShareTagsView?e:r);break}},he=(s,e)=>{const{clientX:a,clientY:n}=e;t.dropdown.x=a,t.dropdown.y=n,B.value.openContextmenu(s)},de=(s,e)=>{var a;if(!((a=s.meta)!=null&&a.isAffix)&&e.button===1){const n=Object.assign({},{contextMenuClickId:1,...s});k(n)}},ye=(s,e)=>{t.tagsRefsIndex=e,o.push(s)},L=s=>{var n,i;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e)return"";let a="";for(let[l,r]of Object.entries(e))(n=s.meta)!=null&&n.isDynamic?a+=`/${r}`:a+=`&${l}=${r}`;return(i=s.meta)!=null&&i.isDynamic?s.isFnClick?decodeURI(s.path):`${s.path.split(":")[0]}${a.replace(/^\//,"")}`:`${s.path}${a.replace(/^&/,"?")}`},p=s=>{var n;let e=s.query&&Object.keys(s.query).length>0?s.query:s.params;if(!e||Object.keys(e).length<=0)return s.path;let a="";for(let i in e)a+=e[i];return`${(n=s.meta)!=null&&n.isDynamic?s.meta.isDynamicPath:s.path}-${a}`},Ve=s=>{_.value.$refs.wrapRef.scrollLeft+=s.wheelDelta/4},Le=()=>{N(()=>{if(f.value.length<=0)return!1;let s=f.value[t.tagsRefsIndex],e=t.tagsRefsIndex,a=f.value.length,n=f.value[0],i=f.value[f.value.length-1],l=_.value.$refs.wrapRef,r=l.scrollWidth,c=l.offsetWidth,C=l.scrollLeft,$=f.value[t.tagsRefsIndex-1],X=f.value[t.tagsRefsIndex+1],q=0,S=0;s===n?l.scrollLeft=0:s===i?l.scrollLeft=r-c:(e===0?q=n.offsetLeft-5:q=($==null?void 0:$.offsetLeft)-5,e===a?S=i.offsetLeft+i.offsetWidth+5:S=X.offsetLeft+X.offsetWidth+5,S>C+c?l.scrollLeft=S-c:q<C&&(l.scrollLeft=q)),_.value.update()})},J=s=>{N(async()=>{let e=await t.tagsViewList;t.tagsRefsIndex=e.findIndex(a=>u.value.isShareTagsView?a.path===s:a.url===s),Le()})},P=async()=>{const s=document.querySelector(".layout-navbars-tagsview-ul");if(!s)return!1;t.sortable.el&&t.sortable.destroy(),t.sortable=$e.create(s,{animation:300,dataIdAttr:"data-url",disabled:!u.value.isSortableTagsView,onEnd:()=>{const e=[];t.sortable.toArray().map(a=>{t.tagsViewList.map(n=>{n.url===a&&e.push({...n})})}),g(e)}})},U=async()=>{await P(),ae.isMobile()&&t.sortable.el&&t.sortable.destroy()};return xe(()=>{U(),window.addEventListener("resize",U),V.on("onCurrentContextmenuClick",s=>{s.isFnClick=!0,k(s)}),V.on("openOrCloseSortable",()=>{P()}),V.on("openShareTagsView",()=>{u.value.isShareTagsView&&(o.push("/home"),t.tagsViewList=[],t.tagsViewRoutesList.map(s=>{var e;((e=s.meta)==null?void 0:e.isAffix)&&!s.meta.isHide&&(s.url=p(s),t.tagsViewList.push({...s}))}))})}),qe(()=>{V.off("onCurrentContextmenuClick",()=>{}),V.off("openOrCloseSortable",()=>{}),V.off("openShareTagsView",()=>{}),window.removeEventListener("resize",U)}),Se(()=>{f.value=[]}),De(()=>{W(),P()}),Ae(async s=>{t.routeActive=p(s),t.routePath=s.meta.isDynamic?s.meta.isDynamicPath:s.path,await A(s.path,s),J(u.value.isShareTagsView?t.routePath:t.routeActive)}),Ie(Oe.state,s=>{if(s.tagsViewRoutes.tagsViewRoutes.length===t.tagsViewRoutesList.length)return!1;W()},{deep:!0}),(s,e)=>{const a=Z("SvgIcon"),n=Z("el-scrollbar");return h(),T("div",{class:M(["layout-navbars-tagsview",{"layout-navbars-tagsview-shadow":d(u).layout==="classic"}])},[E(n,{ref_key:"scrollbarRef",ref:_,onWheel:R(Ve,["prevent"])},{default:ke(()=>[Q("ul",{class:M(["layout-navbars-tagsview-ul",d(oe)]),ref_key:"tagsUlRef",ref:ne},[(h(!0),T(v,null,Pe(t.tagsViewList,(i,l)=>(h(),T("li",{key:l,class:M(["layout-navbars-tagsview-ul-li",{"is-active":x(i)}]),"data-url":i.url,onContextmenu:R(r=>he(i,r),["prevent"]),onMousedown:r=>de(i,r),onClick:r=>ye(i,l),ref_for:!0,ref:r=>{r&&(f.value[l]=r)}},[x(i)?(h(),T("i",Fe)):b("",!0),!x(i)&&d(u).isTagsviewIcon?(h(),j(a,{key:1,name:i.meta.icon,class:"pr5"},null,8,["name"])):b("",!0),Q("span",null,Ue(d(me)(i)),1),x(i)?(h(),T(v,{key:2},[E(a,{name:"ele-RefreshRight",class:"ml5 layout-navbars-tagsview-ul-li-refresh",onClick:e[0]||(e[0]=R(r=>z(s.$route.fullPath),["stop"]))}),i.meta.isAffix?b("",!0):(h(),j(a,{key:0,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-active",onClick:R(r=>I(d(u).isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],64)):b("",!0),i.meta.isAffix?b("",!0):(h(),j(a,{key:3,name:"ele-Close",class:"layout-navbars-tagsview-ul-li-icon layout-icon-three",onClick:R(r=>I(d(u).isShareTagsView?i.path:i.url),["stop"])},null,8,["onClick"]))],42,Be))),128))],2)]),_:1},8,["onWheel"]),E(d(ie),{dropdown:t.dropdown,ref_key:"contextmenuRef",ref:B,onCurrentContextmenuClick:k},null,8,["dropdown"])],2)}}});const hs=Ne(He,[["__scopeId","data-v-ce4262a4"]]);export{hs as default};
