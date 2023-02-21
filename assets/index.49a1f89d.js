import{_ as W}from"./preload-helper.41c905a7.js";import{i as x}from"./getStyleSheets.f8111277.js";import{h as L,ap as F,r as E,K as N,a as R,o as G,w as $,a9 as d,j as P,k as S,D as i,x as f,v as M,n as U,l as _,C as j,u as r,J}from"./vue.543fafcc.js";import"./index.3b68140d.js";const K={class:"icon-selector w100 h100"},q={class:"icon-selector-warp"},H={class:"icon-selector-warp-title"},Q=L({name:"iconSelector"}),te=L({...Q,props:{prepend:{type:String,default:()=>"ele-Pointer"},placeholder:{type:String,default:()=>"请输入内容搜索图标或者选择图标"},size:{type:String,default:()=>"default"},title:{type:String,default:()=>"请选择图标"},disabled:{type:Boolean,default:()=>!1},clearable:{type:Boolean,default:()=>!0},emptyDescription:{type:String,default:()=>"无相关图标"},modelValue:String},emits:["update:modelValue","get","clear"],setup(n,{emit:u}){const l=n,p=F(()=>W(()=>import("./list.8f12a965.js"),["./list.8f12a965.js","./vue.543fafcc.js","./_plugin-vue_export-helper.c27b6911.js","./list.00c23cb8.css"],import.meta.url)),s=E(),e=N({fontIconPrefix:"",fontIconWidth:0,fontIconSearch:"",fontIconPlaceholder:"",fontIconTabActive:"ali",fontIconList:{ali:[],ele:[],awe:[]}}),C=()=>{if(!l.modelValue)return!1;e.fontIconSearch="",e.fontIconPlaceholder=l.modelValue},k=()=>{const t=v();setTimeout(()=>{t.filter(a=>a===e.fontIconSearch).length<=0&&(e.fontIconSearch="")},300)},I=R(()=>{const t=v();if(!e.fontIconSearch)return t;let o=e.fontIconSearch.trim().toLowerCase();return t.filter(a=>{if(a.toLowerCase().indexOf(o)!==-1)return a})}),v=()=>{let t=[];return e.fontIconTabActive==="ali"?t=e.fontIconList.ali:e.fontIconTabActive==="ele"?t=e.fontIconList.ele:e.fontIconTabActive==="awe"&&(t=e.fontIconList.awe),t},y=()=>{if(l.modelValue==="")return e.fontIconPlaceholder=l.placeholder;e.fontIconPlaceholder=l.modelValue,e.fontIconPrefix=l.modelValue},b=()=>{let t="ali";return l.modelValue.indexOf("iconfont")>-1?t="ali":l.modelValue.indexOf("ele-")>-1?t="ele":l.modelValue.indexOf("fa")>-1&&(t="awe"),e.fontIconTabActive=t,t},w=async t=>{if(t==="ali"){if(e.fontIconList.ali.length>0)return;await x.ali().then(o=>{e.fontIconList.ali=o.map(a=>`iconfont ${a}`)})}else if(t==="ele"){if(e.fontIconList.ele.length>0)return;await x.ele().then(o=>{e.fontIconList.ele=o})}else if(t==="awe"){if(e.fontIconList.awe.length>0)return;await x.awe().then(o=>{e.fontIconList.awe=o.map(a=>`fa ${a}`)})}e.fontIconPlaceholder=l.placeholder,y()},T=t=>{w(t.paneName),s.value.focus()},m=t=>{e.fontIconPlaceholder=t,e.fontIconPrefix=t,u("get",e.fontIconPrefix),u("update:modelValue",e.fontIconPrefix),s.value.focus()},z=()=>{e.fontIconPrefix="",u("clear",e.fontIconPrefix),u("update:modelValue",e.fontIconPrefix)},V=()=>{J(()=>{e.fontIconWidth=s.value.$el.offsetWidth})},A=()=>{window.addEventListener("resize",()=>{V()})};return G(()=>{w(b()),A(),V()}),$(()=>l.modelValue,()=>{y(),b()}),(t,o)=>{const a=d("SvgIcon"),B=d("el-input"),h=d("el-tab-pane"),D=d("el-tabs"),O=d("el-popover");return P(),S("div",K,[i(B,{modelValue:e.fontIconSearch,"onUpdate:modelValue":o[0]||(o[0]=c=>e.fontIconSearch=c),placeholder:e.fontIconPlaceholder,clearable:n.clearable,disabled:n.disabled,size:n.size,ref_key:"inputWidthRef",ref:s,onClear:z,onFocus:C,onBlur:k},{prepend:f(()=>{var c,g;return[(e.fontIconPrefix===""?((c=n.prepend)==null?void 0:c.indexOf("ele-"))>-1:((g=e.fontIconPrefix)==null?void 0:g.indexOf("ele-"))>-1)?(P(),M(a,{key:0,name:e.fontIconPrefix===""?n.prepend:e.fontIconPrefix,class:"font14"},null,8,["name"])):(P(),S("i",{key:1,class:U([e.fontIconPrefix===""?n.prepend:e.fontIconPrefix,"font14"])},null,2))]}),_:1},8,["modelValue","placeholder","clearable","disabled","size"]),i(O,{placement:"bottom",width:e.fontIconWidth,transition:"el-zoom-in-top","popper-class":"icon-selector-popper",trigger:"click","virtual-ref":s.value,"virtual-triggering":""},{default:f(()=>[_("div",q,[_("div",H,j(n.title),1),i(D,{modelValue:e.fontIconTabActive,"onUpdate:modelValue":o[1]||(o[1]=c=>e.fontIconTabActive=c),onTabClick:T},{default:f(()=>[i(h,{lazy:"",label:"ali",name:"ali"},{default:f(()=>[i(r(p),{list:r(I),empty:n.emptyDescription,prefix:e.fontIconPrefix,onGetIcon:m},null,8,["list","empty","prefix"])]),_:1}),i(h,{lazy:"",label:"ele",name:"ele"},{default:f(()=>[i(r(p),{list:r(I),empty:n.emptyDescription,prefix:e.fontIconPrefix,onGetIcon:m},null,8,["list","empty","prefix"])]),_:1}),i(h,{lazy:"",label:"awe",name:"awe"},{default:f(()=>[i(r(p),{list:r(I),empty:n.emptyDescription,prefix:e.fontIconPrefix,onGetIcon:m},null,8,["list","empty","prefix"])]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["width","virtual-ref"])])}}});export{te as default};
