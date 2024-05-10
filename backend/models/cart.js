module.exports = (sequelize, DataTypes) => {

  const Cart = sequelize.define("cart", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id' 
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id' 
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
    }
  }, {
    tableName: 'carts',
    timestamps: true, 
  })

  return Cart
}