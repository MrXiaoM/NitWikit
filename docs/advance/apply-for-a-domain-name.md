---
title: 申请域名
sidebar_position: 5
---

# 申请域名

域名不但是服务器的招牌，也是老玩家重新找回的一个重要渠道，一个好的域名应该够短（太长了没人记得住）、有记忆点（最好是和 Minecraft 或玩法相关），那么准备好一点小钱钱和待选的名字开始吧。

## 什么是域名
在网络发展的早期，其他人要想访问联网的服务器，就必须知道这个服务器的IP地址。然而IP地址是一串串数字，虽然对于电脑来说没什么，但是对于人来说，上网就要敲一个个数字，要想记住一个个网站对应的那串数字，就要准备一个电话本，把网站对应的数字记下来，然后到时候再查。但是网站非常多，如果每次都去手动查那个电话本，那上网的效率就非常低，简直是地狱绘图。为了解决这个问题，DNS（域名解析服务）服务就诞生了。DNS服务就是一个公共的电话本，它记录着世界上所有服务器的IP地址和它们对应的名字，这样在上网的时候，只要输入服务器的名字，电脑就会把服务器的名字发送给DNS服务器，随后DNS服务器就会帮助电脑查到这台服务器的IP地址，接下来再由电脑访问这个IP地址，就实现了只需要输入服务器的名字就可以访问服务器。负责提供DNS服务、帮电脑查找IP地址的服务器就叫DNS服务器，查找的过程叫解析，查到的那条记录就叫解析记录，而服务器的名字就叫域名。  
我们常见的 github.io，live.bilibili.com，48docs.231l.net 都是域名。你会发现有些域名只有一个点，有些有两个点，而有还有些域名有三个点。这些小数点是用来把域名分成不同的片段的。被点分开的片段，每段都是一个分量。从左向右，越靠右的域名级别越高。最右侧的“com”、“net”、“io”就是一级域名，又叫顶级域名，而一级域名左边的就是二级域名，像“baidu”、“bilibili”、“github”，以此类推。域名由统一的全球性机构管理，服务器的运营者可以租用域名，然后将自己的域名和对应的 IP 地址公布到全世界的 DNS 服务器，也就是在那个世界级的“电话本”上写下服务器的联系方式，之后再把这个域名告诉其他人，那么其他人就可以直接记住这个域名，然后方便地用域名访问服务器，不再需要自己准备一个电话本了。域名，除了好记的作用外，还可以真正意义上地让自己的服务器的 IP 地址不变。如果网站换了服务器，那么网站的 IP 地址就变了，因为电脑已经不是原来那台电脑了。如果是直接用 IP 地址访问，那么网站的 IP 地址变化的时候，网站的维护者就需要通知所有人网站的 IP 地址发生变化，就像你换了手机号，之后需要告诉所有人你换电话号了一样。但是有了域名就不一样了，因为有了 DNS 这个全世界的公共电话本，网站的维护者只需要把这个变化同步到 DNS 上，后面用户使用域名访问网站的时候， DNS 就会直接告诉用户的电脑网站的新 IP 地址，而不再需要把新 IP 地址通知到每一个人了。  
作为我的世界服务器，域名也是可以起到很大作用的。毕竟你的玩家也不想要记一个数字来连接服务器。下面将介绍如何租用域名。

## 寻找合适的域名提供商查询域名

