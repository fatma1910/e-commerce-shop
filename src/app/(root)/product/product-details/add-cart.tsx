'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem, CartItem } from '../../../../../store/cartSlice';
import { toast } from '@/hooks/use-toast';
import { Product } from '../../../../../types';

type Props = {
  product: Product;
}

const AddCart = ({product}:Props) => {
  const dispatch = useDispatch();

  const addToCardHandler = () => {
    dispatch(addItem(product));
    toast({
      title: ` Item added to cart`,
      variant: 'success',
    })
  }
  return (
    <Button onClick={()=>addToCardHandler()}> Add to Cart </Button>
  )
}

export default AddCart