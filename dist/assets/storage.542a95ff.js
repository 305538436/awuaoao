function f(e){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var a in s)e[a]=s[a]}return e}var m={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function p(e,o){function s(r,c,n){if(!(typeof document>"u")){n=f({},o,n),typeof n.expires=="number"&&(n.expires=new Date(Date.now()+n.expires*864e5)),n.expires&&(n.expires=n.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var t="";for(var i in n)!n[i]||(t+="; "+i,n[i]!==!0&&(t+="="+n[i].split(";")[0]));return document.cookie=r+"="+e.write(c,r)+t}}function a(r){if(!(typeof document>"u"||arguments.length&&!r)){for(var c=document.cookie?document.cookie.split("; "):[],n={},t=0;t<c.length;t++){var i=c[t].split("="),l=i.slice(1).join("=");try{var g=decodeURIComponent(i[0]);if(n[g]=e.read(l,g),r===g)break}catch{}}return r?n[r]:n}}return Object.create({set:s,get:a,remove:function(r,c){s(r,"",f({},c,{expires:-1}))},withAttributes:function(r){return p(this.converter,f({},this.attributes,r))},withConverter:function(r){return p(f({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(e)}})}var d=p(m,{path:"/"});const w={set(e,o){window.localStorage.setItem(e,JSON.stringify(o))},get(e){let o=window.localStorage.getItem(e);return JSON.parse(o)},remove(e){window.localStorage.removeItem(e)},clear(){window.localStorage.clear()}},v={set(e,o){if(e==="token")return d.set(e,o);window.sessionStorage.setItem(e,JSON.stringify(o))},get(e){if(e==="token")return d.get(e);let o=window.sessionStorage.getItem(e);return JSON.parse(o)},remove(e){if(e==="token")return d.remove(e);window.sessionStorage.removeItem(e)},clear(){d.remove("token"),window.sessionStorage.clear()}};export{w as L,v as S,d as a};
