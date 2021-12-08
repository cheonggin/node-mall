const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true
    },
    desc: String,
    permissionList: {
      checkedKeys: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Menu' }],
      halfCheckedKeys: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Menu' }]
    }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

const Role = mongoose.model('Role', schema)

module.exports = Role
