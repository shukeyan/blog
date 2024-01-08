## packages.json 配置

## 前言

`package.json` 是前端项目中最重要的配置文件，它描述了项目的依赖关系，并提供项目配置的元数据。当我们初始化一个前端工程项目的时候，`npm init` 会自动在项目的根目录下生产一个`package.json`文件，了解`package.json`的配置能有效的提高我们的开发效率及规范我们的项目等；

## 配置文件格式

下边是 vue3 源码中的 package.json 文件的部分配置：

```json
{
  "private": true,
  "version": "3.1.5",
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "dev": "node scripts/dev.js",
    "build": "node scripts/build.js",
    "size": "node scripts/build.js vue runtime-dom size-check -p -f global",
    "lint": "eslint --ext .ts packages/*/src/**.ts",
    "format": "prettier --write --parser typescript \"packages/**/*.ts?(x)\"",
    "test": "node scripts/build.js vue -f global -d && jest --runInBand",
    "test-dts": "node scripts/build.js shared reactivity runtime-core runtime-dom -dt -f esm-bundler && yarn test-dts-only",
    "test-dts-only": "tsc -p ./test-dts/tsconfig.json && tsc -p ./test-dts/tsconfig.build.json",
    "release": "node scripts/release.js",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    "dev-compiler": "npm-run-all --parallel \"dev template-explorer\" serve",
    "dev-sfc": "npm-run-all --parallel \"dev compiler-sfc -f esm-browser\" \"dev runtime-core -f esm-bundler\"
    \"dev runtime-dom -f esm-bundler\" serve-sfc-playground",
    "serve-sfc-playground": "vite packages/sfc-playground",
    "serve": "serve",
    "open": "open http://localhost:5000/packages/template-explorer/local.html",
    "preinstall": "node ./scripts/checkYarn.js",
    "prebuild-sfc-playground": "node scripts/build.js compiler shared -af cjs && node scripts/build.js runtime reactivity shared -af esm-bundler &&
    node scripts/build.js vue -f esm-bundler-runtime && node scripts/build.js vue -f esm-browser-runtime && node scripts/build.js compiler-sfc -f esm-browser",
    "build-sfc-playground": "cd packages/sfc-playground && vite build"
  },
  "types": "test-dts/index.d.ts",
  "engines": {
    "node": ">=10.0.0"
  },
  "devDependencies": {
    "@babel/types": "^7.12.0",
    "@microsoft/api-extractor": "^7.15.1",
    "@rollup/plugin-commonjs": "^18.0.0",
    "@rollup/plugin-json": "^4.0.0",
    "@rollup/plugin-node-resolve": "^11.2.1",
    "@rollup/plugin-replace": "^2.3.4",
    "@types/hash-sum": "^1.0.0",
    "@types/jest": "^26.0.16",
    "@types/node": "^14.10.1",
    "@types/puppeteer": "^5.0.0",
    "@typescript-eslint/parser": "^4.1.1",
    "brotli": "^1.3.2",
    "chalk": "^4.1.0",
    "conventional-changelog-cli": "^2.0.31",
    "csstype": "^3.0.3",
    "enquirer": "^2.3.2",
    "eslint": "^7.7.0",
    "execa": "^4.0.2",
    "fs-extra": "^9.0.1",
    "jest": "^26.0.1",
    "lint-staged": "^10.2.10",
    "minimist": "^1.2.0",
    "npm-run-all": "^4.1.5",
    "prettier": "~1.14.0",
    "puppeteer": "^10.0.0",
    "rollup": "~2.38.5",
    "rollup-plugin-node-builtins": "^2.1.2",
    "rollup-plugin-node-globals": "^1.4.0",
    "rollup-plugin-polyfill-node": "^0.6.2",
    "rollup-plugin-terser": "^7.0.2",
    "rollup-plugin-typescript2": "^0.27.2",
    "semver": "^7.3.2",
    "serve": "^12.0.0",
    "ts-jest": "^26.2.0",
    "typescript": "^4.2.2",
    "yorkie": "^2.0.0"
  }
}
```

## 详细配置

![package.json配置属性](/packages/package-property.png)

### 一、必须属性

1. `name`项目的名称，发布为`npm`包时需要使用，如果没有设置，`npm`包将无法发布；
    ::: warning 注意

    - `name`属性是必须的，它的值是项目的名称，它应该是唯一的，并且应该是小写的，不能以`.`、`_`开头，长度小于等于 214 个字符。
    - 名称可以作为参数传入`require('')`中，用来导入模块，所以应该尽量简短、语义化。
    - 不能是唯一的，不能与已发布的包重名，可以使用`npm view`命令查询模块是否重复，如果不重复 code 为`code E404`

    :::

