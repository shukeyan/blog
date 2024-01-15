## 获取文件的绝对路径及packge.json

## 获取文件的绝对路径
对于node我们常常使用`__dirname`获取当前文件的绝对路径，但是对于esModule模块这种方式不支持，我们可以使用下边方法获取文件绝对路径：
```js {1,11}
import {fileURLToPath } from 'node:url'

export default {
    input: './src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'es',
        name: 'bundle'
    },
    external: [
        fileURLToPath('src/some-file.js', import.meta.url)
    ]
}

```

## 导入package.json

### 对于Node 17.5+
对于node版本为17.5+， 我们可以通过断言（assert）获取package.json文件：
```js
import pkg from './package.json' assert {type: 'json'}
console.log(pkg)

```

### 对于旧的Node版本
对于旧的node版本，我们可以使用`createRequire`获取package.json文件：
```js
import {createRequire} from 'node:module'
const require = createRequire(import.meta.url)
const pkg = require('./package.json')

```

### 或者直接从磁盘读取
不限制node版本，可以通过直接从磁盘读取解析package.json文件：
```js
import {readFileSync} from 'node:fs'
const packageFileData = readFileSync(new URL('./package.json', import.meta.url))
const pkg = JSON.parse(packageFileData)

```
