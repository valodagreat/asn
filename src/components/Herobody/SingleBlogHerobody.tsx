import dayjs from 'dayjs'
import Link from 'next/link';
import React from 'react'

const SingleBlogHerobody = ({articleData, edit, id}: {articleData: any, edit: boolean, id: string}) => {
    const calculateReadingTime = (text: any) => {
        const wordsPerMinute = 250; // Adjust this value as needed
        const words = text?.split(/\s+/).length;
        const readingTimeInMinutes = Math.ceil(words / wordsPerMinute);
        
        return readingTimeInMinutes;
    };
  return (
    <div className="w-full phone:h-full phone:justify-center phone:items-center phone:flex xl:h-full xl:justify-center xl:items-center xl:flex" >
        <div className='flex flex-col xl:gap-y-7 items-center gap-y-4 md:gap-y-10' >
            <div className='flex md:gap-x-7 text-white items-center phone:gap-x-1 phone:text-[12px] md:text-[19px]' >
                <p className='xl:text-[32px] md:text-[19px] font-bold' >{articleData?.category}</p>
                <p>•</p>
                <p className='xl:text-[24px] md:text-[19px]' >{calculateReadingTime(articleData?.body)} minute{calculateReadingTime(articleData?.body) > 1 ? 's' : ''} read</p>
            </div>
            <div className='text-center text-white flex flex-col xl:gap-y-4 phone:gap-y-4 md:gap-y-3' >
                <p className='font-bold xl:text-[72px] phone:text-[18px] md:text-[28px]' >{articleData?.title}</p>
                <p className='xl:text-[32px] phone:text-[12px] md:text-[16px]' >{articleData?.description}</p>
            </div>
            <div className='flex gap-x-2 md:gap-x-3 text-white xl:text-[24px] font-light items-center phone:text-[12px] md:text-[16px]' >
                <p className='capitalize' >{articleData?.author || "ASN"}</p>
                <p>•</p>
                <p> {(articleData?.dateAdded?.seconds) ? dayjs((articleData?.dateAdded?.seconds * 1000) + Math.floor(articleData?.dateAdded?.nanoseconds / 1000000)).format("MMMM DD, YYYY") : dayjs().format("MMMM DD, YYYY")}</p>
                {edit && <>
                    <p>•</p>
                    <p><Link href={`/edit/blog/${id}`} >Edit</Link></p>
                </>}
            </div>
        </div>
    </div>
  )
}

export default SingleBlogHerobody