const { Order, MenuItem } = require("../models/Index.js");

// Membuat pesanan baru
exports.createOrder = async (req, res) => {
  try {
    const { menuItem, quantity, notes, customerName } = req.body;

    const menuItemData = await MenuItem.findOne({ where: { name: menuItem } });
    if (!menuItemData) {
      return res.status(404).json({ error: "Menu item not found" });
    }

    const totalPrice = menuItemData.price * quantity;
    const newOrder = await Order.create({
      menuItemId: menuItemData.id,
      quantity,
      notes,
      totalPrice,
      customerName, // Menyimpan nama pemesan
    });

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

// Mendapatkan semua pesanan
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ include: MenuItem });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};


// Mengupdate status pembayaran
exports.updatePaymentStatus = async (req, res) => {
  try {
    const { orderId } = req.params; // Mendapatkan orderId dari parameter rute
    const { paymentStatus } = req.body; // Mendapatkan status pembayaran dari body

    const order = await Order.findByPk(orderId); // Mencari pesanan berdasarkan ID
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.paymentStatus = paymentStatus; // Mengupdate status pembayaran
    await order.save(); // Menyimpan perubahan ke database

    res.json(order); // Mengembalikan pesanan yang telah diupdate
  } catch (err) {
    res.status(500).json({ error: "Failed to update payment status" });
  }
};
