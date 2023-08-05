import Image from 'next/image'
import React from 'react'
import Herobody from '../Herobody/Herobody'
import NavBar from '../NavBar/NavBar'

const Hero = () => {
  return (
    <div className="relative h-full bg-[#402527]" >
        <Image src={`./../group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme 1.svg`} fill={true} style={{objectFit: "cover", mixBlendMode: 'multiply',}} alt="Bgimage" className="z-[0]" priority />
        <div className='relative' >
            <div className=" lg:px-20 lg:py-12 md:p-10 p-6" >
                <NavBar />
                <Herobody />
            </div>
        </div>
    </div>
  )
}

export default Hero