import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div className='flex flex-row h-full bg-orange-50'>
            <Navbar />
            <Outlet />
        </div>
    )
}