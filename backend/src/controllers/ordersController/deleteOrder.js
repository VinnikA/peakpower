const { isValidObjectId } = require('mongoose');
const { Order } = require('../../models');
const { HttpError } = require('../../helpers');

async function deleteOrder(req, res) {
  const { orderId } = req.params;

  if (!isValidObjectId(orderId)) {
    throw new HttpError(400, `${orderId} is not correct id format`);
  }

  const deletedOrder = await Order.Model.findByIdAndDelete(orderId);

  if (!deletedOrder) {
    throw new HttpError(404, 'Order not found');
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: deletedOrder,
  });
}

module.exports = deleteOrder;
