import{f as s}from"./wformatTime.29ac8c52.js";import{h as o,K as d,b as _,a4 as i,j as m,k as p,l as t,C as r,aE as l,aF as u}from"./wvue.740b6138.js";import{_ as f}from"./w_plugin-vue_export-helper.c27b6911.js";const n=a=>(l("data-v-4e74aafd"),a=a(),u(),a),h={class:"big-data-up mb15"},v={class:"up-left"},x=n(()=>t("i",{class:"el-icon-time mr5"},null,-1)),Q=n(()=>t("div",{class:"up-center"},[t("span",null,"智慧农业系统平台")],-1)),S=o({name:"chartHead"}),Y=o({...S,setup(a){const e=d({time:{txt:"",fun:0}}),c=()=>{e.time.txt=s(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ"),e.time.fun=window.setInterval(()=>{e.time.txt=s(new Date,"YYYY-mm-dd HH:MM:SS WWW QQQQ")},1e3)};return _(()=>{c()}),i(()=>{window.clearInterval(e.time.fun)}),(w,I)=>(m(),p("div",h,[t("div",v,[x,t("span",null,r(e.time.txt),1)]),Q]))}});const B=f(Y,[["__scopeId","data-v-4e74aafd"]]);export{B as default};
