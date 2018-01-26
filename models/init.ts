import config from './config'
import Sequelize from 'sequelize'

let pool = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 30000
        },
        define: {
            timestamps: false
        }
    })
export default pool