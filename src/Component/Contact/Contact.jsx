import React, { useState } from 'react'

export default function Contact() {
    let [dataInput, setdataInput] = useState('')
    let [placeholderr, setplaceholderr] = useState('')


    return (
        <section className='pt-32 sm:py-32  phone:py-[30%]  '>
            <div className="portfolio text-center text-[#2C3E50]">
                <h1 className=' uppercase font-bold text-4xl'>Contact Component</h1>
                <div className='star  py-2 relative'>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>

            <div className="w-1/2 mx-auto my-10"><div className="relative z-0">
                <input type="text" id="userName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#2C3E50] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                <label for="userName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-[#2C3E50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
            </div>
            </div>
            <div className="w-1/2 mx-auto my-10"><div className="relative z-0">
                <input type="text" id="userAge" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#2C3E50] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="userAge" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-[#2C3E50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">User Age</label>
            </div>
            </div>
            <div className="w-1/2 mx-auto my-10"><div className="relative z-0">
                <input type="text" id="userEmail" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#2C3E50] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="userEmail" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-[#2C3E50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">User Email</label>
            </div>
            </div>
            <div className="w-1/2 mx-auto my-10"><div className="relative z-0">
                <input type="text" id="userPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#2C3E50] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="userPassword" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-[#2C3E50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">User Password</label>
            </div>
                <button type="button" className=" my-4 text-white bg-[#1ABC9C] hover:bg-[#1ABC9C] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#1ABC9C] dark:hover:bg-[#1ABC9C] focus:outline-none dark:focus:ring-[#1ABC9C]">Default</button>
            </div>

        </section>
    )
}
