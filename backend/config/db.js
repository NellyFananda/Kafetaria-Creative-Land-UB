const { Sequelize } = require("sequelize");

// Buat instance Sequelize
const sequelize = new Sequelize("ub_kantin", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced with force: true. Tables dropped and recreated.");
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
