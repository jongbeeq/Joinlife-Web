import { Link } from "react-router-dom"
import { TextButton } from "../components/Button"
import { HomeIcon, JoinlifeLogo, SearchIcon, TrendIcon } from "../icon/icon"
import themeColor from "../variables/color"

export default function Navbar() {
    const color = themeColor()

    return (
        <div className={`fixed left-0 h-full w-[18%] flex flex-col gap-[3%] pl-[2%] pt-[2%] border-r-[1px] border-r-[${color.OpacityGray}]`}>
            <Link to='/'>
                <JoinlifeLogo fontSize="35px" />
            </Link>
            <div className="flex flex-col gap-5">
                <Link to='/'>
                    <TextButton hoverColor={color.Gray}>
                        <HomeIcon />
                        Home
                    </TextButton>
                </Link>
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
