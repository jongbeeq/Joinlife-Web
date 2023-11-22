import { useState } from "react"
import { useAuth } from "../../hooks/use-auth"
import themeColor from "../../variables/color"
import HeaderUser from "../../components/HeaderUser"
import { TextButton } from "../../components/Button"
import { LogoutIcon, SettingIcon } from "../../icon/icon"
import SetProfile from "../../features/user/SetProfile"
import Avatar from "../../components/Avatar"

export default function RightHomePage() {
    // const { logout } = useAuth()

    // const color = themeColor()

    // const { authUser } = useAuth()

    // const [isEditProflie, setIsEditProfile] = useState(false)
    // const [openSetting, setOpenSetting] = useState(false)

    // const styleRightHomePage = {
    //     display: "flex",
    //     width: "23%",
    //     right: "0%",
    //     height: "100%",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     borderLeft: `1px solid ${color.OpacityGray}`,
    //     padding: "2%",
    //     gap: "3%"
    // }

    // const styleUserTabbar = {
    //     width: "100%",
    //     display: "flex",
    //     alignItems: "center",
    // }

    // const styleDropdownSettingUser = {
    //     position: "absolute",
    //     left: "88.6%",
    //     top: "6.5%",
    //     width: "10%",
    //     background: color.Background,
    //     display: "flex",
    //     height: "90px",
    //     padding: "19px 13px",
    //     flexDirection: "column",
    //     justifyContent: "space - between",
    //     alignItems: "flex - start",
    //     borderRadius: "14px",
    //     boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    // }

    // const styleIconUserTabbar = {
    //     display: "flex",
    //     gap: "10px",
    // }

    // const styleFolowingZone = {
    //     display: "flex",
    //     width: "100%",
    //     flexDirection: "column",
    //     alignItems: "flex-start",
    //     gap: "15px",
    //     borderBottom: `1px solid ${color.Gray}`,
    //     paddingBottom: "10%"
    // }

    // const styleFollowingTitle = {
    //     color: color.Gray
    // }
    // const styleFollowingAvatar = {
    //     width: "25%"
    // }

    return (
        <div className="w-[18%] h-full bg-blue-400 fixed right-0">
            sadsa
            {/* <div id="userTabbar" style={styleUserTabbar}>
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
            {isEditProflie && <SetProfile onClick={() => setIsEditProfile(false)} onSuccess={setIsEditProfile} />}

            <div id="followingZone" style={styleFolowingZone}>
                <p id="followingTitle" style={styleFollowingTitle}>Following</p>
                <div id="followingAvatar" style={styleFollowingAvatar}>
                    <Avatar />
                </div>
            </div> */}
        </div>
    )
}
