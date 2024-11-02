import React, { useState, useEffect } from 'react';
import Layout from "../layouts/Layout";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Order = () => {
    const [isSend, setIsSend] = useState(false);
    const { id } = useParams();
    const [order, setOrder] = useState({
        menuItem: '',
        customerName: '',
        quantity: 1,
        notes: '',
        totalPrice: 0
    });

    const [menuItemData, setMenuItemData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        const fetchMenuItem = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/menu/menu-items/${id}`);
                const data = response.data;
                setMenuItemData(data);
                setOrder((prevOrder) => ({
                    ...prevOrder,
                    menuItem: data.name,
                    totalPrice: data.price * prevOrder.quantity
                }));
            } catch (error) {
                setErrorMessage('Failed to load menu item. Please try again.');
            }
        };
        fetchMenuItem();
    }, [id]);

    useEffect(() => {
        if (menuItemData) {
            setOrder((prevOrder) => ({
                ...prevOrder,
                totalPrice: menuItemData.price * prevOrder.quantity
            }));
        }
    }, [order.quantity, menuItemData]);

    const handleChange = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);
        setSuccessMessage(null);

        try {
            await axios.post('http://localhost:3001/api/order/orders/', {
                menuItem: order.menuItem,
                customerName: order.customerName,
                quantity: order.quantity,
                notes: order.notes,
                totalPrice: order.totalPrice
            });

            setSuccessMessage('Order submitted successfully!');
            setOrder({
                menuItem: '',
                customerName: '',
                quantity: 1,
                notes: '',
                totalPrice: 0
            });
            setIsSend(true);
        } catch (error) {
            setErrorMessage('Failed to submit the order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg my-20 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Form Pemesanan Makanan</h2>
                {menuItemData ? (
                    isSend ? (
                        <SuccessSection />
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="menuItem" className="block text-gray-700 font-bold mb-2">
                                    Nama Makanan
                                </label>
                                <input
                                    type="text"
                                    id="menuItem"
                                    name="menuItem"
                                    value={order.menuItem}
                                    disabled
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="customerName" className="block text-gray-700 font-bold mb-2">
                                    Nama Pemesan
                                </label>
                                <input
                                    type="text"
                                    id="customerName"
                                    name="customerName"
                                    value={order.customerName}
                                    onChange={handleChange}
                                    required
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
                                    Jumlah
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={order.quantity}
                                    onChange={handleChange}
                                    min="1"
                                    required
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="totalPrice" className="block text-gray-700 font-bold mb-2">
                                    Total Harga
                                </label>
                                <input
                                    type="text"
                                    id="totalPrice"
                                    name="totalPrice"
                                    value={order.totalPrice}
                                    disabled
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="notes" className="block text-gray-700 font-bold mb-2">
                                    Catatan Tambahan
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={order.notes}
                                    onChange={handleChange}
                                    placeholder="Tambahan catatan jika ada"
                                    className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                                ></textarea>
                            </div>

                            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
                            {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}

                            <div className="flex justify-end gap-4">
                                <Link to="/" className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                                    Kembali
                                </Link>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Sedang Mengirim...' : 'Pesan Sekarang'}
                                </button>
                            </div>
                        </form>
                    )
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </Layout>
    );
};

const SuccessSection = () => {
    const whatsappMessage = encodeURIComponent(
        `Halo, saya ingin mengirim bukti transfer untuk pesanan saya.`
    );
    const whatsappNumber = '+6285807434323';

    return (
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-xl mb-4'>Sukses Memesan!</h1>
            <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className='py-3 rounded-lg px-4 bg-green-600 text-white font-bold'
            >
                Kirim Bukti Transfer
            </a>
        </div>
    );
};


export default Order;
