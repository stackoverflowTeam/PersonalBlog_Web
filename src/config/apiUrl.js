
const devApiUrl = "http://192.168.49.97:8088"; //本地开发环境
const buildDevApiUrl = "http://192.168.48.192:9088"; //打包开发环境
const buildTestApiUrl = "http://192.168.48.192:9188"; //打包测试环境
const buildProApiUrl = "https://api.xxx.cn"; //打包正式环境
const serverApiUrl="http://localhost:9090";//请求后端服务器路径
const qiNiu = "http://qd3ga7r8w.bkt.clouddn.com";//图片用

let useApiUrl;

if (process.env.NODE_ENV === "development") {
  useApiUrl = devApiUrl;
} else {
  //production
  switch (process.env.VUE_APP_MODE) {
    case "buildDev":
      useApiUrl = buildDevApiUrl;
      break;
    case "buildTest":
      useApiUrl = buildTestApiUrl;
      break;
    default:
      useApiUrl = buildProApiUrl;
      break;
  }
}

export { useApiUrl ,serverApiUrl,qiNiu}; //可以导出更多需要不同环境区分的url
