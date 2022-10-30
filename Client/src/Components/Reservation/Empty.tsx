import React from 'react'
import basket from '../../assets/basket.webp'
const Empty = ({error}:any) => {
  return (
    <div className='h-80 flex flex-col space-y-2 justify-center items-center'>
      <img className="w-full h-full object-cover" src={basket} alt="/" />
      <p className=' text-xl md:text-2xl font-semibold text-blue-600'>{error}</p>
    </div>
  )
}

export default Empty