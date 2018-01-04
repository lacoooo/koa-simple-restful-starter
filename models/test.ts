import poolUse from './init'
import Seq from 'sequelize'

const User = poolUse.define('user', {
    username: Seq.STRING,
    birthday: Seq.DATE
});

let b = async () => {
    try {
        let result = await User.create({
            username: 'N',
            birthday: new Date(1980, 6, 20)
        })
        return { status: 1 }
    } catch {
        return { status: 0 }
    }
}

let c = async () => {
    try {
        return {
            data: await User.findAll(),
            status: 1
        }
    } catch {
        return {
            data: {},
            status: 0
        }
    }

}

export default {
    b, c
}