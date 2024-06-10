const { Schema, model } = require('mongoose');
const Joi = require('joi');

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    type: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    regularPrice: { type: Number, required: true },
    specialPrice: { type: Number, required: false },
    freeShipping: { type: Boolean, default: false },
    discountOnSecondItem: { type: Boolean, default: false },
    discountOnFirstOrder: { type: Boolean, default: false },
    availableQuantity: { type: Number, required: true },
    archived: { type: Boolean, default: false },
    images: { type: Array, default: [] },
  },
  { versionKey: false, timestamps: false }
);

const Model = model('product', productSchema);

const createSchema = Joi.object({
  name: Joi.string().max(100).required(),
  description: Joi.string().max(1000),
  type: Joi.string().max(50).required(),
  category: Joi.string().max(50).required(),
  subCategory: Joi.string().max(50).required(),
  regularPrice: Joi.number().required(),
  specialPrice: Joi.number().required(),
  freeShipping: Joi.boolean().default(false),
  discountOnSecondItem: Joi.boolean().default(false),
  discountOnFirstOrder: Joi.boolean().default(false),
  archived: Joi.boolean().default(false),
  availableQuantity: Joi.number().required(),
});

const updateArchivedSchema = Joi.object({
  archived: Joi.boolean().required(),
});

const schemas = {
  createSchema,
  updateArchivedSchema,
};

module.exports = {
  Model,
  schemas,
};
