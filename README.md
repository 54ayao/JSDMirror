温馨提示；目前是特殊期间
为了防止对其使用gayhub传播 不当言论造成危害 可能会临时下架境内节点 重定向到
https://cdn.jsdelivr.ren/ 进行加速 
3月中旬恢复



# 项目介绍
关于访问https://jsd.cdn.zzko.cn/ 被重定向到了 也只是为了让大家更好的了解项目 不会去劫持用户托管的
![1677794457200](https://user-images.githubusercontent.com/86733666/222568451-c08a305c-03eb-424e-a17c-0973d888e1fb.png)
本身原理 就是 https://cdn.jsdelivr.net/ 会30x到 https://www.jsdelivr.com/ 

不过鉴于 gayhub 在境内打开概率


可能重定向到  https://ochobtxuip.cloudpages.cn


说白了就是让浏览器首页跳转到这里 
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
