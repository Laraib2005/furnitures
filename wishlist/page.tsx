'use client'; // This is an interactive component

import { useWishlist } from "@/app/context/WishlistContext";
import Image from "next/image";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <section className="px-6 sm:px-10 py-16 bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">My Wishlist</h1>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wishlist.map((product: any) => (
              <div
                key={product._id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                {/* Product Image */}
                <Link href={`/products/${product.slug}`}>
                  <div className="relative w-full h-64 sm:h-80">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl transition-transform ease-in-out transform hover:scale-110"
                    />
                  </div>
                </Link>

                {/* Product Details */}
                <div className="mt-6 text-gray-800">
                  <p className="font-semibold text-lg sm:text-xl">{product.name}</p>
                  <p className="text-gray-600 text-base sm:text-lg mt-2">${product.price}</p>
                </div>

                {/* Remove Button */}
                <button
                  className="w-full bg-red-500 text-white py-3 rounded-lg mt-6 hover:bg-red-600 transition-all duration-300 ease-in-out"
                  onClick={() => removeFromWishlist(product._id)}
                >
                  <span className="font-semibold">Remove from Wishlist</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-700 mt-16">
            <p className="text-2xl font-medium">Your wishlist is empty!</p>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">Start adding items to your wishlist to keep track of your favorite products!</p>
            <Link href="/products">
              <p className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-8 rounded-lg hover:bg-gradient-to-l transition-all duration-300 ease-in-out shadow-lg">
                Browse Products
              </p>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
