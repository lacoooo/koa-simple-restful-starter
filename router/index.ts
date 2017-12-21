const controler = require('../controler/index.ts')
const Router = require('koa-router')
const route = new Router()

route.get('/test', async (ctx, next) => {
    ctx.body = await controler.index()
})

module.exports = route