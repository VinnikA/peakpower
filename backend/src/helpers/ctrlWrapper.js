function ctrlWrapper(ctrl) {
  return async (req, res, next) => {
    ctrl(req, res, next).catch(next);
  };
}

module.exports = ctrlWrapper;
