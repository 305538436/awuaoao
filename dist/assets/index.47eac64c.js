import{_ as E}from"./preload-helper.41c905a7.js";import{u as L}from"./userInfo.4391f3f6.js";import{j as T}from"./arrayOperation.b573dead.js";import{ay as y}from"./index.070d5527.js";import{h as I,ap as g,a9 as c,ac as C,j as i,k as n,D as e,u as o,x as t,B as l,l as s,y as _}from"./vue.543fafcc.js";import{_ as O}from"./_plugin-vue_export-helper.c27b6911.js";import"./storage.542a95ff.js";import"./index.3b68140d.js";function R(b){return L().userInfos.authBtnList.some(f=>f===b)}function j(b){let u=!1;return L().userInfos.authBtnList.map(v=>{b.map(h=>{v===h&&(u=!0)})}),u}function N(b){const u=L();return T(b,u.userInfos.authBtnList)}const F={class:"layout-pd"},M={class:"flex-warp"},S={class:"flex-warp-item"},U={class:"flex-warp-item-box"},q={class:"flex-warp-item"},G={class:"flex-warp-item-box"},H={class:"flex-warp-item"},J={class:"flex-warp-item-box"},K={class:"flex-warp-item"},Q={class:"flex-warp-item-box"},W={class:"flex-warp"},X={class:"flex-warp-item"},Y={class:"flex-warp-item-box"},Z={class:"flex-warp-item"},$={class:"flex-warp-item-box"},ee={class:"flex-warp-item"},te={class:"flex-warp-item-box"},se={class:"flex-warp-item"},le={class:"flex-warp-item-box"},ae={class:"flex-warp"},de={class:"flex-warp-item"},ie={class:"flex-warp-item-box"},ne={class:"flex-warp-item"},oe={class:"flex-warp-item-box"},_e={class:"flex-warp-item"},ce={class:"flex-warp-item-box"},ue={class:"flex-warp-item"},fe={class:"flex-warp-item-box"},re={class:"flex-warp"},xe={class:"flex-warp-item"},pe={class:"flex-warp-item-box"},me={class:"flex-warp-item"},be={class:"flex-warp-item-box"},ve={class:"flex-warp-item"},he={class:"flex-warp-item-box"},we={class:"flex-warp-item"},ye={class:"flex-warp-item-box"},ke={class:"flex-warp"},ze={class:"flex-warp-item"},Ae={class:"flex-warp-item-box"},Ee={class:"flex-warp-item"},ge={class:"flex-warp-item-box"},De={class:"flex-warp-item"},Ce={class:"flex-warp-item-box"},Le={class:"flex-warp-item"},Ie={class:"flex-warp-item-box"},Be={class:"flex-warp"},Ve={class:"flex-warp-item"},Pe={class:"flex-warp-item-box"},Te={class:"flex-warp-item"},Oe={class:"flex-warp-item-box"},Re={class:"flex-warp-item"},je={class:"flex-warp-item-box"},Ne={class:"flex-warp-item"},Fe={class:"flex-warp-item-box"},Me={class:"flex-warp"},Se={class:"flex-warp-item"},Ue={class:"flex-warp-item-box"},qe={class:"flex-warp-item"},Ge={class:"flex-warp-item-box"},He={class:"flex-warp-item"},Je={class:"flex-warp-item-box"},Ke=I({name:"limitsFrontEndBtn"}),Qe=I({...Ke,setup(b){const u=g(()=>E(()=>import("./index.5570ee91.js"),["./index.5570ee91.js","./storage.542a95ff.js","./vue.543fafcc.js","./userInfo.4391f3f6.js","./index.302a91f9.js","./_commonjsHelpers.35101cd5.js","./index.18e5bded.js","./keepAliveNames.cf66da55.js","./routesList.76e57b72.js","./themeConfig.9ce93220.js","./preload-helper.41c905a7.js","./loading.7efee3a8.js","./loading.70fbfd85.css","./tagsViewRoutes.69b270cc.js","./index.4ac74e37.js","./index.070d5527.js","./index.3b68140d.js","./index.8b89e2e0.css"],import.meta.url)),f=g(()=>E(()=>import("./auth.05660896.js"),["./auth.05660896.js","./vue.543fafcc.js","./userInfo.4391f3f6.js","./storage.542a95ff.js"],import.meta.url)),v=g(()=>E(()=>import("./auths.af6100b8.js"),["./auths.af6100b8.js","./vue.543fafcc.js","./userInfo.4391f3f6.js","./storage.542a95ff.js"],import.meta.url)),h=g(()=>E(()=>import("./authAll.784ac784.js"),["./authAll.784ac784.js","./vue.543fafcc.js","./userInfo.4391f3f6.js","./storage.542a95ff.js","./arrayOperation.b573dead.js"],import.meta.url)),B=()=>{R("btn.add")?y.success("恭喜，您有权限！"):y.error("抱歉，您没有权限！")},V=()=>{j(["btn.add","btn.edit","btn.del","btn.link"])?y.success("恭喜，您有权限！"):y.error("抱歉，您没有权限！")},P=()=>{N(["btn.add","btn.edit","btn.del","btn.link"])?y.success("恭喜，您有权限！"):y.error("抱歉，您没有权限！")};return(We,Xe)=>{const r=c("el-row"),x=c("ele-DocumentAdd"),a=c("el-icon"),d=c("el-button"),p=c("ele-Edit"),m=c("ele-Delete"),w=c("ele-Link"),D=c("el-card"),k=C("auth"),z=C("auths"),A=C("auth-all");return i(),n("div",F,[e(o(u),{style:{padding:"0 !important"}}),e(D,{shadow:"hover",header:"演示1：组件方式",class:"mt15"},{default:t(()=>[e(r,{class:"mb10",style:{color:"#808080"}},{default:t(()=>[l('单个权限验证（:value="xxx"）：')]),_:1}),s("div",M,[e(o(f),{value:"btn.add"},{default:t(()=>[s("div",S,[s("div",U,[e(d,{type:"primary",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(x)]),_:1}),l(" 新增 ")]),_:1})])])]),_:1},8,["value"]),e(o(f),{value:"btn.edit"},{default:t(()=>[s("div",q,[s("div",G,[e(d,{type:"info",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(p)]),_:1}),l(" 编辑 ")]),_:1})])])]),_:1},8,["value"]),e(o(f),{value:"btn.del"},{default:t(()=>[s("div",H,[s("div",J,[e(d,{type:"danger",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(m)]),_:1}),l(" 删除 ")]),_:1})])])]),_:1},8,["value"]),e(o(f),{value:"btn.link"},{default:t(()=>[s("div",K,[s("div",Q,[e(d,{type:"success",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(w)]),_:1}),l(" 跳转 ")]),_:1})])])]),_:1},8,["value"])]),e(r,{class:"mb10 mt10",style:{color:"#808080"}},{default:t(()=>[l('多个权限验证，满足一个则显示（:value="[xxx,xxx]"）：')]),_:1}),s("div",W,[e(o(v),{value:["btn.addsss","btn.edit","btn.delsss","btn.linksss"]},{default:t(()=>[s("div",X,[s("div",Y,[e(d,{type:"primary",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(x)]),_:1}),l(" 新增 ")]),_:1})])])]),_:1},8,["value"]),e(o(v),{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:t(()=>[s("div",Z,[s("div",$,[e(d,{type:"info",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(p)]),_:1}),l(" 编辑 ")]),_:1})])])]),_:1},8,["value"]),e(o(v),{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:t(()=>[s("div",ee,[s("div",te,[e(d,{type:"danger",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(m)]),_:1}),l(" 删除 ")]),_:1})])])]),_:1},8,["value"]),e(o(v),{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:t(()=>[s("div",se,[s("div",le,[e(d,{type:"success",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(w)]),_:1}),l(" 跳转 ")]),_:1})])])]),_:1},8,["value"])]),e(r,{class:"mb10 mt10",style:{color:"#808080"}},{default:t(()=>[l('多个权限验证，全部满足则显示（:value="[xxx,xxx]"）：')]),_:1}),s("div",ae,[e(o(h),{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:t(()=>[s("div",de,[s("div",ie,[e(d,{type:"primary",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(x)]),_:1}),l(" 新增 ")]),_:1})])])]),_:1},8,["value"]),e(o(h),{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:t(()=>[s("div",ne,[s("div",oe,[e(d,{type:"info",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(p)]),_:1}),l(" 编辑 ")]),_:1})])])]),_:1},8,["value"]),e(o(h),{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:t(()=>[s("div",_e,[s("div",ce,[e(d,{type:"danger",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(m)]),_:1}),l(" 删除 ")]),_:1})])])]),_:1},8,["value"]),e(o(h),{value:["btn.add","btn.edit","btn.del","btn.link"]},{default:t(()=>[s("div",ue,[s("div",fe,[e(d,{type:"success",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(w)]),_:1}),l(" 跳转 ")]),_:1})])])]),_:1},8,["value"])])]),_:1}),e(D,{shadow:"hover",header:"演示2：指令方式（页面初始化时执行）",class:"mt15"},{default:t(()=>[e(r,{class:"mb10",style:{color:"#808080"}},{default:t(()=>[l('单个权限验证（v-auth="xxx"）：')]),_:1}),s("div",re,[_((i(),n("div",xe,[s("div",pe,[e(d,{type:"primary",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(x)]),_:1}),l(" 新增 ")]),_:1})])])),[[k,"btn.add"]]),_((i(),n("div",me,[s("div",be,[e(d,{type:"info",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(p)]),_:1}),l(" 编辑 ")]),_:1})])])),[[k,"btn.edit"]]),_((i(),n("div",ve,[s("div",he,[e(d,{type:"danger",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(m)]),_:1}),l(" 删除 ")]),_:1})])])),[[k,"btn.del"]]),_((i(),n("div",we,[s("div",ye,[e(d,{type:"success",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(w)]),_:1}),l(" 跳转 ")]),_:1})])])),[[k,"btn.link"]])]),e(r,{class:"mb10 mt10",style:{color:"#808080"}},{default:t(()=>[l('多个权限验证，满足一个则显示（v-auths="[xxx,xxx]"）：')]),_:1}),s("div",ke,[_((i(),n("div",ze,[s("div",Ae,[e(d,{type:"primary",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(x)]),_:1}),l(" 新增 ")]),_:1})])])),[[z,["btn.addsss","btn.edit","btn.delsss","btn.linksss"]]]),_((i(),n("div",Ee,[s("div",ge,[e(d,{type:"info",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(p)]),_:1}),l(" 编辑 ")]),_:1})])])),[[z,["btn.add","btn.edit","btn.del","btn.link"]]]),_((i(),n("div",De,[s("div",Ce,[e(d,{type:"danger",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(m)]),_:1}),l(" 删除 ")]),_:1})])])),[[z,["btn.add","btn.edit","btn.del","btn.link"]]]),_((i(),n("div",Le,[s("div",Ie,[e(d,{type:"success",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(w)]),_:1}),l(" 跳转 ")]),_:1})])])),[[z,["btn.add","btn.edit","btn.del","btn.link"]]])]),e(r,{class:"mb10 mt10",style:{color:"#808080"}},{default:t(()=>[l('多个权限验证，全部满足则显示（v-auth-all="[xxx,xxx]"）：')]),_:1}),s("div",Be,[_((i(),n("div",Ve,[s("div",Pe,[e(d,{type:"primary",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(x)]),_:1}),l(" 新增 ")]),_:1})])])),[[A,["btn.add","btn.edit","btn.del","btn.link"]]]),_((i(),n("div",Te,[s("div",Oe,[e(d,{type:"info",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(p)]),_:1}),l(" 编辑 ")]),_:1})])])),[[A,["btn.add","btn.edit","btn.del","btn.link"]]]),_((i(),n("div",Re,[s("div",je,[e(d,{type:"danger",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(m)]),_:1}),l(" 删除 ")]),_:1})])])),[[A,["btn.add","btn.edit","btn.del","btn.link"]]]),_((i(),n("div",Ne,[s("div",Fe,[e(d,{type:"success",size:"default"},{default:t(()=>[e(a,null,{default:t(()=>[e(w)]),_:1}),l(" 跳转 ")]),_:1})])])),[[A,["btn.add","btn.edit","btn.del","btn.link"]]])])]),_:1}),e(D,{shadow:"hover",header:"演示3：函数方式（点击按钮查看有无权限，用于判断）",class:"mt15"},{default:t(()=>[e(r,{class:"mb10",style:{color:"#808080"}},{default:t(()=>[l("auth('xxx')、auths(['xxx','xxx'])、authAll(['xxx','xxx'])：")]),_:1}),s("div",Me,[s("div",Se,[s("div",Ue,[e(d,{type:"primary",size:"default",onClick:B},{default:t(()=>[e(a,null,{default:t(()=>[e(x)]),_:1}),l(" 新增 ")]),_:1})])]),s("div",qe,[s("div",Ge,[e(d,{type:"info",size:"default",onClick:V},{default:t(()=>[e(a,null,{default:t(()=>[e(p)]),_:1}),l(" 编辑 ")]),_:1})])]),s("div",He,[s("div",Je,[e(d,{type:"danger",size:"default",onClick:P},{default:t(()=>[e(a,null,{default:t(()=>[e(m)]),_:1}),l(" 删除 ")]),_:1})])])])]),_:1})])}}});const dt=O(Qe,[["__scopeId","data-v-35a44956"]]);export{dt as default};
