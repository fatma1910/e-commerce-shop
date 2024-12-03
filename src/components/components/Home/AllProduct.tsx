'use client';

import React, { useEffect, useState } from 'react';
import { getAllProduct } from '../../../../Request/requests';
import { Product } from '../../../../types';
import { Loader } from 'lucide-react';
import ProductCard from '../Helper/ProductCard';
import { Button } from '@/components/ui/button';



const AllProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const items = 8; 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const allProducts: Product[] = await getAllProduct();
      setProducts(allProducts);
      setVisibleProducts(allProducts.slice(0, items));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const newVisibleProducts = products.slice(0, nextPage * items);
    setVisibleProducts(newVisibleProducts);
    setCurrentPage(nextPage);
  };

  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-bold text-2xl mb-14">All Products</h1>
      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <Loader size={32} className="animate-spin" />
        </div>
      ) : (
        <>
          <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-8">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {visibleProducts.length < products.length && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={handleLoadMore}
              >
                Load More
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllProduct;
