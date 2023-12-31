import MiddleHomePage from "../layout/HomePage/MiddleHomePage"
import RightHomePage from "../layout/HomePage/RightHomePage"
// import axios from "../configs/axios"

export default function HomePage() {

    const homePage = {
        width: "85%",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        gap: "1px",
        position: "relative",
        // overflow: "auto",
    }

    return (
        <div style={homePage}>
            <MiddleHomePage></MiddleHomePage>
            <RightHomePage></RightHomePage>
        </div>
    )
}
