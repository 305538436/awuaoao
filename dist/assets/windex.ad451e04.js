import{_ as u}from"./wpreload-helper.41c905a7.js";import{h as d,ap as b,K as f,a9 as r,j as h,k as g,D as a,x as o,u as v}from"./wvue.543fafcc.js";const D={class:"selector-container layout-pd"},I=d({name:"makeSelector"}),V=d({...I,setup(w){const p=b(()=>u(()=>import("./windex.1c4a446e.js"),["./windex.1c4a446e.js","./wpreload-helper.41c905a7.js","./wgetStyleSheets.1e6965e0.js","./windex.cc27eb80.js","./wvue.543fafcc.js","./windex.47b5c078.css"],import.meta.url)),t=f({modelIcon:"",tableData:[{a1:"v-model",a2:"双向绑定值",a3:"string",a4:"",a5:""},{a1:"prepend",a2:"输入框前置内容，只能字体图标",a3:"string",a4:"",a5:"ele-Pointer"},{a1:"placeholder",a2:"输入框占位文本",a3:"string",a4:"",a5:"请输入内容搜索图标或者选择图标"},{a1:"size",a2:"尺寸",a3:"string",a4:"large / default / small",a5:"default"},{a1:"title",a2:"弹窗标题",a3:"string",a4:"",a5:"请选择图标"},{a1:"disabled",a2:"禁用",a3:"boolean",a4:"true",a5:"false"},{a1:"clearable",a2:"是否可清空",a3:"boolean",a4:"false",a5:"true"},{a1:"emptyDescription",a2:"自定义空状态描述文字",a3:"String",a4:"",a5:"无相关图标"}],tableData1:[{a1:"get",a2:"获取当前点击的 icon 图标",a3:"function",a4:"(icon: string)"},{a1:"clear",a2:"清空当前点击的 icon 图标",a3:"function",a4:"(icon: string)"}]}),i=l=>{console.log(l)},_=l=>{console.log(l)};return(l,s)=>{const n=r("el-card"),e=r("el-table-column"),c=r("el-table");return h(),g("div",D,[a(n,{shadow:"hover",header:"图标选择器(宽度自动)："},{default:o(()=>[a(v(p),{onGet:i,onClear:_,modelValue:t.modelIcon,"onUpdate:modelValue":s[0]||(s[0]=m=>t.modelIcon=m)},null,8,["modelValue"])]),_:1}),a(n,{shadow:"hover",header:"图标选择器(宽度自动)：参数",class:"mt15"},{default:o(()=>[a(c,{data:t.tableData,style:{width:"100%"}},{default:o(()=>[a(e,{prop:"a1",label:"参数"}),a(e,{prop:"a2",label:"说明"}),a(e,{prop:"a3",label:"类型"}),a(e,{prop:"a4",label:"可选值"}),a(e,{prop:"a5",label:"默认值"})]),_:1},8,["data"])]),_:1}),a(n,{shadow:"hover",header:"图标选择器(宽度自动)：事件",class:"mt15"},{default:o(()=>[a(c,{data:t.tableData1,style:{width:"100%"}},{default:o(()=>[a(e,{prop:"a1",label:"事件名称"}),a(e,{prop:"a2",label:"说明"}),a(e,{prop:"a3",label:"类型"}),a(e,{prop:"a4",label:"回调参数"})]),_:1},8,["data"])]),_:1})])}}});export{V as default};
