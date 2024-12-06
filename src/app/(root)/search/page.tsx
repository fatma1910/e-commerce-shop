'use client'

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/components/Helper/ProductCard";

// Function to fetch products from the API
const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  return products;
};

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Fetch products on component mount
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setFilteredProducts(products); // Initially, show all products
    };

    getProducts();
  }, []);

  // Update filtered products when search query changes
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]); // Trigger re-filtering when searchQuery or products change

  return (
    <div className="my-12">
      <h1 className="text-center font-bold text-2xl mb-6 uppercase">Search Products</h1>
      <div className="w-[95%] md:w-4/5 mx-auto">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          className="w-full p-4 text-lg border border-gray-300 rounded-lg mb-8 outline-none"
        />
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No products found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
