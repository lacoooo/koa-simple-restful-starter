const path = require("path")
const compress = require('koa-compress')
const Koa = require('koa')
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser')
const router = require('./router/index.ts')
const app = new Koa()
const staticPath = path.join(__dirname, './public')

app
    .use(bodyParser())
    // gzip
    .use(compress({
        filter: function (content_type) {
            return /text/i.test(content_type)
        },
        threshold: 1024,
        flush: require('zlib').Z_SYNC_FLUSH
      }))
    .use(router.routes())
    .use(router.allowedMethods())
    // 静态文件
    .use(staticCache(staticPath, { maxAge: 365 * 24 * 60 * 60 }))
    
app.listen(80)
