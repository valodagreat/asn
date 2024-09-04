import dayjs from 'dayjs'
import React from 'react'

const BlogContent = ({articleData}: {articleData: any}) => {
  return (
    <div className='phone:px-[38px] xl:px-[300px] md:px-[100px]' >
        <div className='phone:text-[12px] phone:leading-[28px] phone:py-9 md:pt-[100px] md:pb-[80px] xl:pt-[150px] xl:pb-[100px] md:text-[24px] md:leading-[60px] border-b border-[#000]' dangerouslySetInnerHTML={{ __html: articleData?.body}} >
            
        </div>
        <div className='phone:pt-4 phone:pb-8 xl:pt-[60px] xl:pb-[200px] md:pt-7 md:pb-[80px]' >
            <p className='phone:text-[12px] md:text-[24px]' >Written by: </p>
            <p className='font-bold phone:text-[12px] phone:py-2 md:pt-6 md:pb-3 xl:pt-[24px] xl:pb-[12px] md:text-[24px] capitalize' >{articleData?.author || "ASN"}</p>
            <p className='phone:text-[12px] font-medium md:text-[24px]' >{(articleData?.dateAdded?.seconds) ? dayjs((articleData?.dateAdded?.seconds * 1000) + Math.floor(articleData?.dateAdded?.nanoseconds / 1000000)).format("MMMM DD, YYYY") : dayjs().format("MMMM DD, YYYY")}</p>
        </div>
    </div>
  )
}

export default BlogContent