const { Product } = require('../../models');

async function listProducts(req, res) {
  const listProducts = await (await Product.Model.find()).reverse();

  res.status(200).json({ status: 'success', code: 200, data: listProducts });
}

module.exports = listProducts;
