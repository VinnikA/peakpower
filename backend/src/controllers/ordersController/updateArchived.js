const { isValidObjectId } = require('mongoose');
const { Order } = require('../../models');
const { HttpError } = require('../../helpers');

async function updateArchived(req, res) {
  const { body } = req;
  const { orderId } = req.params;

  if (!isValidObjectId(orderId)) {
    throw new HttpError(400, `${orderId} is not correct id format`);
  }

  const updatedFieldArchived = await Order.Model.findByIdAndUpdate(
    orderId,
    { ...body },
    { new: true }
  );

  if (!updateArchived) {
    throw new HttpError(404, `order with id ${orderId} not found`);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: updatedFieldArchived,
  });
}

module.exports = updateArchived;
