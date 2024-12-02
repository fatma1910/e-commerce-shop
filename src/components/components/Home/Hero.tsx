import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-12vh)] flex justify-center flex-col'>
        <div className='w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase'>mega sale <span className='text-rose-600'>Special</span> offer up to {" "} <span className='text-orange-500'>60%</span> {" "} off </h1>
                <p className='text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ducimus vitae! Eligendi, eaque at reiciendis consectetur expedita earum accusantium. Cumque sunt a, nobis cum numquam repellat quam dignissimos modi sequi!</p>
                <div className='flex mt-6 items-center space-x-4'>
                    <Button size={"lg"} className='bg-blue-700'> Shop Now</Button>
                    <Button size={"lg"} > Explore More</Button>

                </div>
                
            </div>
            <div className='hidden lg:block'>
                    <Image src={'/images/hero.svg'} width={600} height={600} alt='hero'  />
                </div>
        </div>
    </div>
  )
}

export default Hero