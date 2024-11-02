const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Tambahkan cors
const { sequelize } = require("./models/Index");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const accountRoutes = require("./routes/accountRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/menu", menuRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/account", accountRoutes);

// Sinkronisasi dengan database dan menjalankan server
sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    const PORT = 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });
