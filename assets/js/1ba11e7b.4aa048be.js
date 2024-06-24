"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[8597],{85950:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var r=i(74848),t=i(28453);const s={title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",sidebar_position:3},c="\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",d={id:"sundry/advance/Linux/keep-running",title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",description:"\u7531\u4e8eLinux\u7684\u4f1a\u8bdd\u673a\u5236\uff0c\u624b\u52a8\u542f\u52a8\u7684\u670d\u52a1\u7aef\u4f1a\u5728ssh\u65ad\u5f00\u8fde\u63a5\u4e4b\u540e\u505c\u6b62\u8fd0\u884c\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u670d\u52a1\u7aef\u4fdd\u6301\u540e\u53f0\u8fd0\u884c\u3002",source:"@site/docs/sundry/advance/Linux/keep-running.md",sourceDirName:"sundry/advance/Linux",slug:"/sundry/advance/Linux/keep-running",permalink:"/NitWikit/sundry/advance/Linux/keep-running",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/sundry/advance/Linux/keep-running.md",tags:[],version:"current",lastUpdatedBy:"Radiation_pi",lastUpdatedAt:1719230252e3,sidebarPosition:3,frontMatter:{title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u8fde\u63a5\u670d\u52a1\u5668",permalink:"/NitWikit/sundry/advance/Linux/Connect-to-server"},next:{title:"\u5f00\u670d",permalink:"/NitWikit/sundry/advance/Linux/start"}},l={},o=[{value:"\u65b9\u6cd5\u4e00 screen(\u63a8\u8350)",id:"\u65b9\u6cd5\u4e00-screen\u63a8\u8350",level:2},{value:"\u65b9\u6cd5\u4e8c Systemctl",id:"\u65b9\u6cd5\u4e8c-systemctl",level:2},{value:"\u65b9\u6cd5\u4e09 nohup\u548c&amp;",id:"\u65b9\u6cd5\u4e09-nohup\u548c",level:2}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728-linux-\u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",children:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8eLinux\u7684\u4f1a\u8bdd\u673a\u5236\uff0c\u624b\u52a8\u542f\u52a8\u7684\u670d\u52a1\u7aef\u4f1a\u5728ssh\u65ad\u5f00\u8fde\u63a5\u4e4b\u540e\u505c\u6b62\u8fd0\u884c\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u670d\u52a1\u7aef\u4fdd\u6301\u540e\u53f0\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e00-screen\u63a8\u8350",children:"\u65b9\u6cd5\u4e00 screen(\u63a8\u8350)"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528screen\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u7684\u7a97\u53e3\u8fd0\u884c\u670d\u52a1\u7aef\uff0c\u9996\u5148\u5b89\u88c5screen\uff0c\u5728\u7ec8\u7aef\u8f93\u5165\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo apt install screen -y\n"})}),"\n",(0,r.jsx)(n.p,{children:"screen \u7684\u57fa\u7840\u6307\u4ee4\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"screen -ls            # \u5217\u51fa\u6240\u6709\u7684 screen\nscreen -S xxx         # \u521b\u5efa\u4e00\u4e2a\u540d\u53eb xxx \u7684\u865a\u62df\u7a97\u53e3\uff08\u63a8\u8350\u4ee5\u6bcf\u4e2a\u5b50\u670d\u52a1\u5668\u547d\u540d\uff09\nscreen -r xxx         # \u8fdb\u5165 xxx \u865a\u62df\u7a97\u53e3\uff08\u53ea\u80fd\u8fdb\u5165\u5df2\u521b\u5efa\u4e14\u65e0\u4eba\u4f7f\u7528\u7684 screen\uff09\nscreen -D xxx         # \u8e22\u51fa\u6b63\u5728\u4f7f\u7528 xxx \u7a97\u53e3\u7684\u7528\u6237\nscreen -S xxx -X quit # \u5220\u9664 xxx \u7a97\u53e3\uff08\u5728 screen \u4e2d\u8f93\u5165 exit \u4e5f\u53ef\u4ee5\u5220\u9664\uff09\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 screen \u4e2d\u542f\u52a8\u670d\u52a1\u7aef\uff0c\u5728 screen \u4e2d\u65f6\uff0c\u6309\u952e\u76d8\u4e0a\u7684 Ctrl + A + D \u5373\u53ef\u8fd4\u56de\u539f\u7a97\u53e3\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u63a8\u8350\u539f\u56e0\uff1a\u540e\u53f0\u8fd0\u884c\u7684\u540c\u65f6\u8fd8\u53ef\u4ee5\u5728\u670d\u52a1\u7aef\u63a7\u5236\u53f0\u4e2d\u67e5\u770b\u65e5\u5fd7\uff0c\u6253\u6307\u4ee4"}),"\n",(0,r.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e8c-systemctl",children:"\u65b9\u6cd5\u4e8c Systemctl"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528vim \u521b\u5efa mc.service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"vim /etc/systemd/system/mc.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"vim\u4e2d\u7684\u5185\u5bb9\u6309\u4ee5\u4e0b\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[Unit]\nDescription=Minecraft Server\nAfter=network.target\n\n[Service]\nUser=root\nNice=5\nKillMode=none\nSuccessExitStatus=0 1\nProtectHome=true\nProtectSystem=full\nPrivateDevices=true\nNoNewPrivileges=true\nWorkingDirectory=\u8fd9\u91cc\u586b\u5de5\u4f5c\u76ee\u5f55\u8def\u5f84\nExecStart=\u8fd9\u91cc\u586b\u542f\u52a8\u547d\u4ee4\nExecStop=/bin/kill -SIGINT $MAINPID\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u5b8c\u6210\u540e\u8f93\u5165\u4ee5\u91cd\u65b0\u52a0\u8f7d\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u542f\u52a8\u670d\u52a1\u5668\u5e76\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8\uff0c\u5148\u540e\u8f93\u5165:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"systemctl start mc.service\nsystemctl enable mc.service\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://blog.csdn.net/WHQ78164/article/details/132956725",children:"\u8be6\u7ec6\u8bbe\u7f6e\u8bf4\u660e"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f18\u70b9\uff1a\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u91cd\u542f\uff0c\u5f00\u673a\u81ea\u542f\u7b49\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.p,{children:"\u7f3a\u70b9\uff1a\u65e0\u6cd5\u8fdb\u5165\u63a7\u5236\u53f0\u6253\u6307\u4ee4"}),"\n",(0,r.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e09-nohup\u548c",children:"\u65b9\u6cd5\u4e09 nohup\u548c&"}),"\n",(0,r.jsx)(n.p,{children:"&\uff1a\u5728\u542f\u52a8\u65f6\u540e\u9762\u52a0\u4e00\u4e2a&"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff1a./start.sh &"}),"\n",(0,r.jsx)(n.p,{children:"nohup\uff1a\u5728\u542f\u52a8\u65f6\u524d\u9762\u52a0\u4e0a\u8fd9\u4e2a"}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff1anohup ./start.sh > run.log 2>&1 &"}),"\n",(0,r.jsx)(n.p,{children:"\u8be6\u7ec6\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Start.sh: \u4f60\u9700\u8981\u540e\u53f0\u8fd0\u884c\u7684\u7a0b\u5e8f"}),(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:": \u65e5\u5fd7\u6587\u4ef6\u8ffd\u52a0\u5230\u6587\u4ef6\u4e2d"}),"\n"]}),(0,r.jsx)(n.p,{children:"run.log: \u8fd0\u884c\u7684\u65e5\u5fd7\uff0c\u6216\u4f60\u7684\u6587\u4ef6\u7684\u8f93\u51fa\u5185\u5bb9"}),(0,r.jsx)(n.p,{children:"& \u662f\u4e00\u4e2a\u63cf\u8ff0\u7b26\uff0c\u5982\u679c1\u62162\u524d\u4e0d\u52a0&\uff0c\u4f1a\u88ab\u5f53\u6210\u4e00\u4e2a\u666e\u901a\u6587\u4ef6\u3002"}),(0,r.jsx)(n.p,{children:"1>&2 \u610f\u601d\u662f\u628a\u6807\u51c6\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6807\u51c6\u9519\u8bef."}),(0,r.jsx)(n.p,{children:"2>&1 \u610f\u601d\u662f\u628a\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6807\u51c6\u8f93\u51fa\u3002"}),(0,r.jsx)(n.p,{children:"&>filename \u610f\u601d\u662f\u628a\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u90fd\u91cd\u5b9a\u5411\u5230\u6587\u4ef6filename\u4e2d"})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var r=i(96540);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);