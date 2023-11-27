## create-rich-email <a href="https://npmjs.com/package/create-rich-email"><img src="https://badgen.net/npm/v/create-rich-email/latest" alt="npm package"></a> <a href="https://github.com/yassine-zhang/create-rich-email/blob/main/LICENSE"><img src="https://badgen.net/static/license/MIT/orange" alt="license"></a> <a href="https://npmjs.com/package/create-rich-email"><img src="https://badgen.net/npm/dw/create-rich-email" alt="downloads-w"/></a>

它为您提供了各种漂亮的富文本邮件模板，您只需进行一些简单的修改就可以在项目开发中使用这些模板。

由于不同邮件应用程序之间的风格兼容性差，CSS3的新特性几乎无法使用，各种问题使得发送给用户的邮件布局非常混乱。

<font color="#FF6666"><strong>但是:这个插件提供的任何模板都可以解决这个问题，您不需要担心它。</strong></font>

<p align="center">
    <img width="500" src="./media/cli-demo.gif">
</p>

## 多语言文档

- [中文文档](./README.md)
- [English Docs](./docs/readme-en.md)

## 安装

```shell
npm create rich-email@latest
```

注意，标签名(@latest或@legacy)绝对不能被省略，否则npm可能会解析到一个缓存的和过时的包版本。

## 模版预览

模版路径：`./template/...`

<p align="center">
    <img width="500" src="./media/preview.png">
</p>

- [docker](./template/docker/Docker.PNG)
- [minify] [apple-music](./template/apple-music/AppleMusic.PNG)
- [minify] [netease-edun](./template/netease-edun/网易易盾.PNG)
- [minify] [tencent-cloud](./template/tencent-cloud/腾讯云.PNG)
- etc...

注意:带有[minify]标志的模板包含最小的HTML文件。

## 致谢

感谢Mailjet团队为我提供了一种很棒的标记语言MJML。

> MJML是一种标记语言，旨在减少编写响应式电子邮件的痛苦。它的语义语法使其简单明了，其丰富的标准组件库加快了您的开发时间并减轻了您的电子邮件代码库。MJML的开源引擎生成符合最佳实践的高质量响应式HTML。

## 许可证

使用 [MIT](./LICENSE) 许可证.
