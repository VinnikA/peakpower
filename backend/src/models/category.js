const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    name: { type: String, unique: true },
    parent: { type: Schema.Types.ObjectId, ref: 'category', default: null },
  },
  { versionKey: false, timestamps: true }
);

const Model = model('category', categorySchema);

module.exports = {
  Model,
};
