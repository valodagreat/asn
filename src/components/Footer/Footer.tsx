import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const navTabs = [ "Home", "About", "Blog", "Event" ]
  return (
    <div className='bg-[#661318] lg:px-20 lg:py-12 md:p-10 p-6' >
        <div className='flex items-center phone:justify-center phone:py-5 py-6' >
            <div className='flex md:flex-row flex-col gap-y-4 items-center gap-x-20' >
                <Image src={`./../Group.svg`} alt="Bgimage" width={172} height={84} priority className='md:block hidden' />
                <Image src={`./../Mobile.svg`} alt="Bgimage" width={48} height={23.4} priority className='block md:hidden' />
                <div className='flex flex-col gap-y-4 md:order-last order-first phone:items-center' >
                    {navTabs?.map((tab)=><p className='md:text-[19px] text-[10px] leading-[150%] text-white' key={tab} >{tab}</p>)}
                    <div className='flex md:gap-x-5 gap-x-2.5' >
                        <span><Image src={`./../Facebook.svg`} alt="Bgimage" width={21} height={21} priority className='w-[21px] h-[21px]' /></span>
                        <span><Image src={`./../TwitterVector.svg`} alt="Bgimage" width={21} height={21} priority className='w-[21px] h-[21px]' /></span>
                        <span><Image src={`./../InstagramUnion.svg`} alt="Bgimage" width={21} height={21} priority className='w-[21px] h-[21px]' /></span>
                        <span><Image src={`./../LinkedInVector.svg`} alt="Bgimage" width={21} height={21} priority className='w-[21px] h-[21px]' /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer