var util = (function() {
  function getUrlQueryString(url) {
    var reg = new RegExp("(^|&)" + url + "=([^&]*)(&|$)", "i");
		var arr = window.location.hash.split('?')
    var r = arr.length > 1 ? arr[1].match(reg) : null
    return r ? decodeURIComponent(r[2]) : ''
  }

  return {
    getUrlQueryString: getUrlQueryString
  }
})
