import React from 'react'
import Image from 'next/legacy/image'
import detailImage from '../../public/images/f1.png'
import sizeImage from '../../public/images/size.png'

const Index = () => {
    return (
        <div className='sm:flex h-screen items-center sm:gap-20 gap-0 sm:py-20 py-4'>
            <div className='relative flex-1 sm:w-[80%] sm:h-[80%] h-[180px] w-[full]  justify-items-center  mx-20 '>
                <Image src={detailImage} alt="" layout='fill' objectFit='contain' />
            </div>
            <div className='flex-1 sm:ml-0 ml-10 w-[full] place-content-center'>
                <h1 className='font-rubik text-3xl mb-8'>Good Pizza</h1>
                <span className='text-2xl font-bold underline text-primary underline-offset-4'>$10</span>
                <p className='w-3/5 mb-6 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ipsa non</p>
                <div className='mx-2'>
                    <h4 className='text-xl mb-3 ml-3 font-bold'>Choose the size</h4>
                    <div className='flex gap-x-5'>
                        <div className='relative w-10 h-10  border-4 rounded-full hover:border-primary'>
                            <Image src={sizeImage} alt="" />
                            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-r-full px-[5px] font-medium'>Small</span>
                        </div>
                        <div className='relative w-14 h-14 mx-5 border-4 rounded-full hover:border-primary'>
                            <Image src={sizeImage} alt="" />
                            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-r-full px-[5px] font-medium'>Medium</span>
                        </div>
                        <div className='relative w-20 h-20 border-4 rounded-full hover:border-primary'>
                            <Image src={sizeImage} alt="" />
                            <span className='absolute top-0 -right-3 text-xs bg-primary rounded-r-full px-[5px] font-medium'>Large</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-2 my-6'> 
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>ketçap</span>
                    </label>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>mayonez</span>
                    </label>
                    <label className='flex items-center gap-x-1'>
                        <input type="checkbox" className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>hardal</span>
                    </label>
                </div>
                <button className='btn-primary'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Index