import React from 'react'
import Image from 'next/legacy/image'
import Title from '../../components/ui/Title'

const index = () => {
  return (
    <div className="min-h-[calc(100vh_-_120px)]">
      <div className='justify-between flex items-center md:flex-row flex-col'>
        <div className='min-h-[calc(100vh_-_433px)] flex flex-1 items-center mx-3 p-10 overflow-x-auto'>
          <table className='w-full text-sm text-center text-gray-500 min-w-[1000px]'>
            <thead className='text-xs text-gray-400 uppercase bg-gray-700'>
              <tr>
                <th scope='col' className='py-3 px-6'>PRODUCT</th>
                <th scope='col' className='py-3 px-6'>EXTRAS</th>
                <th scope='col' className='py-3 px-6'>PRICE</th>
                <th scope='col' className='py-3 px-6'>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b bg-secondary border-gray-700 hover:bg-primary transition-all'>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center'>
                  <Image alt='' src="/images/f1.png" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>
                  <span>mayonez, acı sos, ketçap,</span>
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>$20</td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white'>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='bg-secondary min-h-[calc(100vh_-_150px)] flex flex-col justify-center text-white p-12 md:w-auto w-full mb-2  md:rounded-bl-3xl  rounded-3xl md:rounded-none'>
          <Title classAdd="text-[40px] ">CART TOTAL</Title>

          <div className="mt-10">
            <b>Subtotal: </b>$20 <br />
            <b className="inline-block my-1">Discount: </b>$0.00 <br />
            <b>Total: </b>$20
          </div>
          <button className="btn-primary mt-4">CHECK OUT NOW!</button>
        </div>
      </div>
    </div>
  )
}

export default index