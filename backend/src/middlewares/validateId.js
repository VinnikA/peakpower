const { isValidObjectId } = require('mongoose');

const {
  errors: { HttpError },
} = require('../helpers');

function validateId(req, res, next) {}

module.exports = validateId;
