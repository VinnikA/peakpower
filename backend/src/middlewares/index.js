const authenticate = require('./authtenticate');
const validateId = require('./validateId');
const validateBody = require('./validateBody');
const imageUpload = require('./imgUpload');

module.exports = {
  authenticate,
  validateId,
  validateBody,
  imageUpload,
};
