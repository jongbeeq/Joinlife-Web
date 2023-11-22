import { useState } from "react"
import { BoxButton, TextButton } from "../../components/Button"
import HeaderUser from "../../components/HeaderUser"
import { DropdownIcon } from "../../icon/icon"
import formatTimeAgo from "../../utils/time-ago"
import themeColor from "../../variables/color"
import { useAuth } from "../../hooks/use-auth"
import UpdatepostModal from "./UpdatepostModal"

export default function PostHeader({ postObj, deletePost, editPost, setStopOverflow }) {
    // const color = themeColor()

    // const [isEditPost, setIsEditPost] = useState(false)

    // const stylePostHeader = {
    //     width: "100%",
    //     // height: "20%",
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "5%",
    //     // positon: "relative"
    // }

    // const styleTopHeaderPost = {
    //     display: "flex",
    //     width: "100%",
    //     height: "30%",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     gap: "10%"
    // }

    // const styleLeftTopHeaderPost = {
    //     width: "20%",
    //     height: "100%",
    //     display: "flex",
    //     alignItems: "center",
    // }

    // const styleTopHeaderPostDuration = {
    //     width: "100%",
    //     height: "30%",
    //     color: color.Gray,
    //     fontSize: "10px"
    // }

    // const styleContentPost = {
    //     width: "100%",
    //     height: "70%",
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "10%",
    // }

    // const styleCategoryContent = {
    //     fontSize: "12px",
    //     color: color.Gray
    // }

    // const styleContentInfoBar = {
    //     width: "100%",
    //     height: "20%",
    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "baseline",
    //     gap: "2%",
    //     color: color.Gray
    // }

    // const styleContentMessage = {

    // }

    // const styleButtonDropdownPost = {
    //     position: "relative"
    // }

    // const styleDropdownPost = {
    //     position: "absolute",
    //     right: "50%",
    //     top: "40%",
    //     width: "max-content",
    //     background: color.Background,
    //     display: "flex",
    //     height: "max-content",
    //     padding: "50% 80%",
    //     flexDirection: "column",
    //     justifyContent: "space - between",
    //     alignItems: "flex - start",
    //     borderRadius: "14px",
    //     boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    // }

    // const { authUser } = useAuth()
    // const isUser = (postObj.user.id === authUser.id)
    // let postCreator
    // if (isUser) {
    //     postCreator = authUser
    // } else {
    //     postCreator = postObj.user
    // }

    // const [openDropdown, setOpenDropdown] = useState(false)

    // const handleClickDelete = () => {
    //     deletePost(postObj.id)
    // }

    // // const [isEditPost, setIsEditPost] = useState(false)

    // const handleClickEdit = () => {
    //     setIsEditPost(true)
    //     setStopOverflow(true)
    // }

    // const handleCloseEdit = () => {
    //     setIsEditPost(false)
    //     setStopOverflow(false)
    // }


    return (
        <div id="postHeader" className="flex flex-col w-full h-[20%] px-[3%] pt-[3%] gap-[10%]">
            <div className="flex w-full h-[32%] justify-between items-center">
                <div className="flex gap-[3%] h-full w-[48%] min-h-[44px] min-w-[44px] items-center">
                    <div className="cursor-pointer flex overflow-hidden justify-center min-h-[44px] min-w-[44px] items-center w-[23%] h-full rounded-full">
                        <img className="object-cover" src="https://res.cloudinary.com/dsldd3uhx/image/upload/v1698560087/tujgjtq5jdwruguaz6oe.jpg"></img>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className=" text-[100%] font-semibold cursor-pointer hover:underline">Username</div>
                        <div className=" text-[30%] font-medium text-gray-400">22/11/2023</div>
                    </div>
                    <div className=" font-medium text-[70%] text-gray-400 cursor-pointer hover:text-gray-500">Following</div>
                </div>
                <div className="rounded-lg flex items-center justify-center w-[10%] h-fit hover:border hover:border-gray-300 hover:shadow-2xl ">
                    <DropdownIcon />
                </div>
            </div>
            <div className="flex flex-col justify-between h-[68%] w-ful ">
                <div className="w-full h-[33%] flex gap-[1%] items-baseline text-gray-400">
                    <div className="text-[80%]">Post</div>
                    <div className="text-[50%] hover:underline cursor-pointer hover:text-gray-500">Category</div>
                    <div className="text-[50%]">In</div>
                    <div className="text-[50%] hover:underline cursor-pointer hover:text-gray-500">Event</div>
                </div>
                <div className="w-full h-[33%]">
                    <div className="truncate text-[80%] w-[50%] font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure ab iste quaerat sequi expedita sapiente sunt voluptas asperiores distinctio suscipit et at unde dignissimos ducimus, sint, cumque placeat, sit fuga id! Ab reprehenderit, eos soluta vero dicta ut? Consectetur debitis, eius optio quaerat natus et voluptatum totam provident exercitationem at ut aspernatur iusto excepturi obcaecati tempore magni sint cupiditate nemo amet eveniet ipsam? Quia, cupiditate distinctio quae maiores voluptatem provident architecto minus ab voluptas unde, molestias ipsam facere ducimus voluptatum, at ad. Sint, fuga! Quasi, porro nemo officia, explicabo impedit tempore placeat illum quaerat vel sed repellendus laborum obcaecati.
                    </div>
                </div>
                <div className="w-full h-[33%] text-[80%] text-gray-400 hover:underline cursor-pointer hover:text-gray-500">
                    See All
                </div>
            </div>
        </div>
        // <div id="postHeader" style={stylePostHeader}>
        //     <div id="topHeaderPost" style={styleTopHeaderPost}>
        //         <div id="lefttopHeaderPost" style={styleLeftTopHeaderPost}>
        //             <HeaderUser user={postCreator}>
        //                 <div id="topHeaderPostDuration" style={styleTopHeaderPostDuration}>
        //                     {formatTimeAgo(postObj.createdAt)}
        //                 </div>
        //             </HeaderUser>
        //         </div>
        //         <div id="buttonDropdownPost" style={styleButtonDropdownPost}>
        //             <BoxButton onClick={() => setOpenDropdown(!openDropdown)}>
        //                 <DropdownIcon></DropdownIcon>
        //             </BoxButton>
        //             {
        //                 openDropdown &&
        //                 <div id="dropdownPost" style={styleDropdownPost}>
        //                     {isUser
        //                         ?
        //                         <div>
        //                             <TextButton onClick={handleClickEdit} fontSize="14">Edit Post</TextButton>
        //                             <TextButton onClick={handleClickDelete} fontSize="14">Delete Post</TextButton>
        //                             {isEditPost && <UpdatepostModal clickClose={handleCloseEdit} editPost={editPost} postId={postObj.id}></UpdatepostModal>}
        //                         </div>
        //                         :
        //                         <TextButton fontSize="14">Report</TextButton>
        //                     }
        //                 </div>
        //             }
        //         </div>
        //     </div>
        //     <div id="contentPost" style={styleContentPost}>
        //         <div id="contentInfoBar" style={styleContentInfoBar}>
        //             <p id="categoryContent" style={styleCategoryContent}>Post</p>
        //             {postObj?.postCategorys?.map((el, index) => <TextButton fontSize="10" key={index}>{el.categoryName}</TextButton>)}
        //         </div>
        //         <div id="contentMessage" style={styleContentMessage}>
        //             {postObj.message}
        //         </div>
        //     </div>
        // </div>
    )
}
