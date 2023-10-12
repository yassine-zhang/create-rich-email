## create-rich-email <a href="https://npmjs.com/package/create-rich-email"><img src="https://badgen.net/npm/v/create-rich-email/latest" alt="npm package"></a> <a href="https://github.com/yassine-zhang/create-rich-email/blob/main/LICENSE"><img src="https://badgen.net/static/license/MIT/orange" alt="license"></a>

It provides you with a variety of beautiful rich text mail templates that you can use in your project development with only a few simple modifications.

Because of the poor style compatibility between different mail applications, the new features of CSS3 are almost unusable and various problems make the layout of mail sent to users very messy.

<font color="#FF6666"><strong>However: any templates provided with this plug-in address this issue and you don't need to worry about it.</strong></font>

<p align="center">
    <img width="500" src="./media/cli-demo.png">
</p>

## Install

```shell
npm create rich-email@latest
```

Note that the tag name (@latest or @legacy) MUST NOT be omitted, otherwise npm may resolve to a cached and outdated version of the package.

## Template Preview

Template path: `./template/...`

- [docker](./template/docker/Docker.PNG)
- [minify] [apple-music](./template/apple-music/AppleMusic.PNG)
- [minify] [netease-edun](./template/netease-edun/网易易盾.PNG)
- [minify] [tencent-cloud](./template/tencent-cloud/腾讯云.PNG)
- etc...

Note: Templates with the [minify] flag contain minimal HTML files.

## Thanks

Thanks to the Mailjet team for providing me with a great markup language, MJML.

> MJML is a markup language designed to reduce the pain of coding a responsive email. Its semantic syntax makes it easy and straightforward and its rich standard components library speeds up your development time and lightens your email codebase. MJML’s open-source engine generates high quality responsive HTML compliant with best practices.

## LICENSE

Use [MIT](./LICENSE) license.
