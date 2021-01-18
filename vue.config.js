
// vue.config.js
module.exports = {
    // 取消 eslint 验证
    lintOnSave: false,
    // publicPath: process.env.NODE_ENV === 'production'
    // ? '/production-sub-path/'
    // : '/api',
    devServer: {
    	// 项目启动端口之后会变成3000
        port: 8081,
        proxy: {  //配置跨域
            '/api': {
              target: 'https://dnsosoapub-de4.opc.oracleoutsourcing.com:443/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
              changOrigin: true,  //允许跨域
              pathRewrite: {
               
                '^/api': '' 
              }
            },
          }
    }
}

