const express = require('express');
const { productsCtrl } = require('../controllers');
const { imageUpload } = require('../middlewares');

const router = express.Router();

router.post('/', imageUpload.array('images'), productsCtrl.createProduct);

router.get('/categories', productsCtrl.listCategories);

router.post('/categories', productsCtrl.createCategory);

module.exports = router;
