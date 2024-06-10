const { Product } = require('../../models');
const { HttpError } = require('../../helpers');

const {
  Product: { schemas },
} = require('../../models');

const { BASE_URL } = process.env;

async function createProduct(req, res) {
  const { body, files } = req;
  const { error } = schemas.createSchema.validate(req.body);

  if (error) {
    files.forEach((img) => deleteOldImage(img.path));
    throw new HttpError(400, error);
  }

  const newProduct = { ...body };

  // const isProductExist = await Product.Model.findOne({ name: newProduct.name });

  // if (isProductExist) {
  //   throw new HttpError(409, 'product already exists');
  // }

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
