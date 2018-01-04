/**
 * ============================ @前端开发小组-Batar =============================
 */
export default {
  /**
   * 格式化参数
   */
  fomartParams(obj) {
    let result = ''
    for (let it in obj) {
      result += it + '=' + obj[it] + '&';
    }
    result = result.substring(0, result.length - 1)
    return result;
  },
  /**
   * 判断是否为空对象
   */
  isEmptyObj(obj) {
    let is = false;
    if (obj) {
      if (JSON.stringify(obj) === '{}') {
        is = true;
      } else {
        is = false;
      }
    } else {
      is = true;
    }
    return is;
  },
  /**
   * 设置cookie
   */
  setCookie(c_name, value, expiredays) {
    let date = new Date();
    date.setTime(date.getTime() + expiredays * 1000);
    if (expiredays && expiredays != '') {
      document.cookie = `${c_name}=${value};expires=${date.toGMTString()}`;
    } else {
      document.cookie = `${c_name}=${value}`;
    }
  },
  /**
   * 获取cookie
   */
  getCookie(c_name) {
    if (document.cookie.length > 0) {
      let c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        let c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return "";
  },
  /**
   * 删除cookie
   */
  delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
    var cval = this.getCookie(name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
  },
  /**
   * 平台判断
   * 0：android
   * 1：ios
   * -1：未知平台
   */
  platform() {
    let currentPlatform = 0;
    let u = navigator.userAgent;
    let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
      currentPlatform = 0
    } else if (isiOS) {
      currentPlatform = 1
    } else {
      currentPlatform = -1
    }
    return currentPlatform;
  }


}
