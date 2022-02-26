import connect from '../app/database'

import type { IMenuParams, IMenuDataType } from '../types/menu.types'

class MenuService {
  /**
   * 添加菜单
   * @param menuParams
   * @returns
   */
  public async create(menuParams: IMenuParams) {
    const { pid, name, type, path, icon, component, menu_code } = menuParams
    const statement = `INSERT INTO menu (pid, name, type, path, icon, component, menu_code) VALUES (?, ?, ?, ?, ?, ?, ?);`
    const [result] = await connect.execute<IMenuDataType[]>(statement, [
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

  /**
   * 获取菜单列表
   * @returns
   */
  public async getList() {
    const statement = `SELECT * FROM menu;`
    const [result] = await connect.execute<IMenuDataType[]>(statement)

    return result
  }
}

export default new MenuService()