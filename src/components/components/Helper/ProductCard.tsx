'use client'

import React from 'react';
import { Product } from '../../../../types';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { addFavorite, removeFavorite } from '../../../../store/favoritesSlice';
import { addItem } from '../../../../store/cartSlice';
import { useToast } from '@/hooks/use-toast';

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    const dispatch = useDispatch();
    const { toast } = useToast();


    const isFavorite = useSelector((state: RootState) =>
        state.favorites.items.some((item) => item.id === product.id)
    );

    const handleAddToFavorites = () => {
        dispatch(addFavorite(product));
        toast({
            title: `Item added to favorites`,
            variant: 'success',
        });
    };

    const handleRemoveFavorites = () => {
        dispatch(removeFavorite({ id: product.id }));
        toast({
            title: `Item removed from favorites`,
            variant: 'destructive',
        });
    };

    const addToCartHandler = (product: Product) => {
        dispatch(addItem(product));
        toast({
            title: `Item added to cart`,
            variant: 'success',
        });
    };

    return (
        <div className='p-5 flex items-center justify-center flex-col max-w-full overflow-hidden border rounded-md shadow-md'>
            <div className='w-[200px] h-[150px] flex items-center justify-center'>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className='w-[80%] h-[80%] object-contain'
                />
            </div>
            <p className='mt-5 text-xs capitalize text-gray-600'>{product.category}</p>
            <Link href={`/product/product-details/${product.id}`}>
                <h1 className='text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full mt-2 text-black font-semibold line-clamp-1'>
                    {product.title}
                </h1>
            </Link>
            <div className='flex items-center'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon
                        key={index}
                        size={16}
                        fill={index < Math.round(product.rating.rate) ? 'yellow' : 'none'}
                        className='text-yellow-500'
                    />
                ))}
            </div>
            <div className='flex mt-2 items-center space-x-2'>
                <p className='text-black text-base line-through font-semibold opacity-50'>
                    {`$${(product.price + 10).toFixed(2)}`}
                </p>
                <p className='text-balance text-lg font-bold opacity-80'>{product.price}</p>
            </div>
            <div className='mt-4 flex items-center space-x-2'>
                <Button onClick={() => addToCartHandler(product)} size={'icon'}>
                    <ShoppingBag size={18} />
                </Button>
                {!isFavorite ? (
                    <Button
                        onClick={handleAddToFavorites}
                        size={'icon'}
                        className='bg-white border-2 border-red-500 hover:bg-white'
                    >
                        <Heart size={18} className='text-red-500' />
                    </Button>
                ) : (
                    <Button
                        onClick={handleRemoveFavorites}
                        size={'icon'}
                        className='bg-red-500 hover:bg-red-500'
                    >
                        <Heart size={18} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
