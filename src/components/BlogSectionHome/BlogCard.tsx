import Image from 'next/image'
import React from 'react';
import Link from "next/link";
import dayjs from 'dayjs';

const BlogCard = ({data}:{data: any}) => {
    console.log(data);
  return (
    <div className='flex' >
        <Link href={`/blog/${data?.id}`} >
            <div className='relative md:w-[411px] md:h-[580px] phone:w-[150px] phone:h-[210px] xl:mt-[100px] mt-[12px] md:mt-[42px] rounded-[8px] md:rounded-[24px]' >
            <Image priority={true} src={data?.image} height={331} width={464} alt="blog-card" className="absolute rounded-[8px] md:rounded-[24px] md:w-[411px] md:h-[580px] phone:w-[150px] phone:h-[210px] object-cover" />
            <div className='flex flex-col rounded-[8px] md:rounded-[24px] z-10 absolute md:w-[411px] md:h-[580px] phone:w-[150px] phone:h-[210px] md:px-7 md:py-9 py-5 px-3' >
                <div className='flex justify-end' >
                    <div className='bg-[#881920] md:p-2 p-1 flex rounded' >
                        <p className='text-[#FFFFFF] font-bold md:text-[16px] md:leading-[21.79px] text-[5.8px] leading-[7.9px]' >{data?.category}</p>
                    </div>
                </div>
                <div className='absolute md:bottom-10 bottom-2' >
                    <p className='text-[#FFFFFF] font-bold md:pb-4 pb-2 text-[9px] leading-[12px] md:text-[24px] md:leading-[32.68px]' >{data?.title}</p>
                    <p className='text-[#FFFFFF] font-bold md:text-[16px] md:leading-[22px] text-[6px] leading-[8px]' >{ (data?.dateAdded?.seconds) ? dayjs((data?.dateAdded?.seconds * 1000) + Math.floor(data?.dateAdded?.nanoseconds / 1000000)).format("MMMM DD, YYYY") : dayjs().format("MMMM DD, YYYY")}</p>
                </div>
            </div>
            {/* <Image src="./../Frame 13.svg" height={112} width={150} alt="blog-card rounded-t-[16px] xl:max-w-[464px] xl:max-h-[331px] xl:hidden " /> */}
            {/* <div className='bg-[#FFF6F6] md:px-[28px] px-2 pt-[13px] pb-[16px] xl:pt-[53px] xl:pb-[40px] phoneTab:rounded-r-[16px] phone:rounded-b-[16px] xl:rounded-b-[16px] phoneTab:max-h-[331px] phoneTab:py-[35px]' >
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
            </div> */}
        </div>
        </Link>
    </div>
  )
}

export default BlogCard
