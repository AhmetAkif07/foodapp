import React from 'react'
import Image from 'next/legacy/image'
import carPic from '../../public/images/hero-bg.jpg'
import Title from './Title'

const Carousel = () => {
    return (
        <div className='h-screen w-full container mx-auto -mt-[88px]'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='relative h-full w-full'>
                    <Image
                        src={carPic}
                        alt=""
                        layout="fill"
                        objectFit='cover'
                    />
                </div>
            </div>
            <div className='relative text-white top-48 flex flex-col items-start gap-y-10' >
                <Title classAdd="text-4xl" >Fast Food Restaurant</Title>
                <p className='text-sm sm:w-2/5 w-full'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Id vitae accusantium dolorem nam animi exercitationem,
                    dolorum explicabo veritatis rerum dicta fuga.
                </p>
                <button className='btn-primary z-30'>Order Now</button>
            </div>
        </div>
    )
}

export default Carousel