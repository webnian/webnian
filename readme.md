#引用方式一
```js
<script src="./webnian.js"></script>
<script>
  util.isName('xxx')
  utils.isMobile('xxx')
  ...
</script>
```

##引用方式二
```js
var util = require('webnian')

util.isName('xxx')
utils.isMobile('xxx')
...
```


###util下的方法及参数:
<p>isName('xxx')               // 判断是不是姓名</p>
<p>isChinese('xxx')            // 判断是不是中文</p>
<p>isMobile('xxx')             // 判断是不是手机号</p>
<p>isIdNum(idNum)              //判断是不是身份证号</p>
<p>isEmail(str)              //判断是不是邮箱</p>
<p>getUrlQueryString(url)      // 获取URL上传的参数</p>
<p>copyObject(obj)             // 深拷贝对象</p>
<p>linkTo(url)                 // 连接到某个网址</p>
<p>cleanJSON(json)             // JSON序列化</p>
<p>download(url)               // 下载相关</p>
<p>toDouble(n)                 // 单位数转2位数</p>
<p>getBirthdayById(idNum)      // 通过身份证获取生日</p>
<p>getGenderById(idNum)        // 通过身份证获取性别</p>
<p>birthDayAge(birth)          // 通过年月日获得年龄</p>
<p>mix(obj1, obj2)             // 合并2个对象</p>
<p>cleanHtml(html)             //将HTML标签净化为纯文本</p>
<p>random(str, end)            // 获取一个范围内的随机数</p>
<p>date(date, ['yyyy-MM-dd hh:mm:ss'])    // 毫秒数转年月日，时分秒</p>
<p>filterNumber(str)           // 过滤字符串返回纯数字</p>
<p>scroll()                    // 获取滚动元素的滚动距离</p>
<p>getStyle(ele, attr)         // 获取样式</p>
<p>setCookie({name, value, expires, path, domain, secure})     // 设置cookie，传入一个对象</p>
<p>getCookie(name)             // 获取cookie</p>
<p>removeCookie(name)          // 删除cookie</p>
<p>ajax({method, async, data})         // ajax请求</p>
<p>scrollUnique(ele)         // 子级元素滚动不影响父级</p>
<p>querySelector(name)       // dom缓存</p>
<p>arrayEqual(arr1, arr2)       // 判断2个数组是否绝对相等</p>
<p>hasClass(ele, cls)       // 判断元素是否有某个class样式</p>
<p>addClass(ele, cls)       // 向某个元素添加class样式</p>
<p>removeClass(ele, cls)       // 删除元素class样式</p>
<p>offset(ele)       // 获取一个元素的距离文档(document)的位置，类似jQ中的offset()</p>
<p>dedupe(arr)       // 数组去重</p>
<p>requestFullscreen(ele)       // 全屏</p>
<p>fullScreenStatus()       // 判断是否全屏</p>
<p>cancelFullScreen()       // 退出全屏</p>
<p>onFullScreenEvent(callback)       // 全屏事件回调</p>
