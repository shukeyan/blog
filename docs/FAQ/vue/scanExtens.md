# vue 项目集成扫码枪

## 描述

项目开发中要使用到扫描枪进行二维码扫描进行蛋车绑定到孵化间，查询了资料后扫码枪的原理相当于使用了电脑的键盘输入事件，结束的时候会调用键盘的回车键。

## js

由于二维码值既可以扫码也可以进行输入，所以要考虑输入事件和扫描的兼容。

```js
// 扫描事件封装
class Scan {
    code = '',
    lastCode = null
    nextCode = null
    lastTime = null
    nextTime = null
    constructor() {}
    scanEvent(event, callback) {
        // 如果是输入框输入事件返回
        if(event.target.nodeName == 'INPUT') return false
        this.nextCode = event.which
        this.nextTime = Date.now()
        // 扫码枪的事件间隔很短，设置为30ms
        if(this.lastCode != null && this.lastTime != null && this.nextTime - this.lastTime <= 30) {
            this.code += String.fromCharCode(this.lastCode)
        } else if (this.lastCode != null &&this.lastTime != null && this.nextTime - this.lastTime > 100) {
            code = "";
        }
        this.lastCode = this.nextCode;
        this.lastTime = this.nextTime;
        if(event.keyCode == 13) {
            if(!this.code || this.code.length < 3) return false;
            callback(this.code)
            this.code = ''
            this.lastTime = null
            this.lastCode = null
        }
    }
}
```

## vue

```js
// ...
let scan = new Scan();
export default {
  mounted() {
    document.body.addEventListener("keypress", this.scanHandle);
  },
  beforeDestory() {
    document.body.removeEventListener("keypress", this.scanHandle);
  },
  methods: {
    scanHandle(event) {
        scan.scanEvent(event, (code) => {
            console.log(code)
        })
    }
  }
};
// ...
```
