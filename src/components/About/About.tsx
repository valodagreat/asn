import Image from 'next/image'
import React from 'react'
import { manual } from '../../styles/font'
import Footer from '../Footer/Footer'
// import GetInvolved from '../GetInvolved/GetInvolved'
// import Impact from '../Impact/Impact'
import BlogSectionHome from '../BlogSectionHome/BlogSectionHome'
import YouTubeSectionHome from '../YouTubeSectionHome/YouTubeSectionHome'

const About = () => {
  const valuePropositions = [{ text: "We offer access to cutting edge career exposition and transition opportunities. These includes Career Exposition, Career Transition, Mentorship, Learning Platform.", header: "Career Development", imageDir: "./../Frame 60.svg" }, { text: "We offer access to platform and network that help budding startups grow and build. These includes; Entrepreneurial Mindset , Startup Network, Funding, Incubators x Hackathons.", header: "Entrepreneurship", imageDir: "./../Frame 60 (1).svg" }, { text: "We offer you the opportunity to enhance and harness the power of true leadership. These include; Leadership, Leadership Expo, Mentorship, Training, Social Impact.", header: "Leadership", imageDir: "./../Frame 60 (2).svg" }]
  return (
    <div id="about" >
        <div className=' relative flex flex-row-reverse' >
            <div className="absolute w-1/2 h-full overflow-hidden">
                <Image
                    src="./../OBJECTS.svg"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    objectPosition="center"
                    alt="Your alt text"
                    className="absolute"
                />
            </div>
            <div className='w-full h-full relative z-10 xl:px-[120px] md:px-20 xl:py-[138px] md:py-24 py-9 px-7' >
                <h1 className={`text-[#CC2630] font-medium xl:leading-[57px] xl:text-[56px] md:text-[42px] md:leading-[42px] text-[16px] leading-[12.37px] ${manual.className} xl:pb-11 md:pb-7 pb-2`} >Who we are</h1>
                <p className='text-[#161616] xl:text-[36px] xl:leading-[64px] md:text-[24px] text-[9px] md:leading-[43.691px] font-normal' >We are equipping African students for global relevance central to <span className='font-bold' >career development</span>, <span className='font-bold' >entrepreneurship</span> and <span className='font-bold' >leadership</span> by building a viable network of change makers across diverse universities in Africa.</p>
            </div>
        </div>
        <div className='bg-[#FFF6F6] xl:pt-[150px] md:pt-[60px] pt-9' >
            <h1 className={`text-[#CC2630] font-medium xl:text-[56px] md:text-[42px] text-[16px] ${manual.className} md:px-[80px] px-7 xl:px-[120px] md:pb-[48px] xl:pb-10 pb-6`} >Our Value Proposition</h1>
            <div className='relative w-full' >
                <Image
                    src="./../OBJECTS (1).svg"
                    // fill={true}
                    // style={{ objectFit: "contain" }}
                    // objectPosition="center center"
                    // layout="fill"
                    // objectFit="contain"
                    // objectPosition="center center"
                    priority={true}
                    width={1041}
                    height={1120}
                    alt="Your alt text"
                    className="absolute z-[0] overflow-hidden max-w-[60%] left-[15%] md:top-[25%] top-[28%]"
                />
                <div className='md:flex flex-col relative hidden' >
                    {valuePropositions?.map((valueProposition, index)=> {
                        return (
                            <div key={index} className='flex flex-row w-full items-center' >
                                <div className={`md:w-1/2 ${index === 1 ? "order-last xl:pr-[120px] xl:pl-[48px] md:pr-[80px] md:pl-[45px]": "xl:pl-[120px] xl:pr-[100px] md:pl-[80px] md:pr-[45px]"} `} >
                                    <h1 className='xl:text-[48px] font-semibold xl:leading-[60px] xl:tracking-[-0.96px] text-[10px] leading-[13.141px] md:text-[24px] md:leading-[35.556px] md:tracking-[-0.48px] ' >{valueProposition?.header}</h1>
                                    <p className={`xl:text-[24px] xl:leading-[48px] md:text-[16px] md:leading-[32px] text-[7px] leading-[9.462px] xl:pt-4 md:pt-2.5`} >{valueProposition?.text}</p>
                                </div>
                                <div className='md:w-1/2' >
                                    <Image src={valueProposition?.imageDir} alt="Desc" className='xl:block hidden w-full' height={588} width={100} priority />
                                    <Image src={valueProposition?.imageDir} alt="Desc" className='phoneTab:block hidden w-full' height={348} width={100} priority />
                                    <Image src={valueProposition?.imageDir} alt="Desc" className='block md:hidden' height={112} width={139} priority />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='px-7 md:hidden' >
                    <div className='pb-9' >
                        <Image width={200} height={136} src={"./../Frame 60.svg"} alt='desc' className=' max-w-[200px] w-full' />
                        <div className='w-[187px] h-[150px] bg-white left-[25%] relative mt-[-12px] flex flex-col justify-center px-5' >
                            <h1 className='text-[12px] font-semibold leading-[13.021px] tracking-[-0.24px] text-black pb-2' >Career Development</h1>
                            <p className='text-[9px] leading-[16px]' >We offer access to cutting edge career exposition and transition opportunities. These includes Career Exposition, Career Transition, Mentorship, Learning Platform.</p>
                        </div>
                    </div>
                    <div className='pb-9 relative flex flex-col' >
                        <div className='w-[187px] h-[150px] bg-white flex flex-col justify-center px-5 mb-[-12px] z-[1]' >
                            <h1 className='text-[12px] font-semibold leading-[13.021px] tracking-[-0.24px] text-black pb-2' >Entrepreneurship</h1>
                            <p className='text-[9px] leading-[16px]' >We offer access to a platform and network that help budding startups grow and build. These include Entrepreneurial Mindset, Startup Network, Funding, Incubators x Hackathons.</p>
                        </div>
                        <Image width={200} height={136} src={"./../Frame 60 (1).svg"} alt='desc' className='max-w-[200px] w-full left-[25%] relative z-[0]' />
                    </div>
                    <div className='pb-9' >
                        <Image width={200} height={136} src={"./../Frame 60 (2).svg"} alt='desc' className=' max-w-[200px] w-full' />
                        <div className='w-[187px] h-[150px] bg-white left-[25%] relative mt-[-12px] flex flex-col justify-center px-5' >
                            <h1 className='text-[12px] font-semibold leading-[13.021px] tracking-[-0.24px] text-black pb-2' >Leadership</h1>
                            <p className='text-[9px] leading-[16px]' >We offer you the opportunity to enhance and harness the power of true leadership. These include; Leadership, Leadership Expo, Mentorship, Training, Social Impact.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Impact /> */}
        <BlogSectionHome />
        <YouTubeSectionHome />
        {/* <GetInvolved /> */}
        <Footer />
    </div>
  )
}

export default About