import{h as r,ar as m,a as p,u as e,j as n,k as i,l as s,C as d}from"./wvue.740b6138.js";import{u as g}from"./wthemeConfig.d0b0ef54.js";import{l as c}from"./wlogo-mini.ec8c4f91.js";import{_ as f}from"./w_plugin-vue_export-helper.c27b6911.js";const y=["src"],C=["src"],h=r({name:"layoutLogo"}),v=r({...h,setup(k){const u=g(),{themeConfig:o}=m(u),_=p(()=>{let{isCollapse:l,layout:a}=o.value;return!l||a==="classic"||document.body.clientWidth<1e3}),t=()=>{if(o.value.layout==="transverse")return!1;o.value.isCollapse=!o.value.isCollapse};return(l,a)=>e(_)?(n(),i("div",{key:0,class:"layout-logo",onClick:t},[s("img",{src:e(c),class:"layout-logo-medium-img"},null,8,y),s("span",null,d(e(o).globalTitle),1)])):(n(),i("div",{key:1,class:"layout-logo-size",onClick:t},[s("img",{src:e(c),class:"layout-logo-size-img"},null,8,C)]))}});const z=f(v,[["__scopeId","data-v-99473694"]]);export{z as default};