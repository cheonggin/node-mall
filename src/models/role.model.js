const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true
    },
    desc: String
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

const Role = mongoose.model('Role', schema)

module.exports = Role
