import{at as e}from"./wvue.740b6138.js";import{S as t}from"./wstorage.542a95ff.js";const r=e("tagsViewRoutes",{state:()=>({tagsViewRoutes:[],isTagsViewCurrenFull:!1}),actions:{async setTagsViewRoutes(s){this.tagsViewRoutes=s},setCurrenFullscreen(s){t.set("isTagsViewCurrenFull",s),this.isTagsViewCurrenFull=s}}});export{r as u};