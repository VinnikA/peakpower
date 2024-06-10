const express = require('express');
const { orderCtrl } = require('../controllers');
const { validateBody } = require('../middlewares');
const { ctrlWrapper } = require('../helpers');
const { Order } = require('../models');

const router = express.Router();

router.post(
  '/',
  validateBody(Order.schemas.createSchema),
  ctrlWrapper(orderCtrl.createOrder)
);

router.patch(
  '/:orderId/archived',
  validateBody(Order.schemas.updateArchivedSchema),
  ctrlWrapper(orderCtrl.updateArchived)
);

router.get('/', ctrlWrapper(orderCtrl.listOrders));

router.put(
  '/:orderId',
  validateBody(Order.schemas.createSchema),
  ctrlWrapper(orderCtrl.updateOrder)
);

router.delete('/:orderId', ctrlWrapper(orderCtrl.deleteOrder));

module.exports = router;
