import { useState } from "react"
import Container from "../../components/Container"
import themeColor from "../../variables/color"
import { BoxButton } from "../../components/Button"
import Loading from "../../components/Loading"
import InputFilePost from "./InputFilePost"
import InputCategoryPost from "./InputCategoryPost"
import InputMessagePost from "./InputMessagePost"
import { useAuth } from "../../hooks/use-auth"

export default function CreatepostModal({ createPost, clickClose, setLoading }) {
    const color = themeColor()
    const { setInitialLoading } = useAuth()

    // const [loading, setLoading] = useState(false)
    const [input, setInput] = useState({})

    const handleSubmitPost = async (e) => {
        try {
            e.preventDefault()

            const formData = new FormData()
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
            // alert("upload")
            // setInitialLoading(true)  
            createPost(formData)
            clickClose()
            // alert('success')
        } catch (err) {
            alert(err.response.data.message)
            // } finally {
            //     // setInitialLoading(false)
            //     // alert('success')
            // }
        }
    }
    const stylePostForm = {
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
            {/* {loading && <Loading />} */}
            <Container translate="translate(-32%, -50%)" backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={clickClose}>
                <form id="postForm" style={stylePostForm} onSubmit={handleSubmitPost}>
                    <InputMessagePost input={input} setInput={setInput}></InputMessagePost>
                    <InputCategoryPost input={input} setInput={setInput}></InputCategoryPost>
                    <InputFilePost input={input} setInput={setInput}></InputFilePost>
                    <BoxButton backgroundColor={color.Orange} height={30} fontSize="16" color={color.White}>create post</BoxButton>
                </form>
            </Container >
        </>
    )
}
