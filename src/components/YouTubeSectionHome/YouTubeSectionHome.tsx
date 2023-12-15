import React from 'react'
import "./index.css"
import { manual } from '../../styles/font'
import Image from 'next/image'

const YouTubeSectionHome = () => {
  return (
    <div className='bg-[#FFF6F6] xl:py-[150px] xl:px-[120px] py-9 px-7 md:p-[80px] relative h-full overflow-hidden flex flex-col' >
        <Image
            src="./../OBJECTS (2).svg"
            priority={true}
            width={1041}
            height={1120}
            alt="Your alt text"
            className="absolute z-[0] overflow-hidden max-w-[50%] right-[0] top-[0]"
        />
        <div className='youtube_home_cont xl:py-[76px] xl:px-[100px] py-[18px] px-[21px] md:px-[60px] md:pt-[50px] md:pb-[44.75px] z-[1]' >
            <div className='flex justify-center items-center phone:gap-x-[0.066px]' >
                <div className='flex flex-col md:gap-y-[20.903px] xl:gap-y-9 gap-y-[7.718px] justify-center items-start' >
                    <div className='flex flex-col xl:gap-y-4 gap-y-[3.43px] md:gap-y-[9.29px] items-start' >
                        <p className={`font-medium xl:text-[64px] xl:leading-[100px] md:text-[32px] md:leading-[42px] text-[12px] leading-[16px] text-white ${manual.className}`} >Catch up on our latest Webinar and events. </p>
                        <p className={`xl:text-[24px] xl:leading-[48px] md:text-[16px] md:leading-[28px] text-[6px] leading-[10px] text-white`} >Check out our Youtube channel, learn more about the organisation and bine watch our previous online events.</p>
                    </div>
                    <button className='phone:bg-white xl:bg-white xl:h-[72px] xl:w-[440px] w-[95px] h-[14px] phone:py-1 phone:px-2 xl:rounded-[1000px] rounded-[200px] xl:p-6 xl:text-[24px] md:text-[#FFFDF6] phone:text-[#CC2630] xl:text-[#CC2630] xl:leading-[24px] text-[6px] leading-[6px] md:text-[16px] md:leading-[16px] md:px-6 md:py-3 md:rounded-[500px] phoneTab:border phoneTab:border-[#FFF] phoneTab:w-[260px] phoneTab:h-[40px]' >Get Involved</button>
                </div>
                <div className='bg-[#1B0000] xl:h-[400px] xl:w-[586px] md:w-[341px] md:h-[233px] phone:h-[86px] phone:w-[126px] flex items-center justify-center' >
                <a href={`https://www.youtube.com/@africanstudentsnetwork`} target='_blank' ><Image priority={true} src="./../yaotube 1.svg" height={176} width={176} alt="blog-card" className="xl:max-w-[176px] xl:max-h-[176px] phone:max-w-[38px] phone:max-h-[38px] md:w-[103px] md:h-[103px]" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YouTubeSectionHome