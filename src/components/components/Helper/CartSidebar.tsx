import React from 'react'
import { addItem, CartItem, removeItem } from '../../../../store/cartSlice';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SheetClose } from '@/components/ui/sheet';
import { useDispatch } from 'react-redux';

type Props = {
    items: CartItem[];
}
const CartSidebar = ({items}: Props) => {

    const dispatch = useDispatch();

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem({id}));
    }
    const handleAddItem = (item: CartItem) => {
        dispatch(addItem(item));
    }

  return (
    <div className='my-6 h-full '>
        <h1 className='text-center font-bold text-lg mb-6 '>Your Cart</h1>
        {items.length === 0 && (
            <div className='flex items-center w-full h-[80vh] flex-col justify-center'>
                <Image src='/images/cart.svg' alt='empty cart' width={200} height={200} className='object-cover mx-auto' />
                <p className='mt-8 text-center text-2xl font-semibold'>Your cart is empty</p>
            </div>
        )}
        {items.length > 0 && (
            <div>
                {items?.map((item)=> {
                    return (
                        <div
                        key={item.id}
                        className="mb-4 border-b-2 border-gray-300 border-opacity-60 py-4"
                        >
                            <div>
                                <Image src={item?.image} alt={item?.title} width={60} height={60} className='object-cover mb-4' />
                            </div>
                            <div>
                                <h1 className='text-sm w-4/5 font-semibold truncate'>{item?.title}</h1>
                                <h1 className='text-base text-blue-950 font-bold'>${(item?.price * item?.quantity).toFixed(2)}</h1>

                                <h1 className='text-base font-bold mb-2'>Quantity: {item?.quantity}</h1>
                                <div className='flex items-center space-x-4'>
                                    <Button onClick={()=>{handleRemoveItem(item.id)}} size={"sm"} variant={'destructive'}>Remove</Button>
                                    <Button onClick={()=>{handleAddItem(item)}} size={"sm"}>Add</Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                <Link href='/cart'>
                <SheetClose className='w-full'>
                <Button className='w-full mb-6 mt-6'>View All Cart
                </Button>
                </SheetClose>
                </Link>
            </div>
        )}
    </div>
  )
}

export default CartSidebar