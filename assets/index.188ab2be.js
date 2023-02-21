import{_ as B}from"./preload-helper.41c905a7.js";import{J as E}from"./index.4ac74e37.js";import{ay as U}from"./index.070d5527.js";import{h as g,ap as R,r as $,K as V,o as I,a9 as r,ac as M,j as c,k as O,D as e,x as n,l as j,B as i,y as F,v as u,u as H}from"./vue.543fafcc.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.3b68140d.js";const P={class:"system-user-container layout-padding"},J={class:"system-user-search mb15"},K=g({name:"systemUser"}),q=g({...K,setup(G){const b=R(()=>B(()=>import("./dialog.ab990168.js"),["./dialog.ab990168.js","./vue.543fafcc.js"],import.meta.url)),m=$(),a=V({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),p=()=>{a.tableData.loading=!0;const o=[];for(let t=0;t<2;t++)o.push({userName:t===0?"admin":"test",userNickname:t===0?"我是管理员":"我是普通用户",roleSign:t===0?"admin":"common",department:t===0?["vueNextAdmin","IT外包服务"]:["vueNextAdmin","资本控股"],phone:"12345678910",email:"vueNextAdmin@123.com",sex:"女",password:"123456",overdueTime:new Date,status:!0,describe:t===0?"不可删除":"测试用户",createTime:new Date().toLocaleString()});a.tableData.data=o,a.tableData.total=a.tableData.data.length,setTimeout(()=>{a.tableData.loading=!1},500)},v=o=>{m.value.openDialog(o)},w=(o,t)=>{m.value.openDialog(o,t)},h=o=>{E.confirm(`此操作将永久删除账户名称：“${o.userName}”，是否继续?`,"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{p(),U.success("删除成功")}).catch(()=>{})},D=o=>{a.tableData.param.pageSize=o,p()},y=o=>{a.tableData.param.pageNum=o,p()};return I(()=>{p()}),(o,t)=>{const x=r("el-input"),N=r("ele-Search"),_=r("el-icon"),d=r("el-button"),z=r("ele-FolderAdd"),s=r("el-table-column"),f=r("el-tag"),k=r("el-table"),C=r("el-pagination"),S=r("el-card"),T=M("loading");return c(),O("div",P,[e(S,{shadow:"hover",class:"layout-padding-auto"},{default:n(()=>[j("div",J,[e(x,{size:"default",placeholder:"请输入用户名称",style:{"max-width":"180px"}}),e(d,{size:"default",type:"primary",class:"ml10"},{default:n(()=>[e(_,null,{default:n(()=>[e(N)]),_:1}),i(" 查询 ")]),_:1}),e(d,{size:"default",type:"success",class:"ml10",onClick:t[0]||(t[0]=l=>v("add"))},{default:n(()=>[e(_,null,{default:n(()=>[e(z)]),_:1}),i(" 新增用户 ")]),_:1})]),F((c(),u(k,{data:a.tableData.data,style:{width:"100%"}},{default:n(()=>[e(s,{type:"index",label:"序号",width:"60"}),e(s,{prop:"userName",label:"账户名称","show-overflow-tooltip":""}),e(s,{prop:"userNickname",label:"用户昵称","show-overflow-tooltip":""}),e(s,{prop:"roleSign",label:"关联角色","show-overflow-tooltip":""}),e(s,{prop:"department",label:"部门","show-overflow-tooltip":""}),e(s,{prop:"phone",label:"手机号","show-overflow-tooltip":""}),e(s,{prop:"email",label:"邮箱","show-overflow-tooltip":""}),e(s,{prop:"status",label:"用户状态","show-overflow-tooltip":""},{default:n(l=>[l.row.status?(c(),u(f,{key:0,type:"success"},{default:n(()=>[i("启用")]),_:1})):(c(),u(f,{key:1,type:"info"},{default:n(()=>[i("禁用")]),_:1}))]),_:1}),e(s,{prop:"describe",label:"用户描述","show-overflow-tooltip":""}),e(s,{prop:"createTime",label:"创建时间","show-overflow-tooltip":""}),e(s,{label:"操作",width:"100"},{default:n(l=>[e(d,{disabled:l.row.userName==="admin",size:"small",text:"",type:"primary",onClick:A=>w("edit",l.row)},{default:n(()=>[i("修改")]),_:2},1032,["disabled","onClick"]),e(d,{disabled:l.row.userName==="admin",size:"small",text:"",type:"primary",onClick:A=>h(l.row)},{default:n(()=>[i("删除")]),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"])),[[T,a.tableData.loading]]),e(C,{onSizeChange:D,onCurrentChange:y,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":a.tableData.param.pageNum,"onUpdate:current-page":t[1]||(t[1]=l=>a.tableData.param.pageNum=l),background:"","page-size":a.tableData.param.pageSize,"onUpdate:page-size":t[2]||(t[2]=l=>a.tableData.param.pageSize=l),layout:"total, sizes, prev, pager, next, jumper",total:a.tableData.total},null,8,["current-page","page-size","total"])]),_:1}),e(H(b),{ref_key:"userDialogRef",ref:m,onRefresh:t[3]||(t[3]=l=>p())},null,512)])}}});const te=L(q,[["__scopeId","data-v-b94efbb6"]]);export{te as default};
