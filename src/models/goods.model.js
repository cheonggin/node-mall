const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true
    },
    link: String,
    price: Number
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

const Good = mongoose.model('Good', schema)

module.exports = Good
