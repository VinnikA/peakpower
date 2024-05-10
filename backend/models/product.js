module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    productType: {
        type: DataTypes.ENUM('supplement', 'equipment'),
        allowNull: false,
        field: 'type_of_product'
    },
    category: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    subcategory: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    regularPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'regular_price'
    },
    specialPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        field: 'special_price'
    },
    freeShipping: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'free_shipping'
    },
    discountOnSecondItem: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'discount_on_second_item'
    },
    discountOnFirstOrder: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'discount_on_first_order'
    },
    availableQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'products',
    timestamps: true, 
});

  return Product
}