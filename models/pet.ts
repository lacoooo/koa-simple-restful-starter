import poolUse from './init'
import Seq from 'sequelize'

const User = poolUse.define('user', {
    username: Seq.STRING,
    birthday: Seq.DATE
});

let b = async () => {
    await poolUse.sync()
    let result = await User.create({
        username: 'N',
        birthday: new Date(1980, 6, 20)
    })
    return result.toJSON()
}

let c = async () => {
    return await User.findAll()
}

export default {
    b,
    c
}