module.exports = (sequelize, DataTypes) => {

  const products = sequelize.define("products", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcategory: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regular_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    special_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    free_shipping: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    discount_on_second_item: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    discsount_on_first_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    avaliable_quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  return products
}