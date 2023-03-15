## 温馨提示；
主力节点 https://jsd.cdn.zzko.cn/     （2023年3月15日之前黑名单用户已经全部解封，希望大家遵守法律法规，谢谢）

备用节点 https://cdn.jsdelivr.ren/ 

说实话我不止一次的想吧/gh 重定向到 官方或者是第三方站点 因为我不限制任何行为， 然后cdn百分之90 referer头部都是 - 也许就让某些除了违法站点看到了希望怎么滴
在发送的域名中 有飞机场 有h站 什么奇奇怪怪的人都有，不发送的鬼知道有什么，开了 referer 镜像站 页面还会403   也和一小部分用户聊过 别人的建议 给/gh 跳转到非备案的域名上，但是/gh上 还是有一部分优秀的站点，怎么说呢 ，我也是表示比较惊喜吧，和这些看不懂中文的中国人表示无语，看不懂中文我也计划上中英文了 ，大家其实都清楚jsdelivr官方是因为什么原因取消备案的还不是GayHub上面某些人吗，说实话你这违法站点，可不可以不要来ex第三方公益站 你以为cdn后台看不到？ 你以为我们收不到官方对于违规资源预警？我只是没时间和精力管，大家都是成年人，都有直接的事情，不是说我公益就要天天盯着他，怎么说呢后面打算和官方沟通一下可不可以出一个针对cdn层面的内容识别，加大打击违规的力度，保证正常运营，所以说我计划加一个SLA 

[字数过多，请点击查看。](SLA.md)
抄的腾讯和百度作业 有问题反馈

## Tips;
Main node https://jsd.cdn.zzko.cn/ (All blacklisted users have been unblocked before March 15, 2023, I hope you will abide by laws and regulations, thank you)

Standby node https://cdn.jsdelivr.ren/ 

To be honest, I've thought more than once that /gh redirects to official or third-party sites because I don't restrict any behavior, and then 90 percent of the CDN referer heads are -- maybe some sites other than illegal sites see hope
In the sent domain name There is an airport There is an H station What strange people have, the devil who does not send knows what, opened the referer mirror site page will also 403 Also chatted with a small number of users Suggestions from others Give /gh Jump to a non-filing domain name, but /gh There are still some excellent sites, how to say it, I also expressed more surprise, and these Chinese who can't understand Chinese are speechless, can't understand Chinese I also plan to go to Chinese and English, Everyone actually knows that jsdelivr officially canceled the filing for what reason is not some people on GayHub, to be honest, you illegal site, can you not come to ex third-party public welfare site Do you think the CDN background can't see? Do you think we don't receive official warnings about illegal resources? I just don't have the time and energy to manage, everyone is an adult, there are direct things, not that I have to stare at him every day, how to say, I plan to communicate with the official later, can I come up with a content identification for the CDN level, increase the intensity of cracking down on violations, and ensure normal operation, so I plan to add an SLA 

[Too many words, click to view](SLA-en.md)

Copy Tencent and Baidu homework There is problem feedback

# 项目介绍

## 前言

#### 2021 年 12 月 20 日下午，jsDelivr 因为一些原因失去了国内的 ICP 备案，这导致网宿关闭了它的国内加速，随后 jsDelivr 切换 CDN 为 Fastly。

#### jsDelivr 在 ICP 被吊销的四个月后（4 月 28 日）开始被 DNS 污染，导致国内解析访问更加困难。

#### 现在 jsDelivr 的情况好不少，但没有国内节点还是有点慢。

## 如何使用

将原域名修改为“jsd.cdn.zzko.cn”，如下：

原链接：

https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/

修改后：

https://jsd.cdn.zzko.cn/npm/font-awesome@4.7.0/

## 项目概述

本项目于 2021 年 12 月 21 上线

## 维护日志

[字数过多，请点击查看。](LOG.md)

## 测速情况

### [ITDOG](https://itdog.cn/)测速情况

#### 裸连 jsDelivr

直接打开
![裸连](https://zzko.cn/images/1/2022/10/17/1666015238634d6006005c2.png)
单 IP 测试
![裸连单IP1](https://zzko.cn/images/1/2022/10/17/1666015315634d6053e22f7.png)
![裸连单IP2](https://zzko.cn/images/1/2022/10/17/1666015195634d5fdb7cfa6.png)
打开效果非常不理想。

#### ChinajsDelivr

使用 ChinajsDelivr
![使用ChinajsDelivr](https://zzko.cn/images/1/2022/10/09/16653260106342dbbab13a9.png)
有缓存的情况下

![有缓存的情况下](https://image.zzko.cn/images/1/2022/10/09/16653260606342dbec8e69e.png)

关闭缓存的情况下
![关闭缓存的情况下](https://image.zzko.cn/images/1/2022/10/09/16653260926342dc0ccde32.png)

整体来说性能无差异，但是考虑到正常情况下还是增加了一定缓存 还得到了极大提升

在 4.0 版本中 直接全绿
![4.0版本全绿](https://user-images.githubusercontent.com/86733666/196892699-08ff55bb-a007-48c6-8cfc-4ccf4c6b7bc3.png)

最近大量香港流量回国，产生较高延迟，近期尝试将增加Azure 国际站的香港节点。

我们将持续优化中国境内外访问速度。

目前只使用了腾讯云和网宿cdn还有天翼云

更多信息见 https://cp.zzko.cn




