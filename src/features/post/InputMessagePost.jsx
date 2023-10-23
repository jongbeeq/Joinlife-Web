import { useEffect, useState } from "react"

export default function InputMessagePost({ input, setInput }) {
    const styleMessageInput = {
    }

    const [message, setMessage] = useState(null)

    const handleChangeMessage = async (e) => {
        try {
            setMessage(e.target.value)
            // setInput({ ...input, message: message })
            console.log("🚀 ~ file: CreatepostModal.jsx:25 ~ handleChangeMessage ~ input", input)
            console.log(message)
        } catch (err) {
            console.log("🚀 ~ file: CreatepostModal.jsx:25 ~ handleChangeMessage ~ err:", err)
        }
    }
    useEffect(
        () => {
            console.log("🚀 ~ file: InputMessagePost.jsx:23 ~ InputMessagePost ~ input Before:", input)
            setInput({ ...input, message: message })
            console.log("🚀 ~ file: InputMessagePost.jsx:23 ~ InputMessagePost ~ input After:", input)
        }, [message]
    )

    return (
        <textarea
            onChange={handleChangeMessage}
            type="textarea"
            id="messageInput"
            style={styleMessageInput}
            cols="72"
            rows="4"
            placeholder="What on your mind?"
        >

        </textarea>
    )
}
