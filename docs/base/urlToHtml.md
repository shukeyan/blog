# 从浏览器地址栏输入url到显示页面的步骤

## 基础版本
1. 浏览器输入URL，交给DNS进行解析获取到真实的ip地址，向服务器发起请求
2. 服务器接收到请求，解析请求，根据请求的url，找到对应的资源，返回给浏览器
3. 浏览器接收服务器响应的资源，对响应资源进行语法解析，生成内部数据结构（如：HTML的dom树，css的CSSOM树）
4. 载入解析到的资源文件，渲染页面，完成

## 详细版本

1. 在浏览器中输入url地址
2. 浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤
    - 如果资源未缓存，发起新请求
    - 如果已缓存，检查是否足够新鲜，足够新鲜直接提供给客户端（不发送请求，返回200，直接使用缓存），否则与服务器进行验证。
    - 检查新鲜度，一般通过http的这两个请求头进行控制`Expires`和`Cahe-Control`:
        > 1. HTTP1.0提供Expires，值是一个绝对时间（为本地计算机的时间）表示缓存的新鲜度。
        > 2. HTTP1.1增加了`Cahe-Control:max-age=xxx`,值是以`秒`为单位的最大新鲜时间
3. 浏览器解析URL，获取协议、主机、端口、path
4. 浏览器组装一个HTTP（GET）请求报文
5. 浏览器获取主机IP地址，过程如下：
    - 浏览器缓存
    - 本机缓存
    - hosts文件
    - 路由器缓存
    - ISP DNS缓存
    - DNS递归缓存（可能存在负载均衡导致每次IP不一样）
6. 打开⼀个socket与目标IP地址，端口建立TCP链接，三次握手如下：
    - 客户端发送⼀个TCP的SYN=1，Seq=X的包到服务器端⼝
    - 服务器发回SYN=1， ACK=X+1， Seq=Y的响应包
    - 客户端发送ACK=Y+1， Seq=Z
7. TCP链接建立后发送`HTTP`请求
8. 服务器接受请求并解析，将请求转发到服务程序， 如虚拟主机使用`HTTP`，`Host`头部判断请求的服务程序
9. 服务器检查`HTTP`请求头是否包含缓存验证信息如果验证缓存新鲜， 返回304等对应状态码（协商缓存）
10. 处理程序读取完整请求并准备`HTTP`响应， 可能需要查询数据库等操作
11. 服务器将响应报文通过TCP连接发送回浏览器
12. 浏览器接收`HTTP`响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次挥手如下：（主动方：客户端，被动方：服务器）
    - 主动方发送一个FIN=1，Seq=X的包到被动方
    - 被动方发回ACK=X+1的包到主动方
    - 被动方发送FIN=1，Seq=Y的包到主动方
    - 主动方发送ACK=Y+1的包到被动方
    <img src="/base/tcp-close.png" alt="tcp-close" />
13. 浏览器检查响应状态吗：是否为1XX， 3XX， 4XX， 5XX， 这些情况处理与2XX不同
14. 如果资源可缓存， 进行缓存
15. 对响应进⾏解码 (例如gzip压缩)
16. 根据资源类型决定如何处理 (假设资源为HTML⽂档)
17. 解析HTML文档，构件DOM树，下载style资源，构造CSSOM树，执行js脚本， 这些操作没有严格的先后顺序， 以下分别解释:
18. 构建DOM树：
    - Tokenizing：根据HTML规范将字符流解析为标记
    - Lexing：词法分析将标记转换为对象并定义属性和规则
    - DOM construction：根据HTML标记关系将对象组成DOM树
19. 解析过程中遇到图片 、样式表 、js⽂件，启动下载
20. 构建CSSOM树：
    - Tokenizing：字符流转换为标记流
    - Node：根据标记创建节点
    - CSSOM：节点创建CSSOM树
21. 根据DOM树和CSSOM树构建渲染树
    - 从DOM树的根节点遍历所有可见节点，不可⻅节点包括：
        > 1)、script , meta 这样本身不可⻅的标签 。    
        > 2)、被css隐藏的节点， 如 display: none。
    - 对每⼀个可⻅节点，找到恰当的CSSOM规则并应用
    - 发布可视节点的内容和计算样式
22. js解析如下：
    - 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时`document.readystate`为`loading`
    - HTML解析器遇到没有`async`和`defer`的script时，将他们添加到文档中，然后执⾏⾏内或外部脚本 。这些脚本会同步执⾏， 并且在脚本下载和执⾏时解析器会暂停 。这样就可以用document.write()把文本插⼊ 到输⼊流中 。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容
    - 当解析器遇到设置了`async`属性的script时， 开始下载脚本并继续解析文档 。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载 。异步脚本禁止使用document.write()， 它们可以访问自⼰script和之前的文档元素
    - 当文档完成解析，`document.readState`变成`interactive`
    - 所有`defer`脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树， 禁止使用document.write()
    - 浏览器在Document对象上触发`DOMContentLoaded`事件
    - 此时文档完全解析完成， 浏览器可能还在等待如图片等内容加载， 等这些内容完成载入并且所有异步脚本完成载入和执行，document.readState变为`complete`，window触发load事件
23. 显示页面 ( HTML解析过程中会逐步显示页面)