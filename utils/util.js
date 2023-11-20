const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function secondTOHms(data) {
  data /= 1000

  let hour = 0

  let second = (data % 60).toFixed(0).padStart(2, '0')

  let minute = Math.floor(data /= 60)

  if (60 <= minute) {
    hour = (data / 60).toFixed(0).padStart(2, '0')

    minute = minute % 60
  }

  minute = minute.toFixed(0).padStart(2, '0')

  return 0 === hour ? `${minute}:${second}` : `${hour}:${minute}:${second}`
}

function hmsTOSecond(data) {
  let arr = data.split(':'),
    res = 0

  arr.forEach((item, index) => {
    if (index === arr.length - 1) {
      res += parseFloat(item)
    } else {
      res += parseFloat(parseFloat(item) * 60)
    }
  })

  return res
}

/**
 * 示例
 */
// function test(resolve, reject) {
//   var timeOut = Math.random() * 2;
//   console.log('set timeout to: ' + timeOut + ' seconds.');
//   setTimeout(function () {
//     if (timeOut < 1) {
//       console.log('call resolve()...');
//       resolve('200 OK');
//     } else {
//       console.log('call reject()...');
//       reject('timeout in ' + timeout + ' seconds.');
//     }
//   }, timeout * 1000);
// }

// var p1 = new Promise(test);
// var p2 = p1.then(function (res) {
//   console.log('成功: ' + result);
// });
// var p3 = p1.catch(function (reason) {
//   console.log('失败: ' + reason);
// });

// 将 p1、p2、p3 串联起来，可以简化为
// var p4 = new Promise(test).then(function (res) {
//   console.log('成功: ' + result);
// }).catch(function (reason) {
//   console.log('失败: ' + reason);
// });

// 最终合并代码
// var p5 = new Promise((resolve, reject){
//   console.log('start new Promise...');

//   // 原 test 函数内代码
//   var timeOut = Math.random() * 2;
//   console.log('set timeout to: ' + timeOut + ' seconds.');
//   setTimeout(function () {
//     if (timeOut < 1) {
//       console.log('call resolve()...');
//       resolve('200 OK');
//     } else {
//       console.log('call reject()...');
//       reject('timeout in ' + timeout + ' seconds.');
//     }
//   }, timeout * 1000);
// }).then(function (res) { // 原 p4 代码
//   console.log('成功: ' + result);
// }).catch(function (reason) {
//   console.log('失败: ' + reason);
// });

// Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。要串行执行这样的异步任务，不用Promise需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：
// job1.then(job2).then(job3).catch(handleError);
// 其中，job1、job2和job3都是Promise对象。

// 使用 Promise 的时候，只是 new 了一个对象，并没有调用它，我们传进去的函数就已经执行了，这是需要注意的一个细节，所以在使用 Promise的时候，一般是包在一个函数中，在需要的时候再去运行这个函数
/**
 * 示例 - 结束
 */

// runAsyncHttpRequest(url, 'POST', data, header);
function runAsyncHttpRequest(url, method, data, header) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      header: header,
      timeout: 3000,
      method: method,
      dataType: 'json',
      responseType: 'text',
      enableHttp2: false,
      enableQuic: false,
      enableCache: false,
      enableChunked: false,
      forceCellularNetwork: false,
      redirect: 'follow',
      success(res) {

        console.log({ url, method, data, header });

        console.log('wx.request() 请求成功，返回内容为: ', res);
        resolve(res)
        /**
         * res.data        开发者服务器返回的数据
         * res.statusCode  开发者服务器返回的 HTTP 状态码
         * res.header      开发者服务器返回的 HTTP Response Header
         * res.cookies     开发者服务器返回的 cookies，格式为字符串数组
         * 
         * res.profile     网络请求过程中的一些调试信息
         * res.profile.redirectStart                     第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0
         * res.profile.redirectEnd                       最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0
         * res.profile.fetchStart                        组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前
         * res.profile.domainLookUpStart                 DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
         * res.profile.domainLookUpEnd                   DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等
         * res.profile.connectStart                      HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间
         * res.profile.connectEnd                        HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过
         * res.profile.SSLconnectionStart                SSL建立连接的时间,如果不是安全连接,则值为 0
         * res.profile.SSLconnectionEnd                  SSL建立完成的时间,如果不是安全连接,则值为 0
         * res.profile.requestStart                      HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间
         * res.profile.requestEnd                        HTTP请求读取真实文档结束的时间
         * res.profile.responseStart                     HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存
         * res.profile.responseEnd                       HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存
         * res.profile.rtt                               当次请求连接过程中实时 rtt
         * res.profile.estimate_nettype                  评估的网络状态 unknown, offline, slow 2g, 2g, 3g, 4g, last/0, 1, 2, 3, 4, 5, 6
         * res.profile.httpRttEstimate                   协议层根据多个请求评估当前网络的 rtt（仅供参考）
         * res.profile.transportRttEstimate              传输层根据多个请求评估的当前网络的 rtt（仅供参考）
         * res.profile.downstreamThroughputKbpsEstimate  评估当前网络下载的kbps
         * res.profile.throughputKbps                    当前网络的实际下载kbps
         * res.profile.peerIP                            当前请求的IP
         * res.profile.port                              当前请求的端口
         * res.profile.socketReused                      是否复用连接
         * res.profile.sendBytesCount                    发送的字节数
         * res.profile.receivedBytedCount                收到字节数
         * res.profile.protocol                          使用协议类型，有效值：http1.1, h2, quic, unknown
         * 
         * res.exception   网络请求过程中的一些异常信息
         * res.exception.retryCount  本次请求底层重试次数
         * res.exception.reasons     本次请求底层失败信息，所有失败信息均符合 Error 错误码
         */
      },
      fail(err) {
        reject(err)
        // err.errMsg 错误信息
        // err.errno  错误码
      },
      complete(data) { }
    });
  })
}

module.exports = {
  formatTime,
  secondTOHms,
  hmsTOSecond,
  runAsyncHttpRequest
}