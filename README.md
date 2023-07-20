## 反馈须知


![image](http://user-images.githubusercontent.com/86733666/226504907-dbd006b5-c0b3-4cd6-9489-db767368ce2b.png)
![image](http://user-images.githubusercontent.com/86733666/226505009-3830743a-8cb5-4358-84a9-61f456760743.png)


其中CDN：xxxxx 代表你目前的cdn
后面id不同供应商不一样的 一实际为主 基本上都是xxxID
需要提供这些参数给我排查
官网也和上架通道，但是没有提示貌似

## 温馨提示
主力节点 https://jsd.cdn.zzko.cn/     （2023年7月15日之前黑名单用户已经全部解封，希望大家遵守法律法规，谢谢）



备用节点 https://cdn.jsdelivr.us/  







# 项目介绍

## 前言

#### 2021 年 12 月 20 日下午，jsDelivr 因为一些原因失去了国内的 ICP 备案，这导致网宿关闭了它的国内加速，随后 jsDelivr 切换 CDN 为 Fastly。

#### jsDelivr 在 ICP 被吊销的四个月后（4 月 28 日）开始被 DNS 污染，导致国内解析访问更加困难。

#### 过两个月 jsDelivr 的情况好不少，但没有国内节点还是有点慢。

#### 2023年开始 jsDelivr 的情况越来越差，有时候国内可能打不开了。


## 如何使用

参考下列首页   

境内站 https://jsd.cdn.zzko.cn/  （全球加速 海外Anycast/cloudflare.com和Anycast/腾讯云）默认显示中文 使用VPN或者是海外IP 或者是海外DNS 可能调度海外 显示英语

国际站 https://cdn.jsdelivr.us/  （海外加速海外Anycast/cloudflare.com 优化回国）默认显示英语 （机翻）

其中 https://jsd.cdn.zzko.cn/  有使用限制 需要合法合规  我们会收到CDN供应商的反馈来封禁

其中 https://cdn.jsdelivr.us/  （海量 Anycast 优化回国） 依然受到机房监管 问了一下还是不能违规 但是这个不能比上面的过分

＃＃使用方法
只需要把 
https://cdn.jsDelivr.net
全局替换成
https://jsd.cdn.zzko.cn
可以再加一个判断，如果上方不可达的话
https://cdn.jsdelivr.us
 
## 项目概述

本项目于 2021 年 12 月 21 上线


## 测速情况

### [ITDOG](https://itdog.cn/)测速情况

#### 裸连 jsDelivr

直接打开
![裸连](
单 IP 测试
![裸连单IP1](https://img.cuteapi.com/images/1/2022/10/17/1666015315634d6053e22f7.png)
![裸连单IP2](https://img.cuteapi.com/images/1/2022/10/17/1666015195634d5fdb7cfa6.png)
打开效果非常不理想。

#### ChinajsDelivr


使用 ChinajsDelivr

主力节点 https://jsd.cdn.zzko.cn/   

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/0fe4449d-a32a-48ec-90f9-15c92ce83d98)

备用节点 https://cdn.jsdelivr.us/  

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/874479d2-5134-41c7-9692-3622ad91c924)


关闭缓存的情况下
![关闭缓存的情况下](https://img.cuteapi.com/images/1/2022/10/09/16653260926342dc0ccde32.png)

整体来说性能无差异，但是考虑到正常情况下还是增加了一定缓存 还得到了极大提升

在 4.0 版本中 直接全绿
![4.0版本全绿](http://user-images.githubusercontent.com/86733666/196892699-08ff55bb-a007-48c6-8cfc-4ccf4c6b7bc3.png)







# 温馨提示

1.不能有违规 国际站除外

2.不得应用到违规网站，尤其是灰黑产业，不符合工信部或者国家规定的项目 国际站除外

3.项目支持下载，但不能下载违反国家法律法规，你要用就悄咪咪的用，别通过这个链接分享，不该我真的栓Q， 国际站除外

4.未经许可不得再次反向代理该网站 或者反向代理我源站进行二次分发，使用 cos，oss进行回源回去文件的除外 

5.github 项目不做任何屏蔽的目的是为了更好的用户体验，麻烦你们不要把我搞得像jsd一样被污染一段时间 

6.如果触发防火墙，代表你IP一分钟已经超过2000次，被防火墙的屏蔽被两个三小时之后再试，家庭用户可尝试重启路由器来获取新的IP。或者是保持正常访问。

7.未经允许严禁使用回源其包括但不限于香港，新加坡，台湾，东南亚，孟买，美国，等 jsd.cdn.zzko.cn 以及cdn.jsdelivr.us 还有cdn.jsdelivr.ren 源站集群，


＃＃商务与赞助
1.我们基于合规性每个月不定期都会从cdn平台抽取日志进行抽查

2.平台月流量境内侧目前500GB+ 赞助节点参考3

3.平台管理员联系方式

QQ:202835956

weixin:hanbiayao

workweixin:

https://work.weixin.qq.com/u/vcfbf65d01f6c6d793?v=4.1.7.23550

微信打开有bug，显示隐藏问题 可能是 QR 识别问题
