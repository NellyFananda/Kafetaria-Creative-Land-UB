import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../layouts/Layout';

const EditMenuItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [menuItem, setMenuItem] = useState({ name: '', price: '', desc: '' });

    useEffect(() => {
        // Fetch the specific menu item by ID
        const fetchMenuItem = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/menu/menu-items/${id}`);
                setMenuItem(response.data);
            } catch (error) {
                console.error('Error fetching menu item:', error);
            }
        };

        fetchMenuItem();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenuItem((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:3001/api/menu/menu-items/${id}`, menuItem, {
                headers: { 'Content-Type': 'application/json' },
            });
            alert('Menu Item Updated Successfully!');
            navigate('/dashboard/list-menu'); // Redirect to the list page after updating
        } catch (error) {
            console.error('Error updating menu item:', error);
            alert('Failed to Update Menu Item');
        }
    };

    return (
        <Layout>

            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Edit Menu Item</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={menuItem.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Description:</label>
                        <textarea
                            name="desc"
                            value={menuItem.desc}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <Link to="/dashboard/list-menu" className='w-1/2 py-2 px-4 text-white font-semibold bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 mt-2 focus:ring-red-400 mr-2'>Back</Link>
                    <button
                        type="submit"
                        className="w-1/2 py-2 px-4 text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Update Menu Item
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default EditMenuItem;
