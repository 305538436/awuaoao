import{h as u,r as k,K as C,a as S,o as b,a4 as I,a9 as g,j as s,v as E,x as L,y as M,E as B,k as a,l as d,F as D,Z as j,q as F,u as l,T,aE as $,aF as z,D as N,C as p}from"./wvue.543fafcc.js";import{_ as O}from"./w_plugin-vue_export-helper.c27b6911.js";const R=t=>($("data-v-cc77d4d2"),t=t(),z(),t),V={class:"el-dropdown-menu"},q=["onClick"],K=R(()=>d("div",{class:"el-popper__arrow",style:{left:"10px"}},null,-1)),U=u({name:"pagesWorkflowContextmenu"}),W=u({...U,props:{dropdown:{type:Object,default:()=>({x:"",y:""})}},emits:["current"],setup(t,{expose:m,emit:_}){const x=t,f=k(),e=C({isShow:!1,dropdownList:[{contextMenuClickId:0,txt:"删除",icon:"ele-Delete"},{contextMenuClickId:1,txt:"编辑",icon:"ele-Edit"}],item:{type:"node"},conn:{}}),r=S(()=>x.dropdown),y=n=>{_("current",Object.assign({},{contextMenuClickId:n},e.item),e.conn)},v=(n,i={})=>{e.item=n,e.conn=i,o(),setTimeout(()=>{e.isShow=!0},10)},o=()=>{e.isShow=!1};return b(()=>{document.body.addEventListener("click",o),document.body.addEventListener("contextmenu",o)}),I(()=>{document.body.removeEventListener("click",o),document.body.removeEventListener("contextmenu",o)}),m({openContextmenu:v}),(n,i)=>{const w=g("SvgIcon");return s(),E(T,{name:"el-zoom-in-center",ref_key:"contextmenuRef",ref:f},{default:L(()=>[M((s(),a("div",{"aria-hidden":"true",class:"el-dropdown__popper el-popper is-light is-pure custom-contextmenu",role:"tooltip","data-popper-placement":"bottom",style:F(`top: ${l(r).y+5}px;left: ${l(r).x}px;`),key:Math.random()},[d("ul",V,[(s(!0),a(D,null,j(e.dropdownList,(c,h)=>(s(),a("li",{class:"el-dropdown-menu__item","aria-disabled":"false",tabindex:"-1",key:h,onClick:Z=>y(c.contextMenuClickId)},[N(w,{name:c.icon},null,8,["name"]),d("span",null,p(c.txt)+p(e.item.type==="line"?"线":"节点"),1)],8,q))),128))]),K],4)),[[B,e.isShow]])]),_:1},512)}}});const H=O(W,[["__scopeId","data-v-cc77d4d2"]]);export{H as default};
