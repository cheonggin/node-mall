const connect = require('../app/database')

class MenuService {
  async create({ pid, name, type, path, icon, component, menu_code }) {
    const statement = `INSERT INTO menu (pid, name, type, path, icon, component, menu_code) VALUES (?, ?, ?, ?, ?, ?, ?);`
    const [result] = await connect.execute(statement, [
      pid,
      name,
      type,
      path,
      icon,
      component,
      menu_code
    ])
    return result
  }

  async getList() {
    const statement = `SELECT * FROM menu;`
    const [result] = await connect.execute(statement)

    return result
  }
}

module.exports = new MenuService()
