'use client'

import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CartSidebar from './CartSidebar';

const ShoppingCartButton = () => {
  const items = useSelector(( state:RootState )=> state.cart.items)

    const totalQuantity = items.reduce((total,item)=> {
      return total + item.quantity
      }, 0);


  return (
    <Sheet>
      <SheetTrigger>
      <div className='relative'>
        <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center text-white flex items-center justify-center flex-col text-xs rounded-full  cursor-pointer'>{totalQuantity}</span>
        <ShoppingBagIcon size={26} cursor={"pointer"}/>
      </div>
      </SheetTrigger>
      <SheetContent className='overflow-auto h-full'>
        <CartSidebar items={items}/>
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCartButton