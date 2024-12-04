import React from 'react'
import { getSimilarProducts, getSingleProduct } from '../../../../../../Request/requests'
import { Product } from '../../../../../../types'
import ProductCard from '@/components/components/Helper/ProductCard'
import Image from 'next/image'
import { StarIcon } from 'lucide-react'
import AddCart from '../add-cart'

const ProductDetails =async ({params}:{params:{id: string}}) => {
  const product:Product = await getSingleProduct(params.id)
  const relatedProducts : Product[]= await getSimilarProducts(product.category)

  const num = Math.round(product.rating.rate);
    const totalStars = 5; 
    const starsArray = Array.from({ length: totalStars });

    
  return (
    <div className='mt-20'>
      <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4'>
      <div className='col-span-3 mb-6 flex justify-center lg:mb-0'>
        <Image src={product.image} alt={product.title} width={400} height={400} />
      </div>
      <div className='col-span-4'>
        <h1 className='lg:text-3xl text-2xl text-black font-bold'>{product.title}</h1>
        <div className='mt-2 flex items-center space-x-2'>
        <div className='flex items-center'>
                {starsArray.map((_, index)=>{
                    return <StarIcon key={index} size={20} fill={index < num ? 'yellow' : 'none'} className='text-yellow-500' />
                })}
            </div>
            <p className='text-base text-gray-700 font-semibold '>({product?.rating.count} Reviews)</p>
        </div>
        <span className='w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4'></span>
        <h1 className='lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold'>${product?.price.toFixed(2)} </h1>
        <p className='mt-4 text-base text-black opacity-70'>{product?.description} </p>

        <p className='mt-4 text-sm text-black opacity-70 font-semibold'>Category : {product?.category} </p>

        <p className='mt-4 text-base text-black opacity-70'>Tag : Shop,WDW </p>

        <p className='mt-4 text-base text-black opacity-70'>SKU : {Math.random() * 500} </p>
        <AddCart product={product} />
        
      </div>

      </div>
      <div className='w-4/5 mt-16 mx-auto'>
        <h1 className='text-2xl text-black font-semibold '>Related Products</h1>
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
        {relatedProducts.map((product)=> {
      return <ProductCard key={product.id} product={product} />
    })}
        </div>
      </div>

    
    </div>
  )
}

export default ProductDetails