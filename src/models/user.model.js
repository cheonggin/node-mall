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
    status: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

const User = mongoose.model('User', schema)

module.exports = User
