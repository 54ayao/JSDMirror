
# 项目介绍
## 前言
#### jsdelivr 项目是2021年12月20日下午因为一些原因jsdelivr已经失去了国内的IPC备案那么导致了 网宿关闭了jsdelivr的 的国内加速 然后切换了 Fastly 在jsDelivr被吊销ICP许可证四个月后的4月28日开始被DNS污染，导致国内访问解析更加困难，现在jsdelivr的情况好不少，但是没有国内节点还是有点慢....

## jsdelivr国内测试
www.itgog.cn  测试

<img src="https://image.zzko.cn/images/1/2022/10/17/1666015238634d6006005c2.png" alt="1666015234788.png" title="1666015234788.png" />

效果非常不理想 

单ip测试

<img src="https://image.zzko.cn/images/1/2022/10/17/1666015315634d6053e22f7.png" alt="1666015312225.png" title="1666015312225.png" />

自选的时候测试

<img src="https://image.zzko.cn/images/1/2022/10/17/1666015195634d5fdb7cfa6.png" alt="1666015193365.png" title="1666015193365.png" /> 

情况也是如此

我的源都在海外所以是只要他可以链接的上就可以 某一些jsdelivr节点挂了也没啥问题 我们有智能的流量调度系统会进行健康检查 会主动临时屏蔽有些ip出现的50x 错误 无法访问 等非正常状态码
那么为什么还有优化？
答案很简单 Fastly 节点越多，对于我的源站来说 可以用的结果也大 更加可以分段回源



### 项目概述
在2021年12月21晚上上线的 jsd.eagleyao.com Version 1.0 使用了三台香港LH配合加速

一直到 2022-09-26新域名备案下来切换  jsd.cdn.zzko.cn  Version 1.0  使用了三台香港LH加1孟买配合加速

一直到 2022-09-26上午  Version 2.0  直接使用fastly回源导致http2 经过是源站拒绝连接fastly的回国相关不好

<img src="https://image.zzko.cn/images/1/2022/10/09/16653260106342dbbab13a9.png" alt="1665326012497.png" title="1665326012497.png" />
比如说
https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/
直接改成
https://jsd.cdn.zzko.cn/npm/font-awesome@4.7.0/

换域名主要是com年年涨价，也受到美元汇率影响导致注册商涨价 也想短点好


2022年09月26日下午使用Version 3.0加速 使用 SNI +hosts 方式加速 (已实现) 2022 年 10 月 6 日 目前全面升级完成 哈哈 使用了腾讯云香港 32 个 ip 以后会更多的 所有域名都所有了这个配置，欢迎大家来使用
2022年10月10日下午 使用Version 3.5加速  优化海外  平均速度 0.269秒内打开 考虑到世纪互联的CDN不支持ipv6那么只有腾讯云开ipv6 那么就会导致纯ipv6的用户无法正常访问，目前下架ipv6的访问，

2022年10月17日 发现cdn.jsdelivr.net 保留了cloudflare导致无法正常回源 现已移除 筛选了 美国，巴西，日本，香港，Anycast的fastly节点 全部都是HTTP2 协议 一共30个fastly节点 速度提升了一点点，但不多，主要是为了海外的稳定性cloudflare在不支持我的这个代理方式加速，可能导致502错误，这个是缺少请求头导致的fastly不会强行验证 也就更新到 Version 4.0加速
自选fastly
<img src="https://image.zzko.cn/images/1/2022/10/17/1666014139634d5bbb8287a.png" alt="1666014135652.png" title="1666014135652.png" />

CDN侧设置
<img src="https://image.zzko.cn/images/1/2022/10/17/1666014350634d5c8ead678.png" alt="1666014348071.png" title="1666014348071.png" />

加速架构
用户--CDN---我源站---Fastly
   
   CDN后发送的域名一律是cdn.jsdelivr.net 世纪互联的融合CDN也是这个策略配置

不要闲着去攻击不然我真的会栓 Q 的 还有好几个是 30Mpbs 的服务器 宽带太小没有加 这些都是在 100Mpbs 以上的的 IP。。。。

www.itdog.cn  测试情况

有缓存的情况下

<img src="https://image.zzko.cn/images/1/2022/10/09/16653260606342dbec8e69e.png" alt="1665326059211.png" title="1665326059211.png" />

关闭缓存的情况下

<img src="https://image.zzko.cn/images/1/2022/10/09/16653260926342dc0ccde32.png" alt="1665326091621.png" title="1665326091621.png" />

整体来说性能无差异，但是考虑到正常情况下还是增加了一定缓存 还得到了极大提升



请勿攻击刷取镜像站
我们由防火墙AI策略综合源站异常响应情况和网站历史访问数据，智能决策生成防御策略，实时拦截高频访问请求， 恶意刷取可能导致您被防火墙封禁一定时间



