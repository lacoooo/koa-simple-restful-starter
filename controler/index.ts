const models = require('../models/pet.ts')

module.exports = {
    async index() {
        let data = {b: '', c: ''}
        data.b = await models.b()
        data.c = await models.c()
        return data
    }
}