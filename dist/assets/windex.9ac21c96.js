import{S as Z}from"./wsortable.esm.1e7dbfeb.js";import{h as R,r as Y,ar as ee,K as te,a as A,a9 as h,ac as oe,j as u,k as b,y as ae,v as y,x as m,D as i,A as V,F as N,Z as $,u as _,B as L,C as ne,R as le,l as C,J as se,aE as re,aF as ie}from"./wvue.543fafcc.js";import{u as ce}from"./wthemeConfig.4ccac927.js";import{ay as de}from"./windex.f419634e.js";import{_ as pe}from"./w_plugin-vue_export-helper.c27b6911.js";import"./windex.cc27eb80.js";const he=()=>{let t=window.navigator.userAgent;if(t.indexOf("MSIE")>=0)return"ie";if(t.indexOf("Firefox")>=0)return"Firefox";if(t.indexOf("Chrome")>=0)return"Chrome";if(t.indexOf("Opera")>=0)return"Opera";if(t.indexOf("Safari")>=0)return"Safari"},ue=(t,f)=>{he()=="ie"?me(t):ge(t,f)},me=(t,f)=>{let c=t,a=new ActiveXObject("Excel.Application"),r=a.Workbooks.Add(),d=r.Worksheets(1),g=document.body.createTextRange();g.moveToElementText(c),g.select,g.execCommand("Copy"),d.Paste(),a.Visible=!0;try{let e=a.Application.GetSaveAsFilename("Excel.xls","Excel Spreadsheets (*.xls), *.xls")}catch(e){print("Nested catch caught "+e)}finally{r.SaveAs(fname),r.Close(savechanges=!1),a.Quit(),a=null,window.setInterval("Cleanup();",1),window.setInterval("Cleanup();",1)}},ge=function(){const t="data:application/vnd.ms-excel;base64,",f='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',c=function(r){return window.btoa(unescape(encodeURIComponent(r)))},a=(r,d)=>r.replace(/{(\w+)}/g,(g,e)=>d[e]);return(r,d)=>{const e=t+c(a(f,{worksheet:d,table:r}));if(navigator.userAgent.indexOf("Firefox")>-1)window.location.href=e;else{const x=document.createElement("a");x.href=e,x.download=d||"";let n;window.MouseEvent?n=new MouseEvent("click"):(n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),x.dispatchEvent(n)}}}(),fe=(t,f,c)=>{const a={image:x,text:e};let r=t.reduce((n,p)=>(n+=`<th>${p.title}</th>`,n),"");r=`<thead><tr>${r}</tr></thead>`;let d=f.reduce((n,p)=>{const I=t.reduce((v,w)=>(v+=a[w.type||"text"](p[w.key],w),v),"");return n+=`<tr>${I}</tr>`,n},"");d=`<tbody>${d}</tbody>`;const g=r+d;ue(g,c);function e(n){return`<td style="text-align: center">${n}</td>`}function x(n,p){return p=Object.assign({width:40,height:60},p),`<td style="width: ${p.width}px; height: ${p.height}px; text-align: center; vertical-align: middle"><img src="${n}" width=${p.width} height=${p.height}></td>`}};const xe=t=>(re("data-v-0e099c29"),t=t(),ie(),t),ke={class:"table-container"},be=["src","width","height"],_e={class:"table-footer mt15"},we={class:"table-footer-tool"},ye={class:"tool-box"},Ce=["data-key"],ve=xe(()=>C("i",{class:"fa fa-arrows-alt handle cursor-pointer"},null,-1)),Se=R({name:"netxTable"}),Ee=R({...Se,props:{data:{type:Array,default:()=>[]},header:{type:Array,default:()=>[]},config:{type:Object,default:()=>{}}},emits:["delRow","pageChange","sortHeader"],setup(t,{expose:f,emit:c}){const a=t,r=Y(),d=ce(),{themeConfig:g}=ee(d),e=te({page:{pageNum:1,pageSize:10},selectlist:[],checkListAll:!0,checkListIndeterminate:!1}),x=A(()=>!!a.config.isBorder),n=A(()=>a.config),p=A(()=>a.header.filter(l=>l.isCheck)),I=l=>{l?a.header.forEach(s=>s.isCheck=!0):a.header.forEach(s=>s.isCheck=!1),e.checkListIndeterminate=!1},v=()=>{const l=a.header.filter(s=>s.isCheck).length;e.checkListAll=l===a.header.length,e.checkListIndeterminate=l>0&&l<a.header.length},w=l=>{e.selectlist=l},W=l=>{c("delRow",l)},U=l=>{e.page.pageSize=l,c("pageChange",e.page)},B=l=>{e.page.pageNum=l,c("pageChange",e.page)},F=()=>{e.page.pageNum=1,e.page.pageSize=10,c("pageChange",e.page)},D=()=>{if(e.selectlist.length<=0)return de.warning("请先选择要导出的数据");fe(a.header,e.selectlist,`${g.value.globalTitle} ${new Date().toLocaleString()}`)},H=()=>{c("pageChange",e.page)},M=()=>{se(()=>{const l=Z.create(r.value,{handle:".handle",dataIdAttr:"data-key",animation:150,onEnd:()=>{const s=[];l.toArray().forEach(k=>{a.header.forEach(S=>{S.key===k&&s.push({...S})})}),c("sortHeader",s)}})})};return f({pageReset:F}),(l,s)=>{const k=h("el-table-column"),S=h("el-button"),j=h("el-popconfirm"),q=h("el-empty"),G=h("el-table"),P=h("el-pagination"),E=h("SvgIcon"),X=h("el-tooltip"),T=h("el-checkbox"),J=h("el-scrollbar"),K=h("el-popover"),Q=oe("loading");return u(),b("div",ke,[ae((u(),y(G,le({data:t.data,border:_(x)},l.$attrs,{"row-key":"id",stripe:"",style:{width:"100%"},onSelectionChange:w}),{empty:m(()=>[i(q,{description:"暂无数据"})]),default:m(()=>[t.config.isSelection?(u(),y(k,{key:0,type:"selection","reserve-selection":!0,width:"30"})):V("",!0),t.config.isSerialNo?(u(),y(k,{key:1,type:"index",label:"序号",width:"60"})):V("",!0),(u(!0),b(N,null,$(_(p),(o,z)=>(u(),y(k,{key:z,"show-overflow-tooltip":"",prop:o.key,width:o.colWidth,label:o.title},{default:m(O=>[o.type==="image"?(u(),b("img",{key:0,src:O.row[o.key],width:o.width,height:o.height},null,8,be)):(u(),b(N,{key:1},[L(ne(O.row[o.key]),1)],64))]),_:2},1032,["prop","width","label"]))),128)),t.config.isOperate?(u(),y(k,{key:2,label:"操作",width:"100"},{default:m(o=>[i(j,{title:"确定删除吗？",onConfirm:z=>W(o.row)},{reference:m(()=>[i(S,{text:"",type:"primary"},{default:m(()=>[L("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})):V("",!0)]),_:1},16,["data","border"])),[[Q,t.config.loading]]),C("div",_e,[i(P,{"current-page":e.page.pageNum,"onUpdate:current-page":s[0]||(s[0]=o=>e.page.pageNum=o),"page-size":e.page.pageSize,"onUpdate:page-size":s[1]||(s[1]=o=>e.page.pageSize=o),"pager-count":5,"page-sizes":[10,20,30],total:t.config.total,layout:"total, sizes, prev, pager, next, jumper",background:"",onSizeChange:U,onCurrentChange:B},null,8,["current-page","page-size","total"]),C("div",we,[i(E,{name:"iconfont icon-yunxiazai_o",size:22,title:"导出",onClick:D}),i(E,{name:"iconfont icon-shuaxin",size:22,title:"刷新",onClick:H}),i(K,{placement:"top-end",trigger:"click",transition:"el-zoom-in-top","popper-class":"table-tool-popper",width:300,persistent:!1,onShow:M},{reference:m(()=>[i(E,{name:"iconfont icon-quanjushezhi_o",size:22,title:"设置"})]),default:m(()=>[C("div",ye,[i(X,{content:"拖动进行排序",placement:"top-start"},{default:m(()=>[i(E,{name:"fa fa-question-circle-o",size:17,class:"ml11",color:"#909399"})]),_:1}),i(T,{modelValue:e.checkListAll,"onUpdate:modelValue":s[2]||(s[2]=o=>e.checkListAll=o),indeterminate:e.checkListIndeterminate,class:"ml10 mr1",label:"列显示",onChange:I},null,8,["modelValue","indeterminate"]),i(T,{modelValue:_(n).isSerialNo,"onUpdate:modelValue":s[3]||(s[3]=o=>_(n).isSerialNo=o),class:"ml12 mr1",label:"序号"},null,8,["modelValue"]),i(T,{modelValue:_(n).isSelection,"onUpdate:modelValue":s[4]||(s[4]=o=>_(n).isSelection=o),class:"ml12 mr1",label:"多选"},null,8,["modelValue"])]),i(J,null,{default:m(()=>[C("div",{ref_key:"toolSetRef",ref:r,class:"tool-sortable"},[(u(!0),b(N,null,$(t.header,o=>(u(),b("div",{class:"tool-sortable-item",key:o.key,"data-key":o.key},[ve,i(T,{modelValue:o.isCheck,"onUpdate:modelValue":z=>o.isCheck=z,size:"default",class:"ml12 mr8",label:o.title,onChange:v},null,8,["modelValue","onUpdate:modelValue","label"])],8,Ce))),128))],512)]),_:1})]),_:1})])])])}}});const Oe=pe(Ee,[["__scopeId","data-v-0e099c29"]]);export{Oe as default};
