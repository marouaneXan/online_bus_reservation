import React from 'react'
interface Prop{
    empty:string
}

const Empty = (props:Prop) => {
  return (
    <div className='h-[32rem] flex flex-col space-y-2 justify-center items-center'>
      <p className=' text-xl md:text-2xl font-semibold text-blue-600'>{props.empty}</p>
    </div>
  )
}

export default Empty