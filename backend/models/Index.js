const sequelize = require("../config/db.js");

const MenuItem = require("./MenuItem");
const Order = require("./Order");
const Account = require("./Account");

Order.belongsTo(MenuItem, { foreignKey: "menuItemId" });
MenuItem.hasMany(Order, { foreignKey: "menuItemId" });

module.exports = {
  sequelize,
  MenuItem,
  Order,
  Account,
};
