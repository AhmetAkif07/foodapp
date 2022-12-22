import React from 'react'

const Input = () => {
  return (
    <div className='w-full'>
        <label className='relative block cursor-text w-full '>
            <input type="text" required className='w-full h-14 border border-primary pt-2 outline-none px-4 peer rounded-2xl' />
            <span className='absolute top-0 left-0 px-4 text-sm items-center flex h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all'>Email</span>
            
        </label>
    </div>
  )
}

export default Input