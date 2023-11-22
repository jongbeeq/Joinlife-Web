import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div className='w-full h-full flex justify-center  overflow-auto'>
            <Navbar />
            <div className='w-[82%]'>
                <Outlet />
            </div>
        </div>
    )
}