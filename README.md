## 反馈须知


![image](https://user-images.githubusercontent.com/86733666/226504907-dbd006b5-c0b3-4cd6-9489-db767368ce2b.png)
![image](https://user-images.githubusercontent.com/86733666/226505009-3830743a-8cb5-4358-84a9-61f456760743.png)

其中CDN：xxxxx 代表你目前的cdn
需要提供这些参数给我排查最近准备买流量啦

## 温馨提示
主力节点 https://jsd.cdn.zzko.cn/     （2023年3月15日之前黑名单用户已经全部解封，希望大家遵守法律法规，谢谢）

备用节点 https://cdn.jsdelivr.ren/ 


[SLA 字数过多，请点击查看。](SLA.md)
抄的腾讯和百度作业 有问题反馈

## Tips;
Main node https://jsd.cdn.zzko.cn/ (All blacklisted users have been unblocked before March 15, 2023, I hope you will abide by laws and regulations, thank you)

Standby node https://cdn.jsdelivr.ren/ 



[SLA Too many words, click to view](SLA-en.md)

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

更多信息见 https://www.jsdelivr.ren/home



