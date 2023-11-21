import { useEffect, useState } from "react"

export default function InputMessagePost({ input, setInput }) {
    const styleMessageInput = {
    }
    // console.log(input.message)
    const [message, setMessage] = useState(null)

    const handleChangeMessage = async (e) => {
        try {
            // console.log(e.target.value)
            setMessage(e.target.value)
            console.log(message)
        } catch (err) {
            alert(err.response.data.message)
        }
    }
    useEffect(
        () => {
            setInput({ ...input, message: message })
        }, [message]
    )

    return (
        <textarea
            onChange={handleChangeMessage}
            type="textarea"
            id="messageInput"
            style={styleMessageInput}
            value={input?.message}
            cols="72"
            rows="4"
            placeholder="What on your mind?"
        >

        </textarea>
    )
}
