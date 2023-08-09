# 异常情况通报
系统监控到 /gh/在 2023-8-8 23:00 左右
系统反馈大量流量异常情况，截止2023-8-9 00:30宽带峰值2.2GB 系统在00:10目前已经自动切到国际站了 部分地方缓存在04点基本上完成了，走了2.5tb。。。。换成流量包的话也200多了，头疼
![image3857cb1443c67300.png](https://img.cuteapi.com/2023/08/09/image3857cb1443c67300.png)
![image.png](https://img.cuteapi.com/2023/08/09/image.png)

今我方排查 遇到了视频切片，伪装GIF 传播 擦边视频，暴力视频，色情视频等，已上报云厂对对方进行处，上游及时进行了封禁，对方部分链接被封禁，并且对方使用的是阿里云播放器，腾讯云cos github.io 等
后续我们包括但不限于限制宽带速率 
/gh/ 不超过30mpbs 
/npm/ 不超过50mpbs 
并且开启强制验证 referer
/gh/  加白政策
等等
当初不限制 也是为了大家方便 但是越来越过分了 机场都来了
（目前不限制 但限制在来源为github.io的 myqcloud.com和 tencentcos.cn 还有aliyuncs.com等等公共域名）老喜欢用这些域名 绕白
遇到了好几次这样的事情，也是该考虑考虑有关合规政策了 真无语遇到看不懂中文的中国人

昨天8号晚 被迫切到国际站流量还是大 所以说....
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/918b42b6-9790-4671-bb43-eabf2cc1f2ad)

截止9号 23:30 依然没有停止 /gh 没有好的限制时段

后续将大概率增加自动化认证系统
referer: （写顶级就可以了）or gh:（写用户名+项目地址） 二选一
截图：首页
第三方信息 QQ 微信 邮箱 手机号 选一个就可以了 如果有关部门要求预留手机号在说手机号的事情
等等




# 项目介绍 

# 计划维护通知

一.我们计划将于 8月4日 修改缓存策略 本次更新只针对境内站 

1.js css TXT word PDF php html Excel 等等节点遵守官方缓存规定 浏览器侧3天

2.图片类缓存 修改为cdn 10 浏览器 14dd

3.音视频文件 修改cdn 14 浏览器30

二.我们计划将在 8月15日 新域名备案下来，进行维护，本次维护内容是拉平供应商的cname，将多条cname拉平成完整的一条，预计5分钟，维护时间在00:00-08:00 

## 原因

#### 2021 年 12 月 20 日下午，jsDelivr 因为一些原因失去了国内的 ICP 备案，这导致网宿关闭了它的国内加速，随后 jsDelivr 切换 CDN 为 Fastly。

#### jsDelivr 在 ICP 被吊销的四个月后（4 月 28 日）开始被 DNS 污染，导致国内解析访问更加困难。s

#### 过两个月 jsDelivr 的情况好不少，但没有国内节点还是有点慢。

#### 2023年开始 jsDelivr 的情况越来越差，有时候国内可能打不开了。

## 什么是  Chinajsdelivr？
Chinajsdelivr也即是 jsdelivr mirror site 也就是jsdelivr 镜像站
本项目于 2021 年 12 月 21 上线 在此期间我们也在不断的测试和迭代 从最开始的直接镜像到服务器再到使用云函数等更新来提高成功率和速度 
最开始我们开始直接在CDN反向代理jsDelivr官方但是动不动链接失败 ，后来查询一下日志是被污染了 CDN在切换源站上浪费了时间，后来我们使用了腾讯云香港LH反向代理，但是，受限于30MBps的宽带导致速度平平无奇，在后来尝试使用云函数加速，也问了一下jsDelivr没有完全被国内禁止使用 云函数镜像jsDelivr 不属于跨境访问
当然你“认为”我们镜像jsDelivr是为了窃取jsDelivr官方流量那没有使用的必要的哈 出发点都是错误了 你所有的请求都是毫无保留且不增加任何修改转发给jsDelivr 即使修改了首页 增加了广告其实也是对您使用不会产生本质上的影响，还是不明白的话，那么你可以选择自建或者是使用COS或者是OSS回源jsDelivr来进行加速

温馨建议大家还是发送referer,以便后续能够正常的对资源可用性监控，能够及时复盘，以及预警，为了产生不必要的麻烦，也为了减轻站长查看cdn日志，来针对什么类型的网站进行加速优化，后续极有可能会交给系统化运营，在jsdelivr侧清理缓存后5分钟在控制面板提交即可完成更新，并且有可能会开放一些经过脱敏的数据

## 声明
当我看到有人在质疑我朋友的Kgithub是假冒网站，钓鱼网站

我来说一下 首先Kgithub的流量大 且是为了方便用户编辑Kgithub的站长才优化了登录问题
服务器其实不保存用户账号密码以及Cookice 不要被某些人带了节奏

![24d7c3f08144904dd70b51e9039e400](https://github.com/54ayao/Chinajsdelivr/assets/86733666/7dfc3aa1-2978-4ad1-9a5e-43328b90d1d8)

<img width="580" alt="4a7a0856d5cceaa9cfa6eb595366db1" src="https://github.com/54ayao/Chinajsdelivr/assets/86733666/9951f27e-18ec-4ba5-b2c1-5c51b2fff214">

“好不容易开始挣点钱。然后这个时候就有一帮人做类似这种镜像网站”

我跟你们说一下 Kgithub的站长是使用了不少腾讯云轻量应用服务器反向代理起步9台 就算是一个服务器32 一年3500左右 还有cos在更新资源 什么的你以为隔壁的Kgithub站长
是为了赚钱 他也想搞广告？基本上入不敷出的还不是保证正常运营 如果使用CDN的费用++ cf的网络质量还不如不用  服务器是你家的？说公益行为云厂就不问你要钱了 说话真的搞笑
Kgithub的站长还是学生啊 哥们   每个月那点生活费凭什么全部贴给你们 ？


“不经过你的允许下用你网站的名气，内容，功能，系统资源，通过大量的广告来牟利。到时候你的想肯定会有所转变。”

如果gayhub符合中国大陆法律法规 会被污染？
没有那一群xx上传违法违规的内容会被墙，是没有经过许可又怎么了 主要还不是想服务好我们 让我们访问github不至于那么困难？
那一群**在gayhub上传违法违规大陆但是不违法美国法律法规 gayhub、不管不是很正常？ 


“咱不能因为自己是这种行为的获利者，就忽视这种行为本身的合理，合法性.做人还是要有点廉耻之心”

xwsl 对对对你说的都对  花的不是你的钱干嘛你会心疼 ，你怎么不出钱 站着说话不腰疼

镜像站谁不贴钱？


![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/1cc3ef9e-31d8-4992-8645-436f6d0a8e7d)
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/22f82d30-7a0f-4a32-a818-97e22edd1f94)
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/64b7eb47-ef81-40d3-9f47-3570f6a69501)


