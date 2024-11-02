import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';

const AddMenu = () => {
  const [menuItem, setMenuItem] = useState({
    name: '',
    price: '',
    desc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/menu/menu-items', menuItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        alert('Menu Item Added Successfully!');
        setMenuItem({
          name: '',
          price: '',
          desc: '',
        });
      }
    } catch (error) {
      console.error('Error adding menu item:', error);
      alert('Failed to Add Menu Item');
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-20">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Add New Menu Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={menuItem.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Price:</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={menuItem.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Description:</label>
            <textarea
              name="desc"
              value={menuItem.desc}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <Link to="/dashboard" className="w-1/2 py-2 px-4 text-white font-semibold bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400  mr-2">Back</Link>
          <button
            type="submit"
            className="w-1/2 py-2 px-4 text-white font-semibold bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Add Menu Item
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddMenu;
