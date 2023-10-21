import { useEffect, useRef, useState } from "react"
import Container from "../../components/Container"
import themeColor from "../../variables/color"
import axios from "../../configs/axios"

export default function CreatepostModal({ clickClose }) {
    const color = themeColor()
    const styleCreatepostButton = {
        cursor: "pointer"
    }
    const [isOpen, setIsOpen] = useState(false)
    const [files, setFiles] = useState(null)
    const [removeFile, setRemoveFile] = useState(false)

    const fileEl = useRef(null)

    const handleSubmitPost = async (e) => {
        try {
            e.preventDefault()
            alert("create post")
            const formData = new FormData()
            if (files) {
                files.map(el => formData.append('image', el))
            }
            // if (description) {
            //     formData.append('description', description)
            // }
            // if (category) {
            //     const categoryArray = Object.values(category).filter(el => el !== null)
            //     categoryArray.map(el => formData.append('category', el))
            // }
            // if (interest) {
            //     const interestArray = Object.values(interest).filter(el => el !== null)
            //     interestArray.map(el => formData.append('interest', el))
            // }
            // formData.append('message', "test axios")
            console.log("🚀 ~ file: CreatepostModal.jsx:35 ~ handleSubmitPost ~ formData:", formData)
            const res = await axios.post('/post', formData)
            console.log("🚀 ~ file: CreatepostModal.jsx:37 ~ handleSubmitPost ~ res:", res.data)
            alert(res.data)
        } catch (err) {
            console.log("🚀 ~ file: CreatepostModal.jsx:34 ~ handleSubmitPost ~ err:", err)
        }

    }

    const stylePostForm = {
        display: "flex",
        width: "80%",
        height: "80%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    }

    const styleInputFilePost = {
        width: "100%",
        height: "60%",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        border: `1px solid ${color.SubGray} `,
        borderRadius: "3%",
        objectFit: "cover",
        // background: "red"
    }

    const styleShowFileContainer = {
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "auto auto",
        objectFit: "contain",
        overflow: "auto",
        gap: "0.5%"
    }

    const styleFileBox = {
        width: "100%",
        height: "fit-content",
        // height: "50%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        overFlow: "hidden",
        objectFit: "contain",
        background: "blue"
    }

    const styleRemoveFileButton = {
        position: "absolute",
        cursor: "pointer",
        top: "3%",
        right: "5%"
    }

    const styleImagePost = {
        objectFit: "cover"
    }

    // useEffect(
    //     () => {
    //         setFiles(files)
    //         console.log(files)
    //         alert("useEffect active")
    //         alert(`files?.length:     ${files?.length}`)
    //         alert(`files:     ${files}`)
    //         alert(`files?.length !== 0 :    ", ${files?.length !== 0}`)
    //     },
    //     [files]
    // )

    // function ImageBox(elFile, index) {
    //     const urlFile = URL.createObjectURL(elFile)
    //     const typeFile = elFile.type.split("/")[0]

    //     if (typeFile === "image") {
    //         return (
    //             <div key={elFile.name} id="fileBox" style={styleFileBox}>
    //                 <p
    //                     onClick={
    //                         () => {
    //                             // useEffect(

    //                             // )
    //                             files.splice(index, 1)
    //                             alert(files.length)
    //                             console.log("🚀 ~ file: CreatepostModal.jsx:125 ~ CreatepostModal ~ files:", files)
    //                             setFiles(files)
    //                             alert(`in OnClick X files:     ${files}`)
    //                             // console.log(files)
    //                         }
    //                     }
    //                     id="removeFileButton" style={styleRemoveFileButton}>X</p>
    //                 <img id="imagePost" style={styleImagePost} key={elFile.name} src={urlFile}></img>
    //             </div>
    //         )
    //     }
    //     if (typeFile === "video") {
    //         return (
    //             <video key={elFile.name} src={urlFile} controls autoPlay muted></video>
    //         )
    //     }
    // }


    return (
        <>
            {/* <div onClick={() => setIsOpen(true)} id="createpostButton" style={styleCreatepostButton}>+ Create Post</div> */}
            {/* {isOpen && */}
            <Container Container backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={clickClose}>
                <form id="postForm" style={stylePostForm} onSubmit={handleSubmitPost}>

                    <div id="inputFilePost" style={styleInputFilePost}>
                        {
                            (files?.length !== 0 && files !== null) &&
                            (<div id="fileContainer" style={styleShowFileContainer}>
                                {/* {files?.map((elFile, index) => {
                                        alert(`files?.map((elFile):     ${elFile}`)
                                        return (< ImageBox key={index} elFile={elFile} index={index} />)
                                    }
                                    )} */}


                                {files?.map(
                                    (elFile, index) => {
                                        const urlFile = URL.createObjectURL(elFile)
                                        const typeFile = elFile.type.split("/")[0]
                                        // const [fileBox, setFileBox] = useState(null)

                                        if (typeFile === "image") {
                                            return (
                                                !removeFile &&
                                                (
                                                    <div key={elFile.name} id="fileBox" style={styleFileBox}>
                                                        <p
                                                            onClick={
                                                                () => {
                                                                    files.splice(index, 1)
                                                                    // alert(files.length)
                                                                    console.log("🚀 ~ file: CreatepostModal.jsx:125 ~ CreatepostModal ~ files:", files)
                                                                    setFiles(files)
                                                                    setRemoveFile(true)
                                                                    // alert(`in OnClick X files:     ${files}`)
                                                                    // console.log(files)
                                                                }
                                                            }
                                                            id="removeFileButton" style={styleRemoveFileButton}>X</p>
                                                        <img id="imagePost" style={styleImagePost} key={elFile.name} src={urlFile}></img>
                                                    </div>
                                                )

                                            )
                                        }
                                        if (typeFile === "video") {
                                            return (
                                                <video key={elFile.name} src={urlFile} controls autoPlay muted></video>
                                            )
                                        }
                                    }
                                )}
                            </div>)
                        }
                        {(files?.length === 0 || files === null) && <div onClick={() => fileEl.current.click()}>Upload Image or Video</div>}
                        <input
                            type="file"
                            className="hidden"
                            multiple
                            onChange={
                                e => {
                                    console.log(Object.values(e.target.files))
                                    setFiles(Object.values(e.target.files))
                                }
                            }
                            ref={fileEl}
                        />
                    </div>
                    <button> create post</button>
                </form>
            </Container >
            {/* } */}
        </>
    )
}
