import casablanca from '../../assets/casa.webp'
import marrakech from '../../assets/marrakech.webp'
import tanger from '../../assets/tanger.webp'
import rabat from '../../assets/rabat.webp'
import safi from '../../assets/safi.webp'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1 className='text-3xl md:text-4xl font-bold'>All-Inclusive Resorts</h1>
        <p className='py-4 text-xl md:text-xl'>The Best cities</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={safi} alt="/" />
            <img className='w-full h-full object-cover' src={casablanca} alt="/" />
            <img className='w-full h-full object-cover' src={marrakech} alt="/" />
            <img className='w-full h-full object-cover' src={tanger} alt="/" />
            <img className='w-full h-full object-cover' src={rabat} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations