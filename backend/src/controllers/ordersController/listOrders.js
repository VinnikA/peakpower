const { Order } = require('../../models');

async function listOrders(req, res) {
  const { customerPhoneNumber, page = 1, limit = 10 } = req.query;

  skip = (page - 1) * limit;
  const filters = { customerPhoneNumber };

  const orders = (
    await Order.Model.find(
      { ...filters },
      {},
      {
        skip,
        limit,
      }
    ).populate('products.product')
  ).reverse();
  res.status(200).json({ status: 'success', code: 200, data: orders });
}

module.exports = listOrders;
