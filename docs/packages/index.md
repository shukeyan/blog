## packages.json 配置

## 前言
`package.json` 是前端项目中最重要的配置文件，它描述了项目的依赖关系，并提供项目配置的元数据。当我们初始化一个前端工程项目的时候，`npm init` 会自动在项目的根目录下生产一个`package.json`文件，了解`package.json`的配置能有效的提高我们的开发效率及规范我们的项目等；

## 配置文件格式
下边是vue3源码中的package.json文件的部分配置：

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
`name`属性是必须的，它的值是项目的名称，它应该是唯一的，并且应该是小写的，并且不能包含空格。
    
:::
2. `version`项目的版本号




## 参考
[关于前端大管家 package.json，你知道多少？](https://juejin.cn/post/7023539063424548872)