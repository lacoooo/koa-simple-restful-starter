import poolUse from './init'
import Seq from 'sequelize'

const name = 'todoList'
const rebuild = { force: true }
const setting = { timestamps: true }
const content = {
    todo: Seq.STRING
}

const todo = poolUse.define(name, content)

// 创建表
todo.sync(rebuild)

let b = async () => {
    try {
        let result = await todo.create({
            todo: 'N'
        })
        return { status: 1 }
    } catch {
        return { status: 0 }
    }
}

let c = async () => {
    try {
        return {
            data: await todo.findAll(),
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