以阿里云的[万网](https://domain.aliyun.com/)为例，打开网站，来到如下页面：

![](_images/申请域名/1.png)

搜索你想要的域名

![](_images/申请域名/2.png)

:::warning

此处域名价格为你输入域名的人气决定，名称越热门越贵，没有优惠最便宜首年也这个价。

不要看有些域名首年很便宜，可能第二年续费要成百上千，不放心可以鼠标悬停在价格旁边的倒三角处查看续费价格，这里推荐.top，第二年价格最低，长期开服绝对推荐。

:::

## 购买域名

登录后点击域名旁边的加入清单，然后点批量注册旁边的域名清单，更改域名购买时间后，最好底下什么套餐都不要选，直接点立即购买。

![](_images/申请域名/3.png)

跳转后这个页面立即购买是点不动的，滑动到下方，点击创建信息模板来实名验证。

:::tip

此操作未成年也可以，但无论如何信息需要真实（通讯地址似乎不用太精确，填到市就能过了），请不要拿着他人的身份证假冒认证！

:::

点提交后等通过，然后回来勾选最底下的我已阅读、理解并接受《域名服务条款》。在下一个页面选择支付方式后点支付。

:::tip

购买的域名一般需要至多 24 小时才能正常解析，打开网址 https://whois.aliyun.com/domain/ + 你的域名，如果域名状态那里是正常状态（ok）就代表可以使用了。

:::

:::warning

**购买域名后，一定要记得续费！！！** 你可以在手机的日历上定一个提醒，在域名**快过期**的时候续费，或者如果你预算充足，那就直接把域名续费到比自己服务器能开的时间还要长。如果域名过期，你的玩家将**不再能通过他们之前输入的地址连接服务器**，导致玩家大规模出现连接服务器失败的情况。而且如果你注册了好域名但没及时续费，你的域名可能被**抢注**，导致你必须通过各种手段从抢注域名的人手里高价赎回域名，或者被迫更换其他域名。

:::

## 域名解析

A 记录是 DNS 中用于将域名映射到 IPv4 地址的记录（也就是我们常用的 IP 记录）。

SRV 记录，使用二级域名记录了端口的信息，使用 SRV 可以隐藏域名端口。

:::warning

文档中，假设你购买了域名 `xxx.top`，服务器在外网的端口为 `22222` ，请勿直接照抄配置。

:::

### A 记录

将域名指向一个 IPV4 地址。

人话就是把数字 IP 地址解析成英文字符的域名。

打开网址 [阿里云域名控制台](https://dc.console.aliyun.com/#/domain-list/all)，找到你的域名点右边蓝色字的解析。

点击添加记录，记录类型选择 A 记录。

主机记录改为 `@` （这意味着直接使用二级域名），记录值改为服务器数字 IP 。

等待解析生效。此时，玩家可通过 `xxx.top:22222` 进入服务器了。

:::tip

1. 如果只知道域名不知道 IP 就 Win + R 输入 cmd，随后输入 ping + 域名。

2. 主机记录可以改成如 `play` 等，玩家就可以通过 `play.xxx.top:22222`（但这是不是有点太长了，除非你有明确的需求必须使用这种三级域名，否则不推荐）。

:::

### CNAME 记录

将域名指向另一个域名。

假如服务商给的是解析好的域名不是 IP，比如服务器的连接地址是play.simpfun.cn:xxxxx，那就需要用这个来指向你自己的域名。

记录类型选 CNAME。

然后主机记录填你需要的二级域名，填写 `@` 代表直接使用二级域名，玩家连接服务器时可以不用前缀。

记录值填服务商给的域名就行了。

### SRV 记录

点击添加记录，记录类型选择 SRV 。

然后主机记录填你需要的二级域名，如你需要使用 `mc.xxx.top` 代替 `xxx.top:22222` （端口），就将主机记录改为：

`_minecraft._tcp.mc`

此处的 mc 可以改为其他，如 `play` 、`*` 等，填写 `@` 可以不用前缀。

记录值填写为：

`5 0 22222 xxx.top`

> 5 0 是固定的，22222 是你的端口

点击确认，等一会，你就可以发现直接用域名可以连接上你的服务器了。

:::tip

此方法只能用于 Minecraft Java版服务器，不能用于其他服务，比如基岩版就不支持这种srv，所以基岩版玩家进服时必须仍然要正常填写域名和端口，就算他连接的是java版的互通服。

:::


### AAAA 记录

将域名指向一个 IPV6 地址。和 A 记录的不同之处是， AAAA 记录专门用来指向 IPv6 地址，不能指向 IPv4 地址。同理， A 记录也只能指向 IPv4 地址，不能指向 IPv6 地址，这也意味着你如果要为服务器的IPv6地址也绑定一个域名，你就必须要再创建一条 AAAA 记录。

按照A记录中的方法找到你的域名点右边蓝色字的解析。点击添加记录，记录类型选择 AAAA 记录。

填写主机记录名，比如 playv6 。记录值改为服务器 IPv6 地址。

等待解析生效。如果记录名为 playv6 ，此时支持I Pv6 的玩家就可通过 `playv6.xxx.top:22222` 进入服务器了。
:::tip

因为大环境原因，很多玩家目前都无法通过 IPv6 连接到服务器，所以除非你有非常明确的目的，否则完全没有必要为服务器的IPv6地址配置AAAA记录。

:::
#### 为双栈网络的服务器配置同时支持IPv4和IPv6的域名

不仅可以有同时多个域名同时指向同一个 IP 地址的情况，也可以有同一个域名同时指向多个 IP 地址的情况。你或许已经知道，很多已经支持 IPv6 的网站虽然在支持 IPv6 的情况下可以通过 IPv6 访问，但是仅支持 IPv4 的网络也仍然可以访问。这是因为边些网站的域名**既指向了 IPv4 地址，也指向了 IPv6 地址**，它的实现原理是为同一个域名同时添加 A 记录和 AAAA 记录。要实现这个目的，你只需要：  
在域名注册商的后台打开服务器 IPv6 地址正使用的 AAAA 记录的编辑页面。  
把主机记录名改为和 A 记录一样的，比如服务器的连接地址是xxx.top:22222，那么AAAA记录的记录名也写 @ ，和 A 记录保持一致，然后保存。  
随后，你的玩家就可以在支持IPv6的网络环境下通过 IPv6 连接到服务器了。不支持 IPv6 的玩家不受影响，他们可以继续正常地通过 IPv4 连接到服务器。

:::warning

A 记录和 AAAA 记录都与 CNAME 记录冲突，如果你的服务器 IPv4 连接地址对应的域名是 CNAME 记录，你需要把那个记录改为A记录并指向服务器的 IPv4 地址，然后才能继续添加 AAAA 记录。

:::
## DDNS服务
些网络中，即使不更换服务器， IP 地址也会发生变化。这就是动态 IP 。而如果 IP 地址始终和同一台电脑绑定，也就是说这台电脑的 IP 地址永远不会变化，这就是静态 IP 。如果服务器是静态 IP ，那么你就完全不用担心域名和 IP 对应不上，因为只要他不去手动更换服务器，服务器的 IP 就不会变化，也就是说你完全知道服务器的 IP 什么时候会变化。但是动态 IP 就不一样了。由于同一台电脑的 IP 地址随时可能改变，那么即使你完全不对服务器进行任何操作，服务器的IP地址也会改变，导致域名和 IP 在维护者不知情的情况下对应不上。为了能把电脑的 IP地 址的变化随时同步到 DNS 上，需要这台电脑自己能够发现 IP 地址的变化，并且自行和 DNS 同步。用来实现电脑发现自己 IP 地址的变动并同步到DNS的这种服务就叫 DDNS （动态域名解析服务）。有了这个服务，电脑就能随时更新自己对应的域名对应的 IP ，这样无论自己的 IP 地址怎样变化，那个域名都能一直指向自己。这样一来使用者也可以直接通过域名来访问那个IP地址不固定的服务器了。  
我们的家用宽带几乎全都是动态 IP 。如果你申请到了公网 IPv4 ，或者你让玩家能够通过 IPv6 连接服务器，那么你就需要把你的公网 IPv4 和 IPv6 告诉玩家。然而作为家用宽带，这些地址都是动态的。你必须要给服务器配置DDNS服务，否则你就必须要频繁地重新公布连接地址或者手动更新域名解析，否则玩家就进不去服务器，这简直不是给人干的活。从上文可以看出来， DDNS 服务必须需要一个域名，所以管他免费不免费，你必须先搞到一个域名，然后才能开始搭建 DDNS 。运行 DDNS 服务的软件目前开服圈子最常用的是ddns-go（https://github.com/jeessy2/ddns-go ），这个软件开箱即用，只需要简单的几步配置就可以让域名牢牢绑定在服务器上，非常方便。由于读者可能使用各种各样的域名注册商，而且限于篇幅，本文仅提供 windows 系统上腾讯云和 ddns 配合使用的教程，其他注册商和操作系统的配置方法大同小异，读者们灵活变通即可，有不懂的地方善用搜索引擎搜索。  
1. 前往https://github.com/jeessy2/ddns-go/releases 下载最新版的 ddns-go 安装包。
2. 将安装包（就是下载的那个压缩包）解压到一个不会被自己误删除的位置（如果你不知道哪里自己不会误删除，就直接解压到文件管理器左侧的文档那个文件夹）。  
3. 在 ddns-go.exe 所在的同级目录打开 powershell 。  
4. 执行`./ddns-go.exe`  
5. 打开浏览器，访问网站 localhost:9876 ，这是 ddns-go 的管理面板  
6. 提示输入帐号密码，由于这是你首次打开网站，直接点击登录。  
7. DNS 服务商选择Dnspod（腾讯云）。  
8. 进入 DNSPod 官网 dnspod.cn 。登录自己的帐号，点击帐号头像，点击 API 密钥，点击 DNSPod Token，点击创建密钥，先将 ID 和 Token 分别复制到 ddns-go 管理面板的DNS服务商项中的 ID 和 Token 中，再关闭 DNSPod 控制台中弹出的窗口。  
9. 往下翻，根据自己的实际情况启用 IPv4 或 IPv6 。获取方式都建议选择通过接口获取。 Domains 中填写要跟踪的解析记录，例如你想让 mc.arsky.club 指向这台电脑，那就在里面填写m c.arsky.club 。不要只填写 mc ，要把整个域名都写上。  
10. 其他配置中，勾选禁止公网访问，然后设置 ddns-go 的登录用户名和密码。下载登录后台的时候，你就必须要输入这个用户名和密码才能登录了。如果实在记不住用户密码就在服务器桌面上创建个txt写里面，当然不推荐这么做因为不安全，除非你承认自己真的记不住。  
11. 点击最下面的 Save 。  
到这里域名解析就配置成功了。此时控制台翻到顶，右边应该会出现日志，如果有修改域名解析xxx成功！或者 IP 未改变，将等待 n 次后与 DNS 服务商进行比对，就是配置成功了。如果失败了，日志会提示错误原因。  