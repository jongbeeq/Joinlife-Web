import { useEffect, useRef, useState } from "react"
import Container from "../../components/Container"
import themeColor from "../../variables/color"
import axios from "../../configs/axios"
import { BoxButton } from "../../components/Button"
import { ImageIcon } from "../../icon/icon"
import Loading from "../../components/Loading"

export default function CreatepostModal({ clickClose }) {
    const color = themeColor()
    const styleCreatepostButton = {
        cursor: "pointer"
    }

    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [allCategory, setAllCategory] = useState([])
    const [files, setFiles] = useState([])
    const [previousFile, setPreviousFile] = useState(0)
    const [message, setMessage] = useState(null)
    const [category, setCategory] = useState({})

    const fileEl = useRef(null)

    const handleChangeMessage = async (e) => {
        try {
            setMessage(e.target.value)
            console.log(message)
        } catch (err) {
            console.log("🚀 ~ file: CreatepostModal.jsx:25 ~ handleChangeMessage ~ err:", err)
        }
    }

    const handleChangeCategory = async (e) => {
        try {
            setCategory(
                category[e.target.value]
                    ?
                    { ...category, [e.target.value]: null }
                    :
                    { ...category, [e.target.value]: e.target.value })

            console.log("🚀 ~ file: SetProfile.jsx:50 ~ handleChangeCategory ~ category:", category)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(
        () => {
            axios.get("/category")
                .then(
                    res => {
                        console.log(res.data.category)
                        setAllCategory(res.data.category)
                    }
                )
                .catch(
                    console.log
                )
        }
        , [])

    const handleSubmitPost = async (e) => {
        try {
            e.preventDefault()
            // alert("create post")
            const formData = new FormData()
            if (files) {
                files.map(el => formData.append('image', el))
            }
            if (message) {
                formData.append('message', message)
                // console.log("🚀 ~ file: CreatepostModal.jsx:74 ~ handleSubmitPost ~ a:", a)
            }
            if (category) {
                const categoryArray = Object.values(category).filter(el => el !== null)
                // alert(categoryArray)
                // console.log(categoryArray)
                formData.append('category', null)
                categoryArray.map(el => formData.append('category', el))
                // alert(a)
                // console.log(a)
            }
            setLoading(true)
            console.log("🚀 ~ file: CreatepostModal.jsx:35 ~ handleSubmitPost ~ formData:", formData)
            const res = await axios.post('/post', formData)
            console.log("🚀 ~ file: CreatepostModal.jsx:37 ~ handleSubmitPost ~ res:", res.data)
            alert(res.data)
            clickClose()
        } catch (err) {
            console.log("🚀 ~ file: CreatepostModal.jsx:34 ~ handleSubmitPost ~ err:", err)
            alert(err.response.data.message)
        } finally {
            setLoading(false)
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

    const styleInputFilePost = {
        width: "75%",
        height: "75%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
        border: `1px solid ${color.SubGray}`,
        borderRadius: "3%",
        position: "relative",
        overflow: "hidden",
        // background: "red"
    }

    const styleShowFileContainer = {
        // position: "relative",
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "auto auto",
        gridTemplateRows: "auto auto",
        objectFit: "contain",
        overflow: "auto",
        // gap: "0.5%"
    }

    const styleFileBox = {
        border: `0.5px solid ${color.White}`,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        overFlow: "hidden",
        objectFit: "contain",
    }

    const styleRemoveFileButton = {
        position: "absolute",
        cursor: "pointer",
        top: "3%",
        right: "5%",
        zIndex: "100"
    }

    const styleImagePost = {
        width: "max-content",
        maxWidth: "100%",
        height: "auto",
        objectFit: "cover"
    }

    const styleInputButton = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        bottom: "0%",
        zIndex: "150"
    }

    const styleMessageInput = {
    }

    const styleCategoryBox = {
        display: "flex",
        width: "100%",
        height: "40%",
        padding: "10px",
        alignItems: "flex-start",
        alignContent: "flex-start",
        gap: "10px 8px",
        flexWrap: "wrap",
        borderRadius: "20px",
        // border: `1px solid ${color.Gray}`,
        overflow: "auto"
    }

    const styleInputCategory = {
        width: "40%",
        height: "15%",
        borderRight: `1px solid ${color.SubGray}`,
        borderBottom: `1px solid ${color.SubGray}`,
        // background: "red",
        // objectFit: "cover",
        // width: "fit-content",    
        // maxWidth: "100%",
        // maxHeight: "100%"
    }

    function FileBox({ elFile, index }) {
        console.log("🚀 ~ file: CreatepostModal.jsx:111 ~ FileBox ~ elFile:", elFile)
        // alert(`FileBox-elFile:    ${elFile} index:   ${index}`)
        let fileContent

        const urlFile = URL.createObjectURL(elFile)
        const typeFile = elFile.type.split("/")[0]
        const [removeFile, setRemoveFile] = useState(false)
        if (typeFile === "image") {
            fileContent = <img id="imagePost" style={styleImagePost} key={elFile.name} src={urlFile}></img>
        }

        if (typeFile === "video") {
            fileContent = <video key={elFile.name} src={urlFile} controls autoPlay muted></video>
        }


        return (
            !removeFile &&
            (
                <div key={elFile.name} id="fileBox" style={styleFileBox}>
                    <p
                        onClick={
                            () => {
                                files.splice(index, 1)
                                console.log("🚀 ~ file: CreatepostModal.jsx:125 ~ CreatepostModal ~ files:", files)
                                console.log("🚀 ~ file: CreatepostModal.jsx:125 ~ CreatepostModal ~ files:", files.length)
                                setFiles(files)
                                setRemoveFile(true)
                            }
                        }
                        id="removeFileButton" style={styleRemoveFileButton}>X</p>
                    {fileContent}
                </div>
            )
        )
    }

    function CategoryButton({ categoryName }) {
        const [haveCategory, setHaveCat] = useState(false)
        useEffect(() => {
            const findCategory = Object.values(category)
                .find(el => el === categoryName)
            setHaveCat(findCategory)
        },
            [category]
        )

        const styleCreateButton = {
            display: "flex",
            width: "50px",
            height: "20px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            flexShrink: "0",
            borderRadius: "8px",
            fontSize: "10px",
            color: haveCategory ? color.Orange : color.Gray,
            border: `1px solid ${haveCategory ? color.Orange : color.Gray}`,
        }

        return (
            <>
                <button style={styleCreateButton} value={categoryName} onClick={handleChangeCategory}>{categoryName}</button>
            </>
        )
    }

    return (
        <>
            {loading && <Loading />}
            {/* <div onClick={() => setIsOpen(true)} id="createpostButton" style={styleCreatepostButton}>+ Create Post</div> */}
            {/* {isOpen && */}
            <Container Container backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={clickClose}>
                <form id="postForm" style={stylePostForm} onSubmit={handleSubmitPost}>
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
                    <div id="inputCategory" style={styleInputCategory}>
                        <p>Category</p>
                        <div style={styleCategoryBox}>
                            {allCategory.map(category => <CategoryButton key={category} categoryName={category} />)}
                        </div>
                    </div>
                    <div id="inputFilePost" style={styleInputFilePost}>
                        {
                            // (!openInputFile) && (
                            <div id="fileShowContainer" style={styleShowFileContainer}>
                                {files?.map((el, index) => {
                                    console.log("🚀 ~ file: CreatepostModal.jsx:167 ~ CreatepostModal ~ files:", files)
                                    return (<FileBox key={el} elFile={el} index={index}></FileBox>)
                                })}
                            </div>
                            // )
                            // files.map(el => {
                            // const urlFile = URL.createObjectURL(el)
                            // return (<div key="el">{el}</div>)
                            // })
                        }
                        {
                            // (openInputFile) &&
                            <div id="inputButton" style={styleInputButton}>
                                <BoxButton fontSize="13" height="30" backgroundColor={color.White} color={color.SubGray} onClick={(e) => {
                                    e.preventDefault()
                                    fileEl.current.click()
                                    // setOpenInputFile(false)
                                }}>
                                    <ImageIcon />
                                    Add Image or Video
                                </BoxButton>
                                <input
                                    type="file"
                                    className="hidden"
                                    multiple
                                    onChange={
                                        e => {
                                            if (previousFile) {
                                                alert("have image")
                                                console.log(files)
                                                setFiles([...files, ...Object.values(e.target.files)])
                                                setPreviousFile(files.length)
                                            } else {
                                                alert("not have")
                                                setFiles(Object.values(e.target.files))
                                                setPreviousFile(files.length)
                                            }
                                            // console.log(Object.values(e.target.files))
                                            // console.log(files)
                                            // setFiles([...files, Object.values(e.target.files)])
                                            // setFiles(Object.values(e.target.files))
                                            // console.log(files)

                                            // alert(files.length)
                                        }
                                    }
                                    ref={fileEl}
                                />
                            </div>
                        }
                    </div>

                    <BoxButton backgroundColor={color.Orange} height={30} fontSize="16" color={color.White}>create post</BoxButton>
                </form>
            </Container >
            {/* } */}
            {/* } */}
        </>
    )
}
