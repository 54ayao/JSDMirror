# 置顶公告  
  
1. **国际站域名变动**：请注意，因国际站域名调整，请关注后续官方通知以获取最新信息。  
2. **缓存清理服务**：如遇缓存未及时更新问题，请通过 `ayao@cola.email` 联系我们进行特殊缓存清理操作。  
3. **企微渠道更新**：当前暂不支持添加我们的企业微信，敬请期待后续企微渠道开通的通知。  
4. **关于封禁系统**：审核不通过可以尝试使用腾讯云万象CI识别内容是否违规，（包括OCR识别） 如果你认为不是违规却出现了 451状态 可以联系管理员或者是腾讯云客服处理，管理员不定期复查（1页100张可能看的不仔细，有时候没有放放出来就批量导入拦截系统）  
5. **海外暂时不支持清理缓存**：海外由于暂时没有开发清理缓存API，基于平台运营情况考虑，设置节点缓存2小时，浏览器缓存12小时，可在你在上游更新完之后等待两小时缓存过期，如果着急的话联系管理员手动清理
6. **关于永久封禁问题**  考虑了一晚上，有时候错误拦截比较多，不能一直保持错误封禁，，小问题和大问题的封禁时长又不能一样，嗯，综合考虑了一下，决定解封一批用户，后续等待[ 解封的地址 ](https://blog.jsdmirror.com/20.html)发布相关通告以及名单
7. **维护计划**  平台近期有以下维护通知

7.1. 在北京时间 9月1日 14:00-20:00左右维护相关页面 影响域名为cdn.jsdmirror.com  cdn.jsdmirror.cn  下的以下功能进行停机维护

 1.在平台上没有加速过的图片将暂停加速，已加速的不影响

 2.dir页面将显示 299，不影响带后缀文件，不影响非/结尾的地址

 3.审核系统将采用动态域名，防止使用审核域名加速图片将无法完成回调导致的无法封禁的问题


 维护时间30-60分钟左右（修改逻辑）

7.1.1 https://www.jsdmirror.com/package/npm/1 相关的package 页面维护 去处底部 和顶部 需要点时间写代码 和同步黑名单系统
预计维护时间15天，可能出现断断续续的访问情况

## 概述
JSDMirror，作为一个基于 jsDelivr CDN 服务的国内镜像站点，自2021年12月21日正式上线以来，始终致力于为前端开发者打造一个快速、稳定的资源访问环境。随着前端技术的迅速演进，JavaScript 库、框架及工具等资源的使用愈发普遍，但国外源服务器的访问常受网络延迟与地理位置限制，影响效率。JSDMirror 通过在中国大陆周边部署高效优化线路节点保证回源和CDN回源的可用性，在使用境内CDN，有效克服了这一难题，极大地加速了国内开发者获取这些关键资源的速度。

## 项目历程
JSDMirror项目最初由54ayao（Eagle Yao）发起并运营维护，经过数轮精心的版本迭代与优化，项目现已顺利交接至大连市泽瑶网络科技有限公司进行管理，虽然运营主体发生了变化，但项目背后的核心人员与服务宗旨依然保持不变，持续为开发者提供优质服务。

# 主要特点
高速访问：JSDMirror 镜像站点部署在国内，通过优化网络路由和增加带宽资源，显著提升了国内用户访问 jsDelivr CDN 上资源的速度。
资源丰富：作为 jsDelivr 的镜像，JSDMirror 同步了 jsDelivr CDN 上的所有资源，包括流行的 JavaScript 库、框架、插件、CSS 框架，以及/npm/ /gh/ /wp/等主流目录，几乎覆盖了前端开发所需的所有资源。
稳定可靠：JSDMirror 采用了先进的CDN技术和高可用性架构设计，确保在高并发访问下依然能够稳定运行，为开发者提供持续稳定的服务。
易于使用：开发者只需将 jsDelivr 的原始 CDN 链接中的域名部分替换为 JSDMirror 的域名，即可享受高速访问服务，无需额外配置或注册。
使用方法
修改 CDN 链接
对于需要通过 CDN 引入的 JavaScript 库或 CSS 框架，开发者只需将 jsDelivr 提供的 CDN 链接中的 cdn.jsdelivr.net 替换为 cdn.jsdmirror.com 或其他 JSDMirror 提供的域名即可。例如：

原始 jsDelivr CDN 链接：


```<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>```

修改为 JSDMirror 镜像链接：


```<script src="https://cdn.jsdmirror.com/npm/vue@2.6.14/dist/vue.js"></script>```

之外我们强烈建议你开启[SRI功能](https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity)

上面为了简化代码没有加入SRI相关参数相关内容请往下面看

              
## 核心功能亮点  
  
- **极速镜像网络**：依托腾讯云香港回源服务器集群，确保数据高速传输。  
- **全球融合 CDN**：整合白山、腾讯云、泽瑶融合/边缘加速CDN 及Cloudflare等国内外顶尖CDN资源，实现全球无缝覆盖。  
- **零成本加速**：简单替换 jsdelivr 官方域名为 jsdmirror 域名，即可享受免费CDN服务。  
- **高可用性架构**：多节点冗余部署与负载均衡技术，保障服务持续稳定运行。  
- **智能故障恢复**：实时监控与自动故障切换机制，确保服务无中断。  
- **数据安全同步**：跨地域数据备份与实时同步，保障数据安全无忧。  
- **灵活配置**：支持用户自定义CDN加速策略，满足不同场景需求。  
- **全面监控**：提供详尽的实时监控报表，助力用户轻松掌握服务状态。  
- **安全保障**：采用多重加密与严格安全策略，全方位保护用户数据安全。
- **实时同步**：JSDMirror 与 jsDelivr 官方站点实时同步，确保您获取到的库文件是最新的。
- **兼容性**：JSDMirror 支持多种文件格式，如 npm、maven、wordpress 等，满足各种开发需求。
- **开源加速CCDN**：JSDMirror 开源加速代码 让你用的放心 查看 conf文件
  
  
## 应用场景  
  
- **加速开源项目**：显著提升开源代码库、框架及工具的下载速度与稳定性。  
- **优化网站体验**：助力网站实现快速加载，提升用户访问体验。  
- **高效内容分发**：为内容创作者提供强有力的内容分发支持，扩大受众范围。


## 子资源完整性
子资源完整性（Subresource Integrity，SRI）是允许浏览器检查其获得的资源（例如从 CDN 获得的）是否被篡改的一项安全特性。它通过验证获取文件的哈希值是否和你提供的哈希值一样来判断资源是否被篡改，但是也有缺点比如CDN缓存文件版本不一致、文件更新等等，导致文件的哈希值不一样导致浏览器无法加载，需要清理缓存后等待5分钟4，重新获取新的SRI更新到网站里面。

备注：对于从嵌入文件以外的来源提供的资源的子资源完整性验证，浏览器还使用跨源资源共享（CORS）检查资源，以确保提供资源的来源允许它与请求来源共享。


浏览器如何处理 SRI
浏览器根据以下步骤处理 SRI：

当浏览器在 <script> 或者 <link> 标签中遇到 integrity 属性之后，会在执行脚本或者应用样式表之前对比所加载文件的哈希值和期望的哈希值。 对于从其他来源提供的资源的子资源完整性验证，浏览器还使用跨源资源共享（CORS）检查资源，以确保提供资源的来源允许它与请求来源共享。
如果脚本或样式表不符合其相关的 integrity 值，浏览器必须拒绝执行该脚本或拒绝应用该样式表，并且必须返回一个网络错误，表明该脚本或样式表的获取失败。

## SRI 如何工作
使用内容分发网络（CDN）在多个站点之间共享脚本和样式表等文件可以提高站点性能并节省带宽。然而，使用 CDN 也存在风险，如果攻击者获得对 CDN 的控制权，则可以将任意恶意内容注入到 CDN 上的文件中（或完全替换掉文件），因此可能潜在地攻击所有从该 CDN 获取文件的站点。

子资源完整性使你能够减轻这种攻击的一些风险，确保你的网络应用程序或网络文档（从 CDN 或任何地方）获取的文件在交付时没有被第三方注入任何额外的内容，也没有对这些文件进行任何其他形式的修改。
SRI 如何使用
使用子资源完整性功能的方法是，在任何 <script> 或 <link> 元素的 integrity 属性值中，指定你要告诉浏览器所获取的资源（或文件）的 base64 编码的加密哈希值。

integrity 值至少由一个字符串开始，每个字符串包括一个前缀，表示一个特定的哈希算法（目前允许的前缀是 sha256、sha384 和 sha512），后面是一个短横线（-），最后是实际的 base64 编码的哈希。

备注： integrity 值可以包含多个由空格分隔的哈希值，只要文件匹配其中任意一个哈希值，就可以通过校验并加载该资源。

使用 base64 编码 sha384 算法计算出摘要后的 integrity 值的示例：

sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC 即“哈希”部分，sha384 前缀说明使用的是 sha384 哈希方法。

备注：严格来说，integrity 值的“哈希”部分是通过对一些输入（例如，一个脚本或样式表文件）应用一个特定的哈希函数而形成的加密摘要。但人们通常用“哈希”来表示加密摘要，所以本文就用了这个词。

生成 SRI 哈希的工具
[SRI Hash Generator](https://srihash.jsdmirror.com/) 是一个在线生成 SRI 哈希值的工具。

也可以用 openssl 在命令行中执行如下命令来生成 SRI 哈希值：

```cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A```

或者用 shasum 在命令行中执行：

```shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64```
备注：

通过管道连接的 xxd 步骤从 shasum 中获取十六进制的输出，并将其转换为二进制。
通过管道连接的 awk 的步骤是必要的，因为 shasum 会将其输出中的散列文件名传递给 xxd。如果文件名中恰好有有效的十六进制字符，这将产生灾难性的后果——因为 xxd 也会对其进行解码并传递给 base64。
在 Windows 环境下，你可以使用以下代码创建生成 SRI 哈希的工具：

```
@echo off
set bits=384
openssl dgst -sha%bits% -binary %1% | openssl base64 -A > tmp
set /p a= < tmp
del tmp
echo sha%bits%-%a%
pause
```
如何使用这些代码：

在你的环境中的 Windows SendTo 文件夹（例如， C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo）中，将该代码保存在一个名为 sri-hash.bat 的文件中。
在文件资源管理器中右击一个文件，选择发送至...，然后选择 sri-hash。你将在一个命令框中看到完整性值。
选择完整性值，然后右键单击，将其复制到剪贴板上。
按任意键都可以关闭命令框。
跨源资源共享和子资源完整性
对于从嵌入文档以外的来源提供的资源的子资源完整性验证，浏览器还使用跨源资源共享（CORS）检查资源，以确保提供资源的来源允许它与请求来源共享。因此，资源必须使用 Access-Control-Allow-Origin 标头来提供，以允许资源与请求方共享；例如：


```Access-Control-Allow-Origin: *```

示例
在这个例子中，我们假设已知 t1tHLsbM7bYMJCXlhr0//00jSs7ZhsAhxgm191xFsyzvieTMCbUWKMhFg9I6ci8q 是一个指定文件 vue.js 经过 SHA-384 算法得出的摘要，同时在 https://cdn.jsdmirror.com/npm/vue@2.6.14/dist/vue.js 上有其一份拷贝。

在 <script> 元素中确保 SRI
你可以使用以下的 <script> 元素告诉浏览器在执行 https://cdn.jsdmirror.com/npm/vue@2.6.14/dist/vue.js 中的内容之前，必须先比较该文件的哈希值是否和预期的一致，并验证是否匹配。


```<script src="https://cdn.jsdmirror.com/npm/vue@2.6.14/dist/vue.js" integrity="sha384-t1tHLsbM7bYMJCXlhr0//00jSs7ZhsAhxgm191xFsyzvieTMCbUWKMhFg9I6ci8q" crossorigin="anonymous"></script>```

## 浏览器如何处理 SRI
浏览器根据以下步骤处理 SRI：

当浏览器在 <script> 或者 <link> 标签中遇到 integrity 属性之后，会在执行脚本或者应用样式表之前对比所加载文件的哈希值和期望的哈希值。 对于从其他来源提供的资源的子资源完整性验证，浏览器还使用跨源资源共享（CORS）检查资源，以确保提供资源的来源允许它与请求来源共享。
如果脚本或样式表不符合其相关的 integrity 值，浏览器必须拒绝执行该脚本或拒绝应用该样式表，并且必须返回一个网络错误，表明该脚本或样式表的获取失败。

## SRI支持的浏览器
<figure class="table-container">
<figure class="table-container-inner">
<table class="bc-tablebc-table-web">
<thead>
<tr class="bc-platforms">
<td></td>
<th class="bc-platformbc-platform-desktop"colspan="5"title="desktop">Desktop</th>
<th class="bc-platformbc-platform-mobile"colspan="6"title="mobile">Mobile</th>
</tr>
<trclass="bc-browsers">
<td></td>
<th class="bc-browserbc-browser-chrome">Chrome</th>
<th class="bc-browserbc-browser-edge">Edge</th>
<th class="bc-browserbc-browser-firefox">Firefox</th>
<th class="bc-browserbc-browser-opera">Opera</th>
<th class="bc-browserbc-browser-safari">Safari</th>
<th class="bc-browserbc-browser-chrome_android">Chrome Android</th>
<th class="bc-browserbc-browser-firefox_android">Firefox Android</th>
<th class="bc-browserbc-browser-opera_android">Opera Android</th>
<th class="bc-browserbc-browser-safari_ios">Safari iOS</th>
<th class="bc-browserbc-browser-samsunginternet_android">Samsung Internet</th>
<th class="bc-browserbc-browser-webview_android">WebView Android</th>
</tr>
</thead>
<tbody>
<tr>
<th class="bc-featurebc-feature-depth-0"scope="row">integrity</th>
<td class="bc-supportbc-browser-chromebc-supports-yes">Yes<br>45</td>
<td class="bc-supportbc-browser-edgebc-supports-yes">Yes<br>17</td>
<td class="bc-supportbc-browser-firefoxbc-supports-yes">Yes<br>43</td>
<td class="bc-supportbc-browser-operabc-supports-yes">Yes<br>32</td>
<td class="bc-supportbc-browser-safaribc-supports-yes">Yes<br>11.1</td>
<td class="bc-supportbc-browser-chrome_androidbc-supports-yes">Yes<br>45</td>
<td class="bc-supportbc-browser-firefox_androidbc-supports-yes">Yes<br>43</td>
<td class="bc-supportbc-browser-opera_androidbc-supports-yes">Yes<br>32</td>
<td class="bc-supportbc-browser-safari_iosbc-supports-yes">Yes<br>11.3</td>
<td class="bc-supportbc-browser-samsunginternet_androidbc-supports-yes">Yes<br>5.0</td>
<td class="bc-supportbc-browser-webview_androidbc-supports-yes">Yes<br>45</td>
</tr>
</tbody>
</table>
</figure>
</figure>



## 遵守平台或者有关部门规定

应有关部门要求，作为本平台的用户，请各位用户严格遵守以下平台相关规定，以维护平台的安全、健康与秩序：
根据中华人民共和国工业和信息化部、公安部等部委关于加强在公共信息服务中传播信息管理的有关规定和相关精神，以及《中华人民共和国电信条例》、《中华人民共和国计算机信息网络国际联网管理暂行规定》、《互联网信息服务管理办法》、《计算机信息网络国际联网安全保护管理办法》、《中华人民共和国网络安全法》以及国家有关法律、法令、法规，不得从事任何违法经营活动，负责自身的网络信息安全，您需要有能力承担您所传播后的信息引发的任何安全、责任、后果，请按照以下规定使用本服务

一、遵守国家法律法规

不得利用镜像站平台从事危害国家安全、泄露国家秘密的活动。

不得利用镜像站侵犯国家的、社会的、集体的利益和第三方的合法权益。

不得利用镜像站从事违法犯罪活动，不参与妨碍社会治安的行为。

二、维护网络健康环境

不得利用镜像站发布煽动抗拒、破坏宪法和法律、行政法规实施的内容。

不得利用镜像站发表颠覆国家主权、推翻社会主义制度的言论。

不得利用镜像站传播分裂国家、破坏国家统一的信息。

不得利用镜像站制造或传播民族仇恨、民族歧视的内容，维护民族团结。

不得利用镜像站捏造或歪曲事实，不散布谣言，扰乱社会秩序。

不得利用镜像站传播封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖犯罪等内容的传播。

不得利用镜像站公然侮辱他人，不捏造事实诽谤他人。

不得利用镜像站损害国家机关信誉，不传播不实信息引发社会恐慌。

三、拒绝色情低俗内容

不得利用镜像站发布或传播任何表现或隐晦表现性行为、具有挑逗性或污辱性的内容。

不得利用镜像站传播直接或间接暴露或描写人体性部位。

不得利用镜像站描述性行为、性过程、性方式，不使用带有性暗示、性挑逗的语言或图片。

不得利用镜像站发布侵犯个人隐私的偷拍、走光等内容。

不得利用镜像站传播色情低俗小说、音视频及不正当交友信息。

四、保护计算机信息网络安全

不得利用镜像站未经允许进入或传播计算机信息网络或使用计算机信息网络资源。

不得利用镜像站对计算机信息网络功能进行非法删除、修改或增加。

不得利用镜像站对计算机信息网络中存储、处理或传输的数据和应用程序进行非法操作。

不得利用镜像站制作、传播计算机病毒等破坏性程序。

五、承诺与责任

用户承诺，在平台上发布的所有信息均经过自我审查，确保所加速的内容没有涉黄或非法信息，不传播非法性用品的广告图片和介绍信息不传播危害青少年身心健康和违背社会公德低俗的消息，以及上述的平台要求不得利用镜像站传输的一切资源，确保符合上述规定及平台要求。

如有违反上述规定的行为，用户愿意接受平台依据相关规定采取的处理措施，包括但不限于阻断、封禁，并承担相应的法律责任。

再次此承诺，希望大家一起致力于共同维护一个安全、健康、绿色的网络环境。

## 平台管理员联系方式与问题反馈 
如需反馈问题或咨询，请通过以下渠道联系我们：
将竭诚为您解答疑问并提供帮助。

微信>>企业微信>企业微信邮件>tg>QQ>bilibili

|QQ|github|TG|邮箱|
|-------|---------------|----------|------|
|202835956|[点这里](https://github.com/54ayao/JSDMirror/issues) |[点这里](https://t.me/jsdmirrorChannel)|ayao@cola.email|



可能出现解封的机会

![image](https://github.com/54ayao/JSDMirror/assets/86733666/d80c0729-8d4c-4107-96fa-0ef8332bc99b)


如红框所示，某一些太过分的就没办法解封了，还有可能影响到你整个用户

![image](https://github.com/54ayao/JSDMirror/assets/86733666/54c1303f-a229-498f-9774-3f7879a0c134)
我们


## 注意事项

![image](https://github.com/54ayao/JSDMirror/assets/86733666/6b283f22-de90-473c-9378-5912c914f94b)
如果出现这个情况请联系管理员进行询问是什么违规
- 如遇解封机会，请及时联系管理员处理。
- 请勿违规使用本服务，否则可能会影响您的使用权限。
- 未经许可，严禁回源至中国香港、中国境内节点等。






感谢您对 JSDMirror 的支持与信任！我们将持续为您提供优质的服务！


本页面由文心一言大模型编写