一些请求头问题介绍

<img src="https://image.zzko.cn/images/1/2022/10/09/16653261766342dc607dbe7.png" alt="1665326175535.png" title="1665326175535.png" />

在请求头中

ayao: https://www.ayao.ltd

是我的个人主页 想让知道这个负责人的网站 

china-jsdelivr: The jsdelivr mirror station is a public CDN acceleration plan for . It has an effective ICP filing application permit issued by the Chinese government, use Tencent Cloud CDN or (Microsoft Azure CDN)to provide domestic accelerated services  I believe you can see this sentence. I hope you don't attack the website, personal website maintenance funds are limited The good Internet atmosphere is inseparable from everyones joint efforts.

大体意思就是说
jsdelivr镜像是的公共CDN加速计划。 它具有中国政府颁发的有效的ICP申请许可，使用Tencent Cloud CDN or(Microsoft Azure CDN)提供国内加速服务，我相信您可以看到这句话。 我希望您不要攻击网站，个人网站维护资金有限，良好的互联网氛围与每个人的共同努力都不分开。

（google机翻）




是项目介绍 介绍了这个项目的具体原因。

contact: admin@eebbk.top

是管理员邮箱 任何问题可以发邮件。

static-resources: https://www.zzko.cn

是静态域名专属域名

server: ayao

copyright: ayao

维护人标示

<img src="https://image.zzko.cn/images/1/2022/10/09/16653262046342dc7c1034f.png" alt="1665326203448.png" title="1665326203448.png" />

速度测试
还是不错的


不要去CC我 目前没有过多限制请求 每秒单ip是500Qps 我也相信不会触碰到某些人利益吧。。。公益行为 我也希望灰黑产业的大佬别搞我把静态资源随便引用到自己违法违规站点！，就相当于我为违法违规站提供服务，您搞违法的事情，就不要带上我了谢谢，大家都是中国人，中国人别为难中国人，谢谢


## 项目支持
### 我们使用的服务
<a href="https://cloud.tencent.com" id="Qcloud" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653262306342dc96dd067.png" width="200" height="55"></a>
<a href="https://cloud.tencent.com" id="Qcloud" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653275066342e1929d4fb.png" width="200" height="55"></a>
<a href="https://www.azure.cn" id="azure" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653263096342dce5c65e8.png">
<a href="https://www.azure.cn" id="azure" target="_blank"><img src="https://www.vnet.com/home/images/logo.png"></a>
<a href="https://www1.hi.cn" id="azure" target="_blank"><img src="https://www1.hi.cn/img/logo.svg" width="80" height="50"></a>
### 特别鸣谢
  
<a href="https://cloud.tencent.com" id="Qcloud" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653262306342dc96dd067.png" width="200" height="55"></a>
<a href="https://www.xgzwlkjltd.com/" id="xgzwlkjltd" target="_blank"><img src="https://user-images.githubusercontent.com/86733666/194762270-887fc7e3-db41-40d7-b13c-46dde45534ec.png"></a>
<a href="https://www.azure.cn" id="azure" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653263096342dce5c65e8.png">
<a href="https://www1.hi.cn" id="azure" target="_blank"><img src="https://www1.hi.cn/img/logo.svg" width="80" height="50"></a>

### 微信赞赏码
  
<img src="https://image.zzko.cn/images/1/2022/10/09/16653271146342e00ac2a46.png" alt="1665327123523.png" title="1665327123523.png" />

  ### 赞助列表（每周更新一次）
  
<div class="md-typeset__scrollwrap"><div class="md-typeset__table"><table>
<thead>
<tr>
<th align="center">序号</th>
<th align="center">昵称/网站</th>
<th align="center">日期</th>
<th align="center">捐赠方式</th>
<th align="center">金额</th>
  <th align="center">留言/备注</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">1</td>
<td align="center"><a title="腾讯云" href="https://qcloud.com">腾讯云</a></td>
<td align="center">2021/12-长期</td>
<td align="center">源站和CDN</td>
<td align="center">-</td>
  <td align="center">腾讯云 - 产业智变 云启未来</td>
</tr>
<tr>
<td align="center">2</td>
<td align="center"><a title="小桂子" href="https://www.xgzwlkjltd.com/">合肥市小桂子网络科技有限公司</a></td>
<td align="center">2022/10-09-长期</td>
<td align="center">CDN</td>
<td align="center">-</td>
  <td align="center">小桂子</td>
</tr>
  <tr>
<td align="center">3</td>
<td align="center"><a title="世纪互联" href="https://www.azure.cn">世纪互联</a></td>
<td align="center">2022/10-09-长期</td>
<td align="center">CDN</td>
<td align="center">-</td>
  <td align="center">Azure 云计算–安全可信的智能云服务平台</td>
</tr>
</tbody>
</table></div></div>

  
  

