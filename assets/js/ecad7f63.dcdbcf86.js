"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[7650],{46542:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(74848),o=t(28453);const s={title:"\u5982\u4f55\u6392\u9664\u6709\u95ee\u9898\u7684\u63d2\u4ef6"},l="\u5982\u4f55\u6392\u9664\u6709\u95ee\u9898\u7684\u63d2\u4ef6",r={id:"maintenance/how-to-troubleshoot-problematic-plugins",title:"\u5982\u4f55\u6392\u9664\u6709\u95ee\u9898\u7684\u63d2\u4ef6",description:"\u5f53\u6211\u4eec\u66f4\u65b0\u4e86\u670d\u52a1\u5668\u4e00\u4e9b\u63d2\u4ef6\u540e\uff0c\u53ef\u80fd\u4f1a\u53d1\u73b0\u67d0\u4e9b\u63d2\u4ef6\u51fa\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u5e94\u8be5\u5982\u4f55\u6392\u9664\u5462\uff1f",source:"@site/docs/maintenance/how-to-troubleshoot-problematic-plugins.md",sourceDirName:"maintenance",slug:"/maintenance/how-to-troubleshoot-problematic-plugins",permalink:"/NitWikit/maintenance/how-to-troubleshoot-problematic-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/maintenance/how-to-troubleshoot-problematic-plugins.md",tags:[],version:"current",lastUpdatedBy:"Radiation_pi",lastUpdatedAt:1719229372e3,frontMatter:{title:"\u5982\u4f55\u6392\u9664\u6709\u95ee\u9898\u7684\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"JVM \u4f18\u5316",permalink:"/NitWikit/maintenance/optimize/jvm-optimization"},next:{title:"\u6742\u9879",permalink:"/NitWikit/category/\u6742\u9879"}},c={},d=[{value:"log \u5b9a\u4f4d",id:"log-\u5b9a\u4f4d",level:2},{value:"\u4e8c\u5206\u6cd5",id:"\u4e8c\u5206\u6cd5",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u5982\u4f55\u6392\u9664\u6709\u95ee\u9898\u7684\u63d2\u4ef6",children:"\u5982\u4f55\u6392\u9664\u6709\u95ee\u9898\u7684\u63d2\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u6211\u4eec\u66f4\u65b0\u4e86\u670d\u52a1\u5668\u4e00\u4e9b\u63d2\u4ef6\u540e\uff0c\u53ef\u80fd\u4f1a\u53d1\u73b0\u67d0\u4e9b\u63d2\u4ef6\u51fa\u4e86\u4e00\u4e9b\u95ee\u9898\uff0c\u5e94\u8be5\u5982\u4f55\u6392\u9664\u5462\uff1f"}),"\n",(0,i.jsx)(e.h2,{id:"log-\u5b9a\u4f4d",children:"log \u5b9a\u4f4d"}),"\n",(0,i.jsxs)(e.p,{children:["\u5bf9\u4e8e ERROR \u548c WARN \u7c7b\u578b\u7684 log \u8fdb\u884c\u5206\u6790\uff0c\u67e5\u770b\u5806\u6808\u62a5\u9519\u4e2d\u662f\u5426\u6709\u67d0\u4e2a\u63d2\u4ef6\u540d\u6216\u8005\u63d2\u4ef6\u7684 ",(0,i.jsx)(e.code,{children:".jar"})," \u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5c06\u62a5\u9519\u5148\u7ffb\u8bd1\u4e00\u904d\uff0c\u786e\u5b9a\u5176\u4e2d\u662f\u5426\u63d0\u793a\u4e86\u9519\u8bef\u7684\u7c7b\u578b\uff08\u5982\u7f3a\u5c11\u524d\u7f6e\uff0c\u7f3a\u5c11\u7c7b\uff0c\u63d2\u4ef6\u9700\u8981\u66f4\u65b0\u7b49\uff09\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u540e\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u6309\u7167",(0,i.jsx)(e.a,{href:"/NitWikit/start/ask-for-help",children:"\u5982\u679c\u8bf7\u6559\u5927\u4f6c"}),"\u4e2d\u63d0\u5230\u7684\u65b9\u6cd5\uff0c\u589e\u52a0\u95ee\u9898\u89e3\u51b3\u7684\u53ef\u80fd\u6027\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e8c\u5206\u6cd5",children:"\u4e8c\u5206\u6cd5"}),"\n",(0,i.jsx)(e.p,{children:"\u4e8c\u5206\u6cd5\u7684\u57fa\u672c\u601d\u60f3\u662f\u901a\u8fc7\u9010\u6b65\u7f29\u5c0f\u95ee\u9898\u53ef\u80fd\u51fa\u73b0\u7684\u8303\u56f4\uff0c\u76f4\u5230\u627e\u5230\u786e\u5207\u7684\u95ee\u9898\u6240\u5728\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5177\u4f53\u64cd\u4f5c\u65b9\u9762\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4fdd\u7559\u6240\u6709\u7684\u524d\u7f6e\u63d2\u4ef6\uff0c\u5982 Protocolib\u3001Luckperms\u3001Xconomy \u7b49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5c06\u5176\u4ed6\u63d2\u4ef6\u590d\u5236\u5230\u65b0\u6587\u4ef6\u5939\u4e2d\uff0c\u5220\u9664 ",(0,i.jsx)(e.code,{children:"/plugins/"})," \u4e2d\u975e\u524d\u7f6e\u63d2\u4ef6\u7684 ",(0,i.jsx)(e.code,{children:".jar"})," \u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u67e5\u770b\u65b0\u6587\u4ef6\u5939\u4e2d\u7684\u63d2\u4ef6\u6570\u91cf\uff0c\u9009\u62e9\u5176\u4e2d\u7684\u4e00\u534a\u590d\u5236\u5230 ",(0,i.jsx)(e.code,{children:"/plugins/"})," \u6587\u4ef6\u5939\u4e2d\uff0c\u91cd\u542f\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u6ca1\u6709\u95ee\u9898\uff0c\u91cd\u590d\u4e0a\u4e00\u6b65\uff1b\u5982\u679c\u51fa\u73b0\u63d2\u4ef6\u65e0\u6cd5\u52a0\u8f7d\u5148\u67e5\u770b\u662f\u5426\u51fa\u73b0 ",(0,i.jsx)(e.code,{children:"miss dependency"})," \u5373\u7f3a\u5c11\u524d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u51fa\u73b0\u95ee\u9898\uff0c\u8bf4\u660e\u51fa\u95ee\u9898\u7684\u63d2\u4ef6\u5c31\u5728\u521a\u624d\u590d\u5236\u7684\u63d2\u4ef6\u4e2d\uff0c\u5c06\u786e\u8ba4\u6ca1\u95ee\u9898\u7684\u63d2\u4ef6\u4fdd\u7559\u5728\u63d2\u4ef6\u6587\u4ef6\u5939\u4e2d\uff0c\u7136\u540e\u518d\u4ece\u521a\u590d\u5236\u7684\u63d2\u4ef6\u4e2d\u9009\u62e9\u4e00\u534a\u63d2\u4ef6\u52a0\u5165\u63d2\u4ef6\u6587\u4ef6\u5939\u4e2d\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u91cd\u590d\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u76f4\u5230\u53d1\u73b0\u67d0\u4e00\u63d2\u4ef6\u52a0\u5165\u524d\u6ca1\u6709\u95ee\u9898\u800c\u52a0\u5165\u540e\u51fa\u73b0\u95ee\u9898\uff0c\u5373\u53ef\u786e\u5b9a\u4e3a\u8be5\u63d2\u4ef6\u7684\u95ee\u9898\u3002"}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);