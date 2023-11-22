import { CommentIcon, DropdownIcon, GotoEventIcon, LikeIcon, ShareIcon } from "../../icon/icon"
import themeColor from "../../variables/color"
import PostContent from "./PostContent"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

export default function PostItem({ postObj, deletePost, editPost, isEditPost, setIsEditPost, stopOverflow, setStopOverflow }) {
    // const color = themeColor()
    // const stylePostItem = {
    //     width: "100%",
    //     paddingBottom: "5%",
    //     marginBottom: "5%",
    //     // display: "flex",
    //     flexDirection: "column",
    //     // background: "gray",
    //     // height: "600px"
    //     borderBottom: `1px solid ${color.SubGray}`
    // }

    return (
        // <div id="postItem" style={stylePostItem}>
        //     <PostHeader postObj={postObj} deletePost={deletePost} stopOverflow={stopOverflow} setStopOverflow={setStopOverflow} editPost={editPost}></PostHeader>
        //     {
        //         Boolean(postObj.postFiles.length) &&
        //         < PostContent postObj={postObj}></PostContent>
        //     }
        //     <PostFooter postObj={postObj}></PostFooter>
        // </div >
        <div className="flex flex-col w-full h-[78%] bg-white rounded-[2%] shadow-md">
            <PostHeader />
            <PostContent />
            <PostFooter />
        </div>

    )
}
