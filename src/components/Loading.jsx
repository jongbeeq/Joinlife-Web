import themeColor from "../variables/color"

export default function Loading() {
    const color = themeColor()
    const styleLoadingBackground = {
        position: "absolute",
        zIndex: "200",
        width: "100vw",
        height: "100vh",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "41%"
    }

    const styleTextLoading = {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "41%",
        zIndex: "300",
        color: color.Black,
        background: color.Orange
    }

    return (
        <>
            {/* <div id="loadingBackground" style={styleLoadingBackground} className="absolute inset-0 bg-black opacity-30 z-150"> </div> */}
            <p id="textLoading" style={styleTextLoading} className="animate-spin">Loading</p>
        </>
    )
}
