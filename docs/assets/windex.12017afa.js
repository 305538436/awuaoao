import{h as re,K as De,a9 as Xt,j as Ee,k as Me,D as vt,x as lt,l as N,B as Ht,J as Ce,aE as Te,aF as _e}from"./wvue.740b6138.js";import{_ as Oe}from"./w_plugin-vue_export-helper.c27b6911.js";function Wt(a,t){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),i.push.apply(i,e)}return i}function ne(a){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Wt(Object(i),!0).forEach(function(e){Se(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):Wt(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function yt(a){return yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yt(a)}function Ne(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Ut(a,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function Ae(a,t,i){return t&&Ut(a.prototype,t),i&&Ut(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function Se(a,t,i){return t in a?Object.defineProperty(a,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[t]=i,a}function oe(a){return Re(a)||Ie(a)||Be(a)||ke()}function Re(a){if(Array.isArray(a))return xt(a)}function Ie(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Be(a,t){if(!!a){if(typeof a=="string")return xt(a,t);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return xt(a,t)}}function xt(a,t){(t==null||t>a.length)&&(t=a.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=a[i];return e}function ke(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ut=typeof window<"u"&&typeof window.document<"u",P=ut?window:{},At=ut&&P.document.documentElement?"ontouchstart"in P.document.documentElement:!1,St=ut?"PointerEvent"in P:!1,y="cropper",Rt="all",se="crop",he="move",ce="zoom",q="e",F="w",Q="s",W="n",it="ne",at="nw",rt="se",nt="sw",Dt="".concat(y,"-crop"),Vt="".concat(y,"-disabled"),S="".concat(y,"-hidden"),jt="".concat(y,"-hide"),Le="".concat(y,"-invisible"),dt="".concat(y,"-modal"),Et="".concat(y,"-move"),st="".concat(y,"Action"),pt="".concat(y,"Preview"),It="crop",le="move",pe="none",Mt="crop",Ct="cropend",Tt="cropmove",_t="cropstart",Gt="dblclick",ze=At?"touchstart":"mousedown",Pe=At?"touchmove":"mousemove",Ye=At?"touchend touchcancel":"mouseup",$t=St?"pointerdown":ze,qt=St?"pointermove":Pe,Ft=St?"pointerup pointercancel":Ye,Kt="ready",Qt="resize",Zt="wheel",Ot="zoom",Jt="image/jpeg",Xe=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,He=/^data:/,We=/^data:image\/jpeg;base64,/,Ue=/^img|canvas$/i,fe=200,de=100,te={viewMode:0,dragMode:It,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:fe,minContainerHeight:de,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Ve='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',je=Number.isNaN||P.isNaN;function u(a){return typeof a=="number"&&!je(a)}var ee=function(t){return t>0&&t<1/0};function wt(a){return typeof a>"u"}function K(a){return yt(a)==="object"&&a!==null}var Ge=Object.prototype.hasOwnProperty;function Z(a){if(!K(a))return!1;try{var t=a.constructor,i=t.prototype;return t&&i&&Ge.call(i,"isPrototypeOf")}catch{return!1}}function A(a){return typeof a=="function"}var $e=Array.prototype.slice;function ue(a){return Array.from?Array.from(a):$e.call(a)}function E(a,t){return a&&A(t)&&(Array.isArray(a)||u(a.length)?ue(a).forEach(function(i,e){t.call(a,i,e,a)}):K(a)&&Object.keys(a).forEach(function(i){t.call(a,a[i],i,a)})),a}var x=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),o=1;o<i;o++)e[o-1]=arguments[o];return K(t)&&e.length>0&&e.forEach(function(r){K(r)&&Object.keys(r).forEach(function(n){t[n]=r[n]})}),t},qe=/\.\d*(?:0|9){12}\d*$/;function tt(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return qe.test(a)?Math.round(a*t)/t:a}var Fe=/^width|height|left|top|marginLeft|marginTop$/;function U(a,t){var i=a.style;E(t,function(e,o){Fe.test(o)&&u(e)&&(e="".concat(e,"px")),i[o]=e})}function Ke(a,t){return a.classList?a.classList.contains(t):a.className.indexOf(t)>-1}function _(a,t){if(!!t){if(u(a.length)){E(a,function(e){_(e,t)});return}if(a.classList){a.classList.add(t);return}var i=a.className.trim();i?i.indexOf(t)<0&&(a.className="".concat(i," ").concat(t)):a.className=t}}function z(a,t){if(!!t){if(u(a.length)){E(a,function(i){z(i,t)});return}if(a.classList){a.classList.remove(t);return}a.className.indexOf(t)>=0&&(a.className=a.className.replace(t,""))}}function J(a,t,i){if(!!t){if(u(a.length)){E(a,function(e){J(e,t,i)});return}i?_(a,t):z(a,t)}}var Qe=/([a-z\d])([A-Z])/g;function Bt(a){return a.replace(Qe,"$1-$2").toLowerCase()}function Nt(a,t){return K(a[t])?a[t]:a.dataset?a.dataset[t]:a.getAttribute("data-".concat(Bt(t)))}function ht(a,t,i){K(i)?a[t]=i:a.dataset?a.dataset[t]=i:a.setAttribute("data-".concat(Bt(t)),i)}function Ze(a,t){if(K(a[t]))try{delete a[t]}catch{a[t]=void 0}else if(a.dataset)try{delete a.dataset[t]}catch{a.dataset[t]=void 0}else a.removeAttribute("data-".concat(Bt(t)))}var ge=/\s\s*/,me=function(){var a=!1;if(ut){var t=!1,i=function(){},e=Object.defineProperty({},"once",{get:function(){return a=!0,t},set:function(r){t=r}});P.addEventListener("test",i,e),P.removeEventListener("test",i,e)}return a}();function k(a,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=i;t.trim().split(ge).forEach(function(r){if(!me){var n=a.listeners;n&&n[r]&&n[r][i]&&(o=n[r][i],delete n[r][i],Object.keys(n[r]).length===0&&delete n[r],Object.keys(n).length===0&&delete a.listeners)}a.removeEventListener(r,o,e)})}function B(a,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=i;t.trim().split(ge).forEach(function(r){if(e.once&&!me){var n=a.listeners,s=n===void 0?{}:n;o=function(){delete s[r][i],a.removeEventListener(r,o,e);for(var l=arguments.length,h=new Array(l),c=0;c<l;c++)h[c]=arguments[c];i.apply(a,h)},s[r]||(s[r]={}),s[r][i]&&a.removeEventListener(r,s[r][i],e),s[r][i]=o,a.listeners=s}a.addEventListener(r,o,e)})}function et(a,t,i){var e;return A(Event)&&A(CustomEvent)?e=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0}):(e=document.createEvent("CustomEvent"),e.initCustomEvent(t,!0,!0,i)),a.dispatchEvent(e)}function ve(a){var t=a.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var bt=P.location,Je=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ie(a){var t=a.match(Je);return t!==null&&(t[1]!==bt.protocol||t[2]!==bt.hostname||t[3]!==bt.port)}function ae(a){var t="timestamp=".concat(new Date().getTime());return a+(a.indexOf("?")===-1?"?":"&")+t}function ot(a){var t=a.rotate,i=a.scaleX,e=a.scaleY,o=a.translateX,r=a.translateY,n=[];u(o)&&o!==0&&n.push("translateX(".concat(o,"px)")),u(r)&&r!==0&&n.push("translateY(".concat(r,"px)")),u(t)&&t!==0&&n.push("rotate(".concat(t,"deg)")),u(i)&&i!==1&&n.push("scaleX(".concat(i,")")),u(e)&&e!==1&&n.push("scaleY(".concat(e,")"));var s=n.length?n.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function ti(a){var t=ne({},a),i=0;return E(a,function(e,o){delete t[o],E(t,function(r){var n=Math.abs(e.startX-r.startX),s=Math.abs(e.startY-r.startY),p=Math.abs(e.endX-r.endX),l=Math.abs(e.endY-r.endY),h=Math.sqrt(n*n+s*s),c=Math.sqrt(p*p+l*l),f=(c-h)/h;Math.abs(f)>Math.abs(i)&&(i=f)})}),i}function ft(a,t){var i=a.pageX,e=a.pageY,o={endX:i,endY:e};return t?o:ne({startX:i,startY:e},o)}function ei(a){var t=0,i=0,e=0;return E(a,function(o){var r=o.startX,n=o.startY;t+=r,i+=n,e+=1}),t/=e,i/=e,{pageX:t,pageY:i}}function V(a){var t=a.aspectRatio,i=a.height,e=a.width,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",r=ee(e),n=ee(i);if(r&&n){var s=i*t;o==="contain"&&s>e||o==="cover"&&s<e?i=e/t:e=i*t}else r?i=e/t:n&&(e=i*t);return{width:e,height:i}}function ii(a){var t=a.width,i=a.height,e=a.degree;if(e=Math.abs(e)%180,e===90)return{width:i,height:t};var o=e%90*Math.PI/180,r=Math.sin(o),n=Math.cos(o),s=t*n+i*r,p=t*r+i*n;return e>90?{width:p,height:s}:{width:s,height:p}}function ai(a,t,i,e){var o=t.aspectRatio,r=t.naturalWidth,n=t.naturalHeight,s=t.rotate,p=s===void 0?0:s,l=t.scaleX,h=l===void 0?1:l,c=t.scaleY,f=c===void 0?1:c,m=i.aspectRatio,g=i.naturalWidth,b=i.naturalHeight,v=e.fillColor,M=v===void 0?"transparent":v,T=e.imageSmoothingEnabled,D=T===void 0?!0:T,Y=e.imageSmoothingQuality,R=Y===void 0?"low":Y,d=e.maxWidth,w=d===void 0?1/0:d,C=e.maxHeight,I=C===void 0?1/0:C,X=e.minWidth,j=X===void 0?0:X,G=e.minHeight,H=G===void 0?0:G,L=document.createElement("canvas"),O=L.getContext("2d"),$=V({aspectRatio:m,width:w,height:I}),ct=V({aspectRatio:m,width:j,height:H},"cover"),gt=Math.min($.width,Math.max(ct.width,g)),mt=Math.min($.height,Math.max(ct.height,b)),Lt=V({aspectRatio:o,width:w,height:I}),zt=V({aspectRatio:o,width:j,height:H},"cover"),Pt=Math.min(Lt.width,Math.max(zt.width,r)),Yt=Math.min(Lt.height,Math.max(zt.height,n)),ye=[-Pt/2,-Yt/2,Pt,Yt];return L.width=tt(gt),L.height=tt(mt),O.fillStyle=M,O.fillRect(0,0,gt,mt),O.save(),O.translate(gt/2,mt/2),O.rotate(p*Math.PI/180),O.scale(h,f),O.imageSmoothingEnabled=D,O.imageSmoothingQuality=R,O.drawImage.apply(O,[a].concat(oe(ye.map(function(xe){return Math.floor(tt(xe))})))),O.restore(),L}var we=String.fromCharCode;function ri(a,t,i){var e="";i+=t;for(var o=t;o<i;o+=1)e+=we(a.getUint8(o));return e}var ni=/^data:.*,/;function oi(a){var t=a.replace(ni,""),i=atob(t),e=new ArrayBuffer(i.length),o=new Uint8Array(e);return E(o,function(r,n){o[n]=i.charCodeAt(n)}),e}function si(a,t){for(var i=[],e=8192,o=new Uint8Array(a);o.length>0;)i.push(we.apply(null,ue(o.subarray(0,e)))),o=o.subarray(e);return"data:".concat(t,";base64,").concat(btoa(i.join("")))}function hi(a){var t=new DataView(a),i;try{var e,o,r;if(t.getUint8(0)===255&&t.getUint8(1)===216)for(var n=t.byteLength,s=2;s+1<n;){if(t.getUint8(s)===255&&t.getUint8(s+1)===225){o=s;break}s+=1}if(o){var p=o+4,l=o+10;if(ri(t,p,4)==="Exif"){var h=t.getUint16(l);if(e=h===18761,(e||h===19789)&&t.getUint16(l+2,e)===42){var c=t.getUint32(l+4,e);c>=8&&(r=l+c)}}}if(r){var f=t.getUint16(r,e),m,g;for(g=0;g<f;g+=1)if(m=r+g*12+2,t.getUint16(m,e)===274){m+=8,i=t.getUint16(m,e),t.setUint16(m,1,e);break}}}catch{i=1}return i}function ci(a){var t=0,i=1,e=1;switch(a){case 2:i=-1;break;case 3:t=-180;break;case 4:e=-1;break;case 5:t=90,e=-1;break;case 6:t=90;break;case 7:t=90,i=-1;break;case 8:t=-90;break}return{rotate:t,scaleX:i,scaleY:e}}var li={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,o=this.cropper,r=Number(i.minContainerWidth),n=Number(i.minContainerHeight);_(o,S),z(t,S);var s={width:Math.max(e.offsetWidth,r>=0?r:fe),height:Math.max(e.offsetHeight,n>=0?n:de)};this.containerData=s,U(o,{width:s.width,height:s.height}),_(t,S),z(o,S)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,o=Math.abs(i.rotate)%180===90,r=o?i.naturalHeight:i.naturalWidth,n=o?i.naturalWidth:i.naturalHeight,s=r/n,p=t.width,l=t.height;t.height*s>t.width?e===3?p=t.height*s:l=t.width/s:e===3?l=t.width/s:p=t.height*s;var h={aspectRatio:s,naturalWidth:r,naturalHeight:n,width:p,height:l};this.canvasData=h,this.limited=e===1||e===2,this.limitCanvas(!0,!0),h.width=Math.min(Math.max(h.width,h.minWidth),h.maxWidth),h.height=Math.min(Math.max(h.height,h.minHeight),h.maxHeight),h.left=(t.width-h.width)/2,h.top=(t.height-h.height)/2,h.oldLeft=h.left,h.oldTop=h.top,this.initialCanvasData=x({},h)},limitCanvas:function(t,i){var e=this.options,o=this.containerData,r=this.canvasData,n=this.cropBoxData,s=e.viewMode,p=r.aspectRatio,l=this.cropped&&n;if(t){var h=Number(e.minCanvasWidth)||0,c=Number(e.minCanvasHeight)||0;s>1?(h=Math.max(h,o.width),c=Math.max(c,o.height),s===3&&(c*p>h?h=c*p:c=h/p)):s>0&&(h?h=Math.max(h,l?n.width:0):c?c=Math.max(c,l?n.height:0):l&&(h=n.width,c=n.height,c*p>h?h=c*p:c=h/p));var f=V({aspectRatio:p,width:h,height:c});h=f.width,c=f.height,r.minWidth=h,r.minHeight=c,r.maxWidth=1/0,r.maxHeight=1/0}if(i)if(s>(l?0:1)){var m=o.width-r.width,g=o.height-r.height;r.minLeft=Math.min(0,m),r.minTop=Math.min(0,g),r.maxLeft=Math.max(0,m),r.maxTop=Math.max(0,g),l&&this.limited&&(r.minLeft=Math.min(n.left,n.left+(n.width-r.width)),r.minTop=Math.min(n.top,n.top+(n.height-r.height)),r.maxLeft=n.left,r.maxTop=n.top,s===2&&(r.width>=o.width&&(r.minLeft=Math.min(0,m),r.maxLeft=Math.max(0,m)),r.height>=o.height&&(r.minTop=Math.min(0,g),r.maxTop=Math.max(0,g))))}else r.minLeft=-r.width,r.minTop=-r.height,r.maxLeft=o.width,r.maxTop=o.height},renderCanvas:function(t,i){var e=this.canvasData,o=this.imageData;if(i){var r=ii({width:o.naturalWidth*Math.abs(o.scaleX||1),height:o.naturalHeight*Math.abs(o.scaleY||1),degree:o.rotate||0}),n=r.width,s=r.height,p=e.width*(n/e.naturalWidth),l=e.height*(s/e.naturalHeight);e.left-=(p-e.width)/2,e.top-=(l-e.height)/2,e.width=p,e.height=l,e.aspectRatio=n/s,e.naturalWidth=n,e.naturalHeight=s,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,U(this.canvas,x({width:e.width,height:e.height},ot({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,o=e.naturalWidth*(i.width/i.naturalWidth),r=e.naturalHeight*(i.height/i.naturalHeight);x(e,{width:o,height:r,left:(i.width-o)/2,top:(i.height-r)/2}),U(this.image,x({width:e.width,height:e.height},ot(x({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,o=Number(t.autoCropArea)||.8,r={width:i.width,height:i.height};e&&(i.height*e>i.width?r.height=r.width/e:r.width=r.height*e),this.cropBoxData=r,this.limitCropBox(!0,!0),r.width=Math.min(Math.max(r.width,r.minWidth),r.maxWidth),r.height=Math.min(Math.max(r.height,r.minHeight),r.maxHeight),r.width=Math.max(r.minWidth,r.width*o),r.height=Math.max(r.minHeight,r.height*o),r.left=i.left+(i.width-r.width)/2,r.top=i.top+(i.height-r.height)/2,r.oldLeft=r.left,r.oldTop=r.top,this.initialCropBoxData=x({},r)},limitCropBox:function(t,i){var e=this.options,o=this.containerData,r=this.canvasData,n=this.cropBoxData,s=this.limited,p=e.aspectRatio;if(t){var l=Number(e.minCropBoxWidth)||0,h=Number(e.minCropBoxHeight)||0,c=s?Math.min(o.width,r.width,r.width+r.left,o.width-r.left):o.width,f=s?Math.min(o.height,r.height,r.height+r.top,o.height-r.top):o.height;l=Math.min(l,o.width),h=Math.min(h,o.height),p&&(l&&h?h*p>l?h=l/p:l=h*p:l?h=l/p:h&&(l=h*p),f*p>c?f=c/p:c=f*p),n.minWidth=Math.min(l,c),n.minHeight=Math.min(h,f),n.maxWidth=c,n.maxHeight=f}i&&(s?(n.minLeft=Math.max(0,r.left),n.minTop=Math.max(0,r.top),n.maxLeft=Math.min(o.width,r.left+r.width)-n.width,n.maxTop=Math.min(o.height,r.top+r.height)-n.height):(n.minLeft=0,n.minTop=0,n.maxLeft=o.width-n.width,n.maxTop=o.height-n.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&ht(this.face,st,e.width>=i.width&&e.height>=i.height?he:Rt),U(this.cropBox,x({width:e.width,height:e.height},ot({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),et(this.element,Mt,this.getData())}},pi={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,o=i?this.crossOriginUrl:this.url,r=t.alt||"The image to preview",n=document.createElement("img");if(i&&(n.crossOrigin=i),n.src=o,n.alt=r,this.viewBox.appendChild(n),this.viewBoxImage=n,!!e){var s=e;typeof e=="string"?s=t.ownerDocument.querySelectorAll(e):e.querySelector&&(s=[e]),this.previews=s,E(s,function(p){var l=document.createElement("img");ht(p,pt,{width:p.offsetWidth,height:p.offsetHeight,html:p.innerHTML}),i&&(l.crossOrigin=i),l.src=o,l.alt=r,l.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',p.innerHTML="",p.appendChild(l)})}},resetPreview:function(){E(this.previews,function(t){var i=Nt(t,pt);U(t,{width:i.width,height:i.height}),t.innerHTML=i.html,Ze(t,pt)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,o=e.width,r=e.height,n=t.width,s=t.height,p=e.left-i.left-t.left,l=e.top-i.top-t.top;!this.cropped||this.disabled||(U(this.viewBoxImage,x({width:n,height:s},ot(x({translateX:-p,translateY:-l},t)))),E(this.previews,function(h){var c=Nt(h,pt),f=c.width,m=c.height,g=f,b=m,v=1;o&&(v=f/o,b=r*v),r&&b>m&&(v=m/r,g=o*v,b=m),U(h,{width:g,height:b}),U(h.getElementsByTagName("img")[0],x({width:n*v,height:s*v},ot(x({translateX:-p*v,translateY:-l*v},t))))}))}},fi={bind:function(){var t=this.element,i=this.options,e=this.cropper;A(i.cropstart)&&B(t,_t,i.cropstart),A(i.cropmove)&&B(t,Tt,i.cropmove),A(i.cropend)&&B(t,Ct,i.cropend),A(i.crop)&&B(t,Mt,i.crop),A(i.zoom)&&B(t,Ot,i.zoom),B(e,$t,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&B(e,Zt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&B(e,Gt,this.onDblclick=this.dblclick.bind(this)),B(t.ownerDocument,qt,this.onCropMove=this.cropMove.bind(this)),B(t.ownerDocument,Ft,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&B(window,Qt,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;A(i.cropstart)&&k(t,_t,i.cropstart),A(i.cropmove)&&k(t,Tt,i.cropmove),A(i.cropend)&&k(t,Ct,i.cropend),A(i.crop)&&k(t,Mt,i.crop),A(i.zoom)&&k(t,Ot,i.zoom),k(e,$t,this.onCropStart),i.zoomable&&i.zoomOnWheel&&k(e,Zt,this.onWheel,{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&k(e,Gt,this.onDblclick),k(t.ownerDocument,qt,this.onCropMove),k(t.ownerDocument,Ft,this.onCropEnd),i.responsive&&k(window,Qt,this.onResize)}},di={resize:function(){if(!this.disabled){var t=this.options,i=this.container,e=this.containerData,o=i.offsetWidth/e.width,r=i.offsetHeight/e.height,n=Math.abs(o-1)>Math.abs(r-1)?o:r;if(n!==1){var s,p;t.restore&&(s=this.getCanvasData(),p=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(E(s,function(l,h){s[h]=l*n})),this.setCropBoxData(E(p,function(l,h){p[h]=l*n})))}}},dblclick:function(){this.disabled||this.options.dragMode===pe||this.setDragMode(Ke(this.dragBox,Dt)?le:It)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,o=1;this.disabled||(t.preventDefault(),!this.wheeling&&(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?o=t.deltaY>0?1:-1:t.wheelDelta?o=-t.wheelDelta/120:t.detail&&(o=t.detail>0?1:-1),this.zoom(-o*e,t)))},cropStart:function(t){var i=t.buttons,e=t.button;if(!(this.disabled||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(u(i)&&i!==1||u(e)&&e!==0||t.ctrlKey))){var o=this.options,r=this.pointers,n;t.changedTouches?E(t.changedTouches,function(s){r[s.identifier]=ft(s)}):r[t.pointerId||0]=ft(t),Object.keys(r).length>1&&o.zoomable&&o.zoomOnTouch?n=ce:n=Nt(t.target,st),!!Xe.test(n)&&et(this.element,_t,{originalEvent:t,action:n})!==!1&&(t.preventDefault(),this.action=n,this.cropping=!1,n===se&&(this.cropping=!0,_(this.dragBox,dt)))}},cropMove:function(t){var i=this.action;if(!(this.disabled||!i)){var e=this.pointers;t.preventDefault(),et(this.element,Tt,{originalEvent:t,action:i})!==!1&&(t.changedTouches?E(t.changedTouches,function(o){x(e[o.identifier]||{},ft(o,!0))}):x(e[t.pointerId||0]||{},ft(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?E(t.changedTouches,function(o){delete e[o.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,J(this.dragBox,dt,this.cropped&&this.options.modal)),et(this.element,Ct,{originalEvent:t,action:i}))}}},ui={change:function(t){var i=this.options,e=this.canvasData,o=this.containerData,r=this.cropBoxData,n=this.pointers,s=this.action,p=i.aspectRatio,l=r.left,h=r.top,c=r.width,f=r.height,m=l+c,g=h+f,b=0,v=0,M=o.width,T=o.height,D=!0,Y;!p&&t.shiftKey&&(p=c&&f?c/f:1),this.limited&&(b=r.minLeft,v=r.minTop,M=b+Math.min(o.width,e.width,e.left+e.width),T=v+Math.min(o.height,e.height,e.top+e.height));var R=n[Object.keys(n)[0]],d={x:R.endX-R.startX,y:R.endY-R.startY},w=function(I){switch(I){case q:m+d.x>M&&(d.x=M-m);break;case F:l+d.x<b&&(d.x=b-l);break;case W:h+d.y<v&&(d.y=v-h);break;case Q:g+d.y>T&&(d.y=T-g);break}};switch(s){case Rt:l+=d.x,h+=d.y;break;case q:if(d.x>=0&&(m>=M||p&&(h<=v||g>=T))){D=!1;break}w(q),c+=d.x,c<0&&(s=F,c=-c,l-=c),p&&(f=c/p,h+=(r.height-f)/2);break;case W:if(d.y<=0&&(h<=v||p&&(l<=b||m>=M))){D=!1;break}w(W),f-=d.y,h+=d.y,f<0&&(s=Q,f=-f,h-=f),p&&(c=f*p,l+=(r.width-c)/2);break;case F:if(d.x<=0&&(l<=b||p&&(h<=v||g>=T))){D=!1;break}w(F),c-=d.x,l+=d.x,c<0&&(s=q,c=-c,l-=c),p&&(f=c/p,h+=(r.height-f)/2);break;case Q:if(d.y>=0&&(g>=T||p&&(l<=b||m>=M))){D=!1;break}w(Q),f+=d.y,f<0&&(s=W,f=-f,h-=f),p&&(c=f*p,l+=(r.width-c)/2);break;case it:if(p){if(d.y<=0&&(h<=v||m>=M)){D=!1;break}w(W),f-=d.y,h+=d.y,c=f*p}else w(W),w(q),d.x>=0?m<M?c+=d.x:d.y<=0&&h<=v&&(D=!1):c+=d.x,d.y<=0?h>v&&(f-=d.y,h+=d.y):(f-=d.y,h+=d.y);c<0&&f<0?(s=nt,f=-f,c=-c,h-=f,l-=c):c<0?(s=at,c=-c,l-=c):f<0&&(s=rt,f=-f,h-=f);break;case at:if(p){if(d.y<=0&&(h<=v||l<=b)){D=!1;break}w(W),f-=d.y,h+=d.y,c=f*p,l+=r.width-c}else w(W),w(F),d.x<=0?l>b?(c-=d.x,l+=d.x):d.y<=0&&h<=v&&(D=!1):(c-=d.x,l+=d.x),d.y<=0?h>v&&(f-=d.y,h+=d.y):(f-=d.y,h+=d.y);c<0&&f<0?(s=rt,f=-f,c=-c,h-=f,l-=c):c<0?(s=it,c=-c,l-=c):f<0&&(s=nt,f=-f,h-=f);break;case nt:if(p){if(d.x<=0&&(l<=b||g>=T)){D=!1;break}w(F),c-=d.x,l+=d.x,f=c/p}else w(Q),w(F),d.x<=0?l>b?(c-=d.x,l+=d.x):d.y>=0&&g>=T&&(D=!1):(c-=d.x,l+=d.x),d.y>=0?g<T&&(f+=d.y):f+=d.y;c<0&&f<0?(s=it,f=-f,c=-c,h-=f,l-=c):c<0?(s=rt,c=-c,l-=c):f<0&&(s=at,f=-f,h-=f);break;case rt:if(p){if(d.x>=0&&(m>=M||g>=T)){D=!1;break}w(q),c+=d.x,f=c/p}else w(Q),w(q),d.x>=0?m<M?c+=d.x:d.y>=0&&g>=T&&(D=!1):c+=d.x,d.y>=0?g<T&&(f+=d.y):f+=d.y;c<0&&f<0?(s=at,f=-f,c=-c,h-=f,l-=c):c<0?(s=nt,c=-c,l-=c):f<0&&(s=it,f=-f,h-=f);break;case he:this.move(d.x,d.y),D=!1;break;case ce:this.zoom(ti(n),t),D=!1;break;case se:if(!d.x||!d.y){D=!1;break}Y=ve(this.cropper),l=R.startX-Y.left,h=R.startY-Y.top,c=r.minWidth,f=r.minHeight,d.x>0?s=d.y>0?rt:it:d.x<0&&(l-=c,s=d.y>0?nt:at),d.y<0&&(h-=f),this.cropped||(z(this.cropBox,S),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0));break}D&&(r.width=c,r.height=f,r.left=l,r.top=h,this.action=s,this.renderCropBox()),E(n,function(C){C.startX=C.endX,C.startY=C.endY})}},gi={crop:function(){return this.ready&&!this.cropped&&!this.disabled&&(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&_(this.dragBox,dt),z(this.cropBox,S),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=x({},this.initialImageData),this.canvasData=x({},this.initialCanvasData),this.cropBoxData=x({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(x(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),z(this.dragBox,dt),_(this.cropBox,S)),this},replace:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return!this.disabled&&t&&(this.isImg&&(this.element.src=t),i?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,E(this.previews,function(e){e.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,z(this.cropper,Vt)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,_(this.cropper,Vt)),this},destroy:function(){var t=this.element;return t[y]?(t[y]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,o=e.left,r=e.top;return this.moveTo(wt(t)?t:o+Number(t),wt(i)?i:r+Number(i))},moveTo:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,o=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(u(t)&&(e.left=t,o=!0),u(i)&&(e.top=i,o=!0),o&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var o=this.options,r=this.canvasData,n=r.width,s=r.height,p=r.naturalWidth,l=r.naturalHeight;if(t=Number(t),t>=0&&this.ready&&!this.disabled&&o.zoomable){var h=p*t,c=l*t;if(et(this.element,Ot,{ratio:t,oldRatio:n/p,originalEvent:e})===!1)return this;if(e){var f=this.pointers,m=ve(this.cropper),g=f&&Object.keys(f).length?ei(f):{pageX:e.pageX,pageY:e.pageY};r.left-=(h-n)*((g.pageX-m.left-r.left)/n),r.top-=(c-s)*((g.pageY-m.top-r.top)/s)}else Z(i)&&u(i.x)&&u(i.y)?(r.left-=(h-n)*((i.x-r.left)/n),r.top-=(c-s)*((i.y-r.top)/s)):(r.left-=(h-n)/2,r.top-=(c-s)/2);r.width=h,r.height=c,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return t=Number(t),u(t)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,u(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(u(i)?i:1,t)},scale:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.imageData,o=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(u(t)&&(e.scaleX=t,o=!0),u(i)&&(e.scaleY=i,o=!0),o&&this.renderCanvas(!0,!0)),this},getData:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.options,e=this.imageData,o=this.canvasData,r=this.cropBoxData,n;if(this.ready&&this.cropped){n={x:r.left-o.left,y:r.top-o.top,width:r.width,height:r.height};var s=e.width/e.naturalWidth;if(E(n,function(h,c){n[c]=h/s}),t){var p=Math.round(n.y+n.height),l=Math.round(n.x+n.width);n.x=Math.round(n.x),n.y=Math.round(n.y),n.width=l-n.x,n.height=p-n.y}}else n={x:0,y:0,width:0,height:0};return i.rotatable&&(n.rotate=e.rotate||0),i.scalable&&(n.scaleX=e.scaleX||1,n.scaleY=e.scaleY||1),n},setData:function(t){var i=this.options,e=this.imageData,o=this.canvasData,r={};if(this.ready&&!this.disabled&&Z(t)){var n=!1;i.rotatable&&u(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,n=!0),i.scalable&&(u(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,n=!0),u(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,n=!0)),n&&this.renderCanvas(!0,!0);var s=e.width/e.naturalWidth;u(t.x)&&(r.left=t.x*s+o.left),u(t.y)&&(r.top=t.y*s+o.top),u(t.width)&&(r.width=t.width*s),u(t.height)&&(r.height=t.height*s),this.setCropBoxData(r)}return this},getContainerData:function(){return this.ready?x({},this.containerData):{}},getImageData:function(){return this.sized?x({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&E(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&Z(t)&&(u(t.left)&&(i.left=t.left),u(t.top)&&(i.top=t.top),u(t.width)?(i.width=t.width,i.height=t.width/e):u(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,i;return this.ready&&this.cropped&&(i={left:t.left,top:t.top,width:t.width,height:t.height}),i||{}},setCropBoxData:function(t){var i=this.cropBoxData,e=this.options.aspectRatio,o,r;return this.ready&&this.cropped&&!this.disabled&&Z(t)&&(u(t.left)&&(i.left=t.left),u(t.top)&&(i.top=t.top),u(t.width)&&t.width!==i.width&&(o=!0,i.width=t.width),u(t.height)&&t.height!==i.height&&(r=!0,i.height=t.height),e&&(o?i.height=i.width/e:r&&(i.width=i.height*e)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,e=ai(this.image,this.imageData,i,t);if(!this.cropped)return e;var o=this.getData(),r=o.x,n=o.y,s=o.width,p=o.height,l=e.width/Math.floor(i.naturalWidth);l!==1&&(r*=l,n*=l,s*=l,p*=l);var h=s/p,c=V({aspectRatio:h,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),f=V({aspectRatio:h,width:t.minWidth||0,height:t.minHeight||0},"cover"),m=V({aspectRatio:h,width:t.width||(l!==1?e.width:s),height:t.height||(l!==1?e.height:p)}),g=m.width,b=m.height;g=Math.min(c.width,Math.max(f.width,g)),b=Math.min(c.height,Math.max(f.height,b));var v=document.createElement("canvas"),M=v.getContext("2d");v.width=tt(g),v.height=tt(b),M.fillStyle=t.fillColor||"transparent",M.fillRect(0,0,g,b);var T=t.imageSmoothingEnabled,D=T===void 0?!0:T,Y=t.imageSmoothingQuality;M.imageSmoothingEnabled=D,Y&&(M.imageSmoothingQuality=Y);var R=e.width,d=e.height,w=r,C=n,I,X,j,G,H,L;w<=-s||w>R?(w=0,I=0,j=0,H=0):w<=0?(j=-w,w=0,I=Math.min(R,s+w),H=I):w<=R&&(j=0,I=Math.min(s,R-w),H=I),I<=0||C<=-p||C>d?(C=0,X=0,G=0,L=0):C<=0?(G=-C,C=0,X=Math.min(d,p+C),L=X):C<=d&&(G=0,X=Math.min(p,d-C),L=X);var O=[w,C,I,X];if(H>0&&L>0){var $=g/s;O.push(j*$,G*$,H*$,L*$)}return M.drawImage.apply(M,[e].concat(oe(O.map(function(ct){return Math.floor(tt(ct))})))),v},setAspectRatio:function(t){var i=this.options;return!this.disabled&&!wt(t)&&(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,o=this.face;if(this.ready&&!this.disabled){var r=t===It,n=i.movable&&t===le;t=r||n?t:pe,i.dragMode=t,ht(e,st,t),J(e,Dt,r),J(e,Et,n),i.cropBoxMovable||(ht(o,st,t),J(o,Dt,r),J(o,Et,n))}return this}},mi=P.Cropper,be=function(){function a(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Ne(this,a),!t||!Ue.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=x({},te,Z(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return Ae(a,[{key:"init",value:function(){var i=this.element,e=i.tagName.toLowerCase(),o;if(!i[y]){if(i[y]=this,e==="img"){if(this.isImg=!0,o=i.getAttribute("src")||"",this.originalUrl=o,!o)return;o=i.src}else e==="canvas"&&window.HTMLCanvasElement&&(o=i.toDataURL());this.load(o)}}},{key:"load",value:function(i){var e=this;if(!!i){this.url=i,this.imageData={};var o=this.element,r=this.options;if(!r.rotatable&&!r.scalable&&(r.checkOrientation=!1),!r.checkOrientation||!window.ArrayBuffer){this.clone();return}if(He.test(i)){We.test(i)?this.read(oi(i)):this.clone();return}var n=new XMLHttpRequest,s=this.clone.bind(this);this.reloading=!0,this.xhr=n,n.onabort=s,n.onerror=s,n.ontimeout=s,n.onprogress=function(){n.getResponseHeader("content-type")!==Jt&&n.abort()},n.onload=function(){e.read(n.response)},n.onloadend=function(){e.reloading=!1,e.xhr=null},r.checkCrossOrigin&&ie(i)&&o.crossOrigin&&(i=ae(i)),n.open("GET",i,!0),n.responseType="arraybuffer",n.withCredentials=o.crossOrigin==="use-credentials",n.send()}}},{key:"read",value:function(i){var e=this.options,o=this.imageData,r=hi(i),n=0,s=1,p=1;if(r>1){this.url=si(i,Jt);var l=ci(r);n=l.rotate,s=l.scaleX,p=l.scaleY}e.rotatable&&(o.rotate=n),e.scalable&&(o.scaleX=s,o.scaleY=p),this.clone()}},{key:"clone",value:function(){var i=this.element,e=this.url,o=i.crossOrigin,r=e;this.options.checkCrossOrigin&&ie(e)&&(o||(o="anonymous"),r=ae(e)),this.crossOrigin=o,this.crossOriginUrl=r;var n=document.createElement("img");o&&(n.crossOrigin=o),n.src=r||e,n.alt=i.alt||"The image to crop",this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),_(n,jt),i.parentNode.insertBefore(n,i.nextSibling)}},{key:"start",value:function(){var i=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var o=P.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(P.navigator.userAgent),r=function(l,h){x(i.imageData,{naturalWidth:l,naturalHeight:h,aspectRatio:l/h}),i.initialImageData=x({},i.imageData),i.sizing=!1,i.sized=!0,i.build()};if(e.naturalWidth&&!o){r(e.naturalWidth,e.naturalHeight);return}var n=document.createElement("img"),s=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){r(n.width,n.height),o||s.removeChild(n)},n.src=e.src,o||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(n))}},{key:"stop",value:function(){var i=this.image;i.onload=null,i.onerror=null,i.parentNode.removeChild(i),this.image=null}},{key:"build",value:function(){if(!(!this.sized||this.ready)){var i=this.element,e=this.options,o=this.image,r=i.parentNode,n=document.createElement("div");n.innerHTML=Ve;var s=n.querySelector(".".concat(y,"-container")),p=s.querySelector(".".concat(y,"-canvas")),l=s.querySelector(".".concat(y,"-drag-box")),h=s.querySelector(".".concat(y,"-crop-box")),c=h.querySelector(".".concat(y,"-face"));this.container=r,this.cropper=s,this.canvas=p,this.dragBox=l,this.cropBox=h,this.viewBox=s.querySelector(".".concat(y,"-view-box")),this.face=c,p.appendChild(o),_(i,S),r.insertBefore(s,i.nextSibling),z(o,jt),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,_(h,S),e.guides||_(h.getElementsByClassName("".concat(y,"-dashed")),S),e.center||_(h.getElementsByClassName("".concat(y,"-center")),S),e.background&&_(s,"".concat(y,"-bg")),e.highlight||_(c,Le),e.cropBoxMovable&&(_(c,Et),ht(c,st,Rt)),e.cropBoxResizable||(_(h.getElementsByClassName("".concat(y,"-line")),S),_(h.getElementsByClassName("".concat(y,"-point")),S)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),A(e.ready)&&B(i,Kt,e.ready,{once:!0}),et(i,Kt)}}},{key:"unbuild",value:function(){if(!!this.ready){this.ready=!1,this.unbind(),this.resetPreview();var i=this.cropper.parentNode;i&&i.removeChild(this.cropper),z(this.element,S)}}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=mi,a}},{key:"setDefaults",value:function(i){x(te,Z(i)&&i)}}]),a}();x(be.prototype,li,pi,fi,di,ui,gi);const kt=a=>(Te("data-v-f3ae0663"),a=a(),_e(),a),vi={class:"cropper-warp"},wi={class:"cropper-warp-left"},bi=["src"],yi={class:"cropper-warp-right"},xi=kt(()=>N("div",{class:"cropper-warp-right-title"},"预览",-1)),Di={class:"cropper-warp-right-item"},Ei={class:"cropper-warp-right-value"},Mi=["src"],Ci=kt(()=>N("div",{class:"cropper-warp-right-label"},"100 x 100",-1)),Ti={class:"cropper-warp-right-item"},_i={class:"cropper-warp-right-value"},Oi=["src"],Ni=kt(()=>N("div",{class:"cropper-warp-right-label"},"50 x 50",-1)),Ai={class:"dialog-footer"},Si=re({name:"cropper"}),Ri=re({...Si,setup(a,{expose:t}){const i=De({isShowDialog:!1,cropperImg:"",cropperImgBase64:"",cropper:""}),e=p=>{i.cropperImg=p,i.isShowDialog=!0,Ce(()=>{s()})},o=()=>{i.isShowDialog=!1},r=()=>{o()},n=()=>{},s=()=>{const p=document.querySelector(".cropper-warp-left-img");i.cropper=new be(p,{viewMode:1,dragMode:"none",initialAspectRatio:1,aspectRatio:1,preview:".before",background:!1,autoCropArea:.6,zoomOnWheel:!1,crop:()=>{i.cropperImgBase64=i.cropper.getCroppedCanvas().toDataURL("image/jpeg")}})};return t({openDialog:e}),(p,l)=>{const h=Xt("el-button"),c=Xt("el-dialog");return Ee(),Me("div",null,[vt(c,{title:"更换头像",modelValue:i.isShowDialog,"onUpdate:modelValue":l[0]||(l[0]=f=>i.isShowDialog=f),width:"769px"},{footer:lt(()=>[N("span",Ai,[vt(h,{onClick:r,size:"default"},{default:lt(()=>[Ht("取 消")]),_:1}),vt(h,{type:"primary",onClick:n,size:"default"},{default:lt(()=>[Ht("更 换")]),_:1})])]),default:lt(()=>[N("div",vi,[N("div",wi,[N("img",{src:i.cropperImg,class:"cropper-warp-left-img"},null,8,bi)]),N("div",yi,[xi,N("div",Di,[N("div",Ei,[N("img",{src:i.cropperImgBase64,class:"cropper-warp-right-value-img"},null,8,Mi)]),Ci]),N("div",Ti,[N("div",_i,[N("img",{src:i.cropperImgBase64,class:"cropper-warp-right-value-img cropper-size"},null,8,Oi)]),Ni])])])]),_:1},8,["modelValue"])])}}});const ki=Oe(Ri,[["__scopeId","data-v-f3ae0663"]]);export{ki as default};
