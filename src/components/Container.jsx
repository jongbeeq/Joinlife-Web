import themeColor from "../colors/color"
import { TextButton } from "./Button"

export default function Container({ children, width, height, backgroundColor, hasShadow = true, hasBorder, popUp = false, isWrap = false, clickClose }) {
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
        transform: popUp && "translate(-62%, -68%)",
        zIndex: popUp && "100"
    }

    const styleIndexBackground = {
        position: "absolute",
        transform: "translate(-59%, -65%)",
        zIndex: "100",
        background: color.Background,
        opacity: 0.7,
        width: "1200px",
        height: "800px"
    }

    const styleCloseButton = {
        position: "absolute",
        top: `${height * 0.0625}px`,
        right: `${height * 0.074}0px`
    }

    return (
        <>
            {popUp && <div style={styleIndexBackground}></div>}
            <div style={style}>
                {popUp && <div style={styleCloseButton}>
                    <TextButton onClick={clickClose} fontSize={height * 0.025} color={color.Gray}>X</TextButton>
                </div>}
                {children}
            </div>
        </>
    )
}
