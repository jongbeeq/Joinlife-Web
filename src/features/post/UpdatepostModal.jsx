import { useEffect, useState } from "react"
import themeColor from "../../variables/color"
import Loading from "../../components/Loading"
import Container from "../../components/Container"
import InputMessagePost from "./InputMessagePost"
import InputCategoryPost from "./InputCategoryPost"
import InputFilePost from "./InputFilePost"
import { BoxButton } from "../../components/Button"
import axios from "axios"

export default function UpdatepostModal({ editPost, clickClose, postId }) {
    const color = themeColor()

    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState(null)

    useEffect(
        () => {
            // alert(postId)
            // console.log(postId)
            const postIdObj = {
                postId
            }
            axios.post("/post/postData", postIdObj).then(res => {
                setInput(res.data)
            })
        },
        []
    )
    console.log(input)

    const handleSubmitPost = async (e) => {
        try {
            e.preventDefault()

            const formData = new FormData()
            formData.append('postId', input.id)
            if (input.files) {
                input.files.map(el => formData.append('image', el))
            }
            if (input.message) {
                formData.append('message', input.message)
            }
            if (input.category) {
                const categoryArray = Object.values(input.category).filter(el => el !== null)
                formData.append('category', null)
                categoryArray.map(el => formData.append('category', el))
            }
            setLoading(true)
            await editPost(formData)
            clickClose()
        } catch (err) {
            alert(err.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    const stylePostEditForm = {
        display: "flex",
        width: "80%",
        gap: "1%",
        height: "80%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    }

    return (
        <>
            {loading && <Loading />}
            <Container left="200" translate="translate(-80%, -15%)" backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={clickClose}>
                <form id="postEditForm" style={stylePostEditForm} onSubmit={handleSubmitPost}>
                    <InputMessagePost input={input} setInput={setInput}></InputMessagePost>
                    <InputCategoryPost input={input} setInput={setInput}></InputCategoryPost>
                    <InputFilePost input={input} setInput={setInput}></InputFilePost>
                    <BoxButton backgroundColor={color.Black} height={30} fontSize="16" color={color.White}>edit post</BoxButton>
                </form>
            </Container >
        </>
    )
}
