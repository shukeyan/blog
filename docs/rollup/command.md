## rollup 命令行配置
所有的rollup配置文件中的选项都有对应的命令行，命令行中的配置会覆盖配置文件中的配置

```text
-c, --config <filename>     使用此配置文件
							（如果使用参数但未指定值，则默认为 rollup.config.js）
-d, --dir <dirname>         用于块的目录（如果不存在，则打印到 stdout）
-e, --external <ids>        排除模块 ID 的逗号分隔列表
-f, --format <format>       输出类型（amd、cjs、es、iife、umd、system）
-g, --globals <pairs>       `moduleID:Global` 对的逗号分隔列表
-h, --help                  显示此帮助消息
-i, --input <filename>      输入（替代 <entry file>）
-m, --sourcemap             生成源映射（`-m inline` 为内联映射）
-n, --name <name>           UMD 导出的名称
-o, --file <output>         单个输出文件（如果不存在，则打印到 stdout）
-p, --plugin <plugin>       使用指定的插件（可重复）
-v, --version               显示版本号
-w, --watch                 监视产物文件并在更改时重新构建
--amd.autoId                基于块名称生成 AMD ID
--amd.basePath <prefix>     要预先添加到自动生成的 AMD ID 的路径
--amd.define <name>         在 `define` 位置使用的函数
--amd.forceJsExtensionForImports 在 AMD 导入中使用 `.js` 扩展名
--amd.id <id>               AMD 模块的 ID（默认为匿名）
--assetFileNames <pattern>  发布资源的名称模式
--banner <text>             在产物顶部插入的代码（位于包装器之外）
--chunkFileNames <pattern>  发布次要块的名称模式
--compact                   缩小包装器代码
--context <variable>        指定顶级 `this` 值
--no-dynamicImportInCjs     将外部动态 CommonJS 导入编写为 require
--entryFileNames <pattern>  发布入口块的名称模式
--environment <values>      传递给配置文件的设置（请参阅示例）
--no-esModule               不添加 __esModule 属性
--exports <mode>            指定导出模式（auto、default、named、none）
--extend                    扩展由 --name 定义的全局变量
--no-externalImportAssertions 在 "es" 输出中省略导入断言
--no-externalLiveBindings   不生成支持实时绑定的代码
--failAfterWarnings         如果生成的构建产生警告，则退出并显示错误
--filterLogs <filter>       过滤日志信息
--footer <text>             在产物底部插入的代码（位于包装器之外）
--no-freeze                 不冻结命名空间对象
--generatedCode <preset>    使用哪些代码特性（es5/es2015）
--generatedCode.arrowFunctions 在生成的代码中使用箭头函数
--generatedCode.constBindings 在生成的代码中使用 "const"
--generatedCode.objectShorthand 在生成的代码中使用简写属性
--no-generatedCode.reservedNamesAsProps 始终引用保留名称作为 props
--generatedCode.symbols     在生成的代码中使用符号
--no-hoistTransitiveImports 不将中转导入提升到入口块中
--no-indent                 不缩进结果
--inlineDynamicImports      使用动态导入时创建单次打包
--no-interop                不包括交互操作块
--intro <text>              在产物顶部插入的代码（位于包装器内部）
--logLevel <level>          要显示哪种类型的日志
--no-makeAbsoluteExternalsRelative 不规范化外部导入
--maxParallelFileOps <value> 并行读取的文件数
--minifyInternalExports     强制或禁用内部导出的缩小
--noConflict                为 UMD 全局生成 noConflict 方法
--outro <text>              在产物底部插入的代码（位于包装器内部）
--perf                      显示性能计时
--no-preserveEntrySignatures 避免入口点的门面块
--preserveModules           保留模块结构
--preserveModulesRoot       将保留的模块放置在根路径下的此路径下
--preserveSymlinks          解析文件时不要跟随符号链接
--no-sanitizeFileName       不要替换文件名中的无效字符
--shimMissingExports        为丢失的导出创建卡扣变量
--silent                    不打印警告
--sourcemapBaseUrl <url>    使用给定的基本 URL 发出绝对源映射 URL
--sourcemapExcludeSources   在源映射中不包括源代码
--sourcemapFile <file>      指定源映射的包位置
--sourcemapFileNames <pattern> 编译后 sourcemap 的命名模式
--stdin=ext                 指定用于标准输入的文件扩展名
--no-stdin                  不要从 stdin 读取 "-"
--no-strict                 不在生成的模块中发出 `"use strict";`
--strictDeprecations        抛出有关不推荐使用的功能的错误
--no-systemNullSetters      不要将空的 SystemJS setter 替换为 `null`
--no-treeshake              禁用除屑优化
--no-treeshake.annotations 忽略纯调用注释
--treeshake.correctVarValueBeforeDeclaration 在声明之前将变量取消优化
--treeshake.manualPureFunctions <names> 手动将函数声明为纯函数
--no-treeshake.moduleSideEffects 假设模块没有副作用
--no-treeshake.propertyReadSideEffects 忽略属性访问副作用
--no-treeshake.tryCatchDeoptimization 不要关闭 try-catch-tree-shaking
--no-treeshake.unknownGlobalSideEffects 假设未知的全局变量不会抛出异常
--validate                  验证输出
--waitForBundleInput        等待打包输入文件
--watch.buildDelay <number> 节流观察重建
--no-watch.clearScreen      重建时不要清除屏幕
--watch.exclude <files>     排除要观察的文件
--watch.include <files>     限制观察到指定文件
--watch.onBundleEnd <cmd>   在 "BUNDLE_END" 事件上运行的 Shell 命令
--watch.onBundleStart <cmd> 在 "BUNDLE_START" 事件上运行的 Shell 命令
--watch.onEnd <cmd>         在 "END" 事件上运行的 Shell 命令
--watch.onError <cmd>       在 "ERROR" 事件上运行的 Shell 命令
--watch.onStart <cmd>       在 "START" 事件上运行的 Shell 命令
--watch.skipWrite           在监视时不要将文件写入磁盘


```

### 以下只支持命令行

#### `--bundleConfigAsCjs`
此选项将强制将你的配置转译为 `CommonJS`。
这允许你在配置中使用 `CommonJS` 常用的变量/方法，例如 `__dirname` 或 `require.resolve`，即使配置本身是作为` ES `模块编写的。
### `--configPlugin <plugin>`
允许指定 Rollup 插件来转译或控制解析配置文件。主要好处是可以使用非 JavaScript 的配置文件。例如，如果你安装了 `@rollup/plugin-typescript`，则以下内容将允许你使用 TypeScript 编写配置文件：
```js
rollup --config rollup.config.ts --configPlugin @rollup/plugin-typescript
```
对于 `TypeScript`，请确保在 `tsconfig.json` 的 `include` 路径中包含` Rollup` 配置文件。例如：
```json
"include": ["src/**/*", "rollup.config.ts"],

```
此选项支持与 `--plugin` 选项相同的语法，即你可以多次指定该选项，可以省略 `@rollup/plugin-` 前缀，只需编写` typescript`，并可以通过` ={...}` 指定插件选项。
使用此选项将使 `Rollup` 首先将你的配置文件转译为**ES 模块**，然后再执行它。如果要转译为 `CommonJS`，请还传递 `--bundleConfigAsCjs` 选项。