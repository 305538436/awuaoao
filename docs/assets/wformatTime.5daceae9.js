function c(t,e){let r=t.getDay(),l=a(t),n=Math.floor((t.getMonth()+3)/3).toString();const g={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString(),"q+":n},i={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"},u={1:"一",2:"二",3:"三",4:"四"};/(W+)/.test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length>1?RegExp.$1.length>2?"星期"+i[r]:"周"+i[r]:i[r])),/(Q+)/.test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==4?"第"+u[n]+"季度":u[n])),/(Z+)/.test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==3?"第"+l+"周":l+""));for(let s in g){let p=new RegExp("("+s+")").exec(e);p&&(e=e.replace(p[1],RegExp.$1.length==1?g[s]:g[s].padStart(RegExp.$1.length,"0")))}return e}function a(t){let e=new Date(t.getTime()),r=e.getDay()||7;e.setDate(e.getDate()-r+1+5);let l=new Date(e.getFullYear(),0,1),n=l.getDay(),g=1;n!=0&&(g=7-n+1),l=new Date(e.getFullYear(),0,1+g);let i=Math.ceil((e.valueOf()-l.valueOf())/864e5);return Math.ceil(i/7)}function o(t){let e=new Date(t).getHours();return e<6?"凹凹，怎么凌晨还进来瞅瞅，又睡不着了吗？睡吧~睡吧~我亲爱的宝贝。":e<9?"早上好啊凹凹，又是元气满满的一天哦！mua~":e<12?"已经到中午了，今天你说爱我了吗？凹凹，爱你么么哒~":e<15?"凹凹，今天累吗，点个下午茶犒劳犒劳自己？":e<18?"下午了，休息一下吧，给你捏捏肩膀。":e<20?"傍晚咯，该吃饭啦。今天过的怎么样？记得和我分享你的心情哦。":e<24?"夜深了，记得早点休息。晚安，凹凹。么么":"凹凹，我爱你"}export{o as a,c as f};