##for more information
- [Website](http://webnian.com)
>欢迎访问webnian.com

## Install
```js
<script src="./webnian.js"></script>
<script>
  util.isName('xxx')
  utils.isMobile('xxx')
  ...
</script>
```

## Install
```js
var util = require('webnian')

util.isName('xxx')
utils.isMobile('xxx')
...
```

##Getting started
##util下的方法及参数:
- isName('xxx')               // 判断是不是姓名
- isChinese('xxx')            // 判断是不是中文
- isMobile('xxx')             // 判断是不是手机号
- isIdNum(idNum)              //判断是不是身份证号
- isEmail(str)              //判断是不是邮箱
- getUrlQueryString(url)      // 获取URL上传的参数
- copyObject(obj)             // 深拷贝对象
- linkTo(url)                 // 连接到某个网址
- cleanJSON(json)             // JSON序列化
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
- ajax({method, async, data})         // ajax请求
- scrollUnique(ele)         // 子级元素滚动不影响父级
- querySelector(name)       // dom缓存
- arrayEqual(arr1, arr2)       // 判断2个数组是否绝对相等
- hasClass(ele, cls)       // 判断元素是否有某个class样式
- addClass(ele, cls)       // 向某个元素添加class样式
- removeClass(ele, cls)       // 删除元素class样式
- offset(ele)       // 获取一个元素的距离文档(document)的位置，类似jQ中的offset()
- dedupe(arr)       // 数组去重
- requestFullscreen(ele)       // 全屏
- fullScreenStatus()       // 判断是否全屏
- cancelFullScreen()       // 退出全屏
- onFullScreenEvent(callback)       // 全屏事件回调
