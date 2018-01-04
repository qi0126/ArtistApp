/**
 * ============================ @前端开发小组-Batar =============================
 */
import Vue from 'vue';
import utils from '@/commons/Batar/utils';
let iosBridge = '';
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}
function init(callback) {
  if (window.WebViewJavascriptBridge) {
    callback(WebViewJavascriptBridge);
  } else {
    document.addEventListener(
      "WebViewJavascriptBridgeReady",
      function () {
        callback(WebViewJavascriptBridge);
      },
      false
    );
  }
}
let plat = utils.platform();
if (plat == 0) {
  init(function (bridge) {
    bridge.init(function (message, responseCallback) {
      responseCallback(data);
    });
  });
} else if (plat == 1) {
  setupWebViewJavascriptBridge(function (bridge) {
    iosBridge = bridge;
  })
}
function callNative(fn, params, cb) {
  let plat = utils.platform();
  if (plat == 0) {
    window.WebViewJavascriptBridge.callHandler(fn, params, cb);
  } else if (plat == 1) {
    iosBridge.callHandler(fn, params, cb);
  }
}
Vue.prototype.callNative = callNative;
