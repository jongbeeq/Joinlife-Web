import themeColor from "../variables/color"
import { TextButton } from "./Button"

export default function Container({ left, translate, children, width, height, backgroundColor, hasShadow = true, hasBorder, popUp = false, isWrap = false, clickClose }) {
    const color = themeColor()

    const style = {
        display: "flex",
        width: `${width}px`,
        height: `${height}px`,
        flexWrap: isWrap && "wrap",
        flexDirection: !isWrap && "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "26px",
        borderRadius: `calc(${height}*0.075px)`,
        background: backgroundColor,
        boxShadow: hasShadow && "0px 4px 8px 6px rgba(0, 0, 0, 0.11)",
        // PopUp setup
        border: hasBorder && `1px solid ${color.Black}`,
        position: popUp && "absolute",
        top: "50%",
        left: "40%",
        transform: popUp && (translate ? `${translate}` : `translate(-50%, -50%)`),
        zIndex: popUp && "100"
    }

    const styleIndexBackground = {
        position: "absolute",
        transform: (translate ? `${translate}` : `translate(-50%, -50%)`),
        top: "50%",
        left: `${left}%` || "40%",
        zIndex: "100",
        background: color.Background,
        opacity: 0.7,
        width: "100vw",
        height: "100vh"
    }

    const styleCloseButton = {
        position: "absolute",
        top: `${height * 0.0625}px`,
        right: `${height * 0.074}0px`
    }

    return (
        <>
            {popUp && (<div style={styleIndexBackground} onClick={clickClose}></div>)}
            <div style={style}>
                {popUp &&
                    <div style={styleCloseButton}>
                        <TextButton onClick={clickClose} fontSize={height * 0.025} color={color.Gray}>X</TextButton>
                    </div>
                }
                {children}
            </div >
        </>
    )
}
