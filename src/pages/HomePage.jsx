import { useState } from "react"
import { TextButton } from "../components/Button"
import { useAuth } from "../hooks/use-auth"
import { LogoutIcon, SettingIcon } from "../icon/icon"
import themeColor from "../variables/color"
import SetProfile from "../features/user/SetProfile"
import Avatar from "../components/HeaderUser"
import HeaderUser from "../components/HeaderUser"
import CreatepostModal from "../features/post/CreatepostModal"
// import axios from "../configs/axios"

export default function HomePage() {
    const { logout } = useAuth()

    const color = themeColor()

    const { authUser, setAuthUser } = useAuth()

    const [isEditProflie, setIsEditProfile] = useState(false)
    const [openSetting, setOpenSetting] = useState(false)

    const homePage = {
        width: "85%",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        gap: "1px",
        position: "relative",
        // overflow: "auto",
    }

    // Middle Home page
    const middleHomePage = {
        display: "flex",
        width: "82%",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        gap: "33px",
        overflow: "auto"
    }

    const styleContentMiddleHomePage = {
        width: "60%",
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        // overflow: "auto" 
    }

    const styleHeadContentMiddleHomePage = {
        width: "100%",
        // position: "fixed",
        top: "0%",
        height: "10vh",
        display: "flex",
        flexDirection: "row",
        gap: "5%",
        alignItems: "center"
    }

    const styleMainContentMiddleHomePage = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    }

    const stylePostItem = {
        width: "100%",
        background: "gray",
        height: "600px"
    }

    // Right Home Page
    const styleRightHomePage = {
        display: "flex",
        width: "23%",
        right: "0%",
        // position: "fixed",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        borderLeft: `1px solid ${color.OpacityGray}`,
        padding: "2%",
        gap: "3%"
    }

    const styleUserTabbar = {
        display: "flex",
        alignItems: "center",
    }

    const styleDropdownSettingUser = {
        position: "absolute",
        left: "88.6%",
        top: "6.5%",
        width: "10%",
        background: color.Background,
        display: "flex",
        height: "90px",
        padding: "19px 13px",
        flexDirection: "column",
        justifyContent: "space - between",
        alignItems: "flex - start",
        borderRadius: "14px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    }

    const styleIconUserTabbar = {
        display: "flex",
        gap: "10px",
    }

    const styleFolowingZone = {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "15px",
        borderBottom: `1px solid ${color.Gray}`,
        paddingBottom: "10%"
    }

    const styleFollowingTitle = {
        color: color.Gray
    }

    // const [files, setFiles] = useState(null)

    const [isCreatePost, setIsCreatePost] = useState(false)

    // const [test, setTest] = useState(null)

    return (
        <div style={homePage}>
            <div style={middleHomePage}>
                <div id="contentMiddleHomePage" style={styleContentMiddleHomePage}>
                    <div id="headContentMiddleHomePage" style={styleHeadContentMiddleHomePage}>
                        <div onClick={() => setIsCreatePost(true)} id="createpostButton" >+ Create Post</div>
                        {isCreatePost &&
                            <CreatepostModal clickClose={() => setIsCreatePost(false)}></CreatepostModal>
                        }
                        <div>+ Create Event</div>
                    </div>
                    <div id="mainContentMiddleHomePage" style={styleMainContentMiddleHomePage}>
                        <div id="postItem" style={stylePostItem}></div>
                        <div id="postItem" style={stylePostItem}></div>
                        <div id="postItem" style={stylePostItem}></div>
                    </div>
                </div>
            </div>
            <div style={styleRightHomePage}>
                <div id="userTabbar" style={styleUserTabbar}>
                    <HeaderUser user={authUser}>
                        <TextButton color={color.Gray} fontSize="12">{authUser?.firstName} {authUser?.lastName}</TextButton>
                    </HeaderUser>
                    <div id="iconUserTabbar" style={styleIconUserTabbar}>
                        <TextButton fontSize="13" onClick={logout} hoverColor={color.Gray}>
                            <LogoutIcon />
                        </TextButton>
                        <TextButton fontSize="13" onClick={() => setOpenSetting(!openSetting)} hoverColor={color.Gray}>
                            <SettingIcon />
                        </TextButton>
                    </div>
                    {openSetting && <div id="dropdownSettingUser" style={styleDropdownSettingUser}>
                        <TextButton onClick={() => setIsEditProfile(true)}>Edit Profile</TextButton>
                    </div>}
                </div>
                {isEditProflie && <SetProfile onClick={() => setIsEditProfile(false)} onSuccess={setIsEditProfile} setAuthUser={setAuthUser} />}

                <div id="followingZone" style={styleFolowingZone}>
                    <p id="followingTitle" style={styleFollowingTitle}>Following</p>
                    <Avatar />
                </div>
            </div>
        </div>
    )
}
