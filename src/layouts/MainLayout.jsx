import React, { useState } from 'react'
import ImagenReact from '../assets/react.svg'
import { Link, useParams, useLocation, useNavigate, Navigate, Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [state, setState] = useState(false)
    console.log(state);
    
    return (
        <div className='w-screen min-h-screen bg-blue-300 flex flex-col justify-center items-center gap-4'>
            <header className='w-full h-[10vh] bg-gray-400 flex justify-between items-center px-4'>
                <img onClick={() => setState(!state)} src={state ? ImagenReact : './vite.svg'} alt="" />
                <nav className='flex gap-4'>
                    <Link to="/">Contador</Link>
                    <Link to="/lista">Lista</Link>
                    {/* <a href="#">Contact</a> */}
                </nav>
            </header>

            <main className='flex-1'>
                <Outlet />
            </main>

            <footer className='w-full h-[10vh] bg-gray-400 flex justify-between items-center px-4'>
                <nav className='flex gap-4'>
                    <Link to="/">Contador</Link>
                    <Link to="/lista">Lista</Link>
                </nav>
            </footer>
        </div>
    )
}

export default MainLayout