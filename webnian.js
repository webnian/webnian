var util = (function() {
  function getUrlQueryString(url) {
    var reg = new RegExp("(^|&)" + url + "=([^&]*)(&|$)", "i");
		var arr = window.location.hash.split('?')
    var r = arr.length > 1 ? arr[1].match(reg) : null
    return r ? decodeURIComponent(r[2]) : ''
  }

  function copyObject(obj) {
    var result = {}
    for (var i in obj) {
      result[i] = (typeof obj[i]) == 'object' ? copyObject(obj[i]) : obj[i]
    }
    return result
  }

  function linkTo(url) {
    var a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.click()
  }

  function cleanJSON(json) {
    return JSON.parse(JSON.stringify(json))
  }

  function download(url, param) {
    url = url + '?'
    for (var i in param) {
      url += i + '=' + param[i] + '&'
    }
    var a = document.createElement( 'a')
    a.href = url
    a.target = '_blank'
    //a.download = fileName
    a.click()
  }

  function toDouble(n) {
    n = n.toString()
    return n[1] ? n : '0'+n
  }

  function getBirthdayById(id, split) {
		// if (!this.isIdNum(id)) return

    var tmpStr = ''
    var split = split || '-'
    id = id.toString()
    if (id.length == 15) {
      tmpStr = "19" + id.substring(6, 12)
      tmpStr = tmpStr.substring(0, 4) + split + tmpStr.substring(4, 6) + split + tmpStr.substring(6)
    } else {
      tmpStr = id.substring(6, 14)
      tmpStr = tmpStr.substring(0, 4) + split + tmpStr.substring(4, 6) + split + tmpStr.substring(6)
    }
    return tmpStr
	}

  function getGenderById(id) {
		if (!this.isIdNum(id)) return ''

    id = id.toString()
    if (id.length === 18) {
      return id.substr(16, 1) % 2 == 1 ? 1 : 2
    } else if (id.length === 15) {
      return id.substr(14, 1) % 2 == 1 ? 1 : 2
    }
	}

  function isName(name) {
    return (/^[a-zA-Z\u4e00-\u9fa5]{0,30}$/).test(name)
  }

  function isMobile(n) {
    return (/^1(3|4|5|7|8)\d{9}$/).test(n)
  }

  function birthDayAge(birth) {
		if (!birth) return ''

		if (birth) {
			var dis = new Date().getFullYear() - new Date(birth).getFullYear()
			var disM = new Date().getMonth() - new Date(birth).getMonth()
			var disD = new Date().getDate() - new Date(birth).getDate()

			if (dis < 0) {
				return ''

			} else if (dis == 0) {
				if (disM < 0) {
					return ''
				} else if (disM > 0) {
					return dis
				} else if (disM == 0) {
					if (disD >= 0) {
						return 0
					} else {
						return ''
					}
				}

			} else if (dis > 0) {
				if (disM > 0) {
					return dis
				} else if (disM == 0) {
					return disD >= 0 ? dis : dis - 1
				} else if (disM < 0) {
					return dis - 1
				}
			}
		}
	}

  function mix(o, n) {
    var obj = o || {}
    for (var i in n) {
      if (n.hasOwnProperty(i) && !o.hasOwnProperty(i)) o[i] = n[i]
    }

    return obj
  }

  return {
    getUrlQueryString: getUrlQueryString,        // 获取URL上传的参数
    copyObject: copyObject,           // 深拷贝对象
    linkTo: linkTo,       // 连接到某个网址
    cleanJSON: cleanJSON,     // JSON序列化
    download: download,     // 下载相关
    toDouble: toDouble,     // 单位数转2位数
    getBirthdayById: getBirthdayById,    // 通过身份证获取生日
    getGenderById: getGenderById,       // 通过身份证获取性别
    isName: isName,           // 判断是不是姓名
    isMobile: isMobile,         // 判断是不是手机号
    birthDayAge: birthDayAge,   // 通过年月日获得年龄
    mix: mix,           // 合并2个对象
  }
})()
