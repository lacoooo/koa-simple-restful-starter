import * as Koa from 'koa'
import cookie from 'koa-cookie'
import * as compress from 'koa-compress'
import * as bodyParser from 'koa-bodyparser'
import api from './router/index'

const app = new Koa()
const port: Number = 8000
app
	.use(cookie())
	.use(bodyParser())
	.use(compress({ threshold: 1024 }))
	.use(api.routes())

	.listen(port)

console.log()
console.log(`Now server is listen ${port}`)