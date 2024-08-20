# 置顶公告  
  
1. **国际站域名变动**：请注意，因国际站域名调整，部分功能可能暂时受限，请关注后续官方通知以获取最新信息。  
2. **缓存清理服务**：如遇缓存未及时更新问题，请通过 `ayao@cola.email` 联系我们进行特殊缓存清理操作。  
3. **企微渠道更新**：当前暂不支持通过企业微信添加我们，敬请期待后续企微渠道开通的通知。  
  

# JSDMirror 镜像站基础介绍
## 概述
JSDMirror，作为一个基于 jsDelivr CDN 服务的国内镜像站点，自2021年12月21日正式上线以来，始终致力于为前端开发者打造一个快速、稳定的资源访问环境。随着前端技术的迅速演进，JavaScript 库、框架及工具等资源的使用愈发普遍，但国外源服务器的访问常受网络延迟与地理位置限制，影响效率。JSDMirror 通过在国内部署高效镜像服务器，有效克服了这一难题，极大地加速了国内开发者获取这些关键资源的速度。

## 项目历程
JSDMirror项目最初由54ayao（Eagle Yao）发起并运营维护，经过数轮精心的版本迭代与优化，项目现已顺利交接至大连市泽瑶网络科技有限公司进行管理，虽然运营主体发生了变化，但项目背后的核心人员与服务宗旨依然保持不变，持续为开发者提供优质服务。

# 主要特点
高速访问：JSDMirror 镜像站点部署在国内，通过优化网络路由和增加带宽资源，显著提升了国内用户访问 jsDelivr CDN 上资源的速度。
资源丰富：作为 jsDelivr 的镜像，JSDMirror 同步了 jsDelivr CDN 上的所有资源，包括流行的 JavaScript 库、框架、插件、CSS 框架等，几乎覆盖了前端开发所需的所有资源。
稳定可靠：JSDMirror 采用了先进的CDN技术和高可用性架构设计，确保在高并发访问下依然能够稳定运行，为开发者提供持续稳定的服务。
易于使用：开发者只需将 jsDelivr 的原始 CDN 链接中的域名部分替换为 JSDMirror 的域名，即可享受高速访问服务，无需额外配置或注册。
使用方法
修改 CDN 链接
对于需要通过 CDN 引入的 JavaScript 库或 CSS 框架，开发者只需将 jsDelivr 提供的 CDN 链接中的 cdn.jsdelivr.net 替换为 cdn.jsdmirror.com 或其他 JSDMirror 提供的域名即可。例如：

原始 jsDelivr CDN 链接：


```<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>```

修改为 JSDMirror 镜像链接：


```<script src="https://cdn.jsdmirror.com/npm/vue@2.6.14/dist/vue.js"></script>```


## 核心功能亮点  
  
- **极速镜像网络**：依托腾讯云香港回源服务器集群，确保数据高速传输。  
- **全球融合 CDN**：整合白山、腾讯云及Cloudflare等国内外顶尖CDN资源，实现全球无缝覆盖。  
- **零成本加速**：简单替换 jsdelivr 官方域名为 jsdmirror 域名，即可享受免费CDN服务。  
- **高可用性架构**：多节点冗余部署与负载均衡技术，保障服务持续稳定运行。  
- **智能故障恢复**：实时监控与自动故障切换机制，确保服务无中断。  
- **数据安全同步**：跨地域数据备份与实时同步，保障数据安全无忧。  
- **灵活配置**：支持用户自定义CDN加速策略，满足不同场景需求。  
- **全面监控**：提供详尽的实时监控报表，助力用户轻松掌握服务状态。  
- **安全保障**：采用多重加密与严格安全策略，全方位保护用户数据安全。  
  
## 应用场景  
  
- **加速开源项目**：显著提升开源代码库、框架及工具的下载速度与稳定性。  
- **优化网站体验**：助力网站实现快速加载，提升用户访问体验。  
- **高效内容分发**：为内容创作者提供强有力的内容分发支持，扩大受众范围。


## 赞助商ADS
### JSDMirror的发展离不开以下供应商赞助的云产品 
|赞助商|类型|时间|备注|
|-------|------|---------------|--------------|
|<a href="https://Cloud.Tencent.com/?jsdmirror"><img src="https://cdn.jsdmirror.com/static/img/serve/tencent-cloud.svg" alt="腾讯云" style="height: 30px;"></a>|域名<br>域名<br>境外服务器|2024-04-17到2027-04-17<br>2024-04-17到2025-04-17<br>2024-06-20到2025-02-20|jsdmirror.com<br>jsdmirror.cn<br>轻量应用服务器*3|
|<a href="https://www.cloudflare.com/?jsdmirror"><img src="https://cdn.jsdmirror.com//static/img/serve/cloudflare.png" alt="cf" style="height: 30px;"></a>|CDN|-|境外CDN|

