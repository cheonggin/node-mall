const connect = require('../app/database')

class AdminService {
  async findUserByName(name) {
    const statement = `SELECT * FROM admin WHERE name = ?;`
    const [result] = await connect.execute(statement, [name])
    return result
  }

  async create(user) {
    const { name, password } = user
    const statement = `INSERT INTO admin (name, password) VALUES (?, ?);`

    const [result] = await connect.execute(statement, [name, password])
    return result
  }
}

module.exports = new AdminService()
