const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: false },
    category: { type: [String], required: true },
    price: { type: Number, required: true },
    availableQuantity: { type: Number, required: true },
    images: { type: Array, default: [] },
  },
  { versionKey: false, timestamps: false }
);

const Model = model('product', productSchema);

const schemas = {};

module.exports = {
  Model,
  schemas,
};
