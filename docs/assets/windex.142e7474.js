import{h as q,r as E,K,a9 as a,j as r,k as c,D as l,x as t,F as h,Z as V,u as L,l as R,B as k,y as M,v as n,A as w,E as Z}from"./wvue.740b6138.js";import{ay as G}from"./windex.1bceac5d.js";import"./windex.b0c33291.js";const U=[{label:"姓名",prop:"name",placeholder:"请输入姓名",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"邮箱",prop:"email",placeholder:"请输入用户邮箱",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"登陆时间",prop:"autograph",placeholder:"选择时间",clearable:!0,disabled:!1,required:!0,type:"date",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"职务",prop:"occupation",placeholder:"请选择职务",clearable:!0,disabled:!1,required:!0,type:"select",i18n:!1,i18nText:"",options:[{label:"计算机 / 互联网 / 通信",value:"1"},{label:"生产 / 工艺 / 制造",value:"2"},{label:"医疗 / 护理 / 制药",value:"3"}],isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"",prop:"",placeholder:"",clearable:!0,disabled:!1,required:!0,type:"",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24},{label:"备注",prop:"remarks",placeholder:"请输入",clearable:!0,disabled:!1,required:!0,type:"textarea",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24}],H={class:"dynamic-form-container layout-pd"},J=R("span",{class:"ml10"},"年度",-1),Q={class:"flex-margin"},W=q({name:"pagesDynamicForm"}),le=q({...W,setup(X){const y=E(),o=K({formData:U,form:{name:"",email:"",autograph:"",occupation:"",list:[{year:"",month:"",day:""}],remarks:""}}),S=()=>{o.form.list.push({year:"",month:"",day:""})},C=u=>{o.form.list.splice(u,1)},D=u=>{!u||u.validate(p=>{if(p)G.success("验证成功");else return!1})},T=u=>{!u||u.resetFields()};return(u,p)=>{const i=a("el-input"),$=a("el-date-picker"),F=a("el-option"),z=a("el-select"),f=a("el-form-item"),B=a("ele-Plus"),x=a("el-icon"),_=a("el-button"),N=a("ele-Delete"),b=a("el-col"),g=a("el-row"),A=a("el-form"),I=a("el-card"),O=a("ele-RefreshRight"),P=a("SvgIcon");return r(),c("div",H,[l(I,{shadow:"hover",header:"动态复杂表单"},{default:t(()=>[l(A,{model:o.form,ref_key:"formRulesOneRef",ref:y,size:"default","label-width":"100px",class:"mt35"},{default:t(()=>[l(g,{gutter:35},{default:t(()=>[(r(!0),c(h,null,V(L(U),(e,j)=>M((r(),n(b,{xs:e.xs,sm:e.sm,md:e.md,lg:e.md,xl:e.xl,class:"mb20",key:j},{default:t(()=>[e.type!==""?(r(),c(h,{key:0},[e.type!==""?(r(),n(f,{key:0,label:e.label,prop:e.prop,rules:[{required:e.required,message:`${e.label}不能为空`,trigger:e.type==="input"?"blur":"change"}]},{default:t(()=>[e.type==="input"?(r(),n(i,{key:0,modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="date"?(r(),n($,{key:1,modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,type:"date",placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):e.type==="select"?(r(),n(z,{key:2,modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,placeholder:e.placeholder,style:{width:"100%"},disabled:e.disabled},{default:t(()=>[(r(!0),c(h,null,V(e.options,s=>(r(),n(F,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled"])):w("",!0),e.type==="textarea"?(r(),n(i,{key:3,type:"textarea",modelValue:o.form[e.prop],"onUpdate:modelValue":s=>o.form[e.prop]=s,placeholder:e.placeholder,clearable:"",style:{width:"100%"},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):w("",!0)]),_:2},1032,["label","prop","rules"])):w("",!0)],64)):(r(!0),c(h,{key:1},V(o.form.list,(s,d)=>(r(),n(g,{gutter:35,key:d},{default:t(()=>[l(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t(()=>[l(f,{label:"年度",prop:`list[${d}].year`,rules:[{required:!0,message:"年度不能为空",trigger:"blur"}]},{label:t(()=>[d===0?(r(),n(_,{key:0,type:"primary",circle:"",size:"small",onClick:S},{default:t(()=>[l(x,null,{default:t(()=>[l(B)]),_:1})]),_:1})):(r(),n(_,{key:1,type:"danger",circle:"",size:"small",onClick:m=>C(d)},{default:t(()=>[l(x,null,{default:t(()=>[l(N)]),_:1})]),_:2},1032,["onClick"])),J]),default:t(()=>[l(i,{modelValue:o.form.list[d].year,"onUpdate:modelValue":m=>o.form.list[d].year=m,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),l(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t(()=>[l(f,{label:"月度",prop:`list[${d}].month`,rules:[{required:!0,message:"月度不能为空",trigger:"blur"}]},{default:t(()=>[l(i,{modelValue:o.form.list[d].month,"onUpdate:modelValue":m=>o.form.list[d].month=m,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),l(b,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t(()=>[l(f,{label:"日度",prop:`list[${d}].day`,rules:[{required:!0,message:"日度不能为空",trigger:"blur"}]},{default:t(()=>[l(i,{modelValue:o.form.list[d].day,"onUpdate:modelValue":m=>o.form.list[d].day=m,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["xs","sm","md","lg","xl"])),[[Z,e.isShow]])),128))]),_:1})]),_:1},8,["model"])]),_:1}),l(g,{class:"flex mt15"},{default:t(()=>[R("div",Q,[l(_,{size:"default",onClick:p[0]||(p[0]=e=>T(y.value))},{default:t(()=>[l(x,null,{default:t(()=>[l(O)]),_:1}),k(" 重置表单 ")]),_:1}),l(_,{size:"default",type:"primary",onClick:p[1]||(p[1]=e=>D(y.value))},{default:t(()=>[l(P,{name:"iconfont icon-shuxing"}),k(" 验证表单 ")]),_:1})])]),_:1})])}}});export{le as default};
