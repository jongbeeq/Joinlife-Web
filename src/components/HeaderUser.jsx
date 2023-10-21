import Avatar from "./Avatar"
import { TextButton } from "./Button"
import { Link } from "react-router-dom"

export default function HeaderUser({ user, children }) {

    const styleHeaderUserBox = {
        display: "flex",
        alignItems: "space-between",
        width: "200px",
        height: "50px",
        gap: "5%"
    }

    const styleHeaderUserText = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    }

    return (
        <div id="headerUserBox" style={styleHeaderUserBox}>
            <Avatar src={user?.profileImage} />
            <div id="headerUserText" style={styleHeaderUserText}>
                <Link to={`/profile/${user?.id}`}>
                    <TextButton >{user?.username}</TextButton>
                </Link>
                {children}
            </div>
        </div>
    )
}
