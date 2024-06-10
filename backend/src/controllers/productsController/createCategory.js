const { Category } = require('../../models');

async function createCategory(req, res) {
  const { parentName, name } = req.body;
  const parentCategory = await Category.Model.findOne({ name: parentName });

  const newCategory = { name };

  if (parentCategory) {
    newCategory.parent = parentCategory._id;
  }

  const createdCategory = await Category.Model.create(newCategory);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      createdCategory,
    },
  });
}

module.exports = createCategory;
