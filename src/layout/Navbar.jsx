import { Link } from "react-router-dom"
import { TextButton } from "../components/Button"
import { HomeIcon, JoinlifeLogo, SearchIcon, TrendIcon } from "../icon/icon"
import themeColor from "../variables/color"

export default function Navbar() {
    const color = themeColor()

    const navBar = {
        positon: "fixed",
        bottom: "0",
        right: "0",
        display: "flex",
        height: "100vh",
        width: "15%",
        padding: "2% 0% 0% 2%",
        flexDirection: "column",
        gap: "5%",
        alignItems: "flex - start",
        borderRight: `1px solid ${color.OpacityGray}`,
        background: `${color.Background}`,
    }

    return (
        <div style={navBar}>
            <Link to='/'>
                <JoinlifeLogo fontSize="35px" />
            </Link>
            <div className="flex flex-col gap-5">
                <TextButton hoverColor={color.Gray}>
                    <HomeIcon />
                    Home
                </TextButton>
                <TextButton hoverColor={color.Gray}>
                    <SearchIcon />
                    Search
                </TextButton>
                <TextButton hoverColor={color.Gray}>
                    <TrendIcon />
                    Trends
                </TextButton>
            </div>
        </div >
    )
}
