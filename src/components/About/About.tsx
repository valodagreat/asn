import Image from 'next/image'
import React from 'react'
import { manual } from '../../styles/font'
import Footer from '../Footer/Footer'
import GetInvolved from '../GetInvolved/GetInvolved'
import Impact from '../Impact/Impact'

const About = () => {
  const valuePropositions = [{ text: "We offer access to cutting edge career exposition and transition opportunities. These includes Career Exposition, Career Transition, Mentorship, Learning Platform.", header: "Career Development", imageDir: "./../Vector 5.svg" }, { text: "We offer access to platform and network that help budding startups grow and build. These includes; Entrepreneurial Mindset , Startup Network, Funding, Incubators x Hackathons.", header: "Entrepreneurship", imageDir: "./../Vector 1.svg" }, { text: "We offer you the opportunity to enhance and harness the power of true leadership. These include; Leadership, Leadership Expo, Mentorship, Training, Social Impact.", header: "Leadership", imageDir: "./../Vector 2.svg" }]
  return (
    <div>
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
            <div className='w-full h-full relative z-10 lg:px-20 lg:py-12 md:p-10 p-6' >
                <h1 className={`text-[#CC2630] font-medium lg:text-[86px] md:text-[60px] text-[19px] ${manual.className} `} >Who we are</h1>
                <p className='text-[#161616] lg:text-[48px] md:text-[32px] text-[10px] lg:leading-[68px] font-normal md:pb-10 lg:pb-20' >We are equipping African students for global relevance central to <span className='font-bold' >career development</span>, <span className='font-bold' >entrepreneurship</span> and <span className='font-bold' >leadership</span> by building a viable network of change makers across diverse universities in Africa.</p>
            </div>
        </div>
        <div className='bg-[#FFFDF6] lg:px-20 lg:py-12 md:p-10 p-6' >
            <h1 className={`text-[#CC2630] font-medium lg:text-[86px] md:text-[60px] text-[19px] ${manual.className} `} >Value Proposition</h1>
            <div className='py-5 md:py-10' >
                <div className='flex flex-col gap-y-5' >
                    {valuePropositions?.map((valueProposition, index)=> {
                        return (
                            <div key={index} className='flex gap-x-5 md:gap-x-10 flex-row w-full items-center' >
                                <div className={`lg:max-w-[756px]  md:w-1/2 ${index === 1 ? "order-last": ""} `} >
                                    <h1 className='md:text-[48px] font-semibold md:leading-[60px] text-[10px] leading-[13.141px]' >{valueProposition?.header}</h1>
                                    <p className='md:text-[32px] md:leading-[43.2px] text-[7px] leading-[9.462px] pt-1' >{valueProposition?.text}</p>
                                </div>
                                <div className='' >
                                    <Image src={valueProposition?.imageDir} alt="Desc" className='md:block hidden' height={409} width={524} priority />
                                    <Image src={valueProposition?.imageDir} alt="Desc" className='block md:hidden' height={112} width={139} priority />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <Impact />
        <GetInvolved />
        <Footer />
    </div>
  )
}

export default About