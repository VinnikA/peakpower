const { isValidObjectId } = require('mongoose');
const { Product } = require('../../models');
const { HttpError, deleteImageFromServer } = require('../../helpers');

const { BASE_URL } = process.env;

async function updateProduct(req, res) {
  const { body, files } = req;
  const { productId } = req.params;

  const { error } = Product.schemas.createSchema.validate(body);

  if (error) {
    if (files.length) {
      files.forEach((img) => deleteImageFromServer(img.path));
    }
    throw new HttpError(400, error);
  }

  if (!isValidObjectId(productId)) {
    if (files.length) {
      files.forEach((img) => deleteImageFromServer(img.path));
    }
    throw new HttpError(400, `${productId} is not correct id format`);
  }

  const currentProduct = await Product.Model.findById(productId);
  const productToUpdate = { ...body, images: [] };

  if (!currentProduct) {
    if (files.length) {
      files.forEach((img) => deleteImageFromServer(img.path));
    }
    throw new HttpError(404, 'Product  to update not found');
  }

  if (files.length) {
    files.forEach((img) => productToUpdate.images.push(BASE_URL + img.path));
  }

  const updatedProduct = await Product.Model.findByIdAndUpdate(
    productId,
    productToUpdate,
    { new: true }
  );

  if (currentProduct.images) {
    currentProduct.images.forEach((image) => {
      if (!updatedProduct.images.includes(image)) {
        deleteImageFromServer(image);
      }
    });
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: updatedProduct,
  });
}

module.exports = updateProduct;
