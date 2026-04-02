import React from 'react'
import logo_humus from '../../assets/logo_humus.png'

const navbarlinks = [
    {
        id: 1,
        title: "About",
        Link: "/"
    },
    {
        id: 2,
        title: "Events",
        Link: "/events"
    },
    {
        id: 3,
        title: "Contact",
        Link: "/Contact"
    }
]

const navbar = () => {
    return (
        <nav>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

                {/*  Logo navbar */}
                <div>
                    <img src={logo_humus} alt='logo' className='logo' />
                </div>


                {/*Navegación desktop */}
                <div>
                    <ul className='flex sm:space-x-8 space-x-4'>
                        {navbarlinks.map((Link) =>
                            <li key={Link.id}>
                                <a className='sm:text-lg text-sm' href={Link.Link}>{Link.title}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            <div>
                <p className='text-center text-8xl py-50'>Educamos el futuro y perfeccionamos al humano</p>
            </div>
        </nav>
    )
}

export default navbar
