"use client"

import React from 'react'

const Button = () => {
    const handleClick = () => {
        window.open('https://chat.whatsapp.com/HYCmYQr45EB4QM080Rrr6t', '_blank');
    };
  return (
    <button onClick={handleClick} className='md:h-[48px] h-[34px] bg-[#CC2630] w-[143px] md:w-[284px] rounded-full text-[#FFFDF6] text-center phone:text-[10px] phone:leading-[10px]' >Get Involved</button>
  )
}

export default Button