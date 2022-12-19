import React from 'react'
import Image from 'next/legacy/image'
import itemImage from '../../public/images/f1.png'
import { MdShoppingCart } from 'react-icons/md';


const MenuItem = () => {
    return (
        <div className=' bg-secondary rounded-[28px] '>
            <div className='w-full bg-[#f1f2f3] rounded-bl-[46px] p-6 relative items-center justify-center grid rounded-tr-3xl rounded-tl-3xl'>
                <div className=' w-36 h-36 hover:scale-110 transition-all '>
                    <Image src={itemImage} alt="" objectFit='cover'  />
                </div>
            </div>
            <div className='p-6 bg-secondary text-white rounded-[28px]'>
                <h1 className='text-xl font-semibold'>Delicious Pizza</h1>
                <p className='my-4'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                <div className='flex justify-between items-center'>
                    <h1>$20</h1>
                    <button className='btn-primary !w-10 !h-10 items-center !p-0 grid rounded-full place-content-center'>
                        <MdShoppingCart size={15}  />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuItem