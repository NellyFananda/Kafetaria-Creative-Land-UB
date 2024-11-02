const { MenuItem } = require("../models/Index.js");

// Mendapatkan semua item menu
exports.getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
};

exports.getMenuItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await MenuItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu item" });
  }
};

// Menambah item menu baru
exports.createMenuItem = async (req, res) => {
  try {
    const { name, price, desc } = req.body;
    const newItem = await MenuItem.create({ name, price, desc });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Failed to create menu item" });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, desc } = req.body;

    const item = await MenuItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: "Menu item not found" });
    }

    await item.update({ name, price, desc });

    res.json({ message: "Menu item updated successfully", item });
  } catch (err) {
    res.status(500).json({ error: "Failed to update menu item" });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;

    // Cek apakah item dengan ID tersebut ada
    const item = await MenuItem.findByPk(id);
    if (!item) {
      return res.status(404).json({ error: "Menu item not found" });
    }

    // Hapus item
    await item.destroy();

    res.json({ message: "Menu item deleted successfully" });
  } catch (err) {
    console.error("Error deleting menu item:", err);
    res.status(500).json({ error: "Failed to delete menu item" });
  }
};
