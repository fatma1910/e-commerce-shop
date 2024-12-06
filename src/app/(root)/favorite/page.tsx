'use client'

import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import ProductCard from '@/components/components/Helper/ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const page = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);


  return (
    <div className='my-12'>
    <h1 className="text-center font-bold text-2xl mb-14 uppercase"> Your Favorites
    </h1>
    {favorites.length==0 ? (
    <div className='flex items-center w-full h-[80vh] flex-col justify-center '>
    <Image src="/images/liked.webp" alt='cart' width={400} height={400} className='object-cover mx-auto'/>
    <h1 className='mt-8 mb-4 text-2xl font-semibold'> Your Favorites is empty!</h1>
    <Link href='/'  >
    <Button>Shop Now</Button>
    </Link>
</div>
  ) : (
    <>
      <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-8">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )}
</div>
  );
}

export default page