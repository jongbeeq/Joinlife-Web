import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import themeColor from "../variables/color"
import { BoxButton, TextButton } from "../components/Button"

export default function ProfilePage() {
    const { profileId } = useParams()
    const [profileUser, setProfileUser] = useState({})

    const color = themeColor()

    useEffect(
        () => {
            axios.get(`/user/${profileId}`).then(res => {
                console.log("🚀 ~ file: ProfilePage.jsx:15 ~ axios.get ~ res.data:", res.data)
                setProfileUser(res.data)
                console.log("🚀 ~ file: ProfilePage.jsx:9 ~ ProfilePage ~ profileUser:", profileUser)
            }
            )
        }
        , [profileId]
    )

    const {
        username,
        firstName,
        lastName,
        userCategorys,
        userInterests,
        description,
        profileImage,
        posts,
        joinEvents,
        event,
        following,
        followed,
    }
        = profileUser

    const styleProfilePage = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        overflow: "auto"
        // background: "red"
    }

    // Header

    const styleHeaderProfilePage = {
        display: "flex",
        width: "100%",
        height: "30%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        borderBottom: `1px solid ${color.OpacityGray}`,
    }

    const styleContentHeader = {
        display: "flex",
        width: "50%",
        height: "80%",
        justifyContent: "center",
        gap: "5%",
        alignItems: "center",
        // background: "red"
    }

    const styleImageProfileBox = {
        display: "flex",
        width: "32%",
        height: "100%",
        borderRadius: "100%",
        background: color.Orange,
        objectFit: "cover",
        overflow: "hidden"
    }

    const styleImageProfile = {
        width: "100%",
        height: "100%"
    }

    const styleTextProfile = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "5% 0% 0% 0%",
        width: "45%",
        height: "100%",
        gap: "5%"
        // gap: "25px",
        // background: "blue"
    }

    const styleHeadTextProfile = {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const styleLeftHeadTextProfile = {
        display: "flex",
        width: "60%",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "3%",
        // background: "red"
    }

    const styleRightHeadTextProfile = {
        display: "flex",
        width: "40%",
        flexDirection: "column",
        alignItems: "flex-end",
        // background: "blue"
    }

    const styleUsername = {
        fontSize: "25px",
        fontStyle: "normal",
        fontWeight: "700",
        color: color.Black
    }

    const styleFullName = {
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        color: color.Gray
    }

    const styleMiddleTextProfile = {
        display: "flex",
        flexDirection: "column",
        fontSize: "12px",
        width: "100%",
        color: color.Gray,
        gap: "5px"
    }

    const styleCategoryAndInterest = {
        display: "flex",
        width: "100%",
        overflow: "hidden",
        flex: "wrap",
        alignItems: "center",
        gap: "56px",
    }

    const styleCategory = {
        display: "flex",
        gap: "10%",
        width: "60%",
        height: "100%",
        // flexWrap: "wrap",
        overflow: "hidden"
        // background: "red"    
    }

    const styleInterest = {
        display: "flex",
        gap: "10%",
        width: "50%",
        overflow: "hidden"
        // background: "red"
    }

    const styleFollowDetail = {
        display: "flex",
        alignItems: "flex-start",
        gap: "30px",
    }

    const styleDescription = {
        fontSize: "12px",
        color: color.Black
    }

    const styleNavViewProfilePage = {
        width: "100%",
        height: "3%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "4%",
    }

    const styleContentProfilePage = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px"
    }

    return (
        <div id="profilePage" style={styleProfilePage}>
            <div id="headerProfilePage" style={styleHeaderProfilePage}>
                {/* <Avatar user={profileUser} /> */}
                <div id="contentHeader" style={styleContentHeader}>
                    <div id="imageProfileBox" style={styleImageProfileBox}>
                        <img id="imageProfile" style={styleImageProfile} src={profileImage}></img>
                    </div>
                    <div id="textProfile" style={styleTextProfile}>
                        <div id="headTextProfile" style={styleHeadTextProfile}>
                            <div id="leftHeadTextProfile" style={styleLeftHeadTextProfile}>
                                <h1 id="username" style={styleUsername}>{username}</h1>
                                <p id="fullName" style={styleFullName}>{firstName} {lastName}</p>
                            </div>
                            <div id="rightHeadTextProfile" style={styleRightHeadTextProfile}>
                                <BoxButton backgroundColor={color.Black} color={color.White} fontSize="10" height={40}>Edit Profile</BoxButton>
                            </div>
                        </div>
                        <div id="middleTextProfile" style={styleMiddleTextProfile}>
                            <div id="categoryAndInterest" style={styleCategoryAndInterest}>
                                <div id="category" style={styleCategory}>
                                    <p>Category: </p>
                                    {userCategorys?.map(el => <TextButton key={el} fontSize="12">{el}</TextButton>)}
                                    <BoxButton>...</BoxButton>
                                </div>
                                <div id="interest" style={styleInterest}>
                                    <p>Interest: </p>
                                    {userInterests?.map(el => <TextButton key={el} fontSize="12">{el}</TextButton>)}
                                    <BoxButton>...</BoxButton>
                                </div>
                            </div>
                            <div id="followDetail" style={styleFollowDetail}>
                                <TextButton fontSize="12">{following?.length} Following</TextButton>
                                <TextButton fontSize="12">{followed?.length} Follower</TextButton>
                            </div>
                        </div>
                        <div id="description" style={styleDescription}>{description}</div>
                    </div>
                </div>
            </div>
            <div id="navViewProfilePage" style={styleNavViewProfilePage}>
                <TextButton color={color.Gray} fontSize="13" >Feed</TextButton>
                <TextButton color={color.Gray} fontSize="13">{event?.length || ""} Event</TextButton>
                <TextButton color={color.Gray} fontSize="13">{posts?.length || ""} Post</TextButton>
                <TextButton color={color.Gray} fontSize="13">{joinEvents?.length || ""} Join</TextButton>
            </div>
            <div id="contentProfilePage" style={styleContentProfilePage}>
                <div className="w-80 h-80 bg-black"></div>
                <div className="w-80 h-80 bg-black"></div>
                <div className="w-80 h-80 bg-black"></div>
                <div className="w-80 h-80 bg-black"></div>
                <div className="w-80 h-80 bg-black"></div>
            </div>
        </div>
    )
}
