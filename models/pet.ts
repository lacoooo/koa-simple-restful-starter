const poolUse = require('./init.ts')
const Seq = require('sequelize')

let Pet = poolUse.define('pet', {
    id: {
        type: Seq.STRING(50),
        primaryKey: true
    },
    name: Seq.STRING(100),
    gender: Seq.BOOLEAN,
    birth: Seq.STRING(10),
    createdAt: Seq.BIGINT,
    updatedAt: Seq.BIGINT,
    version: Seq.BIGINT
}, {
        timestamps: false
    })

let b = async () => {
    let pets = await Pet.findAll({
        where: {
            name: 'haha'
        }
    })
    console.log(JSON.stringify({ a: 122 }))
    return JSON.stringify({ a: 122 })
}

module.exports = {
    b
}