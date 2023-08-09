# 异常情况通报
系统监控到 /gh/在 2023-8-8 23:00 左右

系统反馈大量流量异常情况，截止2023-8-9 00:30宽带峰值2.2GB 系统在00:10目前已经自动切到国际站了 部分地方缓存在04点基本上完成了，走了2.5tb。。。。换成流量包的话也200多了，头疼

![image3857cb1443c67300.png](https://img.cuteapi.com/2023/08/09/image3857cb1443c67300.png)
![image.png](https://img.cuteapi.com/2023/08/09/image.png)

今我方排查 遇到了视频切片，伪装GIF 传播 擦边视频，暴力视频，色情视频等，已上报云厂对对方进行封禁处理，上游jsdelivr 及时进行了封禁阻断对方部分链接，并且对方使用的是阿里云播放器，腾讯云cos github.io 等

后续我们包括但不限于限制宽带速率

/gh/ 不超过30mpbs 

/npm/ 不超过50mpbs 

并且开启强制验证 referer

/gh/  加白政策

等等

当初不限制 也是为了大家方便 但是越来越过分了 机场 ghs的也都来了

（目前不限制 但限制在来源为github.io的 myqcloud.com和 tencentcos.cn 还有aliyuncs.com等等公共域名）老喜欢用这些域名

遇到了好几次这样的事情，也是该考虑考虑有关合规政策了 真无语遇到看不懂中文的中国人

昨天8号晚 被迫切到国际站流量还是大 所以说....
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/918b42b6-9790-4671-bb43-eabf2cc1f2ad)

截止10号 4. 依然没有停止
最下面的都处理完了 不应该啊

后续将大概率增加自动化认证系统
referer: （写顶级就可以了）or gh:（写用户名+项目地址） 二选一
截图：首页
第三方信息 QQ 微信 邮箱 手机号 选一个就可以了 如果有关部门要求预留手机号在说手机号的事情
等等

# 重要
如果需要使用
github.io
/gh/用户名/用户名.github.io
请联系管理员加白！！！！

国际站不限制！！！！
最下面有管理员联系方式！！！

# 在其 LICENSE（许可证）的文件夹说的很明白了

这是一个免费的、不受阻碍的一个镜像站，发布到公共领域，永久免费供大家使用。

任何人都可以出于任何商业或非商业目的，通过任何方式，以源代码形式或编译的二进制文件形式，自由复制、修改、发布、使用、编译、销售或分发本软件，应用到系统中。

在承认版权法的司法管辖区，本软件的一个或多个作者将本软件的任何和所有版权利益奉献给公共领域，包括用户捐赠将百分之百投入镜像站。

我们这样做是为了广大公众的利益，而不是为了我们的继承人的利益。我们希望这种奉献是一种公开的行为，在版权法下永久地取消对该软件的所有现在和将来的权利。

本镜像站按“原样”提供，没有任何形式的明示或暗示的担保，包括但不限于对商业、特定用途适用性和不侵权的担保。

在任何情况下，作者都不对任何索赔、损害或其他责任负责，无论是在合同诉讼、侵权诉讼或其他诉讼中，还是在与软件或软件的使用或其他交易相关的诉讼中。

但是有一点必须遵守中国大陆法律法规和协议，如若造成一切后果，则有使用者承担责任，镜像站只会配合当地政府部门进行数据提取，分析上报日志到相关部门部门。

您需知晓国际站和境内站是两个完全不同主体，境内站受到中华人民共和国管辖， 国际站受到霉利坚共和国管辖，根据业务预期选择正确的管辖区域，否则可能会受到系统封禁


你要ghs去国际站ok？


# 项目介绍 


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


## 平台管理员联系方式与问题反馈 


渠道1：https://github.com/54ayao/Chinajsdelivr/issues 


QQ：202835956

微信：

![b5c2867a046f80544c281622123730e](https://github.com/54ayao/Chinajsdelivr/assets/86733666/8efa5654-3c12-43a1-a49e-5e48e1df1c6b){: width="200px" height="200px"}


企业微信：
![e79daedf4f592ff8dcec531c074e6cc](https://github.com/54ayao/Chinajsdelivr/assets/86733666/1631db91-fe24-4d84-8d95-23f5564eb93c)


bilibili:  [鹰瑶呐](https://space.bilibili.com/293201568)


渠道1：https://github.com/54ayao/Chinajsdelivr/issues 


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
|myqcloud.com|被恶意利用|无|2023-08-10---9999-12-31|全球|
|aliyuncs.com|被恶意利用|无|2023-08-10---9999-12-31|全球|
|github.io|被恶意利用|无|2023-08-10---9999-12-31|全球|
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
|suxing12312.github.io|传播违规视频|/gh/suxing12312|2023-08-10---9999-12-31|全球|
