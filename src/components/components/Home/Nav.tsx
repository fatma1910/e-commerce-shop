'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCartButton from '../Helper/ShoppingCartButton'
import { UserButton, useUser } from '@clerk/nextjs'

const Nav = () => {
    const {isSignedIn} =useUser();
  return (
    <div className='h-[12vh] sticky top-0 z-10 bg-white shadow-md' >
        <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full '>
        <Link href='/'>
        <Image
        src="/images/logo.png"
        alt="Logo"
        width={140}
        height={140}
        />
        </Link>
        <div className='flex items-center space-x-6'>
            <SearchBox/>
            <HeartIcon size={26} cursor={"pointer"}/>
            <ShoppingCartButton/>
            {isSignedIn ?   (
                <UserButton/>
            ):(
            <Link href='/sign-in'>
            <UserIcon size={26} cursor={"pointer"} />
            </Link>)}
        </div>
        </div>
    </div>
  )
}

export default Nav