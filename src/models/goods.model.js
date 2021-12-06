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
    price: String,
    desc: String
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

schema.pre('find', function (next) {
  this.populate('parent')
  next()
})

const Goods = mongoose.model('Goods', schema)

module.exports = Goods
