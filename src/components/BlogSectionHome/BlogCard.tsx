import Image from 'next/image'
import React from 'react';
import Link from "next/link";

const BlogCard = ({data}:{data: any}) => {
  return (
    <Link href={`/blog/${data?.id}`} >
        <div className='xl:max-w-[464px] phone:max-w-[150px] w-full xl:mt-[100px] mt-[12px] md:mt-[42px] phoneTab:flex' >
        <Image priority={true} src="./../Frame 13.svg" height={331} width={464} alt="blog-card" className="rounded-t-[16px] xl:max-w-[464px] xl:max-h-[331px] phone:max-w-[150px] phone:max-h-[112px] phoneTab:max-w-[380px] phoneTab:max-h-[331px]" />
        {/* <Image src="./../Frame 13.svg" height={112} width={150} alt="blog-card rounded-t-[16px] xl:max-w-[464px] xl:max-h-[331px] xl:hidden " /> */}
        <div className='bg-[#FFF6F6] md:px-[28px] px-2 pt-[13px] pb-[16px] xl:pt-[53px] xl:pb-[40px] phoneTab:rounded-r-[16px] phone:rounded-b-[16px] xl:rounded-b-[16px] phoneTab:max-h-[331px] phoneTab:py-[35px]' >
            <div className='flex flex-col phone:gap-y-2 xl:gap-y-[34px] phoneTab:justify-between h-full' >
                <div className='flex gap-x-1 xl:gap-x-7 text-[6px] items-center md:text-[16px] xl:text-[19px]' >
                    <p className='text-[#CC2630] font-bold' >{data?.category}</p>
                    <div>•</div>
                    <p>15 minutes read</p>
                </div>
                <div>
                    <p className='font-bold xl:text-[24px] md:text-[19px] text-[12px] ' >{data?.title}</p>
                    <p className='xl:text-[16px] text-[6px] md:text-[12px]' >{data?.description}</p>
                </div>
                <div className='flex gap-x-1 xl:gap-x-[12px] text-[6px] items-center md:text-[12px] xl:text-[19px]' >
                    <p className='font-light' >Oluwapelumi Egunjobi</p>
                    <div>•</div>
                    <p className='font-light' >October 10, 2023</p>
                </div>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default BlogCard