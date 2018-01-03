import controller from '../controller/index'
import * as Router from 'koa-router'
const api = new Router()

api.get('/test', async (ctx, next) => {
    // ctx.body = await controller.index()
    ctx.body = ctx.cookie
})
    .post('/test', async (ctx, next) => {
        // ctx.body = await controller.index()
        ctx.body = ctx.cookie
    })

export default api