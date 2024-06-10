const { Schema, model } = require('mongoose');
const Joi = require('joi');

const orderSchema = new Schema({
  orderNumber: {
    type: String,
    required: true,
    default: () => `order_${Date.now()}`,
  },
  orderDate: { type: Date, required: true, default: () => new Date() },
  totalAmount: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  archived: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['processing', 'delivered', 'canceled'],
    default: 'processing',
  },
  freeShipping: { type: Boolean, default: false },
  customerName: { type: String, required: true },
  customerPhoneNumber: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'product', required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const Model = model('order', orderSchema);

const createSchema = Joi.object({
  orderNumber: Joi.string(),
  orderDate: Joi.date(),
  totalAmount: Joi.number().required(),
  totalPrice: Joi.number().required(),
  archived: Joi.boolean().default(false),
  status: Joi.string()
    .valid('processing', 'delivered', 'canceled')
    .default('processing'),
  freeShipping: Joi.boolean().default(false),
  customerName: Joi.string().max(50).required(),
  customerPhoneNumber: Joi.number().required(),
  deliveryAddress: Joi.string().max(150).required(),
  products: Joi.array(),
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
