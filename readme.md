##for more information
- [Website](http://webnian.com/sec/webnianjs)
>欢迎访问webnianjs中文文档

## Install
```js
<script src="./webnian.js"></script>
<script>
  utils.isName('xxx')
  utils.isMobile('xxx')
  ...
</script>
```

## Install
```js
var utils = require('webnian')

utils.isName('xxx')
utils.isMobile('xxx')
...
```

##Getting started
##utils下的方法及参数:
- isName('xxx')               // 判断是不是姓名
- isChinese('xxx')            // 判断是不是中文
- isMobile('xxx')             // 判断是不是手机号
- isIdNum(idNum)              //判断是不是身份证号
- isEmail(str)              //判断是不是邮箱
- getUrlQueryString(url)      // 获取URL上传的参数
- copyObject(obj)             // 深拷贝对象
- linkTo(url)                 // 连接到某个网址
- download(url)               // 下载相关
- toDouble(n)                 // 单位数转2位数
- getBirthdayById(idNum)      // 通过身份证获取生日
- getGenderById(idNum)        // 通过身份证获取性别
- birthDayAge(birth)          // 通过年月日获得年龄
- mix(obj1, obj2)             // 合并2个对象
- cleanHtml(html)             //将HTML标签净化为纯文本
- random(str, end)            // 获取一个范围内的随机数
- date(date, ['yyyy-MM-dd hh:mm:ss'])    // 毫秒数转年月日，时分秒
- filterNumber(str)           // 过滤字符串返回纯数字
- scroll()                    // 获取滚动元素的滚动距离
- getStyle(ele, attr)         // 获取样式
- setCookie({name, value, expires, path, domain, secure})     // 设置cookie，传入一个对象
- getCookie(name)             // 获取cookie
- removeCookie(name)          // 删除cookie
- scrollUnique: scrollUnique,   // 子级元素滚动不影响父级
- querySelector: querySelector,   // dom缓存
- arrayEqual: arrayEqual,         // 判断2个数组是否绝对相等
- ajax: ajax,
- hasClass: hasClass,             // 判断元素是否有某个class样式
- addClass: addClass,             // 向某个元素添加class样式
- removeClass: removeClass,       // 删除元素class样式
- offset: offset,                 // 获取一个元素的距离文档(document)的位置，类似jQ中的offset()
- requestFullscreen: requestFullscreen,   // 全屏
- fullScreenStatus: fullScreenStatus,     // 判断是否全屏
- cancelFullScreen: cancelFullScreen,     // 退出全屏
- onFullScreenEvent: onFullScreenEvent,   // 全屏事件回调
- camelCase: camelCase,   //将一组字符串变成“骆驼”命名法的新字符串，如果该字符已经是“骆驼”命名法，则不变化。
- contains: contains,
- isArray: isArray,
- isNumeric: isNumeric,
- isFunction: isFunction,
- isWindow: isWindow,
- isDocument: isDocument,
- isObject: isObject,
- isPlainObject: isPlainObject,
- getUrlData: getUrlData,     //get请求传给后台的数据
- animationend: animationend,   //返回animationend事件
- compact: compact,   //创建一个新数组，包含原数组中所有的非假值元素。如false, null, 0, "", undefined, 和 NaN 都是假值
- endsWith: endsWith,
- escapeHTML: escapeHTML,   //<p class="greeting">Hello world!</p>
- isInWeixinApp: isInWeixinApp,   //判断是不是微信app环境
- loadScript: loadScript,     //加载js
- loadStyles: loadStyles,     //加载css
- repeat: repeat,     //字符串重复n次
- startsWith: startsWith,
- transitionend: transitionend,   //返回transitionend事件
- windowTop: windowTop,   //将top对象的网址自动导向被嵌入网页的网址
