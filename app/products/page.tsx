"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import WishlistButton from "../components/WishlistButton";
import { Loader } from "lucide-react";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  slug: string;
}

const itemsPerPage = 4; // Number of products per page

const ProductsPage = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = `*[_type == "product" && image.asset != null]{
        _id,
        name,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        price
      }`;
      try {
        const result = await client.fetch(query);
        setData(result || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memoized pagination logic
  const totalPages = useMemo(() => Math.ceil(data.length / itemsPerPage), [data]);
  const currentProducts = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
  }, [data, currentPage]);

  // Pagination handlers
  const goToPreviousPage = useCallback(() => setCurrentPage((prev) => Math.max(prev - 1, 1)), []);
  const goToNextPage = useCallback(() => setCurrentPage((prev) => Math.min(prev + 1, totalPages)), [totalPages]);
  const goToPage = useCallback((page: number) => setCurrentPage(page), []);

  // Show notification
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section className="px-2 sm:px-4 md:px-8 py-8 md:py-12 text-[#2A254B] mt-8 md:mt-12">
      <h1 className="text-xl md:text-3xl font-semibold text-center">All Products</h1>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">
        {loading ? (
          <div className="col-span-full flex justify-center items-center" aria-live="polite">
            <Loader className="w-10 h-10 sm:w-12 sm:h-12 animate-spin text-[#2A254B]" />
          </div>
        ) : currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div className="w-full h-auto relative group" key={product._id}>
              <Link href={`/products/${product.slug}`} passHref>
                <Image
                  src={product.imageUrl}
                  height={600}
                  width={600}
                  alt={`Image of ${product.name}`}
                  className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                  {...(currentPage === 1 ? { priority: true } : { loading: "lazy" })}
                />
              </Link>

              {/* Wishlist Button on Top-Right */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                <WishlistButton product={product} showNotification={showNotification} />
              </div>

              <div className="my-2 sm:my-4 text-[#2A254B]">
                <h2 className="py-1 text-xs sm:text-sm md:text-base font-medium">{product.name}</h2>
                <p className="text-sm sm:text-lg font-semibold">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found</p>
        )}
      </div>

      {/* Modern Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 md:mt-10">
          <nav className="inline-flex items-center space-x-1 bg-white shadow-md rounded-lg px-2 py-1 sm:px-4 sm:py-2">
            {/* Previous Button */}
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all 
          ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              ⬅ Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all 
            ${currentPage === index + 1 ? "bg-[#2A254B] text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all 
          ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              Next ➡
            </button>
          </nav>
        </div>
      )}

      {/* Notification Popup */}
      {notification && (
        <div className="fixed bottom-4 right-2 sm:bottom-6 sm:right-6 bg-[#2A254B] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg animate-bounce text-xs sm:text-sm">
          <p>{notification}</p>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
