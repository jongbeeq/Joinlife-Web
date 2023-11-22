import { CommentIcon, GotoEventIcon, LikeIcon, ShareIcon } from "../../icon/icon"
import CommentItem from "../comment/CommentItem"

export default function PostFooter({ postObj }) {
    // const stylePostFooter = {
    //     display: "flex",
    //     flexDirection: "column",
    //     width: "100%",
    //     // height: "20%",
    //     // gap: "15%",
    //     // background: "green",
    // }

    // const styleInreractBar = {
    //     width: "100%",
    //     // height: "25%",
    //     display: "flex",
    //     justifyCnotent: "space-between"
    // }

    // const styleLeftInreractBar = {
    //     display: "flex",
    //     gap: "15%",
    //     width: "20%",
    //     padding: "none",
    //     fontSize: "16px",
    //     justifyCnotent: "space-between"
    // }

    // const styleLikeCount = {
    //     height: "15%",
    // }
    // const styleCommentBox = {
    //     paddingTop: "3%",
    //     width: "100%",
    //     // height: "60%",
    //     display: "flex",
    //     flexDirection: "column"
    // }

    return (
        <div id="postFooter" className="flex flex-col w-full h-[14%] gap-[5%] px-[3%] pt-[1%] pb-[3%]">
            <div className="w-full h-[20%] flex justify-between">
                <div className="flex gap-[3%] w-full h-full">
                    <LikeIcon />
                    <div className="pb-[1%]">
                        <CommentIcon />
                    </div>
                    <ShareIcon />
                </div>
                <GotoEventIcon />
            </div>
            <div className="w-full h-[20%] text-[80%] font-medium">Like 10</div>
            <div className="flex flex-row w-full h-[45%] px-[2%] py-[1%] justify-between bg-gray-100 rounded-full">
                <div className="flex flex-row w-[90%] h-full gap-[1%]">
                    <div className="rounded-full h-full w-[7%] flex items-center justify-center overflow-hidden">
                        <img className="object-cover" src="https://res.cloudinary.com/dsldd3uhx/image/upload/v1698372506/dritgpyrhqd9dekunnpt.png"></img>
                    </div>
                    <div className="flex flex-col w-[70%] h-full">
                        <div className="flex flex-row text-[70%] gap-[2%] h-[70%] w-full">
                            <div className="font-semibold">OtherUser</div>
                            <div className=" truncate"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores distinctio maxime quae tenetur laudantium perferendis, corrupti, temporibus quidem natus corporis nesciunt, ea laborum. At omnis laudantium repellendus accusantium aspernatur ipsam iure doloribus. Ducimus, doloribus hic! Dolor ex vitae eos, sint ut quasi pariatur, recusandae tenetur, et voluptates corrupti placeat quia!</div>
                        </div>
                        <div className="flex items-center gap-[2%] text-[40%] text-gray-400 h-[30%] w-full">
                            <div>10hr</div>
                            <div>reply</div>
                        </div>
                    </div>
                </div>
                <div className="text-[60%] flex items-center pt-[1%]">
                    <LikeIcon />
                </div>
            </div>
        </div>
        // <div id="postFooter" style={stylePostFooter}>
        //     <div id="inreractBar" style={styleInreractBar}>
        //         <div id="leftInreractBar" style={styleLeftInreractBar}>
        //             <LikeIcon></LikeIcon>
        //             <CommentIcon></CommentIcon>
        //             <ShareIcon></ShareIcon>
        //         </div>
        //     </div>
        //     <div id="likeCount" style={styleLikeCount}>Like {postObj.totalLike || ""}</div>
        //     <div id="commentBox" style={styleCommentBox}>
        //         {postObj.postComments.map((el, index) => <CommentItem key={index} postComments={el}></CommentItem>)}
        //     </div>
        // </div >
    )
}
