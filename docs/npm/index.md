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
  },
  "types": "test-dts/index.d.ts",
  "engines": {
    "node": ">=10.0.0"
  },
  "devDependencies": {
    "@babel/types": "^7.12.0",
    "@microsoft/api-extractor": "^7.15.1",
  }
}
```

## 详细配置

![package.json配置属性](/packages/package-property.png)

### 一、必须属性

#### 1. `name`

项目的名称，发布为`npm`包时需要使用，如果没有设置，`npm`包将无法发布；

::: warning 注意

- `name`属性是必须的，它的值是项目的名称，它应该是唯一的，并且应该是小写的，不能以`.`、`_`开头，长度小于等于 214 个字符。
- 名称可以作为参数传入`require('')`中，用来导入模块，所以应该尽量简短、语义化。
- 不能是唯一的，不能与已发布的包重名，可以使用`npm view`命令查询模块是否重复，如果不重复 code 为`code E404`

:::

#### 2. `version`
项目的版本号

::: warning 注意
- `version`属性是必须的，它的值是项目的版本号，它应该是一个合法的版本号，`主版本号.次版本号.修订号`，例如`1.0.0`，`1.0.1`，`1.1.0`，`1.0.0-alpha`，`1.0.0-beta`，`1.0.0-beta.1`，`1.0.0-beta.2`，`1.0.0-beta.11`，`1.0.0-rc.1`，通常情况下，修改主版本号是做了大的功能改变，修改次版本号是新增功能，修改修订号就是修复一些 bug
- 如果某个版本的改动较大，并且不稳定，可能无法满足预期的兼容性，就需要发布先行版本，先行版本通常会加在版本的后面，通过“-”号连接以点分隔的标识符和版本编译信息：**内部版本（alpha)**、**公测版本（beta）**、**候选版本（rc，即 release candiate）**。例如`1.0.0-alpha`、`1.0.0-beta`、`1.0.0-beta.2`、`1.0.0-beta.11`、`1.0.0-rc.1`。

:::


### 二、描述属性

package.json种对项目包描述信息相关的配置字段，下面就分别来看看这些字段的含义。

#### 1. `description` 
描述这个项目包的信息，它是一个字符串，可以让其他开发者在 `npm`` 的搜索中发现我们的项目包。
#### 2. `keywords` 
关键字，是一个字符串数组，可以让其他开发者在 `npm` 的搜索中发现我们的项目包。
#### 3. `author`
作者，项目包的开发者。

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

#### 3. `contributors`
项目的贡献者，是一个数组           

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

#### 5. `homepage`
项目的主页地址，字符串格式
#### 6. `repository`
项目的仓库地址

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

#### 7. `bugs`
表示项目提交问题的地址，该字段是一个对象，可以添加一个提交问题的地址和反馈的邮箱：

```json
    "bugs": {
        "url": "https://github.com/EvanYou/webpack-template/issues",
        "email": "webpack-template@163.com"
    }
```
最常见的bugs就是Github中的issues页面。

### 三、依赖项配置
#### 1. `dependencies` 
依赖项，声明生产环境所必须的依赖，它是一个对象，每个包的名称和版本号之间用冒号隔开，例如：

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

使用下列命令可以把npm包安装到`devDependencies`中：
```bash
    npm install --save xxx
    npm install xxx  #不加--save，默认会安装到dependencies中
```
```bash
    yarn add xxx
```
```bash
    pnpm add xxx 
    pnpm add xxx --save-prod
```

#### 2. `devDependencies`
开发依赖项，声明开发阶段所需的依赖包，如：webpack、vite、babel、eslint等，用来辅助开发。它们不同于 dependencies，因为它们只需安装在开发设备上，而无需在生产环境中运行代码。当打包上线时并不需要这些包，所以可以把这些依赖添加到 devDependencies 中，这些依赖依然会在本地指定 npm install 时被安装和管理，但是不会被安装到生产环境中。

::: info
使用一下命令，可以包依赖包插入到`devDependencies`中：
```bash
    npm install --save-dev xxx
    npm install xxx -D
```
```bash
    yarn add xxx -D
    yarn add xxx --dev
```
```bash
    pnpm add xxx -D
    pnpm add xxx --save-dev
```
:::

