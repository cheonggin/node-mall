const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true
    },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
    link: String,
    price: Number,
    desc: String
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

const Good = mongoose.model('Good', schema)

module.exports = Good
