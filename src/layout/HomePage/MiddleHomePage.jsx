import { useEffect, useState } from "react"
import CreatepostModal from "../../features/post/CreatepostModal"
import PostItem from "../../features/post/PostItem"
import { TextButton } from "../../components/Button"
import axios from "../../configs/axios"
import Loading from "../../components/Loading"
import { AddIcon, CommentIcon, DropdownIcon, GotoEventIcon, LikeIcon, ShareIcon, TagUserIcon } from "../../icon/icon"
import CreatePostAndEventButton from "./CreatePostAndEventButton"

export default function MiddleHomePage() {
    // const [stopOverflow, setStopOverflow] = useState(false)

    // const middleHomePage = {
    //     display: "flex",
    //     width: "82%",
    //     height: "100vh",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     gap: "33px",
    //     overflow: !stopOverflow && "auto"
    //     // overflow: "auto"
    // }

    // const styleContentMiddleHomePage = {
    //     width: "70%",
    //     display: "flex",
    //     flexDirection: "column",
    // }

    // const styleHeadContentMiddleHomePage = {
    //     width: "100%",
    //     top: "0%",
    //     height: "10vh",
    //     display: "flex",
    //     flexDirection: "row",
    //     gap: "5%",
    //     alignItems: "center"
    // }

    // const styleMainContentMiddleHomePage = {
    //     width: "100%",
    //     display: "flex",
    //     flexDirection: "column",
    //     // gap: "0.5%"
    // }

    // const [isCreatePost, setIsCreatePost] = useState(false)
    // const [allPost, setAllpost] = useState([])
    // const [loading, setLoading] = useState(false)

    // const createPost = async (data) => {
    //     try {
    //         setLoading(true)
    //         const res = await axios.post('/post', data)
    //         console.log(res)
    //         const newPost = res.data;
    //         setAllpost([newPost, ...allPost])
    //         console.log(allPost)
    //     } catch (err) {
    //         alert(err)
    //     } finally {
    //         setLoading(false)
    //     }
    // };

    // const deletePost = async (postId) => {
    //     try {
    //         await axios.delete(`/post/${postId}`)
    //         setAllpost(allPost.filter(el => el.id !== postId))
    //     } catch (err) {
    //         alert(err.response.data.message)
    //     }

    // }

    // const editPost = async (data) => {
    //     const res = await axios.patch('/post', data)
    //     const updatePost = res.data;
    //     console.log(updatePost)
    //     const previousOtherPost = allPost.filter(el => el.id !== updatePost.id)
    //     setAllpost([updatePost, ...previousOtherPost])
    // };

    // useEffect(
    //     () => {
    //         setLoading(true)
    //         axios.get("./post/")
    //             .then(
    //                 res => {
    //                     setAllpost(res.data)
    //                     setLoading(false)
    //                 })
    //             .catch(
    //                 err => {
    //                     alert(err.response.data.message)
    //                 }
    //             )
    //     }
    //     , []
    // )

    return (
        <div className="w-[78%] h-full flex flex-col items-center justify-center overflow-hidden">
            <div className="flex flex-col w-[60%] h-full gap-[3%] pt-[3%]">
                <CreatePostAndEventButton />
                {/* <div className="flex flex-col w-full h-[88%] ">
                    <div className="flex w-full h-[8%] justify-between items-center">
                        <div className="flex gap-[3%] h-full w-[48%] min-h-[44px] min-w-[44px] items-center">
                            <div className="cursor-pointer flex overflow-hidden justify-center min-h-[44px] min-w-[44px] items-center w-[23%] h-full rounded-full">
                                <img className="object-cover" src="https://res.cloudinary.com/dsldd3uhx/image/upload/v1698560087/tujgjtq5jdwruguaz6oe.jpg"></img>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className=" text-[100%] font-semibold cursor-pointer hover:text-gray-400">Username</div>
                                <div className=" text-[30%] font-medium text-gray-400">22/11/2023</div>
                            </div>
                            <div className=" font-medium text-[70%] text-gray-400 cursor-pointer hover:text-gray-500">Follwing</div>
                        </div>
                        <div className="rounded-lg flex items-center justify-center w-[10%] h-fit hover:border hover:border-gray-300 hover:shadow-2xl ">
                            <DropdownIcon />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-[12%] w-ful ">
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
                    <div className="flex w-full h-[66%] bg-white relative overflow-hidden">
                        <img className="object-cover w-full" src='https://res.cloudinary.com/dsldd3uhx/image/upload/v1698371154/qutjpavsgiurvfvhf3rs.jpg'></img>
                    </div>
                    <div className="flex flex-col w-full h-[14%]">
                        <div className="w-full h-[20%] flex justify-between">
                            <div className="flex gap-[3%] w-full h-full">
                                <LikeIcon />
                                <div className="pb-[1%]">
                                    <CommentIcon />
                                </div>
                                <ShareIcon />
                            </div>
                            <GotoEventIcon />
                            <div></div>
                        </div>
                        <div className="w-full h-[20%] text-[90%] font-medium">Like 10</div>
                        <div className="flex flex-row w-full h-[38%] px-[2%] py-[1%] justify-between">
                            <div className="flex flex-row w-[80%] h-full gap-[1%]">
                                <div className="rounded-full h-full w-[6%] flex items-center justify-center overflow-hidden">
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
                            <div className="text-[60%]">
                                <LikeIcon />
                            </div>
                        </div>
                    </div>
                </div> */}
                <PostItem />
                {/* {loading && <Loading></Loading>}
            <div id="contentMiddleHomePage" style={styleContentMiddleHomePage}>
                <div id="headContentMiddleHomePage" style={styleHeadContentMiddleHomePage}>
                    <TextButton onClick={() => setIsCreatePost(true)} id="createpostButton" >+ Create Post</TextButton>
                    {isCreatePost &&
                        <CreatepostModal createPost={createPost} clickClose={() => setIsCreatePost(false)}></CreatepostModal>
                    }
                    <div>+ Create Event</div>
                </div>
                <div id="mainContentMiddleHomePage" style={styleMainContentMiddleHomePage}>
                    {allPost.map((postObj, index) => <PostItem key={index} postObj={postObj} stopOverflow={stopOverflow} setLoading={setLoading} setStopOverflow={setStopOverflow} deletePost={deletePost} editPost={editPost}></PostItem>)}
                </div>
            </div> */}
            </div>
        </div >
    )
}
