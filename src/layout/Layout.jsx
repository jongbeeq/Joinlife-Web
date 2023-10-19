import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
    const webPage = {
        display: "flex",
        width: "100vw",
        flexDirection: "row",
        alignItems: "flex-start",
        overflow: "hidden"
    }


    return (
        <div style={webPage}>
            <Navbar />
            <Outlet />
        </div>
    )
}