import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    let [scrollMove, setScrollMove] = useState('py-8')
    window.addEventListener('scroll', () => {
        window.scrollY !== 0 ? setScrollMove('py-5') : setScrollMove('py-8')

    })
    return (
        <nav className={`bg-[#2C3E50] text-white fixed w-full z-50 ${scrollMove} transition-all duration-500 `}>
            <div className="container w-10/12  mx-auto sm:flex justify-between items-center ">
                <div className="brand ">
                    <Link className='phone:text-xl sm:text-3xl phone:block uppercase font-bold phone:text-center' to={'/home'}>start framework</Link>
                </div>
                <div className="navLink ">
                    <ul className='flex gap-10 phone:justify-center phone:my-5 font-bold text-base uppercase'>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Portfolio">portfolio</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
