Chinajsdelivr 项目是2021年与jsdelivr备案号掉的时候上线

那时候使用了jsd.eagleyao.com 

2022-09-26 新域名备案下来

现在使用了jsd.cdn.zzko.cn

换域名主要是com年年涨价，也受到美元汇率影响导致注册商涨价 也想短点好


目前使用Version 3.0加速 使用 SNI +hosts 方式加速 (已实现) 2022 年 10 月 6 日 目前全面升级完成 哈哈 使用了腾讯云香港 32 个 ip 以后会更多的 所有域名都所有了这个配置


CDN 侧配置

![image](https://user-images.githubusercontent.com/86733666/194452743-5af3b216-ac40-4bd5-bd56-6453814b11b6.png)

不要闲着去攻击源 不然我真的会栓 Q 的 还有好几个是 30Mpbs 的服务器 宽带太小没有加 这些都是在 100Mpbs 以上的的 IP。。。。

有缓存的情况下

![image](https://user-images.githubusercontent.com/86733666/194452812-bff30e13-ac87-4d6e-8b88-fb599a28bc11.png)

关闭缓存的情况下

![image](https://user-images.githubusercontent.com/86733666/194452840-76775bb3-e7c9-4db6-86a6-d67e98c6fa4a.png)

整体来说性能无差异，但是考虑到正常情况下还是增加了一定缓存

官方展示的被攻击日志 

![image](https://user-images.githubusercontent.com/86733666/194457040-e599e47d-acbf-454f-b405-e12304e762d2.png)


![image](https://user-images.githubusercontent.com/86733666/194452924-1334eb1f-f468-4b89-aa76-97bf8900fc33.png)

在请求头中

ayao: https://www.ayao.ltd

是我的个人主页

china-jsdelivr: The jsdelivr mirror station is a public CDN acceleration plan for . It has an effective ICP filing application permit issued by the Chinese government, use Tencent Cloud CDN to provide domestic accelerated services  I believe you can see this sentence. I hope you don't attack the website, personal website maintenance funds are limited The good Internet atmosphere is inseparable from everyones joint efforts.

大体意思就是说
jsdelivr镜像是的公共CDN加速计划。 它具有中国政府颁发的有效的ICP申请许可，使用Tencent Cloud CDN提供国内加速服务，我相信您可以看到这句话。 我希望您不要攻击网站，个人网站维护资金有限，良好的互联网氛围与每个人的共同努力都不分开。

（google机翻）




是项目介绍

contact: admin@eebbk.top

是管理员邮箱

static-resources: https://www.zzko.cn

是静态域名专属标示

server: ayao

copyright: ayao

都是标示

![image](https://user-images.githubusercontent.com/86733666/194453609-37f68ed7-2347-4078-b951-f9eafe7326c5.png)

速度测试
还是不错的


不要去CC我 目前没有过多限制请求 每秒单ip是500Qps 我也相信不会触碰到某些人利益吧。。。公益行为 我也希望灰黑产业的大佬别搞我哇随便引用我也要进去喝茶的哇，

