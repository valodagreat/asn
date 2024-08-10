"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import Link from "next/link";

const NavBar = () => {
    const navTabs = [ "Home", "About", "Blog" ]
    const [ openNav, setOpenNav ] = useState(false)
    const handleClick = () => {
        window.open('https://chat.whatsapp.com/HYCmYQr45EB4QM080Rrr6t', '_blank');
    };
  return (
    <>
        <nav className='flex justify-between items-center w-full' >
            <Link href={`/`}>
                <Image src={`./../Group.svg`} alt="Bgimage" width={172} height={84} priority className='phone:max-w-[60px] phone:max-h-[36.177px]' />
            </Link>
            <div className="flex items-center" >
                <ul className='xl:flex md:gap-x-10 hidden mr-16' >
                    {navTabs?.map((tab)=> {
                        if(tab==="Blog"){
                            return <Link key={tab} href={`/${tab?.toLowerCase()}`}>
                                <li className='font-semibold text-[16px] md:text-[20px] lg:text-[27px] text-[#EEB7BA] ' key={tab} >{tab}</li>
                            </Link>
                        }else {
                            return <a href={`#${tab?.toLowerCase()}`} key={tab} ><li className='font-semibold text-[16px] md:text-[20px] lg:text-[27px] text-[#EEB7BA] ' >{tab}</li></a>
                        }
                    }
                    )}
                </ul>
                <button onClick={handleClick} className='md:text-[20px] w-[177px] rounded-[1000px] bg-[#CC2630] h-[56px] text-white hidden xl:flex items-center justify-center' >
                    Get Involved
                </button>
            </div>
            <div className='xl:hidden block' >
                <Image onClick={()=> setOpenNav(true)} src={`./../quill_hamburger.svg`} alt="Bgimage" width={24} height={24} priority className='' />
            </div>
        </nav>
        <nav className={`bg-white w-full h-screen fixed top-0 left-0 z-[55] p-10 ${openNav ? "block" : "hidden"} xl:hidden`} >
            <div className='flex w-full' >
                <div className='ml-auto' >
                    <Image onClick={()=> setOpenNav(false)} src={`./../Cancel.svg`} alt="Bgimage" width={24} height={24} priority className='cursor-pointer' />
                </div>
            </div>
            <ul className='flex flex-col gap-y-2.5 xl:hidden mx-auto text-center' >
                {navTabs?.map((tab)=> {
                    if(tab==="Blog"){
                        return <Link onClick={()=> setOpenNav(false)} key={tab} href={`/${tab?.toLowerCase()}`}><li className='font-semibold text-[16px] md:text-[20px] lg:text-[27px] text-[#EEB7BA] ' key={tab} >{tab}</li></Link>
                    }else {
                        return <a onClick={()=> setOpenNav(false)} href={`#${tab?.toLowerCase()}`} key={tab} ><li className='font-semibold text-[16px] md:text-[20px] lg:text-[27px] text-[#EEB7BA] ' key={tab} >{tab}</li></a>
                    }
                })}
            </ul>
        </nav>
    </>
  )
}

export default NavBar