import * as Koa from 'koa'
import cookie from 'koa-cookie'
import * as compress from 'koa-compress'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import api from './router/index'

const app = new Koa()
const port: number = 8000
app
	.use(cors())
	.use(cookie())
	.use(compress({ threshold: 1024 }))
	.use(bodyParser())
	.use(api.routes())
	.use(api.allowedMethods())

	.listen(port)

console.log()
console.log(`Now server is listen ${port}`)