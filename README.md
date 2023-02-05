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

最近大量香港流量回国，产生较高延迟，近期尝试将部分流量灰度转移至 Azure 国际站的日本节点。

我们将持续优化中国境内外访问速度。

目前只使用了腾讯云。

在此声明，良好的运营环境离不开大家的共同努力，不做要求是为了让大家更好的体验，也不存在需要授权许可这一说法，想的是为了你们能更快的上线业务，只希望大家合理使用，遵守相关法律法规。

## 使用 DNS 的建议

### 境内

> 此外建议使用运营商默认的 DNS 可以细分到省

公共 DNS:腾讯云 阿里云 百度云 华为云

专业 DNS:腾讯云 阿里云

DoH DoQ DoT:腾讯云

不推荐 114

### 境外

公共 DNS: Google Cloudflare Microsoft Amazon

不建议使用:OpenDNS PS:动不动拦截镜像站说欺诈

境内用户使用境外 DNS 会被分到境外节点 可能影响使用体验
建议参考这里设置对您合适的 DNS 获取最佳体验

https://dnsdaquan.com/

## 一些请求头问题介绍

![请求头](https://image.zzko.cn/images/1/2022/10/09/16653261766342dc607dbe7.png)

> ayao: https://www.ayao.ltd

是我的个人主页 想让知道这个负责人的网站

> china-jsdelivr: The jsdelivr mirror station is a public CDN acceleration plan for . It has an effective ICP filing application permit issued by the Chinese government, use Tencent Cloud CDN or Microsoft Azure CDN or Baidu Cloud CDN or wangsu Cloud or jinshan Cloud CDN to provide domestic accelerated services I believe you can see this sentence. I hope you don't attack the website, personal website maintenance funds are limited The good Internet atmosphere is inseparable from everyones joint efforts.

大意：

> jsDelivr 镜像是的公共 CDN 加速计划。 它具有中国政府颁发的有效的 ICP 申请许可，使用腾讯云全球内容分发系统 或者世纪互联全球内容分发系统或者 网宿云全球内容分发系统或者金山云全球内容分发系统 or Microsoft Azure CDN 提供国内加速服务，我相信您可以看到这句话。 我希望您不要攻击网站，个人网站维护资金有限，良好的互联网氛围与每个人的共同努力都不分开。（Google 机翻）

是项目介绍 介绍了这个项目的具体原因。

> GitHub: https://github.com/54ayao/Chinajsdelivr/

项目地址

> static-resources: https://www.zzko.cn

是静态域名专属域名

> server: ayao</br>
> copyright: ayao

维护人标识

## 项目支持

### 我们使用的服务

<a href="https://cloud.tencent.com" id="Qcloud" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653262306342dc96dd067.png" width="200" height="55"></a>
<a href="https://cloud.tencent.com" id="Qcloud" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653275066342e1929d4fb.png" width="200" height="55"></a>
<a href="https://www.azure.com" id="Azure" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653263096342dce5c65e8.png">
<a href="https://www1.hi.cn" id="Azure" target="_blank"><img src="https://www1.hi.cn/img/logo.svg" width="80" height="50"></a>
<a href="https://cloud.baidu.com" id="baiduyun" target="_blank"><img src="https://img0.baidu.com/it/u=1257923269,2743772747&fm=253&fmt=auto&app=138&f=JPEG" width="150" height="70"></a>

### 特别鸣谢

<a href="https://cloud.tencent.com" id="Qcloud" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653262306342dc96dd067.png" width="200" height="55"></a>
<a href="https://www.azure.com" id="Azure" target="_blank"><img src="https://image.zzko.cn/images/1/2022/10/09/16653263096342dce5c65e8.png">
<a href="https://www1.hi.cn" id="Azure" target="_blank"><img src="https://www1.hi.cn/img/logo.svg" width="80" height="50"></a>
<a href="https://cloud.baidu.com" id="baiduyun" target="_blank"><img src="https://img0.baidu.com/it/u=1257923269,2743772747&fm=253&fmt=auto&app=138&f=JPEG" width="150" height="70"></a>

### 微信赞赏码

<img src="https://image.zzko.cn/images/1/2022/10/09/16653271146342e00ac2a46.png?wx" alt="1665327123523.png" title="1665327123523.png" />

### QQpay

202835956

### PayPal

还没想好用户名

### AliPay 支付宝

发送到:admin@eebbk.top

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
<td align="center">-</td>
</tr>

<tr>
<td align="center">2</td>
<td align="center">DCDN</td>
<td align="center">2021/12-长期</td>
<td align="center">源站</td>
<td align="center">-</td>
<td align="center">地址暂不公开</td>
</tr>

<tr>
<td align="center">3</td>
<td align="center"><a title="Azure" href="https://www.azure.com">Azure</a></td>
<td align="center">2022/10/25-2023/10/25</td>
<td align="center">vm/CDN</td>
<td align="center">-</td>
<td align="center">学生计划</td>
</tr>

<tr>
<td align="center">4</td>
<td align="center"><a title="百度云" href="https://cloud.baidu.com">百度智能云</a></td>
<td align="center">2022/12/04-2023/04/04</td>
<td align="center">香港轻量</td>
<td align="center">-</td>
<td align="center">-</td>
</tr>
</tbody>
</table></div></div>

### 优秀站点（每月更新一次）

<div class="md-typeset__scrollwrap"><div class="md-typeset__table"><table>
<thead>
<tr>
<th align="center">序号</th>
<th align="center">网站名/网站</th>
<th align="center">站长</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">1</td>
<td align="center"><a title="FatDong" href="https://md7.top">学技术，永不止步</a></td>
<td align="center">MrDeng</td>
</tr>

<tr>
<td align="center">2</td>
<td align="center"><a title="勿埋我心" href="https://www.skyqian.com/">勿埋我心</a></td>
<td align="center">勿埋我心</td>
</tr>

<tr>
<td align="center">3</td>
<td align="center"><a title="舒夏博客" href="https://blog.sxbai.com/">舒夏博客</a></td>
<td align="center">舒夏</td>
</tr>

<tr>
<td align="center">4</td>
<td align="center"><a title="LX Music" href="https://docs.lxmusic.folltoshe.com/">LX Music</a></td>
<td align="center">LX Music</td>
</tr>

<tr>
<td align="center">5</td>
<td align="center"><a title="正安在线" href="https://www.gzza.com/">正安在线</a></td>
<td align="center">正安在线</td>
</tr>

<tr>
<td align="center">6</td>
<td align="center"><a title="xaoxuu" href="https://xaoxuu.com/">xaoxuu</a></td>
<td align="center">xaoxuu</td>
</tr>

<tr>
<td align="center">7</td>
<td align="center"><a title="xpoet" href="https://picx.xpoet.cn/#/upload">picx</a></td>
<td align="center">xpoet</td>
</tr>

<tr>
<td align="center">8</td>
<td align="center"><a title="Ling Chen" href="https://biuling.top/">鸟酱的咖啡馆</a></td>
<td align="center">Ling Chen</td>
</tr>

<td align="center">9</td>
<td align="center"><a title="LX Music" href="https://www.rmoe.top/">柳铃</a></td>
<td align="center">柳铃</td>
</tr>

<tr>
<td align="center">10</td>
<td align="center"><a title="莫莫" href="https://blog.mocn.top/">莫莫</a></td>
<td align="center">莫莫</td>
</tr>

<tr>
<td align="center">11</td>
<td align="center"><a title="l0w1nd‘s" href="https://blog.itleaf.xyz/">fl0w1nd‘s blog</a></td>
<td align="center">fl0w1nd‘s</td>
</tr>

<tr>
<td align="center">12</td>
<td align="center"><a title="who" href="https://blog.crnmsl.ml">男人至死都是少年</a></td>
<td align="center">who</td>
</tr>

<tr>
<td align="center">13</td>
<td align="center"><a title="懒得勤快" href="https://masuit.com/">懒得勤快</a></td>
<td align="center">懒得勤快</td>
</tr>

<tr>
<td align="center">14</td>
<td align="center"><a title="14" href="https://klpbbs.com/">苦力怕MC论坛</a></td>
<td align="center">懒苦力怕BBS</td>
</tr>

<tr>
<td align="center">15</td>
<td align="center"><a title="15" href="https://masuit.com/">何孙涛の博客</a></td>
<td align="center">何孙涛</td>
</tr>

<tr>
<td align="center">16</td>
<td align="center"><a title=cayzlh" href="https://www.cayzlh.com">cayzlh博客</a></td>
<td align="center">cayzlh</td>
</tr>

<tr>
<td align="center">17</td>
<td align="center"><a title="17 " href="https://www.mcd7.top/">春夏之梦MC服务器</a></td>
<td align="center">春夏之梦工作室</td>
</tr>

<tr>
<td align="center">18</td>
<td align="center"><a title="blmcpia" href="https://www.blmcpia.com/">blmcpia MC论坛</a></td>
<td align="center">blmcpia</td>
</tr>

<tr>
<td align="center">19</td>
<td align="center"><a title="Liynw" href="https://blog.liynw.top/">Liynwの 博客儿</a></td>
<td align="center">liynw</td>
</tr>

<tr>
<td align="center">20</td>
<td align="center"><a title="akilar" href="https://akilar.top/">akilarの 博客</a></td>
<td align="center">akilar</td>
</tr>

<tr>
<td align="center">21</td>
<td align="center"><a title="akilar" href="https://trackerslist.com/#/zh">XIU2/TrackersListCollection</a></td>
<td align="center">TrackersListCollection</td>
</tr>

<tr>
<td align="center">22</td>
<td align="center"><a title="akilar" href="https://cqlkc.top/">cqlkc的博客</a></td>
<td align="center">cqlkC</td>
</tr>

<tr>
<td align="center">23</td>
<td align="center"><a title="akilar" href="https://www.j8.market/">J8.Market</a></td>
<td align="center">Mr.Deng</td>
</tr>

<tr>
<td align="center">24</td>
<td align="center"><a title="z的博客" href="https://blog.666top.top/">z的博客</a></td>
<td align="center">z</td>
</tr>
</tbody>
</table></div></div>

# 站长的话

不要去 CC 我 目前没有过多限制请求 （每秒单 ip 是 500QPS 一分钟 1000QPS 单 IP）超过 1000 拉黑呗，什么网站可以让用户每分钟超过 1000QPS 每分钟的请求？ 这个简单粗暴，但已缓存的资源不影响你，只是被系统暂时停止获取新的资源了，我也相信不会触碰到某些人利益吧。。。公益行为，本来就艰难... 我也希望灰黑产业的大佬别搞我把静态资源随便引用到自己违法违规站点！就相当于我为违法违规站提供服务，您搞违法的事情，就不要带上我了谢谢，大家都是中国人，中国人别为难中国人，谢谢，我不想成为下一个 jsDelivr！！！！CDN 侧会保存访问日志，但源站不保留任何人的访问日志！

最近发现了很多博主，使用或者是写文章 在这里感谢各个博主的认可与支持。

当然，可以把该项目应用在合法合规的网站，无需友情链接哦！

发现涉嫌灰黑产请发邮箱给我！

不受理大流量下载，长时间占用下载等等这些没事。我的政策已经够宽了。只求不要违规，我也在这里面强调了很多次。否则到头来和 GitHub 还有 jsDelivr 下场一样

我再强调一遍 禁止违规！！！

机场！！！我他妈说的就是你 别逼我我告诉你啊 好几个机场你用 nm 的国内加速 看不懂中文？ 还是说你不是中国人看不明白？ 你要是说自己不是中国人 麻烦交 250 退出一下中国国籍 你加入哪里我不管你，但是中国人看不懂中文我就要骂你了哈 第一次在 2023-02-01 要求整改完毕 但是没在 GitHub 更新 我希望在 2023-02-10 日完成整改

# 举报格式

### 主题:jsd 镜像站举报

### 收件人:202835956@qq.com

### 抄送: 54ayao@gmail.com,admin@eebbk.top,ayao@eebbk.top,940376430@qq.com

### 内容:

#### 举报网站（域名）

#### 举报页面（链接）

#### 贴图证据（F12 截图）

审核无误之后，将在两个工作日之内屏蔽该网站

如果网站没挂马的话，整改后解除，若一个域名违规超过三次不会在解除

by:ayao

home:https://www.ayao.ltd

blog:https://blog.ayao.ltd
