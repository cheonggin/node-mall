const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true,
      minlength: 3
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      trim: true,
      minlength: 5,
      // 使用bcrypt对密码加密处理
      set: val => bcrypt.hashSync(val, 10)
    },
    is_admin: {
      type: Boolean,
      default: false
    },
    roleId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Role' }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

schema.pre('find', function (next) {
  this.populate('roleId')
  next()
})

const Admin = mongoose.model('Admin', schema)

module.exports = Admin
