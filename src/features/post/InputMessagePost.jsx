import { useEffect, useState } from "react"

export default function InputMessagePost({ input, setInput }) {
    const styleMessageInput = {
    }

    const [message, setMessage] = useState(null)

    const handleChangeMessage = async (e) => {
        try {
            setMessage(e.target.value)
            console.log(message)
        } catch (err) {
            alert(err)
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
            cols="72"
            rows="4"
            placeholder="What on your mind?"
        >

        </textarea>
    )
}