看看这数据量其他用户说什么了吗

![1690137422644](https://github.com/54ayao/Chinajsdelivr/assets/86733666/1a33ba1e-11f1-4382-9f96-953460fa031a)

是完全支持的





Chinajsdelivr其实也是有计划搞广告的  在其项目首页就可以看到了 


基本的HTML就可以反向代理在云函数本地保存一份 不涉及登录处理用户数据 所以说插入比较方便 且jsd静态化就可以跑起来可以大量减轻负担，不像是gayhub需要转发大量数据
我当初搞pixiv.work镜像站，也是可以登录，评论 发帖的 也没有人说假冒网站 钓鱼网站 不要见风就是风 见雨就是雨 人也要学会换位以及独立思考





所以说爱发电走得远么 看看数据在说话吧 镜像站的盈利绝不是靠光大网友赞助就可以解决的大部分情况下和广告密不可分的，不要被某些人带了节奏

# 简介

Chinajsdelivr  是一个免费依托于国内CDN（内容交付网络）。以及云函数等产品对上游jsdelivr官方的资源进行更新及转发，我们与jsdelivr官方的Github和NPM还有WP都可以甚至是combine 紧密集成，也是希望大家可以给自己的网站能够自动静态文件/音视频文件获得一定的加速，当然我们使用的初衷是让所有开源项目提供可靠的CDN服务，但是也可以用于私有化场景，博客，论坛，等等，当然依托于国内大厂提供稳定的 CDN，可用于具有大量流量的流行网站上的生产。没有带宽限制或高级功能，任何人都可以完全免费使用，但是这个对于我们来说Chinajsdelivr在流量方面也是要做好预估的，但是Chinajsdelivr是一个不好说的一个项目，这里的突发流量还是比较多的，我们目前在云厂流量是600GB-700GB 一个月左右，为了产生不必要的回源请求，降低源的流量流出，我们会比jsdelivr官方缓存可能高达1倍左右。我们以后在这里也会开放出api来让用户来清理缓存,虽然说由于Chinajsdelivr不像jsDelivr是一个依托于jsDelivr赞助商支持的免费的CDN项目相反Chinajsdelivr我们所有流量都是我们来承担。，之前考虑过使用多家CDN进行拉平处理来平均进行流量调度以获得更好的性能，但它也使我们能够避免单个 CDN 过载。但是多家CDN可能面临一些问题 比如说 账单分散 缓存过多 对于云函数服务器压力过大，反而会产生更多的费用，
我们的主要费用包括就是CDN流量以及HTTPS请求费，如果有能力的用户可以选择赞助CDN以及Money 当然更好了，我们会在子页面公式内容以及去向 可以参考最下面的赞助（
当然也有不同的声音说是觉得个人备案不靠谱.....  emmmm 换企业...再看吧

https://github.com/jsdelivr/jsdelivr 具体可以参考参考他们家 都是一样的的处理方式

## 温馨提示
<div class="info custom-block"><p class="custom-block-title">你正在阅读的是 Chinajsdelivr 3  的文档！</p>
<ul><li>Chinajsdelivr 2 于 2022 年 4 月 1 日停止维护。</li><li>Chinajsdelivr 2 的域名是 <a href="https://jsd.eagleyao.com" target="_blank" rel="noreferrer">https://jsd.eagleyao.com</a>。</li><li>想从Chinajsdelivr 2 升级？别担心我们已经301到Chinajsdelivr 3 了</a></li></ul></div>




## 使用教程
参考下列首页   

境内站 https://jsd.cdn.zzko.cn/   (目前经费紧张，如果发现被301到国际站上可能是CDN流量耗尽，临时切换线路)

国际站 https://cdn.jsdelivr.us/  


## 使用方法
只需要把 

https://cdn.jsDelivr.net

全局替换成

https://jsd.cdn.zzko.cn 或者是 https://cdn.jsdelivr.us

可以再加一个判断，如果上方不可达的话

https://cdn.jsdelivr.us

 
## 测速情况

我们分别使用

https://cdn.jsdelivr.net （官方默认加速）

https://Fastly.jsdelivr.net （官方默认加速）


https://jsd.cdn.zzko.cn

https://cdn.jsdelivr.us

### 我们在 [ITDOG](https://itdog.cn/)进行测试



https://cdn.jsdelivr.net/npm/jquery/

https://Fastly.jsdelivr.net/npm/jquery/

https://jsd.cdn.zzko.cn/npm/jquery/  （全球加速 海外Anycast/cloudflare.com和Anycast/腾讯云）

https://cdn.jsdelivr.us/npm/jquery/ （海外融合Anycast/CDN 优化回国）

来对比一下 都是第二次测试结果

https://cdn.jsdelivr.net/npm/jquery/
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/fe308bba-735b-4c6a-b4de-c5e8a1b2d64d)

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/1576971a-75ba-4957-b529-9831b6a48e76)

