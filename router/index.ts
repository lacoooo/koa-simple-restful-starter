import controller from '../controller/index'
import * as Router from 'koa-router'
const api = new Router()

api.get('/test', async (ctx, next) => {
    // ctx.body = await controller.index()
    ctx.body = '122'
})

export default api