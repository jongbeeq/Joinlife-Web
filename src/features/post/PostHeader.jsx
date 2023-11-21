import { useState } from "react"
import { BoxButton, TextButton } from "../../components/Button"
import HeaderUser from "../../components/HeaderUser"
import { DropdownIcon } from "../../icon/icon"
import formatTimeAgo from "../../utils/time-ago"
import themeColor from "../../variables/color"
import { useAuth } from "../../hooks/use-auth"
import UpdatepostModal from "./UpdatepostModal"

export default function PostHeader({ postObj, deletePost, editPost, setStopOverflow }) {
    const color = themeColor()

    const [isEditPost, setIsEditPost] = useState(false)

    const stylePostHeader = {
        width: "100%",
        // height: "20%",
        display: "flex",
        flexDirection: "column",
        gap: "5%",
        // positon: "relative"
    }

    const styleTopHeaderPost = {
        display: "flex",
        width: "100%",
        height: "30%",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10%"
    }

    const styleLeftTopHeaderPost = {
        width: "20%",
        height: "100%",
        display: "flex",
        alignItems: "center",
    }

    const styleTopHeaderPostDuration = {
        width: "100%",
        height: "30%",
        color: color.Gray,
        fontSize: "10px"
    }

    const styleContentPost = {
        width: "100%",
        height: "70%",
        display: "flex",
        flexDirection: "column",
        gap: "10%",
    }

    const styleCategoryContent = {
        fontSize: "12px",
        color: color.Gray
    }

    const styleContentInfoBar = {
        width: "100%",
        height: "20%",
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        gap: "2%",
        color: color.Gray
    }

    const styleContentMessage = {

    }

    const styleButtonDropdownPost = {
        position: "relative"
    }

    const styleDropdownPost = {
        position: "absolute",
        right: "50%",
        top: "40%",
        width: "max-content",
        background: color.Background,
        display: "flex",
        height: "max-content",
        padding: "50% 80%",
        flexDirection: "column",
        justifyContent: "space - between",
        alignItems: "flex - start",
        borderRadius: "14px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    }

    const { authUser } = useAuth()
    const isUser = (postObj.user.id === authUser.id)
    let postCreator
    if (isUser) {
        postCreator = authUser
    } else {
        postCreator = postObj.user
    }

    const [openDropdown, setOpenDropdown] = useState(false)

    const handleClickDelete = () => {
        deletePost(postObj.id)
    }

    // const [isEditPost, setIsEditPost] = useState(false)

    const handleClickEdit = () => {
        setIsEditPost(true)
        setStopOverflow(true)
    }

    const handleCloseEdit = () => {
        setIsEditPost(false)
        setStopOverflow(false)
    }


    return (
        <div id="postHeader" style={stylePostHeader}>
            <div id="topHeaderPost" style={styleTopHeaderPost}>
                <div id="lefttopHeaderPost" style={styleLeftTopHeaderPost}>
                    <HeaderUser user={postCreator}>
                        <div id="topHeaderPostDuration" style={styleTopHeaderPostDuration}>
                            {formatTimeAgo(postObj.createdAt)}
                        </div>
                    </HeaderUser>
                </div>
                <div id="buttonDropdownPost" style={styleButtonDropdownPost}>
                    <BoxButton onClick={() => setOpenDropdown(!openDropdown)}>
                        <DropdownIcon></DropdownIcon>
                    </BoxButton>
                    {
                        openDropdown &&
                        <div id="dropdownPost" style={styleDropdownPost}>
                            {isUser
                                ?
                                <div>
                                    <TextButton onClick={handleClickEdit} fontSize="14">Edit Post</TextButton>
                                    <TextButton onClick={handleClickDelete} fontSize="14">Delete Post</TextButton>
                                    {isEditPost && <UpdatepostModal clickClose={handleCloseEdit} editPost={editPost} postId={postObj.id}></UpdatepostModal>}
                                </div>
                                :
                                <TextButton fontSize="14">Report</TextButton>
                            }
                        </div>
                    }
                </div>
            </div>
            <div id="contentPost" style={styleContentPost}>
                <div id="contentInfoBar" style={styleContentInfoBar}>
                    <p id="categoryContent" style={styleCategoryContent}>Post</p>
                    {postObj?.postCategorys?.map((el, index) => <TextButton fontSize="10" key={index}>{el.categoryName}</TextButton>)}
                </div>
                <div id="contentMessage" style={styleContentMessage}>
                    {postObj.message}
                </div>
            </div>
        </div>
    )
}
