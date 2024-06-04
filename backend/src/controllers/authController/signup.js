const bcrypt = require('bcrypt');
const { Admin } = require('../../models');

const {
  errors: { HttpError },
} = require('../../helpers');

async function signup(req, res) {
  const { username, password } = req.body;

  const user = await Admin.Model.findOne({ username });

  if (user) {
    throw new HttpError(409, 'username is already in use ');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await Admin.Model.create({
    ...req.body,
    password: hashPassword,
  });

  res.status(200).json({
    status: 'success',
    code: 200,
    data: newUser,
  });
}

module.exports = signup;
