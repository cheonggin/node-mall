const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true
    },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category', default: null }
  },
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

schema.virtual('children', {
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
  ref: 'Category'
})

const Category = mongoose.model('Category', schema)

module.exports = Category
