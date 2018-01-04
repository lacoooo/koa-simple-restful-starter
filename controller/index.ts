import models from '../models/test'

export default {
    async index() {
        let data = {b: {}, c: {}}
        data.b = await models.b()
        data.c = await models.c()
        return data
    }
}