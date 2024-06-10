const jwt = require('jsonwebtoken');

const { Admin } = require('../models');

const { HttpError } = require('../helpers');

const { SECRET_KEY } = process.env;

async function authenticate(req, res, next) {
  const { authorization = '' } = req.headers;
  console.log('token: ', authorization);
  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer') {
    throw new HttpError(401, 'Invalid authoriztion format');
  }

  if (!token) {
    throw new HttpError(401, 'Token not found');
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    console.log('id: ', id);
    const user = await Admin.Model.findById(id);

    if (!user || !user.token || user.token !== token) {
      throw new HttpError(401, 'User is not authorized');
    }

    req.user = user;

    next();
  } catch {
    next(new HttpError(401));
  }
}

module.exports = authenticate;