#### 4. `peerDependencies`
有些情况下，我们的项目和所依赖的模块，都会同时依赖另一个模块，但是所依赖的版本不一样。比如，我们的项目依赖A模块和B模块的1.0版，而A模块本身又依赖B模块的2.0版。大多数情况下，这不是问题，B模块的两个版本可以并存，同时运行。但是，有一种情况，会出现问题，就是这种依赖关系将暴露给用户。
最典型的场景就是插件，比如A模块是B模块的插件。用户安装的B模块是1.0版本，但是A插件只能和2.0版本的B模块一起使用。这时，用户要是将1.0版本的B的实例传给A，就会出现问题。因此，需要一种机制，在模板安装的时候提醒用户，如果A和B一起安装，那么B必须是2.0模块。
peerDependencies字段就是用来供插件指定其所需要的主工具的版本。
```json
    "name": "chai-as-promised",
    "peerDependencies": {
        "chai": "1.x"
    }
```
上面代码指定在安装chai-as-promised模块时，主程序chai必须一起安装，而且chai的版本必须是1.x。如果项目指定的依赖是chai的2.0版本，就会报错。
需要注意，从npm 3.0版开始，peerDependencies不再会默认安装了。
#### 4. `optionalDependencies`   
如果需要在找不到包或者安装包失败时，npm仍然能够继续运行，则可以将该包放在`optionalDependencies`对象中，`optionalDependencies`对象中的包会覆盖`dependencies`中同名的包，所以只需在一个地方进行设置即可。这是包名称到版本或 url 的映射，就像`dependencies`对象一样。不同之处在于构建失败不会导致安装失败。

:::warning 注意
需要注意，由于`optionalDependencies`中的依赖可能并未安装成功，所以一定要做异常处理，
否则当获取这个依赖时，如果获取不到就会报错。
:::
#### 5. `bundledDependencies` 
这定义了发布包时将捆绑的包名称数组。       
如果您需要在本地保留 npm 包或通过单个文件下载获得它们，您可以通过在 `bundledDependency` 数组中指定包名称并执行 `npm pack` 将包捆绑在 `tarball（压缩）` 文件中。         
e.g.:
```json
{
  "name": "awesome-web-framework",
  "version": "1.0.0",
  "bundledDependencies": [
    "renderized", "super-streams"
  ]
}
```
通过运行`npm pack`我们能获得**awesome-web-framework-1.0.0.tgz**文件，该文件包含了依赖**renderized**和**super-streams**,可以通过执行 `npm install Awesome-web-framework-1.0.0.tgz` 将其安装在新项目中。
:::warning 注意
需要注意，这个字段数组中的值必须是在`dependencies`, `devDependencies`两个里面声明过的包才行。
:::
#### 6. `engines` 
当我们维护一些旧项目时，可能对npm包的版本或者Node版本有特殊要求，如果不满足条件就可能无法将项目跑起来。为了让项目开箱即用，可以在engines字段中说明具体的版本号：
```json
    "engines": {
        "node": ">=8.10.3 <12.13.0",
    "npm": ">=6.9.0"
    }
```
:::warning 注意
需要注意，`engines`只是起一个说明的作用，即使用户安装的版本不符合要求，也不影响依赖包的安装，而且只当你的包作为依赖被安装的时候才会提醒。
:::

### 四、脚本配置
#### 1. `scripts`
属性是一个字典，其中包含在包生命周期中不同时间运行的脚本命令。**key**是生命周期事件，**value**是在该点运行的命令。
e.g:
```json
{
    "scripts": {
        "dev": "webpack-dev-server --config webpack.dev.js",
        "build": "webpack --config webpack.prod.js",
        "test": "node ./test.js"
    }
}
```
可以通过一下命令行运行脚本：
```bash
    npm run dev
    yarn run dev
    yarn dev
    pnpm run dev
```

#### 2. `config` 
config字段用来配置`scripts`运行时的配置参数，如下所示：
```json
    { 
        "name" : "foo",
        "config" : { "port" : "8080" }
    }
```
如果运行`npm run start`，则**port**字段会映射到`npm_package_config_port`环境变量中：
```js
console.log(process.env.npm_package_config_port) // 8080
```
用户可以通过`npm config set foo:port 8081`来重写**port**字段的值。

### 五、文件 && 目录
####  1. `main`
 字段是模块 ID，它是程序的主要入口点。也就是说，如果您的包名为 foo，并且用户安装了它，然后执行 require("foo")，那么将返回主模块的导出对象。
这应该是相对于包文件夹根目录的模块 ID
```json
{
    "main":"./dist/index.js"
}
```
####  2. `browser`
 browser字段可以定义 npm 包在 browser 环境下的入口文件。如果 npm 包只在 web 端使用，并且严禁在 server 端使用，使用 browser 来定义入口文件。
```json
 {
    "browser": "./src/index.js" 
 }
```
#### 3. `module` 
字段可以定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用。如果 npm 包导出的是 ESM 规范的包，使用 module 来定义入口文件。

