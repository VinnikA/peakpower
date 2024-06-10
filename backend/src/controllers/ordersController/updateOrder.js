const { isValidObjectId } = require('mongoose');
const { Order } = require('../../models');
const { HttpError } = require('../../helpers');

async function updateOrder(req, res) {
  const { orderId } = req.params;
  const { body } = req;

  if (!isValidObjectId(orderId)) {
    throw new HttpError(400, `${orderId} is not correct id format`);
  }

  const updatedOrder = await Order.Model.findByIdAndUpdate(orderId, body, {
    new: true,
  });

  if (!updatedOrder) {
    throw new HttpError(404, 'Order not found');
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: updatedOrder,
  });
}

module.exports = updateOrder;
