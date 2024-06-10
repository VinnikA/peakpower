const { isValidObjectId } = require('mongoose');
const { Product } = require('../../models');
const { HttpError } = require('../../helpers');

async function updateArchived(req, res) {
  const { body } = req;
  const { productId } = req.params;

  if (!isValidObjectId(productId)) {
    throw new HttpError(400, `${productId} is not correct id format`);
  }

  const updatedFieldArchived = await Product.Model.findByIdAndUpdate(
    productId,
    body,
    { new: true }
  );

  if (!updateArchived) {
    throw new HttpError(404, `product with id ${productId} not found`);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: updatedFieldArchived,
  });
}

module.exports = updateArchived;
