import React from 'react'
import CampSite from './CampSite'
import Image from 'next/image'

function Camp() {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage='bg-bg-img-1'
          title='Maasai Mara'
          subtitle='Laikipia, Kenya'
          peopleJoined='22+ Joined'
        />
        <CampSite
          backgroundImage='bg-bg-img-2'
          title='Abadere Forest'
          subtitle='Nyeri, Kenya'
          peopleJoined='72+ Joined'
        />
      </div>
      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>Feeling Lost</strong> and not knowing the way?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>Ranging from the fear to get away from your house, to the apparent lack of company and the fear of what lays ahead; We are here to guide you along the path of finding your little heaven in the wild.</p>
          <Image
            src='/quote.svg'
            alt='camp-quotes'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

export default Camp