import PostContent from "./PostContent"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

export default function PostItem({ postObj, deletePost }) {
    const stylePostItem = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // background: "gray",
        height: "600px"
    }

    return (
        <div id="postItem" style={stylePostItem}>
            <PostHeader postObj={postObj} deletePost={deletePost}></PostHeader>
            {
                postObj.postFiles.length &&
                < PostContent postObj={postObj}></PostContent>
            }
            <PostFooter postObj={postObj}></PostFooter>
        </div >
    )
}
