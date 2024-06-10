const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

function validateId(req, res, next) {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(new HttpError(400, `${contactId} is not correct id format`));
  }
  next();
}

module.exports = validateId;
