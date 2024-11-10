import Image from 'next/image'
import React from 'react';
import Link from "next/link";
import dayjs from 'dayjs';

const BlogCard = ({data}:{data: any}) => {
  return (
    <div className='flex'>
        <Link href={`/blog/${data?.id}`}>
            <div className='relative md:w-[411px] md:h-[580px] phone:w-[150px] phone:h-[210px] xl:mt-[100px] mt-[12px] md:mt-[42px] rounded-[8px] md:rounded-[24px] group overflow-hidden'>
               
                <Image 
                    priority={true} 
                    src={data?.image} 
                    height={331} 
                    width={464} 
                    alt={data?.title || "blog post"} 
                    className="absolute rounded-[8px] md:rounded-[24px] md:w-[411px] md:h-[580px] phone:w-[150px] phone:h-[210px] object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                
             
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-[8px] md:rounded-[24px]'></div>

                
                <div className='flex flex-col rounded-[8px] md:rounded-[24px] z-10 absolute w-full h-full md:px-7 md:py-9 py-5 px-3'>
                    <div className='flex justify-end'>
                        <div className='bg-[#881920] md:p-2 p-1 flex rounded shadow-lg hover:bg-[#6d141a] transition-colors'>
                            <p className='text-[#FFFFFF] font-bold md:text-[16px] md:leading-[21.79px] text-[5.8px] leading-[7.9px]'>
                                {data?.category}
                            </p>
                        </div>
                    </div>

                
                    <div className='absolute md:bottom-10 bottom-2 max-w-[90%]'>
                        <p className='text-[#FFFFFF] font-bold md:pb-4 pb-2 text-[9px] leading-[12px] md:text-[24px] md:leading-[32.68px] drop-shadow-lg'>
                            {data?.title}
                        </p>
                        <p className='text-[#FFFFFF] font-bold md:text-[16px] md:leading-[22px] text-[6px] leading-[8px] opacity-90'>
                            {(data?.dateAdded?.seconds) 
                                ? dayjs((data?.dateAdded?.seconds * 1000) + Math.floor(data?.dateAdded?.nanoseconds / 1000000)).format("MMMM DD, YYYY") 
                                : dayjs().format("MMMM DD, YYYY")
                            }
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default BlogCard