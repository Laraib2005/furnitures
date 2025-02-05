'use client';
import Image from "next/image";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../redux/store";
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Link from "next/link";

const Shopping = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const [shippingOption, setShippingOption] = useState<string>("Standard Delivery");

    const shippingCost = shippingOption === "Express Delivery" ? 10.00 : 5.00;
    const subtotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalAmount = (subtotal + shippingCost).toFixed(2);

    return (
        <section className="py-8 sm:py-16 bg-gradient-to-r from-indigo-100 to-blue-200">
            <div className="max-w-screen-lg mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-8">

                {/* Left: Shopping Cart */}
                <div className="w-full sm:w-2/3 bg-white rounded-lg p-4 sm:p-6 shadow-lg">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>

                    {cart.items.length === 0 ? (
                        <p className="text-center text-gray-500 text-lg sm:text-xl">No items in your cart. Go ahead and add some!</p>
                    ) : (
                        <div className="space-y-6">
                            {cart.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
                                >
                                    {/* Product Image */}
                                    <Image
                                        src={item.image}
                                        width={80}
                                        height={80}
                                        alt={item.name}
                                        className="rounded-lg object-cover"
                                    />

                                    {/* Product Info */}
                                    <div className="flex-grow px-4 sm:px-6 mt-4 sm:mt-0">
                                        <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                                        <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-0">
                                        <button
                                            className="p-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
                                            onClick={() => dispatch(decrementQuantity(item.id))}>
                                            <FaMinus size={14} />
                                        </button>
                                        <span className="font-semibold text-lg">{item.quantity}</span>
                                        <button
                                            className="p-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
                                            onClick={() => dispatch(incrementQuantity(item.id))}>
                                            <FaPlus size={14} />
                                        </button>
                                    </div>

                                    {/* Price */}
                                    <p className="font-semibold text-gray-800 mt-4 sm:mt-0 text-lg">${(item.price * item.quantity).toFixed(2)}</p>

                                    {/* Remove Button */}
                                    <button
                                        className="text-red-500 hover:text-red-700 transition mt-4 sm:mt-0"
                                        onClick={() => dispatch(removeFromCart(item.id))}>
                                        <FaTrashAlt size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-6">
                        <Link href="/products">
                            <p className="text-sm sm:text-lg text-blue-600 hover:text-blue-800 transition">← Back to Products</p>
                        </Link>
                    </div>
                </div>

                {/* Right: Order Summary */}
                {cart.items.length > 0 && (
                    <div className="w-full sm:w-1/3 bg-white rounded-lg p-4 sm:p-6 shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Order Summary</h2>

                        <div className="flex justify-between text-lg sm:text-xl font-medium text-gray-700 mb-4">
                            <p>Items ({cart.totalQuantity})</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>

                        {/* Shipping Selection */}
                        <div className="mb-6">
                            <label htmlFor="shipping" className="block text-gray-600 mb-2 font-semibold">Shipping</label>
                            <select
                                id="shipping"
                                className="w-full p-3 border rounded-lg bg-white text-lg"
                                value={shippingOption}
                                onChange={(e) => setShippingOption(e.target.value)}
                            >
                                <option value="Standard Delivery">Standard Delivery - $5.00</option>
                                <option value="Express Delivery">Express Delivery - $10.00</option>
                            </select>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between font-semibold text-xl text-gray-800 mb-6">
                            <p>Total Price</p>
                            <p>${totalAmount}</p>
                        </div>

                        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-indigo-800 transition">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Shopping;
