const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true
    },
    icon: String,
    component: String, // 组件名称
    type: { type: Number, default: 1 }, // 菜单类型，1为菜单，2为按钮
    menuCode: String, // 权限标识
    path: { type: String, trim: true },
    status: { type: Boolean, default: true },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Menu', default: null }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

const Menu = mongoose.model('Menu', schema)

module.exports = Menu
