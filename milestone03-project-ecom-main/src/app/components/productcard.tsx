import { Product } from '@/pages/api/types';
import React from 'react';

interface ProductCardProps extends Product {
  onAddToCard: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCard,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          In Stock
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
       
        <p className="text-lg font-semibold text-orange-600 mb-2">
          {name}
        </p>
        <div className="flex items-center mb-4">
          <span className="text-xl font-bold text-green-800">${price}</span>
       
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCard({ id, name, price, image })}
          className="w-full flex items-center justify-center bg-yellow-400 text-black text-sm font-semibold py-2 rounded-md shadow hover:bg-blue-700 transition duration-300"
        >
    
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
