self.addEventListener('fetch', event => {  
    const url = new URL(event.request.url);  
    let newHostnameOrIp = '';  
  
    const pathToHostMap = [  
      // 具体的 npm 包路径匹配（包含可选的版本号）   黑名单npm
      { regex: /^\/npm\/chenyfan-happypic-sex(@[A-Za-z0-9.-]+|\/)?/, hostname: '服务器地址' },  
    
      // GitHub 仓库或特定前缀的路径匹配   黑名单仓库
      { regex: /^\/gh\/(.*\.)?(mubaitenxun|dybqr|yangchuansheng|yukikazechin|qxdn|songwqs|walinejs|g0fcn|mxqotz|duoyuren|uzvg|rong6|whoismygrandson|hfshaobing|lveMonsi|Thysrael|unilei|orrislien|WorldlineChanger|mt-theme|wodafei|qucomic|90666225|nanjingup|fznb1234|niunai88|wenmou258|cannian666999|wode-1u|woshishei138|niuzai12345|03298|oka159|nansheng-521zx|jackson0829|suxing12312|bodaxsd|ljxi|qxqx11|mumuwocal|mxqotz|miaolou|muimg1|yixuan66|qdqqd|Airmole|yizhimao-mao|qwehggfgj|yixuan66|qwerrsc001|wdzhwsh4067|cayzlh|NEUQer-xing|xustudyxu|Daidai0912|useritotoo|iCruiseDATA|dongyubin|qwehggfgj|yyf126|yixuan66|cooliceycold|mydracula|LycixRemix|liucys|M-500|lvxianchao|AliveLeqi|AUOGIL|ACGAPI|Poppypy|libretro-thumbnails|photohost|Minami926494|VincentAstor|leegical|jwenjian|MiraiGhost|L2ksy0d|ZHOUYUANN|Provencechocolate|spfans996|sjn000|qihang119|pengzhangsir|xiaohaiya|xz211|ueletv|shijianzhong|bmw88888888​|sickikco)(\/.*)?($|\?)/, hostname: '服务器地址' },  
    
      // 匹配 npm、gh、china 下的图片文件  提交腾讯云审核渠道
      { regex: /^\/(npm|gh|china)\/(.*\.)?(jpg|jpeg|gif|ico|png|bmp|webp|psd|tif|tiff|svg|avif|exif|heif|heic|dng|cr2|nef|orf|raf|rw2|pem|pgm|ppm|xbm|xpm|cur|anim|flc|fli|flx|fpx|wmf|emf|ai|eps|drw|dxf|pct|pctx|pgm|ppm|psd|psb|xcf|xwd|yuv|fits)($|\?|\/)/, hostname: '服务器地址'  },  
    
      // 匹配 npm、gh、wp、china 下的多级目录路径 修改jsdelivr为jsdmirror  
      { regex: /^\/(npm|gh|wp|china|combine)\/([^/]+\/)+$/, hostname: '服务器地址'  },  
    
      // 匹配 npm、combine、cdn-cgi、gh、wp、china 开头的任意路径（作为默认或捕获剩余情况）  
      { regex: /^\/(npm|combine|cdn-cgi|gh|wp|china)\//, hostname: 'fastly.jsdelivr.net' },  
    
      // 修改首页 
      { regex: /^\/*/, hostname: 'fastly.jsdelivr.net' },  
    
    
      // 如果确实需要一个“捕获所有”的规则，请确保它是最后一个，并且前面的规则足够具体以避免不必要的覆盖  
  ];
  
    // 遍历映射，找到匹配的路径  
    for (const { regex, hostname } of pathToHostMap) {  
        if (regex.test(url.pathname)) {  
            newHostnameOrIp = hostname;  
            break;  
        }  
    }  
  
    // 如果没有找到匹配的路径，则使用原始的主机名（可选）  
    if (!newHostnameOrIp) {  
        event.respondWith(fetch(event.request));  
        return;  
    }  
  
    // 修改请求的URL以使用新的主机名或IP  
    url.hostname = newHostnameOrIp;  
  
    // 创建新的请求对象（注意：这里不需要传递event.request作为第二个参数，因为Request构造函数不需要它）  
    const newRequest = new Request(url.toString());  
  
    // 响应新的请求  
    event.respondWith(fetch(newRequest));  
});
