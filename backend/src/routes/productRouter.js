const express = require('express');
const { productsCtrl } = require('../controllers');
const { imageUpload, validateBody } = require('../middlewares');
const {
  Product: { schemas },
} = require('../models');

const { ctrlWrapper } = require('../helpers');

const router = express.Router();

router.get('/', ctrlWrapper(productsCtrl.listProducts));

router.post(
  '/',
  imageUpload.array('images'),
  ctrlWrapper(productsCtrl.createProduct)
);

router.delete('/:productId', ctrlWrapper(productsCtrl.deleteProduct));

router.put(
  '/:productId',
  imageUpload.array('images'),
  ctrlWrapper(productsCtrl.updateProduct)
);

router.patch(
  '/:productId/archived',
  validateBody(schemas.updateArchivedSchema),
  ctrlWrapper(productsCtrl.updateArchived)
);

// router.get('/categories', ctrlWrapper(productsCtrl.listCategories));
// router.post('/categories', ctrlWrapper(productsCtrl.createCategory));

module.exports = router;
