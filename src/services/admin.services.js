const AdminModel = require('../models/admin.model')

class AdminService {
  async create (admin_name, password) {
    const result = await AdminModel.create({ admin_name, password })
    return result
  }

  async getUserInfoByName (admin_name) {
    const result = await AdminModel.findOne({ admin_name })
    return result
  }
}

module.exports = new AdminService()
