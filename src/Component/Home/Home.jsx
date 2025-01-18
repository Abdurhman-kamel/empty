import React, { useState } from 'react'
import mainImg from '../../imgs/avataaars.svg'

export default function Home() {

    return (
        <section className='py-28 bg-[#1ABC9C] text-white'>
            <div className='flex justify-center items-center flex-col '>
                <img className='w-60 my-12' src={mainImg} alt="" />
                <h1 className='uppercase font-bold text-4xl'>start Framework</h1>
                <div className='star py-2 relative'>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>

            </div>
        </section>
    )
}
