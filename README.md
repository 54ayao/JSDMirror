# 项目介绍
## 前言
#### jsdelivr 项目是2021年12月20日下午因为一些原因jsdelivr已经失去了国内的IPC备案那么导致了 网宿关闭了jsdelivr的 的国内加速 然后切换了 Fastly 在jsDelivr被吊销ICP许可证四个月后的4月28日开始被DNS污染，导致国内访问解析更加困难，现在jsdelivr的情况好不少，但是没有国内节点还是有点慢....
### 项目概述
在2021年12月21晚上上线的 jsd.eagleyao.com Version 1.0 使用了三台香港LH配合加速

一直到 2022-09-26 jsd.cdn.zzko.cn 新域名备案下来 Version 2.0  使用了三台香港LH加1孟买配合加速

由于访问cdn.jsdelivr.net会301跳www.jsdelivr.com 同理jsd.cdn.zzko.cn也会301跳www.jsdelivr.com  我设置了访问301转200了 cdn源在用户这边不进行跳转直接进行展示 也就是伪200 
<img src="https://image.zzko.cn/images/1/2022/10/09/16653260106342dbbab13a9.png" alt="1665326012497.png" title="1665326012497.png" />
比如说
https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/
直接改成
https://jsd.cdn.zzko.cn/npm/font-awesome@4.7.0/

换域名主要是com年年涨价，也受到美元汇率影响导致注册商涨价 也想短点好


目前使用Version 3.5加速 使用 SNI +hosts 方式加速 (已实现) 2022 年 10 月 6 日 目前全面升级完成 哈哈 使用了腾讯云香港 32 个 ip 以后会更多的 所有域名都所有了这个配置，欢迎大家来使用
2022/10/10 优化海外  平均速度 0.269秒内打开 考虑到世纪互联的CDN不支持ipv6那么只有腾讯云开ipv6 那么就会导致纯ipv6的用户无法正常访问，目前下架ipv6的访问 如果可以大佬可以爬下来ip设置好合理的线路给我 我用的DNSPod企业版的CNAME （




不要闲着去攻击源 不然我真的会栓 Q 的 还有好几个是 30Mpbs 的服务器 宽带太小没有加 这些都是在 100Mpbs 以上的的 IP。。。。后期可能加上）

www.itdog.cn  测试情况

有缓存的情况下

<img src="https://image.zzko.cn/images/1/2022/10/09/16653260606342dbec8e69e.png" alt="1665326059211.png" title="1665326059211.png" />

关闭缓存的情况下

<img src="https://image.zzko.cn/images/1/2022/10/09/16653260926342dc0ccde32.png" alt="1665326091621.png" title="1665326091621.png" />

整体来说性能无差异，但是考虑到正常情况下还是增加了一定缓存

就目前来说，DNS分配和用户有较远物理差距，排期优化中

官方给我展示的被攻击日志 

<img src="https://image.zzko.cn/images/1/2022/10/09/16653261236342dc2b2c306.png" alt="1665326120396.png" title="1665326120396.png" />

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
  
### 加速节点赞助
  
<a href="https://cloud.tencent.com" id="Qcloud" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653262306342dc96dd067.png" width="200" height="55"></a>
<a href="https://www.xgzwlkjltd.com/" id="xgzwlkjltd" target="_blank"><img src="https://user-images.githubusercontent.com/86733666/194762270-887fc7e3-db41-40d7-b13c-46dde45534ec.png"></a>
<a href="https://www.azure.cn" id="azure" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653263096342dce5c65e8.png">
<a href="https://www.azure.cn" id="azure" target="_blank"><img src="https://www.vnet.com/home/images/logo.png"></a>

### 微信赞赏码
  
<img src="https://image.zzko.cn/images/1/2022/10/09/16653271146342e00ac2a46.png" alt="1665327123523.png" title="1665327123523.png" />
支付宝考虑到某些情况下使用特定银行卡泄露账号实名认证情况 暂不考虑 等待实名企业账户在商家 
  
  PS：为了让项目长期运行 可以选择赞助哦(((((非常感谢  在备注写下你的 昵称   网站（不需要写http/https协议，但是如果使用非标端口要注明）   备注  不填写昵称 则默认微信昵称 

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
<td align="center">腾讯云</td>
<td align="center">2021/12-长期</td>
<td align="center">源站和CDN</td>
<td align="center">-</td>
  <td align="center">无</td>
</tr>
<tr>
<td align="center">2</td>
<td align="center">合肥市小桂子网络科技有限公司</td>
<td align="center">2022/10-09-长期</td>
<td align="center">CDN</td>
<td align="center">-</td>
  <td align="center">无</td>
</tr>
  <tr>
<td align="center">3</td>
<td align="center">Azure国内 世纪互联</td>
<td align="center">2022/10-09-长期</td>
<td align="center">CDN</td>
<td align="center">-</td>
  <td align="center">无</td>
</tr>
</tbody>
</table></div></div>

  
  

