import { useState } from 'react';
export function BoxButton({ children, fontSize, height, backgroundColor, color, fullWidth, onClick }) {

    const [isHover, setIsHover] = useState(false)

    const style = {
        display: "flex",
        flexDirection: "row",
        gap: "2%",
        width: fullWidth ? "inherit" : `calc(${fontSize}*10px)`,
        height: `${height} px`,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: `calc(${height} * 0.2px)`,
        background: isHover ? color : backgroundColor,
        color: isHover ? backgroundColor : color,
        fontSize: `${fontSize}px`,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        transition: isHover && "0.1s",
        boxShadow: isHover && "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    }


    return (
        <button style={style} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} onClick={onClick}>{children}</button>
    )
}

export function TextButton({ children, fontSize = "16", color, onClick, hoverColor }) {

    const [isHover, setIsHover] = useState(false)

    const style = {
        color: isHover ? hoverColor : color,
        textDecorationLine: isHover && (!hoverColor && "underline"),
        fontSize: `${fontSize}px`,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        display: "flex",
        alignItems: "center",
        gap: `${fontSize * 0.5}px`,
        cursor: "pointer"
    }

    return <button style={style} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} onClick={onClick}>{children}</button>
}
