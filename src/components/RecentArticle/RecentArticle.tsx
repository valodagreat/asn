"use client"
import React, { useEffect, useState } from 'react'
import { manual } from '../../styles/font'
import BlogCard from '../BlogSectionHome/BlogCard'
import firebase_app from '../../firebase/config';
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';
import { PageButtonLoader } from '../Button/buttonload';

const RecentArticle = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ optionsList, setOptionsList ] = useState<[]| any[]>([]);
  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(getFirestore(firebase_app), 'Article'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const recipients:any[]  = [];
        querySnapshot.forEach((doc) => {
            recipients.push({...doc.data(), id: doc.id} as any);
        });
        setOptionsList([...recipients])
    });
    setIsLoading(false);
    return () => {
      unsubscribe();
    };
  }, [])
  return (
    <div className='w-full h-full xl:px-[120px] md:px-20 xl:py-[138px] md:py-24 py-9 px-7' >
        <h1 className={`text-[#CC2630] font-medium xl:leading-[57px] xl:text-[56px] md:text-[42px] md:leading-[42px] text-[16px] leading-[12.37px] ${manual.className} phone:pb-6`} >Recent Article</h1>
        <div className='flex flex-wrap phoneTab:flex-col xl:gap-x-12 phone:gap-x-[19px]' >
          {isLoading ? <div className='h-screen w-screen flex justify-center items-center' >
                <div className='h-[60px] w-[60px]' >
                    <PageButtonLoader />
                </div>
            </div> : 
            optionsList?.map((option)=> <BlogCard key={option?.id} data={option} />)}
            {/* <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard /> */}
        </div>
    </div>
  )
}

export default RecentArticle