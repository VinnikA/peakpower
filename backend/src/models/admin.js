const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleSchemaValidateErrors } = require('../helpers');

const adminSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String, default: '' },
  },
  { versionKey: false, timestamps: false }
);

adminSchema.post('save', handleSchemaValidateErrors);

const Model = model('admin', adminSchema);

// ----------------VALIDATION SCHEMAS----------------

const signupSchema = Joi.object({
  username: Joi.string().min(8).max(50).required(),
  password: Joi.string().min(8).max(30).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(8).max(50).required(),
  password: Joi.string().min(8).max(30).required(),
});

const schemas = {
  signupSchema,
  loginSchema,
};

module.exports = {
  Model,
  schemas,
};
