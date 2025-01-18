import React from 'react'

export default function About() {
    return (
        <section className='py-52 bg-[#1ABC9C] text-white'>
            <div className='py-14 flex justify-center items-center flex-col '>
                <h1 className='uppercase font-bold text-4xl'>about component</h1>
                <div className='star py-2 relative'>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="phone:w-[80%] sm:container sm:w-3/4 mx-auto">
                    <div className="grid grid-cols-12  gap-3">
                        <div className="phone:col-span-12 sm:col-span-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                        <div className="phone:col-span-12 sm:col-span-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
                    </div>
                </div>

            </div>
        </section>
    )
}
