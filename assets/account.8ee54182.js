import{h as v,ar as V,aq as b,aH as q,K as F,a as R,a9 as a,ac as U,j as f,v as g,x as o,D as n,l as w,n as $,y as B,C as D}from"./vue.543fafcc.js";import{u as E}from"./vue-i18n.cjs.f888bd5c.js";import{S as h,a as j}from"./storage.542a95ff.js";import{u as z}from"./themeConfig.4c307989.js";import{i as A,b as M}from"./index.4a903969.js";import{a as O}from"./formatTime.29ac8c52.js";import{N as H}from"./loading.7efee3a8.js";import{ay as y}from"./index.070d5527.js";import{_ as J}from"./plugin-vue_export-helper.c27b6911.js";import"./commonjsHelpers.35101cd5.js";import"./index.18e5bded.js";import"./keepAliveNames.cf66da55.js";import"./routesList.76e57b72.js";import"./preload-helper.41c905a7.js";import"./userInfo.4391f3f6.js";import"./tagsViewRoutes.69b270cc.js";import"./index.4ac74e37.js";import"./index.3b68140d.js";const K=v({name:"loginAccount"}),L=v({...K,setup(G){const{t:x}=E(),C=z(),{themeConfig:N}=V(C),c=b(),d=q(),e=F({isShowPassword:!1,ruleForm:{userName:"admin",password:"123456",code:"1234"},loading:{signIn:!1}}),S=R(()=>O(new Date)),I=async()=>{if(e.loading.signIn=!0,h.set("token",Math.random().toString(36).substr(0)),j.set("userName",e.ruleForm.userName),N.value.isRequestRoutes){const s=await M();_(s)}else{const s=await A();_(s)}},_=s=>{var t,m,r,i;if(s)y.warning("抱歉，您没有登录权限"),h.clear();else{let l=S.value;(t=c.query)!=null&&t.redirect?d.push({path:(m=c.query)==null?void 0:m.redirect,query:Object.keys((r=c.query)==null?void 0:r.params).length>0?JSON.parse((i=c.query)==null?void 0:i.params):""}):d.push("/");const p=x("message.signInText");y.success(`${l}，${p}`),H.start()}e.loading.signIn=!1};return(s,t)=>{const m=a("ele-User"),r=a("el-icon"),i=a("el-input"),l=a("el-form-item"),p=a("ele-Unlock"),k=a("el-button"),P=a("el-form"),T=U("waves");return f(),g(P,{size:"large",class:"login-content-form"},{default:o(()=>[n(l,{class:"login-animation1"},{default:o(()=>[n(i,{text:"",placeholder:s.$t("message.account.accountPlaceholder1"),modelValue:e.ruleForm.userName,"onUpdate:modelValue":t[0]||(t[0]=u=>e.ruleForm.userName=u),clearable:"",autocomplete:"off"},{prefix:o(()=>[n(r,{class:"el-input__icon"},{default:o(()=>[n(m)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),n(l,{class:"login-animation2"},{default:o(()=>[n(i,{type:e.isShowPassword?"text":"password",placeholder:s.$t("message.account.accountPlaceholder2"),modelValue:e.ruleForm.password,"onUpdate:modelValue":t[2]||(t[2]=u=>e.ruleForm.password=u),autocomplete:"off"},{prefix:o(()=>[n(r,{class:"el-input__icon"},{default:o(()=>[n(p)]),_:1})]),suffix:o(()=>[w("i",{class:$(["iconfont el-input__icon login-content-password",e.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:t[1]||(t[1]=u=>e.isShowPassword=!e.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),n(l,{class:"login-animation4"},{default:o(()=>[B((f(),g(k,{type:"primary",class:"login-content-submit",round:"",onClick:I,loading:e.loading.signIn},{default:o(()=>[w("span",null,D(s.$t("message.account.accountBtnText")),1)]),_:1},8,["loading"])),[[T]])]),_:1})]),_:1})}}});const de=J(L,[["__scopeId","data-v-e880677c"]]);export{de as default};
