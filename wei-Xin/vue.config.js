const env = process.env.NODE_ENV;

let target = "";
// 默认是本地环境
if (env === "production") {
  // 生产环境
  target = "http://localhost:80/";
  process.env.VUE_APP_API = "http://localhost:80/";
} else if (env === "test") {
  // 测试环境
  target = "http://localhost:8080/html/";
} else {
  // 本地环境
  target = "http://localhost:9000/html/";
}

module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    disableHostCheck: false,
    // host: "localhost",
    host: "localhost",
    port: 9000,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: {
      "/api": {
        //将www.exaple.com印射为/api
        ws: true, //如果要代理 websockets，配置这个参数
        target: target, // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "" //需要rewrite的,
        }
      }
    }
  }
};
