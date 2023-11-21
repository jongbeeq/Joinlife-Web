import { useEffect, useState } from "react"
import CreatepostModal from "../../features/post/CreatepostModal"
import PostItem from "../../features/post/PostItem"
import { TextButton } from "../../components/Button"
import axios from "../../configs/axios"
import Loading from "../../components/Loading"

export default function MiddleHomePage() {
    const [stopOverflow, setStopOverflow] = useState(false)

    const middleHomePage = {
        display: "flex",
        width: "82%",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        gap: "33px",
        overflow: !stopOverflow && "auto"
        // overflow: "auto"
    }

    const styleContentMiddleHomePage = {
        width: "70%",
        display: "flex",
        flexDirection: "column",
    }

    const styleHeadContentMiddleHomePage = {
        width: "100%",
        top: "0%",
        height: "10vh",
        display: "flex",
        flexDirection: "row",
        gap: "5%",
        alignItems: "center"
    }

    const styleMainContentMiddleHomePage = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // gap: "0.5%"
    }

    const [isCreatePost, setIsCreatePost] = useState(false)
    const [allPost, setAllpost] = useState([])
    const [loading, setLoading] = useState(false)

    const createPost = async (data) => {
        try {
            setLoading(true)
            const res = await axios.post('/post', data)
            console.log(res)
            const newPost = res.data;
            setAllpost([newPost, ...allPost])
            console.log(allPost)
        } catch (err) {
            alert(err)
        } finally {
            setLoading(false)
        }
    };

    const deletePost = async (postId) => {
        try {
            await axios.delete(`/post/${postId}`)
            setAllpost(allPost.filter(el => el.id !== postId))
        } catch (err) {
            alert(err.response.data.message)
        }

    }

    const editPost = async (data) => {
        const res = await axios.patch('/post', data)
        const updatePost = res.data;
        console.log(updatePost)
        const previousOtherPost = allPost.filter(el => el.id !== updatePost.id)
        setAllpost([updatePost, ...previousOtherPost])
    };

    useEffect(
        () => {
            setLoading(true)
            axios.get("./post/")
                .then(
                    res => {
                        setAllpost(res.data)
                        setLoading(false)
                    })
                .catch(
                    err => {
                        alert(err.response.data.message)
                    }
                )
        }
        , []
    )

    return (

        <div style={middleHomePage}>
            {loading && <Loading></Loading>}
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
            </div>
        </div>
    )
}
