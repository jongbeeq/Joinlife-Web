import { useEffect, useState } from "react"
import CreatepostModal from "../../features/post/CreatepostModal"
import PostItem from "../../features/post/PostItem"
import { TextButton } from "../../components/Button"
import axios from "../../configs/axios"

export default function MiddleHomePage() {
    const middleHomePage = {
        display: "flex",
        width: "82%",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        gap: "33px",
        overflow: "auto"
    }

    const styleContentMiddleHomePage = {
        width: "70%",
        display: "flex",
        flexDirection: "column",
    }

    const styleHeadContentMiddleHomePage = {
        width: "100%",
        // position: "fixed",
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
        gap: "0.5%"
    }

    const [isCreatePost, setIsCreatePost] = useState(false)
    const [allPost, setAllpost] = useState([])
    const [refresh, setRefresh] = useState(false)

    const createPost = async (data) => {
        const res = await axios.post('/post', data)
        const newPost = res.data;
        console.log(allPost)
        setAllpost([newPost, ...allPost])
        setRefresh(!refresh)
    };

    const deletePost = async (postId) => {
        try {
            await axios.delete(`/post/${postId}`)
            setAllpost(allPost.filter(el => el.id !== postId))
        } catch (err) {
            alert(err.response.data.message)
        }

    }

    console.log(allPost)

    useEffect(
        () => {
            axios.get("./post/")
                .then(
                    res => {
                        setAllpost(res.data)
                    })
                .catch(
                    err => {
                        alert(err.response.data.message)
                    }
                )
        }, [refresh]
    )

    return (
        <div style={middleHomePage}>
            <div id="contentMiddleHomePage" style={styleContentMiddleHomePage}>
                <div id="headContentMiddleHomePage" style={styleHeadContentMiddleHomePage}>
                    <TextButton onClick={() => setIsCreatePost(true)} id="createpostButton" >+ Create Post</TextButton>
                    {isCreatePost &&
                        <CreatepostModal createPost={createPost} clickClose={() => setIsCreatePost(false)}></CreatepostModal>
                    }
                    <div>+ Create Event</div>
                </div>
                <div id="mainContentMiddleHomePage" style={styleMainContentMiddleHomePage}>
                    {allPost.map((postObj, index) => <PostItem key={index} postObj={postObj} deletePost={deletePost}></PostItem>)}
                </div>
            </div>
        </div>
    )
}
