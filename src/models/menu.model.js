const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true
    },
    type: { type: Number, default: 1 }, // 菜单类型，1为菜单，2为按钮
    path: { type: String, trim: true },
    status: { type: Boolean, default: true },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Menu' }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

schema.virtual('children', {
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
  ref: 'Menu'
})

schema.pre('find', function (next) {
  this.populate('parent')
  next()
})

const Menu = mongoose.model('Menu', schema)

module.exports = Menu
