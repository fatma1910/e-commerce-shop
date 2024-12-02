import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'

const ShoppingCartButton = () => {
  return (
    <div className='relative'>
      <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center text-white flex items-center justify-center flex-col text-xs rounded-full  cursor-pointer'>6</span>
      <ShoppingBagIcon size={26} cursor={"pointer"}/>

    </div>
  )
}

export default ShoppingCartButton