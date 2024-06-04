const {
  errors: { HttpError },
} = require('../helpers');

function validateBody(schema, errMessage) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const err = errMessage || error;

      next(new HttpError(400, err));
    }

    next();
  };
}

module.exports = validateBody;
