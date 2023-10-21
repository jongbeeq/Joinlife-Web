import themeColor from "../variables/color"

export default function Avatar({ src }) {
    const color = themeColor()
    const styleAvatarImageBox = {
        objectFit: "cover",
        width: "25%",
        height: "100%",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: color.Orange,
        border: `1px solid ${color.Gray}`,
        overflow: "hidden"
    }

    const styleAvatarImage = {
        width: "100%",
        height: "100%"
    }
    return (
        <div id="AvatarImageBox" style={styleAvatarImageBox}>
            <img id="AvatarImage" style={styleAvatarImage} src={src} />
        </div>
    )
}
