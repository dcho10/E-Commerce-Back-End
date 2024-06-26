// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

// Products belongToMany Tags (through ProductTag)

// belongsToMany: https://sequelize.org/docs/v7/associations/belongs-to-many/
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: "product_id",
    constraints: false,
  },
});

// Tags belongToMany Products (through ProductTag)

// belongsToMany: https://sequelize.org/docs/v7/associations/belongs-to-many/
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: "tag_id",
    constraints: false,
  },
});

Product.hasMany(ProductTag, {
  foreignKey: "product_id"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
