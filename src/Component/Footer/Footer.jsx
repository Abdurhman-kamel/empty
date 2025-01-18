import React from 'react'

export default function Footer() {
    return (
        <footer className=' text-white text-center'>
            <div className="py-20 bg-[#2C3E50] text-white grid  grid-cols-3 md:grid-cols-12  text-center">
                <div className="lg:col-span-4 sm:my-5 sm:col-span-12 ">
                    <h3 className='font-semibold text-3xl my-2'>LOCATION</h3>
                    <p className='my-3'>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="lg:col-span-4 sm:my-5 sm:col-span-12 ">
                    <h3 className='font-semibold text-2xl my-2'>AROUND THE WEB</h3>
                    <div className="footerList">
                        <ul className='flex justify-center items-center gap-2 text-lg'>
                            <li className='border rounded-3xl p-1 px-2'><i className="fa-brands fa-facebook"></i></li>
                            <li className='border rounded-3xl p-1 px-2'><i className="fa-brands fa-twitter"></i></li>
                            <li className='border rounded-3xl p-1 px-2'><i className="fa-brands fa-linkedin"></i></li>
                            <li className='border rounded-3xl p-1 px-2'><i className="fa-solid fa-globe"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="lg:col-span-4 sm:my-5 sm:col-span-12 ">
                    <h3 className='font-semibold text-3xl my-2'>ABOUT FREELANCER</h3>
                    <p className='my-2'>Freelance is a free to use, licensed Bootstrap theme created <br /> by Route</p>

                </div>
            </div>
            <div className="bg-[#1A252F] py-6">
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer>
    )
}
