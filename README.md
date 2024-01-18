平台将对图片进行审核,会对相应的图片做出处理,如果被误封了联系管理员处理，项目已开发完成，正在对接微信公众号传递快照确认是否违规 违规就不解除 不违规就解除

不知道怎么搞的某些MJJ舍不得用US站?  是我承认US站稳定性不太行正常情况下 US站我是白嫖的cdn，90天是免费50刀的额度 ，没有长期并且回国内稳定的CDN供应商，所以说稳定性可能不如国内站但是也不至于这么恶心人的吧 我就纳闷了是看不懂中国字 中国人看不懂中国字？ 不限制你们加载合法资源的主要目的也是为了大家好吧 被刷就不说什么了 反而隔三岔五喜欢送给我警告信？ 每次这个情况搞得我就心累 不知道意义何在 

![image](https://github.com/54ayao/EdgeJSedSpeed/assets/86733666/4f8363cb-0f33-49c0-932c-1bf2681a8791)

![image](https://github.com/54ayao/EdgeJSedSpeed/assets/86733666/de019a40-1976-442a-b3aa-98090009bf4e)

这样你们才开心？好好好 我服了你们 我知道github上面项目有些不合符相关政策 但是希望你们还有点良知吧 只要你不加载音视频/文本/图片这种容易被检测的我也不会说是过多的干预你们，比如说你加载给css 和js 这个完全是没问题的 技术手段现在没那么厉害不好查 实在不行就国际站呗 再说了你搞这些还赚不到钱？至于跑改了恶心我们？不觉得下头吗 审核系统我们是在写 但是收尾工作不好开展 我们都是拿出自己的空闲时间来保证正常运营 进度一直很慢的 不是说不想搞 希望违法站点可以高抬贵手放过CN站吧 真的累了 爱发电的行为是为了更好的互联网社区环境，不应该让爱发电的人心寒 最后，关于违法站点的问题，我们应该遵守法律法规，不从事任何违法活动。同时，我们也应该尊重他人的权益，不侵犯他人的合法权益。只有这样，我们才能共同营造一个和谐、稳定、健康的互联网社区环境，谢谢


本来不想说的  就希望你们可以理解一下，生活没放过我 但是希望你们可以，不合符相关政策加速的是什么您自然知道
![image](https://github.com/54ayao/EdgeJSedSpeed/assets/86733666/d3de1bcf-47fb-4fb0-987b-19ade36eba6a)
http://www.nhc.gov.cn/yzygj/s7659/202105/3c18fec8a37d452b82fe93e2bcf3ec1e.shtml 附9
https://www.mayoclinic.org/diseases-conditions/neurofibromatosis/symptoms-causes/syc-20350490


## 什么是  EdgeJSedSpeed ？（基于某些考虑改名了）
EdgeJSedSpeed
本项目于 2021 年 12 月 21 上线 在此期间我们也在不断的测试和迭代 从最开始的直接镜像到服务器再到使用云函数等更新来提高成功率和速度 
最开始我们开始直接在CDN反向代理jsDelivr官方但是动不动链接失败 ，后来查询一下日志是被污染了 CDN在切换源站上浪费了时间，后来我们使用了腾讯云香港LH反向代理，但是，受限于30MBbs的宽带导致速度平平无奇，在后来尝试使用云函数加速，也问了一下jsDelivr没有完全被国内禁止使用 云函数镜像jsDelivr 不属于跨境访问
当然你“认为”我们镜像jsDelivr是为了窃取jsDelivr官方流量那没有使用的必要的哈 出发点都是错误了 你所有的请求都是毫无保留且不增加任何修改转发给jsDelivr 即使修改了首页 增加了广告其实也是对您使用不会产生本质上的影响，还是不明白的话，那么你可以选择自建或者是使用COS或者是OSS回源jsDelivr来进行加速



# 简介

EdgeJSedSpeed  是一个免费依托于国内CDN（内容交付网络）。以及云函数等产品对上游jsdelivr官方的资源进行更新及转发，我们与jsdelivr官方的Github和NPM还有WP都可以甚至是combine 紧密集成，也是希望大家可以给自己的网站能够自动静态文件/音视频文件获得一定的加速，当然我们使用的初衷是让所有开源项目提供可靠的CDN服务，但是也可以用于私有化场景，博客，论坛，等等，当然依托于国内大厂提供稳定的 CDN，可用于具有大量流量的流行网站上的生产。没有带宽限制或高级功能，任何人都可以完全免费使用，但是这个对于我们来说EdgeJSedSpeed在流量方面也是要做好预估的，但是EdgeJSedSpeed是一个不好说的一个项目，这里的突发流量还是比较多的，我们目前在云厂流量是600GB-700GB 一个月左右，为了产生不必要的回源请求，降低源的流量流出，我们会比jsdelivr官方缓存可能高达1倍左右。我们以后在这里也会开放出api来让用户来清理缓存,虽然说由于EdgeJSedSpeed不像jsDelivr是一个依托于jsDelivr赞助商支持的免费的CDN项目相反EdgeJSedSpeed我们所有流量都是我们来承担。，之前考虑过使用多家CDN进行拉平处理来平均进行流量调度以获得更好的性能，但它也使我们能够避免单个 CDN 过载。但是多家CDN可能面临一些问题 比如说 账单分散 缓存过多 对于云函数服务器压力过大，反而会产生更多的费用，或者说某个CDN欠费导致局部故障，这些我们都在想办法解决，
我们的主要费用包括就是CDN流量以及HTTPS请求费，如果有能力的用户可以选择赞助CDN以及Money 当然更好了，我们会在子页面公式内容以及去向 可以参考最下面的赞助，

我们境内使用了 <del>阿里</del>、腾讯、百度、华为、<del>网宿</del>、<del>金山</del>，<del>白山</del>，海外使用了cloudflare、CDNetWorks、Tencent Cloud 进行分发
划线的是系统目前暂时停止对其cdn节点停止调度




## 使用教程
参考下列首页   

境内站 https://jsd.cdn.zzko.cn/  
![image](https://github.com/54ayao/EdgeJSedSpeed/assets/86733666/41a36d00-0584-4d9e-9896-758d4b9c937f)


国际站 https://cdn.jsdelivr.us/  
![image](https://github.com/54ayao/EdgeJSedSpeed/assets/86733666/0d3ceee8-94b3-4415-97ca-fb9511e9a7d2)




# 使用规定
1.不能有违规

2.不得应用到违规网站，尤其是灰黑产业，不符合工信部或者当地国家规定的项目（

3.项目支持下载，但不能下载违反国家法律法规，你要用就悄咪咪的用，别通过这个链接分享，不该我真的栓Q， 国际站除外

4.未经许可不得再次反向代理该网站 或者反向代理我源站进行二次分发

5.github 项目在不违规的不做任何屏蔽的目的是为了更好的用户体验，麻烦你们不要把我搞得像jsd一样被污染一段时间

6.如果触发防火墙，代表你IP一分钟已经超过2000次，被防火墙的屏蔽被两个三小时之后再试，家庭用户可尝试重启路由器来获取新的IP。或者是保持正常访问。

7.未经允许严禁使用回源其包括但不限于香港，新加坡，台湾，东南亚，孟买，美国，等 jsd.cdn.zzko.cn 以及 cdn.jsdelivr.us 还有cdn.jsdelivr.ren 源站集群，

8.您需要理解我们基于合规性每个月不定期都会从cdn平台抽取日志进行抽查，因为大部分流量都不发送请求域名，我们参考加速项目URL地址来判断

9. 拥护党和政府的决策，不传播不实信息或者说未经证实的消息 ，禁止进行传播邪教，组织邪教等行为


## 平台管理员联系方式与问题反馈 

|QQ|企业微信|微信|github|邮箱|
|-------|----------|------------------------|----------|------|
|202835956|<img src="https://github.com/54ayao/EdgeJSedSpeed/assets/86733666/aa633562-1b3b-438e-868b-15c0b5a445bd" alt="企业微信" >|<img src="https://github.com/54ayao/EdgeJSedSpeed/assets/86733666/2086a990-bc94-42dc-9c9e-7791f63b2fa0" alt="微信">|[点这里](https://github.com/54ayao/EdgeJSedSpeed/issues) |ayao@cola.email|



首先确认报错
![image](https://github.com/54ayao/EdgeJSedSpeed/assets/86733666/698eecd4-92a7-4fa8-a5e6-04ec72271599)

![image](https://github.com/54ayao/EdgeJSedSpeed/assets/86733666/3806b7e2-a5d9-486b-8311-080db57f3f1b)

以及官方CDN下是否正常使用或者是出现报错 一般情形是我们转发官方头部 如果官方站也是这样需要自行去jsdelivr官方立issues 但是请替换成jsdelivr官方域名反馈 

范文
域名：google.com

节点IP:1.1.1.1

时间:2023年5月4日11:11 

用户省份：中国香港特别行政区

CDN: cloudflare

CDN访问参数（UUID）：abcd1234

是否测试 jsdelivr官方源站：是/jsdelivr官方源站无该报错

使用影响：
无法加载字体 显示cors跨越

## 赞助

https://www.zzko.cn/sponsor

## 小黑屋
CN站 https://jsd.cdn.zzko.cn/4.html
US站 https://cdn.jsdelivr.us/ban.html
