const { Admin } = require('../../models');
const { HttpError } = require('../../helpers');

async function logout(req, res) {
  const { _id } = req.user;

  console.log('_id: ', _id);

  const user = await Admin.Model.findById(_id);

  console.log(user);

  if (!user) {
    throw new HttpError(401);
  }

  const logedOutUser = await Admin.Model.findByIdAndUpdate(
    _id,
    { token: '' },
    { new: true }
  );

  res.status(204).json();
}

module.exports = logout;
