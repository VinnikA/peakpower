const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Admin } = require('../../models');

const { HttpError } = require('../../helpers');

const { SECRET_KEY } = process.env;

async function login(req, res) {
  const { username, password } = req.body;

  console.log('http errors: ', HttpError);

  const user = await Admin.Model.findOne({ username });

  if (!user) {
    throw new HttpError(401, 'Email or password is wrong');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  console.log(`password: ${password} = user.password: ${user.password}`);
  console.log('isPasswordValid: ', isPasswordValid);

  if (!isPasswordValid) {
    throw new HttpError(401, 'Password is wrong');
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '23h' });

  const loggedInUser = await Admin.Model.findByIdAndUpdate(
    payload.id,
    { token },
    { new: true }
  );
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      username: loggedInUser.username,
      token: loggedInUser.token,
    },
  });
}

module.exports = login;
