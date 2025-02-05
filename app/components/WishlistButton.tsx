"use client";
import { useWishlist } from "../context/WishlistContext";
import { Heart } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  slug: string;
}

interface WishlistButtonProps {
  product: Product;
  showNotification: (message: string) => void;
}

export default function WishlistButton({ product, showNotification }: WishlistButtonProps) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isInWishlist = wishlist.some((item) => item._id === product._id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product._id);
      showNotification(`❌ Removed "${product.name}" from wishlist`);
    } else {
      addToWishlist(product);
      showNotification(`❤️ Added "${product.name}" to wishlist`);
    }
  };

  return (
    <button
      className={`p-2 rounded-full transition-all shadow-md hover:scale-105 ${
        isInWishlist ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
      onClick={handleWishlistToggle}
    >
      <Heart className={`w-6 h-6 ${isInWishlist ? "text-white fill-white" : "text-gray-500"}`} />
    </button>
  );
}
