"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./productcard";
import { Product } from "@/pages/api/types";

const Items = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [viewCart, setViewCart] = useState(false);
  const [isFineout, setFineout] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setViewCart((prev) => !prev);
  };

  const delCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const confirmOrder = () => {
    alert("Order confirmed! Your items will be delivered shortly.");
    setFineout(false); // Close the checkout modal after confirmation
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('images/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-300 via-cyan-500 to-blue-500 opacity-60"></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Add Trendy Products to Your Cart!</h1>
          <p className="text-xl text-white font-semibold">
            Each item in your cart brings you one step closer to your perfect find. Browse, select, and experience the thrill of shopping.
          </p>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-900">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCard={addToCart} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          <button
            onClick={toggleCart}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-3 px-6 rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out"
          >
            {viewCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {viewCart && (
            <div className="mt-8 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 p-20 rounded-lg shadow-xl">
              <h2 className="text-4xl font-bold mb-8 text-center text-white">Your Selected Items</h2>

              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li key={index} className="flex items-center justify-between mb-4">
                        <img src={product.image} alt={product.name} className="w-20 h-20 sm:w-24 rounded-lg shadow-lg" />
                        <span className="ml-4 text-xl font-semibold text-gray-800">{product.name} - ${product.price}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-gray-900">
                    <span className="font-semibold text-xl">
                      Total: ${cart.reduce((total, product) => total + product.price, 0)}
                    </span>

                    <div>
                      <button
                        onClick={() => setFineout(true)}
                        className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 py-2 px-8 rounded-lg text-lg shadow-md hover:scale-110 transition duration-300 ease-in-out text-white"
                      >
                        Proceed to Checkout
                      </button>

                      <button
                        onClick={delCart}
                        className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-3 px-8 ml-4 rounded-lg text-lg shadow-md hover:scale-110 transition duration-300 ease-in-out text-white"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg font-semibold text-gray-800 text-center">Your cart is empty.</p>
              )}
            </div>
          )}
        </div>

        {isFineout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">Let’s Checkout!</h2>
              <p className="text-lg text-red-500">Review your items carefully and proceed once confirmed.</p>
              <div className="mt-4">
                <ul>
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between mb-4">
                      <span>{product.name}</span>
                      <span>${product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4 ">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">${cart.reduce((total, product) => total + product.price, 0)}</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setFineout(false)}
                  className="bg-slate-600 text-red-200 py-2 px-6 rounded-lg shadow-md hover:bg-slate-600 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={confirmOrder}
                  className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-red-200 py-2 px-6 rounded-lg shadow-md hover:scale-110 transition duration-300"
                >
                  Order Confirmation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;
