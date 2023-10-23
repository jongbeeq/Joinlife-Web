import { TextButton } from "../../components/Button"
import HeaderUser from "../../components/HeaderUser"
import { DropdownIcon } from "../../icon/icon"
import formatTimeAgo from "../../utils/time-ago"
import themeColor from "../../variables/color"

export default function PostHeader({ postObj }) {
    const color = themeColor()
    const stylePostHeader = {
        width: "100%",
        height: "20%",
        display: "flex",
        flexDirection: "column",
        gap: "5%"
        // background: "red",
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

    return (
        <div id="postHeader" style={stylePostHeader}>
            <div id="topHeaderPost" style={styleTopHeaderPost}>
                <div id="lefttopHeaderPost" style={styleLeftTopHeaderPost}>
                    <HeaderUser user={postObj.user}>
                        <div id="topHeaderPostDuration" style={styleTopHeaderPostDuration}>
                            {formatTimeAgo(postObj.createdAt)}
                        </div>
                    </HeaderUser>
                </div>
                <DropdownIcon></DropdownIcon>
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
