import{_ as T}from"./wpreload-helper.41c905a7.js";import{J as R}from"./windex.23774c5f.js";import{ay as A}from"./windex.f419634e.js";import{h as f,ap as O,r as $,K as V,o as F,a9 as s,ac as L,j as d,k as M,D as e,x as l,l as U,B as r,y as j,v as m,u as H}from"./wvue.543fafcc.js";import"./windex.cc27eb80.js";const I={class:"system-dic-container layout-padding"},P={class:"system-user-search mb15"},Y=f({name:"systemDic"}),X=f({...Y,setup(J){const b=O(()=>T(()=>import("./wdialog.26f6e85e.js"),["./wdialog.26f6e85e.js","./wvue.543fafcc.js"],import.meta.url)),u=$(),a=V({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),p=()=>{a.tableData.loading=!0;const o=[];for(let t=0;t<2;t++)o.push({dicName:t===0?"角色标识":"用户性别",fieldName:t===0?"SYS_ROLE":"SYS_UERINFO",describe:t===0?"这是角色字典":"这是用户性别字典",status:!0,createTime:new Date().toLocaleString(),list:[]});a.tableData.data=o,a.tableData.total=a.tableData.data.length,setTimeout(()=>{a.tableData.loading=!1},500)},D=o=>{u.value.openDialog(o)},y=(o,t)=>{u.value.openDialog(o,t)},v=o=>{R.confirm(`此操作将永久删除字典名称：“${o.dicName}”，是否继续?`,"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{p(),A.success("删除成功")}).catch(()=>{})},w=o=>{a.tableData.param.pageSize=o,p()},h=o=>{a.tableData.param.pageNum=o,p()};return F(()=>{p()}),(o,t)=>{const z=s("el-input"),C=s("ele-Search"),_=s("el-icon"),c=s("el-button"),x=s("ele-FolderAdd"),i=s("el-table-column"),g=s("el-tag"),k=s("el-table"),N=s("el-pagination"),S=s("el-card"),B=L("loading");return d(),M("div",I,[e(S,{shadow:"hover",class:"layout-padding-auto"},{default:l(()=>[U("div",P,[e(z,{size:"default",placeholder:"请输入字典名称",style:{"max-width":"180px"}}),e(c,{size:"default",type:"primary",class:"ml10"},{default:l(()=>[e(_,null,{default:l(()=>[e(C)]),_:1}),r(" 查询 ")]),_:1}),e(c,{size:"default",type:"success",class:"ml10",onClick:t[0]||(t[0]=n=>D("add"))},{default:l(()=>[e(_,null,{default:l(()=>[e(x)]),_:1}),r(" 新增字典 ")]),_:1})]),j((d(),m(k,{data:a.tableData.data,style:{width:"100%"}},{default:l(()=>[e(i,{type:"index",label:"序号",width:"50"}),e(i,{prop:"dicName",label:"字典名称","show-overflow-tooltip":""}),e(i,{prop:"fieldName",label:"字段名","show-overflow-tooltip":""}),e(i,{prop:"status",label:"字典状态","show-overflow-tooltip":""},{default:l(n=>[n.row.status?(d(),m(g,{key:0,type:"success"},{default:l(()=>[r("启用")]),_:1})):(d(),m(g,{key:1,type:"info"},{default:l(()=>[r("禁用")]),_:1}))]),_:1}),e(i,{prop:"describe",label:"字典描述","show-overflow-tooltip":""}),e(i,{prop:"createTime",label:"创建时间","show-overflow-tooltip":""}),e(i,{label:"操作",width:"100"},{default:l(n=>[e(c,{size:"small",text:"",type:"primary",onClick:E=>y("edit",n.row)},{default:l(()=>[r("修改")]),_:2},1032,["onClick"]),e(c,{size:"small",text:"",type:"primary",onClick:E=>v(n.row)},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[B,a.tableData.loading]]),e(N,{onSizeChange:w,onCurrentChange:h,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":a.tableData.param.pageNum,"onUpdate:current-page":t[1]||(t[1]=n=>a.tableData.param.pageNum=n),background:"","page-size":a.tableData.param.pageSize,"onUpdate:page-size":t[2]||(t[2]=n=>a.tableData.param.pageSize=n),layout:"total, sizes, prev, pager, next, jumper",total:a.tableData.total},null,8,["current-page","page-size","total"])]),_:1}),e(H(b),{ref_key:"dicDialogRef",ref:u,onRefresh:t[3]||(t[3]=n=>p())},null,512)])}}});export{X as default};
