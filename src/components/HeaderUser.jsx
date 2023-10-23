import Avatar from "./Avatar"
import { TextButton } from "./Button"
import { Link } from "react-router-dom"

export default function HeaderUser({ user, children }) {

    const styleHeaderUserBox = {
        display: "flex",
        alignItems: "center",
        gap: "5%",
        width: "100%",
        height: "100%",
    }

    const styleHeaderUserText = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    }

    const styleHeaderUserAvatar = {
        width: "40%"
    }

    return (
        <div id="headerUserBox" style={styleHeaderUserBox}>
            <div id="headerUserAvatar" style={styleHeaderUserAvatar}>
                <Avatar src={user?.profileImage} />
            </div>
            <div id="headerUserText" style={styleHeaderUserText}>
                <Link to={`/profile/${user?.id}`}>
                    <TextButton >{user?.username}</TextButton>
                </Link>
                {children}
            </div>
        </div>
    )
}
