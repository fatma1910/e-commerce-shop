import React from 'react'
import { getAllCategory } from '../../../../Request/requests'
import Link from 'next/link';

const Category = async() => {
    const categories:string[] = await getAllCategory();
  return (
    <div className='pt-16 pb-12'>
        <h1 className='text-center font-bold text-2xl capitalize'>Shop by category</h1>
        <div className='mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {categories.map((cat)=> {
            return (
                <Link href={`/${cat.replace(/[\s']/g, "")}`}>
                <div key={cat} className='p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-100 shadow-md'>
                    <h1 className='text-sm sm:text-lg capitalize font-bold'>{cat} </h1>
                </div>
                </Link>
                
            )
        } )}
        </div>
    </div>
  )
}

export default Category