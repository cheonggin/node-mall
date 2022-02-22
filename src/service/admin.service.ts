import type { IAdmin, IAdminDataType } from '../types/admin.types'

import connect from '../app/database'

class AdminService {
  public async findAdminByName(name: string) {
    const statement = `SELECT * FROM admin WHERE name = ?;`
    const [result] = await connect.execute<IAdminDataType[]>(statement, [name])

    return result
  }

  public async create(user: IAdmin) {
    const { name, password } = user
    const statement = `INSERT INTO admin (name, password) VALUES (?, ?);`
    const [result] = await connect.execute<IAdminDataType[]>(statement, [
      name,
      password
    ])

    return result
  }

  public async getList(offset: string, limit: string) {
    const statement = `SELECT id, name, create_at, update_at FROM admin LIMIT ?, ?;`
    const [result] = await connect.execute<IAdminDataType[]>(statement, [
      offset,
      limit
    ])

    return result
  }
}

export default new AdminService()