2. `version`项目的版本号

    ::: warning 注意
    - `version`属性是必须的，它的值是项目的版本号，它应该是一个合法的版本号，`主版本号.次版本号.修订号`，例如`1.0.0`，`1.0.1`，`1.1.0`，`1.0.0-alpha`，`1.0.0-beta`，`1.0.0-beta.1`，`1.0.0-beta.2`，`1.0.0-beta.11`，`1.0.0-rc.1`，通常情况下，修改主版本号是做了大的功能改变，修改次版本号是新增功能，修改修订号就是修复一些 bug
    - 如果某个版本的改动较大，并且不稳定，可能无法满足预期的兼容性，就需要发布先行版本，先行版本通常会加在版本的后面，通过“-”号连接以点分隔的标识符和版本编译信息：**内部版本（alpha)**、**公测版本（beta）**、**候选版本（rc，即 release candiate）**。例如`1.0.0-alpha`、`1.0.0-beta`、`1.0.0-beta.2`、`1.0.0-beta.11`、`1.0.0-rc.1`。
    
    :::


### 二、描述属性

package.json种对项目包描述信息相关的配置字段，下面就分别来看看这些字段的含义。

1. `description` 描述这个项目包的信息，它是一个字符串，可以让其他开发者在 `npm`` 的搜索中发现我们的项目包。
2. `keywords` 关键字，是一个字符串数组，可以让其他开发者在 `npm` 的搜索中发现我们的项目包。
3. `author`作者，项目包的开发者。
   ::: warning 注意
    它有两种表示方式：
    - 字符串格式

    ```json
        "author": "Evan You <evanyou.me> (https://evanyou.me)"
    ```

    - 对象格式

    ```json
        "author": {
            "name": "Evan You",
            "email": "evanyou.me",
            "url": "https://evanyou.me"
        }
    ```
    :::

3. `contributors`项目的贡献者，是一个数组           

    ::: warning 注意
    它有两种表示方式：
    - 字符串格式

    ```json
        "contributors": [
            "Evan You <evanyou.me> (https://evanyou.me)",
            "John Doe <johndoe.me> (https://johndoe.me)"
        ]
    ```

    - 对象格式

    ```json
        "contributors": [
            {
                "name": "Evan You",
                "email": "evanyou.me",
                "url": "https://evanyou.me"
            },
            {
                "name": "John Doe",
                "email": "johndoe.me",
                "url": "https://johndoe.me"
            }
        ]
    ```
    :::

5. `homepage`项目的主页地址，字符串格式
6. `repository`项目的仓库地址
    ::: warning 注意
    两种写法：
    - 字符串格式

    ```json
        "repository": "https://github.com/EvanYou/webpack-template.git"
    ```

    - 对象格式

    ```json
        "repository": {
            "type": "git",
            "url": "git+https://github.com/EvanYou/webpack-template.git",
            "directory": "packages/compiler-core" // 仓库目录
        }
    ```
    :::

7. `bugs`表示项目提交问题的地址，该字段是一个对象，可以添加一个提交问题的地址和反馈的邮箱：

    ```json
        "bugs": {
            "url": "https://github.com/EvanYou/webpack-template/issues",
            "email": "webpack-template@163.com"
        }
    ```
最常见的bugs就是Github中的issues页面。

### 三、依赖项配置
1. `dependencies` 依赖项，是项目包依赖的第三方包，它是一个对象，每个包的名称和版本号之间用冒号隔开，例如：

    ```json
        "dependencies": {
            "webpack": "5.0.0",
            "babel-core": "~7.0.0",
            "babel-loader": "^8.0.0",
            "babel-preset-env": "latest"
        }
    ```
    ::: info 
    - **固定版本**： 上面的`webpack`的版本`5.0.0`就是固定版本，安装时只安装这个指定的版本；
    - **波浪号(~)**： 比如`~7.0.0`，表示安装7.0.x的最新版本（不低于7.0.1），也就是说安装时不会改变主版本号和次版本号；
    - **插入号(^)**： 比如上面 babel-loader 的版本^8.0.0，表示安装8.x.x的最新版本（不低于8.0.1），也就是说安装时不会改变主版本号。如果主版本号为0，那么插入号和波浪号的行为是一致的；
    - **latest**： 安装最新的版本。
    :::



## 参考
[关于前端大管家 package.json，你知道多少？](https://juejin.cn/post/7023539063424548872)
````
