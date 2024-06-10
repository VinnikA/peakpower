const { Product } = require('../../models');
const { isValidObjectId } = require('mongoose');

const { deleteImageFromServer, HttpError } = require('../../helpers');

async function deleteProduct(req, res) {
  const { productId } = req.params;

  if (!isValidObjectId(productId)) {
    throw new HttpError(400, `${productId} is not correct id format`);
  }

  const productToDelete = await Product.Model.findByIdAndDelete(productId);

  if (!productToDelete) {
    throw new HttpError(404, 'Product not found');
  }

  productToDelete.images.forEach((img) => deleteImageFromServer(img));

  res.status(200).json({
    status: 'success',
    code: 200,
    data: productToDelete,
  });
}

module.exports = deleteProduct;
