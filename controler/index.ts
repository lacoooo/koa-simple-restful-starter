const models = require('../models/pet.ts')

module.exports = {
    async index() {
        return await models.b()
    }
}