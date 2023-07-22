# 项目介绍 
## 原因

#### 2021 年 12 月 20 日下午，jsDelivr 因为一些原因失去了国内的 ICP 备案，这导致网宿关闭了它的国内加速，随后 jsDelivr 切换 CDN 为 Fastly。

#### jsDelivr 在 ICP 被吊销的四个月后（4 月 28 日）开始被 DNS 污染，导致国内解析访问更加困难。

#### 过两个月 jsDelivr 的情况好不少，但没有国内节点还是有点慢。

#### 2023年开始 jsDelivr 的情况越来越差，有时候国内可能打不开了。

## 什么是  Chinajsdelivr？
Chinajsdelivr也即是 jsdelivr mirror site 也就是jsdelivr 镜像站
本项目于 2021 年 12 月 21 上线 在此期间我们也在不断的测试和迭代 从最开始的直接镜像到服务器再到使用云函数等更新来提高成功率和速度 
最开始我们开始直接在CDN反向代理jsDelivr官方但是动不动链接失败 ，后来查询一下日志是被污染了 CDN在切换源站上浪费了时间，后来我们使用了腾讯云香港LH反向代理，但是，受限于30MBps的宽带导致速度平平无奇，在后来尝试使用云函数加速，也问了一下jsDelivr没有完全被国内禁止使用 云函数镜像jsDelivr 不属于跨境访问



# 简介

Chinajsdelivr  是一个免费依托于国内CDN（内容交付网络）。以及云函数等产品对上游jsdelivr官方的资源进行更新及转发，我们与jsdelivr官方的Github和NPM还有WP 紧密集成，也是希望大家可以给自己的网站能够自动静态文件/音视频文件获得一定的加速，当然我们使用的初衷是让所有开源项目提供可靠的CDN服务，但是也可以用于私有化场景，博客，论坛，等等，当然依托于国内大厂提供稳定的 CDN，可用于具有大量流量的流行网站上的生产。没有带宽限制或高级功能，任何人都可以完全免费使用，但是这个对于我们来说Chinajsdelivr在流量方面也是要做好预估的，但是Chinajsdelivr是一个不好说的一个项目，这里的突发流量还是比较多的，我们目前在云厂流量是600GB-700GB 一个月左右，为了产生不必要的回源请求，降低源的流量流出，我们会比jsdelivr官方缓存可能高达1倍左右。我们以后在这里也会开放出api来让用户来清理缓存,虽然说由于Chinajsdelivr不像jsDelivr是一个依托于jsDelivr赞助商支持的免费的CDN项目相反Chinajsdelivr我们所有流量都是我们来承担。，之前考虑过使用多家CDN进行拉平处理来平均进行流量调度以获得更好的性能，但它也使我们能够避免单个 CDN 过载。但是多家CDN可能面临一些问题 比如说 账单分散 缓存过多 对于云函数服务器压力过大，反而会产生更多的费用，
我们的主要费用包括就是CDN流量以及HTTPS请求费，如果有能力的用户可以选择赞助CDN以及Money 当然更好了，我们会在子页面公式内容以及去向 可以参考最下面的赞助（


## 温馨提示
<div class="info custom-block"><p class="custom-block-title">你正在阅读的是 Chinajsdelivr 3  的文档！</p>
<ul><li>Chinajsdelivr 2 于 2022 年 4 月 1 日停止维护。</li><li>Chinajsdelivr 2 的域名是 <a href="https://jsd.eagleyao.com" target="_blank" rel="noreferrer">https://jsd.eagleyao.com</a>。</li><li>想从Chinajsdelivr 2 升级？别担心我们已经301到Chinajsdelivr 3 了</a></li></ul></div>




## 使用教程
参考下列首页   

境内站 https://jsd.cdn.zzko.cn/  

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
用户省份：中国香港特别行政区
CDN: cloudflare
CDN访问参数：abcd1234
是否测试 jsdelivr官方源站：
是/jsdelivr官方源站无该报错
使用影响：
无法加载字体 显示xxx

## 赞助

微信：

QQ：

支付宝:

PayPal:

USTD：