可以看到速度emmmm，访问失败的太多了，打开页面1.12s，ping的平均延迟在172+




https://Fastly.jsdelivr.net/npm/jquery/

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/3f5411ec-75a9-4d92-9511-0257c7e5ae1e)

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/aeeb82dc-8440-48ca-8112-4479828e4eac)


可以看到速度好不少，但是ip少了，打开延迟平均在0.9s左右 ，ping的平均延迟在116ms+





https://jsd.cdn.zzko.cn/npm/jquery/

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/c31a5495-4f67-4c28-89db-d8b945df1b44)

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/3f086819-8ea2-49b0-9e24-a8817c2b7a08)

可以看到速度起飞，打开平均0.3s 境内延迟平均15ms+ 海外低至1ms



https://cdn.jsdelivr.us/npm/jquery/ 
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/773696ab-3982-4beb-b563-7c7504f2ef25)

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/d2b85d4a-5c91-456f-acaa-a6215485712d)

可以看到速度起飞，打开平均0.5s 境内延迟平均73ms 海外低至1ms



# 使用规定
1.不能有违规 国际站除外

2.不得应用到违规网站，尤其是灰黑产业，不符合工信部或者国家规定的项目 国际站除外

3.项目支持下载，但不能下载违反国家法律法规，你要用就悄咪咪的用，别通过这个链接分享，不该我真的栓Q， 国际站除外

4.未经许可不得再次反向代理该网站 或者反向代理我源站进行二次分发，使用 cos，oss进行回源回去文件的除外

5.github 项目不做任何屏蔽的目的是为了更好的用户体验，麻烦你们不要把我搞得像jsd一样被污染一段时间

6.如果触发防火墙，代表你IP一分钟已经超过2000次，被防火墙的屏蔽被两个三小时之后再试，家庭用户可尝试重启路由器来获取新的IP。或者是保持正常访问。

7.未经允许严禁使用回源其包括但不限于香港，新加坡，台湾，东南亚，孟买，美国，等 jsd.cdn.zzko.cn 以及 cdn.jsdelivr.us 还有cdn.jsdelivr.ren 源站集群，

8.您需要理解我们基于合规性每个月不定期都会从cdn平台抽取日志进行抽查，因为大部分流量都不发送请求域名，我们参考加速项目URL地址来判断


## 平台管理员联系方式

QQ：202835956

微信：hanbiayao

工作微信：

