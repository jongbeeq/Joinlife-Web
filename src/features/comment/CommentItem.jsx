import Avatar from "../../components/Avatar"
import formatTimeAgo from "../../utils/time-ago"
import themeColor from "../../variables/color"

export default function CommentItem({ postComments }) {
    const color = themeColor()
    const styleCommentItem = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "70%"
    }

    const styleLeftCommentItem = {
        display: "flex",
        alignItems: "center",
        height: "100%",
        width: "60%",
        gap: "3%"
    }

    const styleUsernameComment = {
    }

    const stylePicComment = {
        display: "flex",
        width: "15%"
    }

    const styleTextCommentZone = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }

    const styleTextCommentTop = {
        display: "flex",
        flexDirection: "row",
        gap: "10%",
        height: "60%",
        fontSize: "12px"
    }

    const styleMessageComment = {
    }

    const styleDurationComment = {
        color: color.Gray,
        padding: "none",
        fontSize: "10px"
    }

    return (
        <div id="commentItem" style={styleCommentItem}>
            <div id="leftCommentItem" style={styleLeftCommentItem}>
                <div id="picComment" style={stylePicComment}>
                    <Avatar src={postComments.user.profileImage}></Avatar>
                </div>
                <div id="textCommentZone" style={styleTextCommentZone}>
                    <div id="textCommentTop" style={styleTextCommentTop}>
                        <p id="usernameComment" style={styleUsernameComment}>
                            {postComments.user.username}
                        </p>
                        <p id="messageComment" style={styleMessageComment}>
                            {postComments.comment}
                        </p>
                    </div>
                    <div id="textCommentBottom" style={stylePicComment}>
                        <p id="durationComment" style={styleDurationComment}>
                            {formatTimeAgo(postComments.commentedAt)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
