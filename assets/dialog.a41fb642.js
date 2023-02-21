import{h as p,r as U,K as T,a9 as s,j as B,k as I,D as l,x as o,l as b,B as _,C as z,aE as R,aF as E}from"./vue.543fafcc.js";import{_ as P}from"./plugin-vue_export-helper.c27b6911.js";const j=n=>(R("data-v-8e56f45d"),n=n(),E(),n),K={class:"system-role-dialog-container"},M=j(()=>b("span",null,"角色标识",-1)),q={class:"dialog-footer"},A=p({name:"systemRoleDialog"}),G=p({...A,emits:["refresh"],setup(n,{expose:f,emit:g}){const x=U(),e=T({ruleForm:{roleName:"",roleSign:"",sort:0,status:!0,describe:""},menuData:[],menuProps:{children:"children",label:"label"},dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""}}),h=(u,t)=>{u==="edit"?(e.ruleForm=t,e.dialog.title="修改角色",e.dialog.submitTxt="修 改"):(e.dialog.title="新增角色",e.dialog.submitTxt="新 增"),e.dialog.isShowDialog=!0,F()},m=()=>{e.dialog.isShowDialog=!1},V=()=>{m()},D=()=>{m(),g("refresh")},F=()=>{e.menuData=[{id:1,label:"系统管理",children:[{id:11,label:"菜单管理",children:[{id:111,label:"菜单新增"},{id:112,label:"菜单修改"},{id:113,label:"菜单删除"},{id:114,label:"菜单查询"}]},{id:12,label:"角色管理",children:[{id:121,label:"角色新增"},{id:122,label:"角色修改"},{id:123,label:"角色删除"},{id:124,label:"角色查询"}]},{id:13,label:"用户管理",children:[{id:131,label:"用户新增"},{id:132,label:"用户修改"},{id:133,label:"用户删除"},{id:134,label:"用户查询"}]}]},{id:2,label:"权限管理",children:[{id:21,label:"前端控制",children:[{id:211,label:"页面权限"},{id:212,label:"页面权限"}]},{id:22,label:"后端控制",children:[{id:221,label:"页面权限"}]}]}]};return f({openDialog:h}),(u,t)=>{const r=s("el-input"),d=s("el-form-item"),i=s("el-col"),w=s("el-tooltip"),S=s("el-input-number"),y=s("el-switch"),v=s("el-tree"),k=s("el-row"),C=s("el-form"),c=s("el-button"),N=s("el-dialog");return B(),I("div",K,[l(N,{title:e.dialog.title,modelValue:e.dialog.isShowDialog,"onUpdate:modelValue":t[5]||(t[5]=a=>e.dialog.isShowDialog=a),width:"769px"},{footer:o(()=>[b("span",q,[l(c,{onClick:V,size:"default"},{default:o(()=>[_("取 消")]),_:1}),l(c,{type:"primary",onClick:D,size:"default"},{default:o(()=>[_(z(e.dialog.submitTxt),1)]),_:1})])]),default:o(()=>[l(C,{ref_key:"roleDialogFormRef",ref:x,model:e.ruleForm,size:"default","label-width":"90px"},{default:o(()=>[l(k,{gutter:35},{default:o(()=>[l(i,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"角色名称"},{default:o(()=>[l(r,{modelValue:e.ruleForm.roleName,"onUpdate:modelValue":t[0]||(t[0]=a=>e.ruleForm.roleName=a),placeholder:"请输入角色名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"角色标识"},{label:o(()=>[l(w,{effect:"dark",content:"用于 `router/route.ts` meta.roles",placement:"top-start"},{default:o(()=>[M]),_:1})]),default:o(()=>[l(r,{modelValue:e.ruleForm.roleSign,"onUpdate:modelValue":t[1]||(t[1]=a=>e.ruleForm.roleSign=a),placeholder:"请输入角色标识",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"排序"},{default:o(()=>[l(S,{modelValue:e.ruleForm.sort,"onUpdate:modelValue":t[2]||(t[2]=a=>e.ruleForm.sort=a),min:0,max:999,"controls-position":"right",placeholder:"请输入排序",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[l(d,{label:"角色状态"},{default:o(()=>[l(y,{modelValue:e.ruleForm.status,"onUpdate:modelValue":t[3]||(t[3]=a=>e.ruleForm.status=a),"inline-prompt":"","active-text":"启","inactive-text":"禁"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(d,{label:"角色描述"},{default:o(()=>[l(r,{modelValue:e.ruleForm.describe,"onUpdate:modelValue":t[4]||(t[4]=a=>e.ruleForm.describe=a),type:"textarea",placeholder:"请输入角色描述",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),l(i,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[l(d,{label:"菜单权限"},{default:o(()=>[l(v,{data:e.menuData,props:e.menuProps,"show-checkbox":"",class:"menu-data-tree"},null,8,["data","props"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}});const L=P(G,[["__scopeId","data-v-8e56f45d"]]);export{L as default};
