const { Product } = require('../../models');
const fs = require('fs');
const path = require('path');
const {
  errors: { HttpErrors },
} = require('../../helpers');

const { BASE_URL } = process.env;

const deleteOldImage = (oldImage) => {
  const lastImageName = oldImage.split('uploads')[1];
  const oldImagePath = path.join(__dirname, '../../', 'uploads', lastImageName);
  try {
    fs.unlink(oldImagePath, function (err) {});
  } catch (err) {
    console.log(err);
  }
};

async function createProduct(req, res) {
  const { body, files } = req;

  const newProduct = { ...body };

  const isProductExist = await Product.Model.findOne({ name: newProduct.name });

  if (isProductExist) {
    throw new HttpErrors(409, 'product already exists');
  }

  if (files.length) {
    newProduct.images = files.map((file) => BASE_URL + file.path);
  }

  const createdProduct = await Product.Model.create({ ...newProduct });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      product: createdProduct,
    },
  });
}

module.exports = createProduct;
