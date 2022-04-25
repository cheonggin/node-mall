import AlipaySdk from 'alipay-sdk'

const alipaySdk = new AlipaySdk({
  // 开放平台上创建应用时生成的 appId
  appId: process.env.APP_ID,

  // 应用私钥字符串
  privateKey: process.env.PRIVATE_KEY,

  // 支付宝公钥，需要对结果验签时候必填
  alipayPublicKey: process.env.ALIPAY_PUBLIC_KEY,

  // 支付宝网关地址 ，沙箱环境下使用时需要修改
  gateway: process.env.GATEWAY
})

export default alipaySdk
