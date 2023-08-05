import Image from 'next/image'
import React from 'react'
import { manual } from '../../styles/font'

const GetInvolved = () => {
  return (
    <div className='bg-[#FFFDF6] ' >
        <div className=' relative flex flex-row-reverse' >
            <div className="absolute w-1/2 h-full overflow-hidden">
                <Image
                    src="./../OBJECTS.svg"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    alt="Your alt text"
                    className="absolute"
                />
            </div>
            <div className='lg:px-20 lg:py-12 md:p-10 p-6 w-full h-full relative z-10' >
                <div className='flex justify-center items-center w-full h-full md:py-16 py-2' >
                    <div className={`md:px-10 md:h-[137px] flex items-center h-[57px] px-4 bg-[#CC2630] text-white lg:text-[86px] md:text-[60px] text-[19px] ${manual.className} `} >
                        Get Involved
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInvolved