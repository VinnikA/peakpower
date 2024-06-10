const { Order } = require('../../models');

async function createOrder(req, res) {
  const { body } = req;

  const istFirstOrder = !Boolean(
    await Order.Model.findOne({
      customerPhoneNumber: body.customerPhoneNumber,
    })
  );

  const discount = 0.1;
  const priceWithDiscount = body.totalPrice - body.totalPrice * discount;
  const finalPrice = istFirstOrder ? priceWithDiscount : body.totalPrice;

  const createdOrder = await Order.Model.create({
    ...body,
    totalPrice: finalPrice,
  });

  res.status(200).json({
    status: 'success',
    code: 200,
    data: createdOrder,
  });
}

module.exports = createOrder;
