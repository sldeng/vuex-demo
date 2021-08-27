function querystring(queryStr) {
    const [, query] = queryStr.split("?");
    if (query) {
      return query.split("&").reduce((pre, cur) => {
        const [key, val] = cur.split("=");
        if (pre[key]) {
          pre[key] = [...pre[key], decodeURIComponent(val)];
        } else {
          pre[key] = [decodeURIComponent(val)];
        }
        return pre;
      }, {});
    }
    return {};
  }

  /**
 * @request, 模拟返回一个随机字符串,
 * @cacheRequestFn 就是用了一个闭包, 缓存已请求的 url 和结果
 * 当后面有相同 url 时将不执行 request 方法, 返回上一次请求时产生的随机字符串
 */
const request = (url) => url + ":" + Math.random();
const cacheRequestFn = () => {
  const urls = {};
  return (url, callback) => {
    callback(urls[url] ? urls[url] : (urls[url] = request(url)));
  };
};
const cacheRequest = cacheRequestFn();
function repeat(func, times, wait) {
  // your code
  for(var i =0;i++;i<=wait){
    (function(){
      setTimeout(() => {
        console.log(i)
      }, times);
      
    })()
  }
}
const repeatFun = repeat(console.log, 4, 3000);
repeatFun("Hello World");