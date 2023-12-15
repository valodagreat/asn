import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const navTabs = [ "Home", "About", "Blog" ]
  return (
    <div className='bg-[#661318] xl:pt-[65px] xl:pb-[85px] md:pt-[39px] md:pb-[49.93px] phone:p-7' >
        <div className='xl:pl-[120px] md:pl-[80px] xl:pb-[36.35px] md:pb-[21px] phone:flex phone:justify-center phone:pb-4' >
            <Image src={`./../Group.svg`} alt="Bgimage" width={200} height={97.651} priority className='xl:max-w-[200px] xl:max-h-[97.651px] md:max-w-[118px] md:max-h-[58px] phone:w-[60px] phone:h-[30px]' />
        </div>
        <div className='flex phone:flex-col md:flex-row items-center phone:justify-center md:border-y md:border-white' >
            {/* <div className='flex md:flex-row flex-col gap-y-4 items-center gap-x-20' >
                <div className='flex flex-col gap-y-4 md:order-last order-first phone:items-center' >
                    {navTabs?.map((tab)=><p className='md:text-[19px] text-[10px] leading-[150%] text-white' key={tab} >{tab}</p>)}
                    <div className='flex md:gap-x-5 gap-x-2.5' >
                        <span><Image src={`./../Facebook.svg`} alt="Bgimage" width={21} height={21} priority className='w-[21px] h-[21px]' /></span>
                        <span><Image src={`./../TwitterVector.svg`} alt="Bgimage" width={21} height={21} priority className='w-[21px] h-[21px]' /></span>
                        <span><Image src={`./../InstagramUnion.svg`} alt="Bgimage" width={21} height={21} priority className='w-[21px] h-[21px]' /></span>
                        <span><Image src={`./../LinkedInVector.svg`} alt="Bgimage" width={21} height={21} priority className='w-[21px] h-[21px]' /></span>
                    </div>
                </div>
            </div> */}
            <div className='md:w-1/2' >
                <div className='md:pt-[103px] md:pb-[75px] xl:py-[173px] phone:pt-[34px]' >
                    <div className='phoneTab:pl-[80px] xl:pl-[120px]' >
                        <p className='xl:text-[24px] md:text-[14px] leading-[150%] font-bold xl:pb-4 md:pb-2 text-white phone:text-[9px] phone:pb-[3.472px]' >Company</p>
                        <div className='flex flex-col xl:gap-y-4 md:gap-y-[9.48px]' >
                            {navTabs?.map((tab)=>{
                            if(tab==="Blog"){
                                return <Link key={tab} href={`/${tab?.toLowerCase()}`}>
                                    <p className='xl:text-[19px] md:text-[12px] phone:text-[6px] text-[10px] leading-[150%] text-white' key={tab} >{tab}</p>
                                </Link>
                            }else {
                                return <a href={`#${tab?.toLowerCase()}`} key={tab} ><p className='xl:text-[19px] md:text-[12px] phone:text-[6px] text-[10px] leading-[150%] text-white' key={tab} >{tab}</p></a>
                            }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 md:border-l md:border-white phone:order-first' >
                <div className='md:px-[72px] xl:pl-[120px] xl:py-[173px] md:pt-[103px] md:pb-[75px]' >
                    <div className='flex flex-col md:gap-y-8 xl:gap-y-[60px] phone:gap-y-3' >
                        <div className='flex flex-col md:gap-y-8 xl:gap-y-[16px] phone:gap-y-1' >
                            <p className='xl:text-[48px] xl:leading-[48px] md:text-[28px] md:leading-[28px] font-bold text-white phone:text-[12px] phone:leading-[10.417px]' >About us</p>
                            <p className='xl:text-[24px] md:text-[16px] md:leading-[32px] xl:leading-[54px] phone:text-[9px] phone:leading-[14px] text-white' >We are equipping African students for global relevance central to <span className='font-bold' >career development, entrepreneurship</span> and <span className='font-bold' >leadership</span> by building a viable network of change makers across diverse universities in Africa.</p>
                        </div>
                        <div className='flex xl:gap-x-4 md:gap-x-[9.48px] phone:gap-x-2' >
                        {/* <span><Image src={`./../Facebook.svg`} alt="Bgimage" width={32} height={32} priority className='xl:w-[32px] xl:h-[32px] md:w-[16px] md:h-[16px] phone:h-[8px] phone:w-[8px]' /></span> */}
                        <a href={`https://twitter.com/AsnAfricahq`} target='_blank' ><span><Image src={`./../TwitterVector.svg`} alt="Bgimage" width={32} height={32} priority className='xl:w-[32px] xl:h-[32px] md:w-[16px] md:h-[16px] phone:h-[8px] phone:w-[8px]' /></span></a>
                        <a href={`https://www.instagram.com/asnafricahq/`} target='_blank' ><span><Image src={`./../InstagramUnion.svg`} alt="Bgimage" width={32} height={32} priority className='xl:w-[32px] xl:h-[32px] md:w-[16px] md:h-[16px] phone:h-[8px] phone:w-[8px]' /></span></a>
                        <a href={`https://www.linkedin.com/company/african-students-network/`} target='_blank' ><span><Image src={`./../LinkedInVector.svg`} alt="Bgimage" width={32} height={32} priority className='xl:w-[32px] xl:h-[32px] md:w-[16px] md:h-[16px] phone:h-[8px] phone:w-[8px]' /></span></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <p className='text-center phone:text-[6px] leading-[150%] font-light text-white md:text-[12px] xl:text-[20px] md:pt-[51px] xl:pt-[85px] phone:pt-[34.58px]' >Copyright @ African Student Network 2023</p>
    </div>
  )
}

export default Footer