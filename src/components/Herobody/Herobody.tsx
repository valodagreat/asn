import React from 'react'
import { manual } from '../../styles/font'

const Herobody = () => {
  return (
    <div>
        <p className={`font-medium xl:text-[166px] text-[36px] leading-[39px] xl:leading-[182.6px] text-[#FFFDF6] lg:text-[145px] lg:leading-[171.6px] md:text-[100px] md:leading-[136.6px] pt-20 ${manual.className} `} >Empowering African Students</p>
        <p className='text-[#E59297] font-semibold text-[10px] md:text-[18px] lg:text-[28px] xl:text-[41px] pb-12 md:pb-20 lg:pb-28' >Unlock Your Potential . Embrace Opportunities . Lead the Way</p>
    </div>
  )
}

export default Herobody