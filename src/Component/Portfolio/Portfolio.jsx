import React, { useState } from 'react'
import img1 from '../../imgs/poert1.png'
import img2 from '../../imgs/port2.png'
import img3 from '../../imgs/port3.png'

export default function Portfolio() {
    const [portImg, setPortImg] = useState([
        img1, img2, img3, img1, img2, img3
    ]
    )
    const [returnedImg, setReturnedIimg] = useState(

    )
    const [layer, setLayer] = useState('')

    function showedImg(img) {
        setReturnedIimg(img)
        setLayer('fixed')
    }
    return (
        <section className='phone:py-[30%] sm:py-32 portfolio'>
            <div className=" text-center text-[#2C3E50]">
                <h1 className=' uppercase font-bold phone:text-xl phone:mt-10 sm:mt-5 sm:text-4xl'>Portfolio Component</h1>
                <div className='star star-bg py-2 relative'>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>

            <div className="continer container  w-10/12 mx-auto ">
                <div className="grid grid-cols-12 phone:justify-center gap-11">
                    {portImg.map(img =>
                        <div className="cursor-pointer phone:col-span-12 lg:col-span-4 md:col-span-6  sm:col-span-12 relative group">
                            <img className='rounded-lg w-full phone:w-[80%] phone:mx-auto' src={img} alt="" />
                            <div onClick={function () { showedImg(img) }} className="imgHov phone:w-[80%] phone:mx-auto absolute  flex text-9xl rounded-lg group-hover:bg-[#1ABC9C]  justify-center items-center inset-0 transition-all duration-300">
                                <i className="fa-solid fa-plus text-white opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div onClick={(e) => { e.target.tagName != "IMG" ? setLayer("hidden") : '' }} className={`${layer} inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[60]`}>
                <img className='lg:w-2/5 sm:w-5/6' src={returnedImg} alt="" />
            </div>
        </section>
    )
}
