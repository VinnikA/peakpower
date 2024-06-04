const { Category } = require('../../models');

async function listCategories(req, res) {
  const categories = await Category.Model.find({}).populate({
    path: 'parent',
    populate: {
      path: 'parent',
    },
  });

  console.log(categories);

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      categories,
    },
  });
}

module.exports = listCategories;
