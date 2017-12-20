const poolUse = require('./init.ts')
const Seq = require('sequelize')

const User = poolUse.define('user', {
    username: Seq.STRING,
    birthday: Seq.DATE
});

let b = async () => {
    await poolUse.sync()
    let result = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    })
    return result.toJSON()
}

let c = async () => {
    return await User.findAll()
}

module.exports = {
    b,
    c
}