# HTTP状态码及含义

1. **1xx：信息状态码**
    - 100 Continue 继续，⼀ 般在发送 `post` 请求时， 已发送了 `http header` 之后服务端将返回此信息，表示确认， 之后发送具体参数信息
2. **2xx：成功状态码**
    - 200 OK 请求成功
    - 201 Created 资源创建成功
    - 202 Accepted 请求已接受
    - 203 Non-Authoritative Information 请求信息已经接受，但未返回实际的资源
    - 204 No Content 服务器成功处理，但没有返回内容
    - 205 Reset Content 服务器成功处理，但没有返回内容，并且要求客户端重置文档视图
    - 206 Partial Content 服务器成功处理了部分 GET 请求
3. **3xx：重定向状态码**
    - 300 Multiple Choices 可以选择多个资源
    - 301 Moved Permanently 请求的资源已永久移动到新位置
    - 302 Found 请求的资源现在临时从不同的 `URI` 响应请求（临时性重定向）
    - 303 See Other 对应当前请求的响应可以在另一个 `URI` 上被找到（临时性重定向）
    - 304 Not Modified 如果资源没有改变，服务器返回此信息（存在协商缓存）
    - 305 Use Proxy 请求的资源必须通过代理访问
4. **4xx：客户端错误状态码**
    - 400 Bad Request 请求报文中存在语法错误
    - 401 Unauthorized 请求需要用户验证
    - 403 Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求
    - 404 Not Found 服务器无法根据客户端的请求找到资源（网页）
5. **5xx：服务器错误状态码**
    - 500 Internal Server Error 服务器内部错误
    - 502 Bad Gateway 网关错误
    - 503 Service Unavailable 服务器端暂时⽆法处理请求 ( 可能是过载或维护) 。
    - 504 Gateway Timeout 请求超时