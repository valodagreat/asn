import Image from 'next/image'
import React from 'react'
import SingleBlogHerobody from '../Herobody/SingleBlogHerobody'
import NavBar from '../NavBar/NavBar'

const SingleBlogHero = ({articleData, edit, id}: {articleData: any, edit: boolean, id: string}) => {
  return (
    <div className="relative h-full bg-[#402527] w-full phone:h-screen xl:h-screen" id="home" >
    <Image src={`./../asn_bg.svg`} fill={true} style={{objectFit: "cover", mixBlendMode: 'multiply',}} alt="Bgimage" className="z-[0]" priority={true} />
    <div className='relative w-full phone:h-full xl:h-full' >
        <div className=" lg:px-20 lg:py-12 md:p-10 p-6 w-full phone:h-full xl:h-full" >
            <NavBar />
            <SingleBlogHerobody id={id} edit={edit} articleData={articleData} />
        </div>
    </div>
</div>
  )
}

export default SingleBlogHero