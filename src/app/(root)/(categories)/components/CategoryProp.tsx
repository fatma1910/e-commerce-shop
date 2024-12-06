'use client'

import React, { useEffect, useState } from 'react'
import { Product } from '../../../../../types';
import { getSimilarProducts } from '../../../../../Request/requests';
import { Loader } from 'lucide-react';
import ProductCard from '@/components/components/Helper/ProductCard';

const CategoryProp = ({category}:{category:string}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
      }, []);
    
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const allProducts: Product[] = await getSimilarProducts(category);
          setProducts(allProducts);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
  return (
    <div className='my-12'>
        <h1 className="text-center font-bold text-2xl mb-14 uppercase"> {category}
        </h1>
        {loading ? (
        <div className="flex justify-center items-center mt-16">
          <Loader size={32} className="animate-spin" />
        </div>
      ) : (
        <>
          <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default CategoryProp