import * as Koa from 'koa'
import * as compress from 'koa-compress'
import * as bodyParser from 'koa-bodyparser'
import api from './router/index'
const app = new Koa()

app
	.use(bodyParser())
	.use(compress({ threshold: 1024 }))
	.use(api.routes())

app.listen(80)
console.log('ok')
