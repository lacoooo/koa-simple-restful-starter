const config =  require('./config.ts')
const Sequelize = require('sequelize')

let pool = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

module.exports = pool