"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const NavBar = () => {
    const navTabs = [ "Home", "Programs", "About", "Get Involved" ]
    const [ openNav, setOpenNav ] = useState(false)
  return (
    <>
        <nav className='flex justify-between items-center w-full' >
            <Image src={`./../Group.svg`} alt="Bgimage" width={172} height={84} priority className='md:block hidden' />
            <Image src={`./../Mobile.svg`} alt="Bgimage" width={48} height={23.4} priority className='block md:hidden' />
            <ul className='flex md:flex md:gap-x-10 hidden md:block' >
                {navTabs?.map((tab)=> <li className='font-semibold text-[16px] md:text-[20px] lg:text-[27px] text-[#EEB7BA] ' key={tab} >{tab}</li>)}
            </ul>
            <div className='md:hidden block' >
                <Image onClick={()=> setOpenNav(true)} src={`./../quill_hamburger.svg`} alt="Bgimage" width={24} height={24} priority className='' />
            </div>
        </nav>
        <nav className={`bg-white w-full h-screen fixed top-0 left-0 z-[55] p-10 ${openNav ? "block" : "hidden"} md:hidden`} >
            <div className='flex w-full' >
                <div className='ml-auto' >
                    <Image onClick={()=> setOpenNav(false)} src={`./../Cancel.svg`} alt="Bgimage" width={24} height={24} priority className='cursor-pointer' />
                </div>
            </div>
            <ul className='flex flex-col gap-y-2.5 md:hidden block mx-auto text-center' >
                {navTabs?.map((tab)=> <li className='font-semibold text-[16px] md:text-[20px] lg:text-[27px] text-[#EEB7BA] ' key={tab} >{tab}</li>)}
            </ul>
        </nav>
    </>
  )
}

export default NavBar