"use client";

import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { client } from "@/sanity/lib/client";
import { allcategory } from "@/sanity/lib/queries";
import { Categoryy } from "@/types/category";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Categoryy[]>([]);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { wishlist } = useWishlist();

  // Fetch categories from Sanity
  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories: Categoryy[] = await client.fetch(allcategory);
      if (fetchedCategories.length > 1) {
        fetchedCategories.pop(); // Remove one category
      }
      setCategories(fetchedCategories);
    }
    fetchCategories();
  }, []);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <div className="p-4 w-full h-auto top-0 z-50 bg-white shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center py-2">
        {/* Search Icon (Desktop) */}
        <div className="hidden md:block">
          <CiSearch size={25} className="text-[#2A254B]" />
        </div>

        {/* Logo */}
        <h1 className="text-[#2A254B] text-xl md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          Avion
        </h1>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex gap-6 items-center">
          {/* Wishlist */}
          <div className="relative">
            <Link href="/wishlist">
              <span className="absolute -top-1 -right-2 text-xs bg-red-500 rounded-full px-1.5 py-0.5 text-white">
                {wishlist.length}
              </span>
              ❤️
            </Link>
          </div>

          {/* Cart */}
          <div className="relative">
            <Link href="/shopping">
              <span className="absolute -top-1 -right-2 text-xs bg-red-500 rounded-full px-1.5 py-0.5 text-white">
                {cartItems.length}
              </span>
              <IoCartOutline size={25} className="text-[#2A254B]" />
            </Link>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Search Icon */}
          <CiSearch size={25} className="text-[#2A254B]" />

          {/* Wishlist */}
          <div className="relative">
            <Link href="/wishlist">
              <span className="absolute top-4 -right-2 text-xs bg-red-500 rounded-full px-1.5 py-0.5 text-white">
                {wishlist.length}
              </span>
              ❤️
            </Link>
          </div>

          {/* Cart */}
          <Link href="/shopping">
            <div className="relative">
              <IoCartOutline size={25} className="text-[#2A254B]" />
              <span className="absolute -top-1 -right-2 text-xs bg-red-500 rounded-full px-1.5 py-0.5 text-white">
                {cartItems.length}
              </span>
            </div>
          </Link>

          {/* Hamburger Menu */}
          <button className="text-2xl focus:outline-none z-30" onClick={toggleMenu}>
            {!menuOpen && <IoMenu />}
          </button>
        </div>
      </div>

      <hr />

      {/* Mobile Menu */}
      <header
        className={`fixed top-0 right-0 py-6 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none z-40`}
      >
        {menuOpen && (
          <div className="flex justify-end p-4 md:hidden">
            <button className="text-2xl focus:outline-none" onClick={toggleMenu}>
              <IoClose />
            </button>
          </div>
        )}

        {/* Categories (Visible Below Logo for Larger Screens) */}
        <div className="hidden md:block mt-4">
          <ul className="flex justify-center items-center gap-8 text-[#726E8D] text-base">
            {categories.map((category) => (
              <li key={category.id}>
                <Link href="/">{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-4 md:hidden" />

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-8 text-[#726E8D] text-base p-6 md:p-0">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/shopping">Cart</Link>
          </li>
          <li>
            <Link href="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link href="/products">All Product</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
