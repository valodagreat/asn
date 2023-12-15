import React from 'react'
import { lato_font } from '../../styles/font'

const BlogHerobody = () => {
  return (
    <div className="w-full phone:h-full phone:justify-center phone:items-center phone:flex xl:h-full xl:justify-center xl:items-center xl:flex" >
      <div className="text-center" >
          <p className={`mx-auto text-[#FFFDF6] xl:pt-52 pt-8 md:pt-14 ${lato_font.className} md:text-[60px] text-[28px] xl:text-[100px] text-center md:max-w-[513px] xl:max-w-[734px] font-bold xl:tracking-[-1px] md:tracking-[-0.6px] tracking-[-0.28px] xl:leading-[110px] md:leading-[72px] leading-[32px] phone:max-w-[230px]`} >Our Blog</p>
          <p className='mx-auto text-[#E59297] font-semibold text-[12px] md:text-[18px] xl:text-[36px] xl:pt-4 pt-2 md:pt-5' >Discover, Learn, Inspire</p>
          <div className="w-full flex justify-center pb-20 md:pb-40 xl:pb-88 xl:pt-11 pt-3" ></div>
      </div>
    </div>
  )
}

export default BlogHerobody