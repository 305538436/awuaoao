import{_ as t}from"./wpreload-helper.41c905a7.js";import{h as n,ap as a,ar as m,b as _,a4 as d,j as c,v as p,z as f,u as y}from"./wvue.543fafcc.js";import{u as v}from"./wthemeConfig.4ccac927.js";import{L as s}from"./wstorage.542a95ff.js";import{e as i}from"./wmitt.7f99bbc0.js";const L=n({name:"layout"}),A=n({...L,setup(E){const u={defaults:a(()=>t(()=>import("./wdefaults.04411682.js"),["./wdefaults.04411682.js","./wpreload-helper.41c905a7.js","./wvue.543fafcc.js","./wthemeConfig.4ccac927.js","./wloading.07a582de.js","./wloading.70fbfd85.css"],import.meta.url)),classic:a(()=>t(()=>import("./wclassic.b6dbb1e7.js"),["./wclassic.b6dbb1e7.js","./wpreload-helper.41c905a7.js","./wvue.543fafcc.js","./wthemeConfig.4ccac927.js"],import.meta.url)),transverse:a(()=>t(()=>import("./wtransverse.b3c3be57.js"),["./wtransverse.b3c3be57.js","./wpreload-helper.41c905a7.js","./wvue.543fafcc.js","./wthemeConfig.4ccac927.js"],import.meta.url)),columns:a(()=>t(()=>import("./wcolumns.460e33cd.js"),["./wcolumns.460e33cd.js","./wpreload-helper.41c905a7.js","./wvue.543fafcc.js","./wthemeConfig.4ccac927.js"],import.meta.url))},l=v(),{themeConfig:e}=m(l),r=()=>{s.get("oldLayout")||s.set("oldLayout",e.value.layout);const o=document.body.clientWidth;o<1e3?(e.value.isCollapse=!1,i.emit("layoutMobileResize",{layout:"defaults",clientWidth:o})):i.emit("layoutMobileResize",{layout:s.get("oldLayout")?s.get("oldLayout"):e.value.layout,clientWidth:o})};return _(()=>{r(),window.addEventListener("resize",r)}),d(()=>{window.removeEventListener("resize",r)}),(o,R)=>(c(),p(f(u[y(e).layout])))}});export{A as default};
