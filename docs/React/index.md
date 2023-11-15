# 入门

## react Hook
|hook|描述|
|----|----|
|useState|保存状态|
|useEffect|在组件挂载和卸载时执行一些操作|
|useContext|获取context中的值|
|useReducer|保存状态，并且提供一个dispatch方法来更新状态|
|useCallback|缓存函数|
|useMemo|缓存值|
|useRef|保存一个可变的ref|
|useImperativeHandle|暴露ref|
|useDeferred|延迟执行|
|useLayoutEffect|在渲染之后执行一些操作|
|useDebugValue|打印hook的返回值|
|useErrorBoundary|捕获错误|
|useTransition|过渡动画|
|useSpring|弹簧动画|
|useTransition|过渡动画|
|useMeasure|测量元素尺寸|
|useMediaQuery|监听媒体查询|
|useRaf|监听requestAnimationFrame|
|useIntersection|监听元素的可见性|
|use|让你读取类似于 Promise 或 context 的资源的值|

## 组件
|组件|描述|
|----|----|
|Fragment|可以将多个子节点包裹在一个节点中|
|StrictMode|开启严格模式，在开发环境下会打印一些警告|
|Profiler|性能分析|
|Suspense|延迟渲染|
|lazy|延迟加载|

## 事件
|事件|描述|
|----|----|
|onMouseEnter|鼠标进入|
|onMouseLeave|鼠标离开|
|onMouseOver|鼠标悬停|
|onMouseOut|鼠标移出|
|onClick|点击|
|onContextMenu|右键|
|onDoubleClick|双击|
|onDrag|拖拽|
|onDragEnd|拖拽结束|
|onDragEnter|拖拽进入|
|onDragExit|拖拽退出|
|onDragLeave|拖拽离开|
|onDragOver|拖拽悬停|
|onDragStart|拖拽开始|
|onDrop|拖拽结束|
|onMouseDown|鼠标按下|
|onMouseUp|鼠标抬起|
|onTouchCancel|触摸取消|
|onTouchEnd|触摸结束|
|onTouchMove|触摸移动|
|onTouchStart|触摸开始|
|onScroll|滚动|
|onWheel|滚轮|
|onKeyDown|按键按下|
|onKeyUp|按键抬起|
|onKeyPress|按键按下|
|onAbort|中止|
|onCanPlay|可以播放|
|onCanPlayThrough|可以播放完毕|
|onDurationChange|播放时长改变|
|onEmptied|播放结束|
|onEncrypted|加密|
|onEnded|播放结束|
|onError|播放错误|
|onLoadedData|加载数据|
|onLoadedMetadata|加载元数据|
|onPause|暂停|
|onPlay|播放|
|onPlaying|播放中|
|onProgress|播放进度|
|onRateChange|播放速度改变|
|onSeeked|播放位置改变|
|onSeeking|播放位置改变|
|onStalled|播放中止|
|onSuspend|暂停|
|onTimeUpdate|播放时间改变|
|onVolumeChange|音量改变|
|onWaiting|等待|
|onLoad|加载|
|onError|错误|
|onReset|重置|
|onSubmit|提交|
|onInvalid|无效|
|onLoadStart|开始加载|
|onLoadEnd|加载结束|
|onFocus|获得焦点|
|onBlur|失去焦点|
|onSelect|选中|
|onCopy|复制|
|onCut|剪切|
|onPaste|粘贴|

## 样式
|样式|描述|
|----|----|
|className|类名|
|style|样式|
|dangerouslySetInnerHTML|设置html|
|title|设置title|
|key|设置key|
|ref|设置ref|
|defaultChecked|默认选中|
|checked|选中|


## 组件通信
|组件通信|描述|
|----|----|
|props|父组件传递给子组件|
|state|组件内部状态|
|context|组件内部共享状态|
|ref|组件的引用|
|hooks|react hooks|

## 表单
|表单|描述|
|----|----|
|value|表单的值|
|defaultValue|表单的默认值|
|onChange|表单值改变时触发|
|onFocus|表单获得焦点时触发|
|onBlur|表单失去焦点时触发|
|onSubmit|表单提交时触发|

## 动画
|动画|描述|
|----|----|
|transition|过渡动画|
|animation|动画|
|spring|弹簧动画|
|keyframe|关键帧动画|
|config|动画配置|
|useTransition|过渡动画|
|useSpring|弹动画|

## 路由
|路由|描述|
|----|----|
|BrowserRouter|使用浏览器的URL|
|HashRouter|使用URL的hash|
|Route|路由|
|Switch|路由|
|Redirect|重定向|
|Link|链接|
|NavLink|导航链接|
|useParams|获取路由参数|

## 状态管理
|状态管理|描述|
|----|----|
|useState|保存状态|
|useReducer|保存状态，并且提供一个dispatch方法来更新状态|
|useContext|获取context中的值|
|useCallback|缓存函数|
|useMemo|缓存值|
|useRef|保存一个可变的ref|

## 错误处理
|错误处理|描述|
|----|----|
|try...catch|捕获错误|
|ErrorBoundary|捕获错误|
|useErrorBoundary|捕获错误|
|useCatch|捕获错误|
|useError|捕获错误|
|useErrorResetBoundary|捕获错误|

## 高阶组件
|高阶组件|描述|
|----|----|
|connect|连接组件|
|forwardRef|转发ref|
|memo|缓存组件|
|lazy|延迟加载|
|Suspense|延迟渲染|
|useCallback|缓存函数|
|useMemo|缓存值|


## 生命周期
|生命周期|描述|
|----|----|
|componentDidMount|在组件挂载后执行|
|componentDidUpdate|在组件更新后执行|
|componentWillUnmount|在组件卸载前执行|
|shouldComponentUpdate|在组件更新前执行，返回false则阻止组件更新|
|getDerivedStateFromProps|在组件挂载时执行，返回一个对象，该对象会作为组件的state|
|getSnapshotBeforeUpdate|在组件更新前执行，返回一个对象|