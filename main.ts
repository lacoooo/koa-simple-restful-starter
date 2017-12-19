const path = require("path")
const Koa = require('koa')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const router = require('./router/index.ts')
const app = new Koa()
const staticPath = './static'

app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(static(path.join(__dirname, staticPath)))

app.listen(80)
