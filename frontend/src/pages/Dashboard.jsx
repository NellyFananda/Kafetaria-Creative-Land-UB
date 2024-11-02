import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../layouts/Layout";

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/order/orders');
                setOrders(response.data);
            } catch (error) {
                setErrorMessage('Failed to load orders. Please try again.');
            }
        };
        fetchOrders();
    }, []);

    const handlePaymentStatusToggle = async (orderId, currentStatus) => {
        const newStatus = currentStatus === "Belum Bayar" ? "Sudah Bayar" : "Belum Bayar";
        try {
            await axios.put(`http://localhost:3001/api/order/orders/${orderId}`, { paymentStatus: newStatus });
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.id === orderId ? { ...order, paymentStatus: newStatus } : order
                )
            );
        } catch (error) {
            console.error("Failed to update payment status:", error);
        }
    };

    return (
        <Layout>
            <div className='mt-10 px-10'>
                <Link to="add-menu" className="bg-black text-white px-5 py-2 rounded-full font-semibold">Tambah Produk</Link>
                <Link to="list-menu" className="bg-black text-white px-5 py-2 rounded-full font-semibold ml-5">Lihat Menu</Link>
            </div>
            <table className="w-11/12 mx-auto bg-white text-sm text-left border-collapse border border-gray-300 h-full mt-10 px-10">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="py-4 px-3 text-center border border-gray-300 w-1/12">No</th>
                        <th className="py-4 px-3 text-center border border-gray-300 w-1/12">Nama Pemesan</th>
                        <th className="py-4 px-3 text-center border border-gray-300 w-1/12">Nama Produk</th>
                        <th className="py-4 px-3 text-center border border-gray-300 w-1/12">Jumlah</th>
                        <th className="py-4 px-3 text-center border border-gray-300 w-1/12">Notes</th>
                        <th className="py-4 px-3 text-center border border-gray-300 w-1/12">Total Harga</th>
                        <th className="py-4 px-3 text-center border border-gray-300 w-1/12">Status Pembayaran</th>
                        <th className="py-4 px-3 text-center border border-gray-300 w-1/12">Aksi</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600">
                    {orders.length > 0 ? (
                        orders.map((order, index) => (
                            <tr className="hover:bg-neutral-100" key={order.id}>
                                <td className="py-4 text-center px-3 border border-gray-300">{index + 1}.</td>
                                <td className="py-4 px-3 border border-gray-300">{order.customerName || "N/A"}</td>
                                <td className="py-4 px-3 border text-center border-gray-300">{order.MenuItem?.name || "N/A"}</td>
                                <td className="py-4 px-3 text-center border border-gray-300">{order.quantity}</td>
                                <td className="py-4 px-3 text-center border border-gray-300">{order.notes}</td>
                                <td className="py-4 px-3 text-center border border-gray-300">
                                    {order.totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" }).replace("IDR", "Rp")}
                                </td>
                                <td className="py-4 px-3 text-center border border-gray-300">
                                    {order.paymentStatus || "Belum Bayar"}
                                </td>
                                <td className="py-4 px-3 text-center border border-gray-300">
                                    <button
                                        onClick={() => handlePaymentStatusToggle(order.id, order.paymentStatus)}
                                        className={`px-2 py-1 rounded-md font-semibold ${order.paymentStatus === "Sudah Bayar" ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                                    >
                                        {order.paymentStatus === "Sudah Bayar" ? "Batalkan" : "Tandai Sudah Bayar"}
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="py-4 px-4 border border-gray-300 text-center font-bold text-neutral-700">
                                {errorMessage || "Data Tidak Ditemukan!"}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Layout>
    );
};





export default Dashboard;
