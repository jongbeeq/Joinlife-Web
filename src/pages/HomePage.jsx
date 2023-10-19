import { useState } from "react"
import { TextButton } from "../components/Button"
import { useAuth } from "../hooks/use-auth"
import { LogoutIcon } from "../icon/icon"
import themeColor from "../variables/color"
import SetProfile from "../features/user/SetProfile"
// import axios from "../configs/axios"

export default function HomePage() {
    const { logout } = useAuth()

    const color = themeColor()

    const { authUser, setAuthUser } = useAuth()

    // const { username, profileImage, firstName, lastName } = authUser

    const [userProfile, setUserProfile] = useState(authUser)

    const homePage = {
        width: "85%",
        display: "flex",
        alignItems: "flex-start",
        gap: "1px",
        position: "relative"
    }

    const middleHomePage = {
        display: "flex",
        width: "82%",
        flexDirection: "column",
        alignItems: "center",
        gap: "33px",
    }

    const leftHomePage = {
        display: "flex",
        width: "18%",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        borderLeft: `1px solid ${color.OpacityGray}`,
        padding: "2% 0% 0% 2%"
    }

    const [isEditProflie, setIsEditProfile] = useState(false)

    const styleAvatarBox = {
        display: "flex",
        alignItems: "space-between",
        width: "200px",
        height: "50px",
        gap: "5%"
    }

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

    const styleAvatarText = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    }


    return (
        <div style={homePage}>
            <div style={middleHomePage}>
                Content
            </div>
            <div style={leftHomePage}>
                <div id="AvatarBox" style={styleAvatarBox}>
                    <div id="AvatarImageBox" style={styleAvatarImageBox}>
                        <img id="AvatarImage" style={styleAvatarImage} src={authUser.profileImage} />
                    </div>
                    <div id="AvatarText" style={styleAvatarText}>
                        <TextButton >{authUser.username}</TextButton>
                        <TextButton color={color.Gray} fontSize="12">{authUser.firstName} {authUser.lastName}</TextButton>
                    </div>
                </div>
                <TextButton onClick={logout} hoverColor={color.Gray}>
                    <LogoutIcon />
                </TextButton>
                <TextButton onClick={() => setIsEditProfile(true)}>Edit Profile</TextButton>
                {isEditProflie && <SetProfile onClick={() => setIsEditProfile(false)} onSuccess={() => setIsEditProfile(false)} />}
            </div>
        </div>
    )
}
