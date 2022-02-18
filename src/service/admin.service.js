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

  async getList(offset, limit) {
    const statement = `SELECT id, name, create_at, update_at FROM admin LIMIT ?, ?;`
    const [result] = await connect.execute(statement, [offset, limit])

    return result
  }

  async deleteById(id) {
    const statement = `DELETE FROM admin WHERE id = ?;`
    const [result] = await connect.execute(statement, [id])

    return result
  }
}

module.exports = new AdminService()