```json
{
    "module": "./src/index.mjs",
}
```
:::warning 注意
需要注意，`.js`文件是使用 `commonJS` 规范的语法(`require('xxx')`)，`.mjs` 是用 `ESM` 规范的语法(`import 'xxx'`)。​
:::

:::warning 注意
上面三个的入口文件相关的配置是有差别的，特别是在不同的使用场景下。在**Web环境**中，如果使用**loader**加载`ESM（ES module）`，那么这三个配置的加载顺序是`browser→module→main`，如果使用**require**加载`CommonJS`模块，则加载的顺序为`main→module→browser`。
:::
#### 4. `bin` 
字段可以定义可执行文件的名称和路径。
```json
"bin": {
  "someTool": "./bin/someTool.js"
}
```
参考：          
[package.json中bin的用法](https://blog.csdn.net/weixin_43132396/article/details/125225853)          
[package.json中bin字段的用处](https://blog.csdn.net/bantoumingasong/article/details/126102551)

5. `files`字段可以指定包中要包含的文件列表，这些文件将会被打包到包中。当npm包发布时，files指定的文件会被推送到npm服务器中，如果指定的是文件夹，那么该文件夹下面所有的文件都会被提交。
```json
"files": [
    "LICENSE",
    "Readme.md",
    "index.js",
    "lib/"
 ]
```
如果有不想提交的文件，可以在项目根目录中新建一个`.npmignore`文件，并在其中说明不需要提交的文件，防止垃圾文件推送到npm上。这个文件的形式和`.gitignore`类似。写在这个文件中的文件即便被写在`files`属性里也会**被排除在外**。比如可以在该文件中这样写：
```text
node_modules
.vscode
build
.DS_Store
```
####  6. `man` 
命令是 `Linux` 中的帮助指令，通过该指令可以查看 `Linux` 中的指令帮助、配置文件帮助和编程帮助等信息。如果 `node.js` 模块是一个全局的命令行工具，在 `package.json` 通过 `man` 属性可以指定 `man` 命令查找的文档地址：
```json
{
    "man": [
        "./man/npm-access.1",
        "./man/npm-audit.1"
    ]
}
```
man 字段可以指定一个或多个文件, 当执行man {包名}时, 会展现给用户文档内容。
::: warning 注意
- man文件必须以数字结尾，如果经过压缩，还可以使用.gz后缀。这个数字表示文件安装到哪个 man 节中；
- 如果 man 文件名称不是以模块名称开头的，安装的时候会加上模块名称前缀。
:::
对于上面的配置，可以使用以下命令来执行查看文档：
```bash
man npm-access
man npm-audit
```
#### 7. `directories` 
directories字段用来规范项目的目录。node.js 模块是基于 CommonJS 模块化规范实现的，需要严格遵循 CommonJS 规范。模块目录下除了必须包含包项目描述文件 package.json 以外，还需要包含以下目录：

> - bin ：存放可执行二进制文件的目录
> - lib ：存放js代码的目录
> - doc ：存放文档的目录
> - test ：存放单元测试用例代码的目录
> - ...

在实际的项目目录中，我们可能没有按照这个规范进行命名，那么就可以在directories字段指定每个目录对应的文件路径：

```json
"directories": {
    "bin": "./bin",
    "lib": "./lib",
    "doc": "./doc",
    "test" "./test",
    "man": "./man"
},
```
这个属性实际上没有什么实际的作用，当然不排除未来会有什么比较有意义的用处。

### 六、发布配置
下面来看看和npm项目包发布相关的配置。

#### 1. `private`
private字段可以防止我们意外地将私有库发布到npm服务器。只需要将该字段设置为true：
```json
    "private": true
```
#### 2. `preferGlobal` **已弃用**
preferGlobal字段表示当用户不把该模块安装为全局模块时，如果设置为true就会显示警告。它并不会真正的防止用户进行局部的安装，只是对用户进行提示，防止产生误解：

```json
"preferGlobal": true
```

:::warning 注意
此项已经被弃用，不再推荐使用。

现在推崇你尽可能安装为本地devDependencies 
:::
#### 3. `publishConfig`
publishConfig配置会在模块发布时生效，用于设置发布时一些配置项的集合。如果不想模块被默认标记为最新，或者不想发布到公共仓库，可以在这里配置tag或仓库地址。更详细的配置可以参考[npm-config](https://www.npmjs.cn/misc/config/)。

通常情况下，publishConfig会配合private来使用，如果只想让模块发布到特定npm仓库，就可以这样来配置：

```json
"private": true,
"publishConfig": {
  "tag": "1.1.0",
  "registry": "https://registry.npmjs.org/",
  "access": "public"
}
```

#### 4. `os`
您可以指定模块将在哪个操作系统上运行:
```json
"os" : [ "darwin", "linux" ]
```
您还可以将操作系统列入黑名单而不是白名单，只需在列入黑名单的操作系统前面加上 **“!”** 即可：
```json
"os" : [ "!darwin", "!win32" ]
```
主机操作系统由`process.platform`决定

#### 5. `cpu`
与`os`类似，`cpu`配置可以限制用户的安装环境，比如指定模块只能在`x86`或`arm`处理器上运行：
```json
"cpu": [ "x64", "arm" ]
```
可以加入黑名单，禁止模块在某些处理器上运行：
```json
"cpu": [ "!x64", "!arm" ]
```
主机架构由`process.arch`决定

#### 6. `license`
license 字段用于指定软件的开源协议，开源协议表述了其他人获得代码后拥有的权利，可以对代码进行何种操作，何种操作又是被禁止的。常见的协议如下：
> - MIT ：只要用户在项目副本中包含了版权声明和许可声明，他们就可以拿你的代码做任何想做的事情，你也无需承担任何责任。
> - Apache ：类似于 MIT ，同时还包含了贡献者向用户提供专利授权相关的条款。
> - GPL ：修改项目代码的用户再次分发源码或二进制代码时，必须公布他的相关修改。

可以这样声明：
```json
    { "license": "MIT" } // 声明许可为MIT

    { "license": "(MIT OR Apache-2.0)" } // 声明许可为MIT或者Apache-2.0
    { "license" : "SEE LICENSE IN <filename>" } // 自定义许可声明，<filename>是项目根目录的文件
    { "license" : "UNLICENSED" } // 未授权
```

### 七、其他配置
#### 1. `types`、`typings`
`types`、`typings`字段用来指定TypeScript的入口文件：
```json
"types": "types/index.d.ts",
```
就像 `main` 字段一样，定义一个针对 `TypeScript` 的入口文件。
#### 2. `eslintConfig`
eslintConfig字段用来指定eslint的配置，也可以写在单独的文件 **.eslintrc.json**中：
```json
"eslintConfig": {
      "root": true,
      "env": {
        "node": true
      },
      "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
      ],
      "rules": {},
      "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2020,
        "ecmaFeatures": {
            "jsx": true
        }
     },
}
```
#### 3. `babel`
babel字段用来指定babel的配置，也可以写在单独的文件 **.babelrc**中：
```json
{
    "babel":{
        "presets": ["@babel/preset-env"],
        "plugins": ["@babel/plugin-transform-runtime"]
    }
}
```

#### 4. `unpkg` 
让 `npm` 上所有的文件都开启 `cdn` 服务。
```json
{
  "unpkg": "dist/jquery.js"
}
```
正常情况下，访问 jquery 的发布文件通过 `https://unpkg.com/jquery@3.3.1/dist/jquery.js`，当你使用省略的 url `https://unpkg.com/jquery` 时，便会按照如下的方式获取文件：

```bash

# [latestVersion] 指最新版本号，pkg 指 package.json

# 定义了 unpkg 属性时
https://unpkg.com/jquery@[latestVersion]/[pkg.unpkg]

# 未定义 unpkg 属性时，将回退到 main 属性
https://unpkg.com/jquery@[latestVersion]/[pkg.main] 
```

#### 5. `lint-staged`
lint-staged是一个在Git暂存文件上运行linters的工具，配置后每次修改一个文件即可给所有文件执行一次lint检查，通常配合gitHooks一起使用。
```json
"lint-staged": {
	"*.js": [
  	"eslint --fix",
    "git add"
  ]
}
```
使用lint-staged时，每次提交代码只会检查当前改动的文件。
#### 6. `gitHooks`
gitHooks用来定义一个钩子，在提交（commit）之前执行ESlint检查。在执行lint命令后，会自动修复暂存区的文件。修复之后的文件并不会存储在暂存区，所以需要用`git add`命令将修复后的文件重新加入暂存区。在执行`pre-commit`命令之后，如果没有错误，就会执行`git commit`命令：
```json
"gitHooks": {
	"pre-commit": "lint-staged"
}

```
这里就是配合上面的lint-staged来进行代码的检查操作。

#### 7. `browserslist`
设置项目的浏览器兼容情况
[browserslist](https://github.com/browserslist/browserslist)


## 参考
[关于前端大管家 package.json，你知道多少？](https://juejin.cn/post/7023539063424548872)