bilibili:  [鹰瑶呐](https://space.bilibili.com/293201568)

## 问题反馈 

渠道1：https://github.com/54ayao/Chinajsdelivr/issues (8:00-12:00) 推荐 有提示的 （

渠道2：QQ： (12:00-14:00)     

渠道3：工作微信 (14:00-00:00) 

渠道4：微信（时间 00:00-8:00）

渠道5: bilibili 看情况吧不怎么玩B

首先确认报错
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/698eecd4-92a7-4fa8-a5e6-04ec72271599)

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/3806b7e2-a5d9-486b-8311-080db57f3f1b)

以及官方CDN下是否正常使用或者是出现报错 一般情形是我们转发官方头部 如果官方站也是这样需要自行去jsdelivr官方立issues 但是请替换成jsdelivr官方域名反馈 

范文
域名：google.com

节点IP:1.1.1.1

时间:2023年5月4日11:11 

用户省份：中国香港特别行政区

CDN: cloudflare

CDN访问参数：abcd1234

是否测试 jsdelivr官方源站：是/jsdelivr官方源站无该报错

使用影响：
无法加载字体 显示cors跨越

## 赞助

微信：

QQ：

支付宝: 

PayPal: 

USTD：无

以下封禁针对整个域名  和用户
|违规域名|违规原因|违规URL|封禁时间|区域|
|-------|----------|------------------------|----------|------|
|gkdy***.xyz|科学上网|历史数据|2023-07-26---9999-12-31|全球|
|gkd****.top|科学上网|历史数据|2023-07-26---9999-12-31|全球|
|gkdcl***.org|科学上网|历史数据|2023-07-26---9999-12-31|全球|
|c**8.club|科学上网|/gh/mt-theme|2023-07-26---9999-12-31|全球|
|***88.org|科学上网|/gh/mt-theme|2023-07-26---9999-12-31|全球|
|cd8**8.cc|科学上网|/gh/mt-theme|2023-07-26---9999-12-31|全球|
|cd8**.de|科学上网|/gh/mt-theme|2023-07-26---9999-12-31|全球|
|cd8**8.vip|科学上网|/gh/mt-theme|2023-07-26---9999-12-31|全球|
|cd8***.de|科学上网|/gh/mt-theme|2023-07-26---9999-12-31|全球|
|cd8***.org|科学上网|/gh/mt-theme|2023-07-26---9999-12-31|全球|
|cd8***.cc|科学上网|/gh/mt-theme|2023-07-26---9999-12-31|全球|
|***8.club|科学上网|/gh/mt-theme|2023-07-26---9999-12-31|全球|
|e****un.cloud|科学上网|历史数据|2023-07-26---9999-12-31|全球|
|jin***f.icu|色情|/gh/qucomic|2023-07-26---9999-12-31|全球|
|j**u.cc|色情|/gh/qucomic|2023-07-26---9999-12-31|全球|
|myqcloud.com|无|被恶意利用|2023-08-10---9999-12-31|全球|
|aliyuncs.com|无|被恶意利用|2023-08-10---9999-12-31|全球|
|github.io|无|被恶意利用|2023-08-10---9999-12-31|全球|
|anzuoanzuo.github.io|传播违规视频|/gh/anzuoanzuo|2023-08-10---9999-12-31|全球|
|906662225.github.io|传播违规视频|/gh/906662225|2023-08-10---9999-12-31|全球|
|nanjingup.github.io|传播违规视频|/gh/nanjingup|2023-08-10---9999-12-31|全球|
|fznb1234.github.io|传播违规视频|/gh/fznb1234|2023-08-10---9999-12-31|全球|
|niunai88.github.io|传播违规视频|/gh/niunai88|2023-08-10---9999-12-31|全球|
|wenmou258.github.io|传播违规视频|/gh/wenmou258|2023-08-10---9999-12-31|全球|
|cannian666999.github.io|传播违规视频|/gh/cannian666999|2023-08-10---9999-12-31|全球|
|wode-1u.github.io|传播违规视频|/gh/wode-1u|2023-08-10---9999-12-31|全球|
|woshishei138.github.io|传播违规视频|/gh/woshishei138|2023-08-10---9999-12-31|全球|
|niuzai12345.github.io|传播违规视频|/gh/niuzai12345|2023-08-10---9999-12-31|全球|
|03298.github.io|传播违规视频|/gh/03298|2023-08-10---9999-12-31|全球|
|oka159.github.io|传播违规视频|/gh/oka159|2023-08-10---9999-12-31|全球|
|nansheng-521zx.github.io|传播违规视频|/gh/nansheng-521zx|2023-08-10---9999-12-31|全球|
|jackson0829.github.io|传播违规视频|/gh/jackson0829|2023-08-10---9999-12-31|全球|
