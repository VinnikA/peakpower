const express = require('express');
const { authCtrl } = require('../controllers');
const { authenticate } = require('../middlewares');
const { ctrlWrapper } = require('../helpers');
const { validateBody } = require('../middlewares');
const {
  Admin: { schemas },
} = require('../models');

const router = express.Router();

router.post(
  '/signup',
  validateBody(schemas.signupSchema),
  ctrlWrapper(authCtrl.signup)
);
router.post(
  '/login',
  validateBody(schemas.loginSchema),
  ctrlWrapper(authCtrl.login)
);
router.get('/logout', authenticate, ctrlWrapper(authCtrl.logout));
router.get('/current', authenticate, ctrlWrapper(authCtrl.getCurrent));

module.exports = router;
