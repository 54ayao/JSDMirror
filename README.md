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

Chinajsdelivr  是一个免费依托于国内CDN（内容交付网络）。以及云函数等产品对上游jsdelivr官方的资源进行更新，我们与jsdelivr官方的Github和NPM还有WP 紧密集成，也是希望大家可以给自己的网站能够自动静态文件/音视频文件获得一定的加速，当然我们使用的初衷是让所有开源项目提供可靠的CDN服务，但是也可以用于私有化场景，博客，论坛，等等，当然依托于国内大厂提供稳定的 CDN，可用于具有大量流量的流行网站上的生产。没有带宽限制或高级功能，任何人都可以完全免费使用，但是这个对于我们来说Chinajsdelivr在流量方面也是要做好预估的，但是Chinajsdelivr是一个不好说的一个项目，这里的突发流量还是比较多的，我们目前在云厂流量是600GB-700GB 一个月左右，为了产生不必要的回源请求，降低源的流量流出，我们会比jsdelivr官方缓存可能高达1倍左右。我们以后在这里也会开放出api来让用户来清理缓存


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

以

https://cdn.jsdelivr.net/npm/jquery/

https://Fastly.jsdelivr.net/npm/jquery/

https://jsd.cdn.zzko.cn/npm/jquery/  （全球加速 海外Anycast/cloudflare.com和Anycast/腾讯云）

https://cdn.jsdelivr.us/npm/jquery/ （海外融合Anycast/CDN 优化回国）

来对比一下 都是第二次测试结果

https://cdn.jsdelivr.net/npm/jquery/
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/203f4fa9-1f1f-4876-b4dc-69dbdc93b7fd)
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/f078947c-82e7-4874-a167-adea549012c9)
可以看到速度还可以，但是访问失败的太多了，ping的平均延迟在180+

https://Fastly.jsdelivr.net/npm/jquery/

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/37ceb5a3-9aaa-4f3f-af60-877201a70e65)
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/aeeb82dc-8440-48ca-8112-4479828e4eac)


可以看到速度好不少，但是ip少了 ，ping的平均延迟在100+


https://jsd.cdn.zzko.cn/npm/jquery/

![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/13d11896-40ab-41c2-9418-3e677c7cc6ed)
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/322a37ff-be6f-48c8-83ec-bc0d6e30ae52)
可以看到速度起飞 境内延迟平均20ms+最高52ms 海外低至1ms

https://cdn.jsdelivr.us/npm/jquery/ 
![image](https://github.com/54ayao/Chinajsdelivr/assets/86733666/577d0023-72a5-4088-9714-dcd583f04023)
可以看到速度起飞 境内延迟平均73ms 海外低至1ms


