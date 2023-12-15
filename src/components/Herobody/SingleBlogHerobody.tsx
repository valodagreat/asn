import React from 'react'

const SingleBlogHerobody = ({articleData}: {articleData: any}) => {
  return (
    <div className="w-full phone:h-full phone:justify-center phone:items-center phone:flex xl:h-full xl:justify-center xl:items-center xl:flex" >
        <div className='flex flex-col xl:gap-y-7 items-center gap-y-[6px] md:gap-y-10' >
            <div className='flex md:gap-x-7 text-white items-center phone:gap-x-1 phone:text-[12px] md:text-[19px]' >
                <p className='xl:text-[32px] md:text-[19px] font-bold' >{articleData?.category}</p>
                <p>•</p>
                <p className='xl:text-[24px] md:text-[19px]' >7 minutes read</p>
            </div>
            <div className='text-center text-white flex flex-col xl:gap-y-4 phone:gap-y-1 md:gap-y-3' >
                <p className='font-bold xl:text-[72px] phone:text-[18px] md:text-[28px]' >{articleData?.title}</p>
                <p className='xl:text-[32px] phone:text-[12px] md:text-[16px]' >{articleData?.description}</p>
            </div>
            <div className='flex md:gap-x-3 text-white xl:text-[24px] font-light items-center phone:text-[12px] md:text-[16px]' >
                <p>Oluwapelumi Egunjobi</p>
                <p>•</p>
                <p>October 10, 2023</p>
            </div>
        </div>
    </div>
  )
}

export default SingleBlogHerobody