import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../layouts/Layout';

const MenuItemsList = () => {
    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch all menu items from the API
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/menu/menu-items');
                setMenuItems(response.data);
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);

    // Navigate to the edit page for the selected menu item
    const handleEdit = (id) => {
        navigate(`/dashboard/edit-menu-item/${id}`);
    };

    // Delete the selected menu item
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this menu item?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3001/api/menu/menu-items/${id}`);
                setMenuItems(menuItems.filter(item => item.id !== id)); // Update state after deletion
                alert('Menu Item Deleted Successfully!');
            } catch (error) {
                console.error('Error deleting menu item:', error);
                alert('Failed to Delete Menu Item');
            }
        }
    };

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-semibold text-center mb-6">Menu Items</h2>
                <div className='my-10'>

                    <Link to="/dashboard" className="text-white  py-3 px-4 bg-red-500 rounded-lg font-bold">Kembali</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {menuItems.map((item) => (
                        <div key={item.id} className="p-4 bg-white rounded-lg shadow-shadow-card border-2 border-black">
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-600">Price: ${item.price}</p>
                            <p className="text-gray-600 mb-4">{item.desc}</p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(item.id)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default MenuItemsList;
