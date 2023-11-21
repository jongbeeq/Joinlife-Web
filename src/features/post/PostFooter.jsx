import { CommentIcon, LikeIcon, ShareIcon } from "../../icon/icon"
import CommentItem from "../comment/CommentItem"

export default function PostFooter({ postObj }) {
    const stylePostFooter = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        // height: "20%",
        // gap: "15%",
        // background: "green",
    }

    const styleInreractBar = {
        width: "100%",
        // height: "25%",
        display: "flex",
        justifyCnotent: "space-between"
    }

    const styleLeftInreractBar = {
        display: "flex",
        gap: "15%",
        width: "20%",
        padding: "none",
        fontSize: "16px",
        justifyCnotent: "space-between"
    }

    const styleLikeCount = {
        height: "15%",
    }
    const styleCommentBox = {
        paddingTop: "3%",
        width: "100%",
        // height: "60%",
        display: "flex",
        flexDirection: "column"
    }

    return (
        <div id="postFooter" style={stylePostFooter}>
            <div id="inreractBar" style={styleInreractBar}>
                <div id="leftInreractBar" style={styleLeftInreractBar}>
                    <LikeIcon></LikeIcon>
                    <CommentIcon></CommentIcon>
                    <ShareIcon></ShareIcon>
                </div>
            </div>
            <div id="likeCount" style={styleLikeCount}>Like {postObj.totalLike || ""}</div>
            <div id="commentBox" style={styleCommentBox}>
                {postObj.postComments.map((el, index) => <CommentItem key={index} postComments={el}></CommentItem>)}
            </div>
        </div >
    )
}
