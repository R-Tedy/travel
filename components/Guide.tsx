import Image from 'next/image'
import React from 'react'

function Guide() {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <Image
          src='/camp.svg'
          alt='camp'
          width={50}
          height={50}
        />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          We are here for you
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Showing you the best way to follow</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>With the Stedy Run app you will be able to have access to offline maps, and to on the call guiding systems to show you the path. We also have rangers on the ground to ensore the safety of every trail on our app and we will be there with a click of a button. The jungle doesn't always have to be scary, it can also be fun and full of so much love, family and adventure. Give us a chance to show you something better, give us a chance to give you awesomeness like never before. Enjoy.</p>
        </div>
      </div>
      <div className='flexCenter max-container relative w-full'>
        <Image
          src='/boat.png'
          alt='boat image'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl'
        />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image
            src='/meter.svg'
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='regular-16 text-green-50'>34 min</p>
              </div>
              <p className='bold-20 mt-2'>Kilimanjaro Crater </p>
            </div>
            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20'>Start Track</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>Kilimanjaro Forest </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide