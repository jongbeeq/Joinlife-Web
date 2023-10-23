import { useEffect, useRef, useState } from "react"
import Container from "../../components/Container"
import themeColor from "../../variables/color"
import axios from "../../configs/axios"
import { BoxButton } from "../../components/Button"
import Loading from "../../components/Loading"
import InputFilePost from "./InputFilePost"
import InputCategoryPost from "./InputCategoryPost"
import InputMessagePost from "./InputMessagePost"

export default function CreatepostModal({ clickClose }) {
    const color = themeColor()

    const [loading, setLoading] = useState(false)
    // const [allCategory, setAllCategory] = useState([])
    // const [files, setFiles] = useState([])
    // const [message, setMessage] = useState(null)
    // const [category, setCategory] = useState(0)
    const [input, setInput] = useState({})


    // const handleChangeMessage = async (e) => {
    //     try {
    //         setMessage(e.target.value)
    //         // setInput({ ...input, message: message })
    //         console.log("🚀 ~ file: CreatepostModal.jsx:25 ~ handleChangeMessage ~ input", input)
    //         console.log(message)
    //     } catch (err) {
    //         console.log("🚀 ~ file: CreatepostModal.jsx:25 ~ handleChangeMessage ~ err:", err)
    //     }
    // }

    // const handleChangeCategory = async (e) => {
    //     try {
    //         setCategory(
    //             category[e.target.value]
    //                 ?
    //                 { ...category, [e.target.value]: null }
    //                 :
    //                 { ...category, [e.target.value]: e.target.value })
    //         // setInput({ ...input, category: category })
    //         console.log("🚀 ~ file: SetProfile.jsx:50 ~ handleChangeCategory ~ category:", category)
    //         console.log("🚀 ~ file: CreatepostModal.jsx:42 ~ handleChangeCategory ~ category:", input)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(
    //     () => {
    //         axios.get("/category")
    //             .then(
    //                 res => {
    //                     console.log(res.data.category)
    //                     setAllCategory(res.data.category)
    //                 }
    //             )
    //             .catch(
    //                 console.log
    //             )
    //     }
    //     , [])

    const handleSubmitPost = async (e) => {
        try {
            e.preventDefault()

            // alert("create post")
            // alert(`Submit Category:    ${category}`)
            console.log("🚀 ~ file: CreatepostModal.jsx:66 ~ handleSubmitPost ~ category:", input)
            const formData = new FormData()
            if (input.files) {
                input.files.map(el => formData.append('image', el))
            }
            if (input.message) {
                formData.append('message', input.message)
                // console.log("🚀 ~ file: CreatepostModal.jsx:74 ~ handleSubmitPost ~ a:", a)
            }
            if (input.category) {
                const categoryArray = Object.values(input.category).filter(el => el !== null)
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
    // console.log("🚀 ~ file: CreatepostModal.jsx:102 ~ handleSubmitPost ~ handleSubmitPost:", handleSubmitPost)
    // console.log("🚀 ~ file: CreatepostModal.jsx:102 ~ handleSubmitPost ~ handleSubmitPost:", handleSubmitPost)


    const stylePostForm = {
        display: "flex",
        width: "80%",
        gap: "1%",
        height: "80%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    }

    // const styleFileBox = {
    //     border: `0.5px solid ${color.White}`,
    //     position: "relative",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItem: "center",
    //     overFlow: "hidden",
    //     objectFit: "contain",
    // }

    // const styleRemoveFileButton = {
    //     position: "absolute",
    //     cursor: "pointer",
    //     top: "3%",
    //     right: "5%",
    //     zIndex: "100"
    // }

    // const styleImagePost = {
    //     width: "max-content",
    //     maxWidth: "100%",
    //     height: "auto",
    //     objectFit: "cover"
    // }

    // const styleMessageInput = {
    // }

    // const styleCategoryBox = {
    //     display: "flex",
    //     width: "100%",
    //     height: "40%",
    //     padding: "10px",
    //     alignItems: "flex-start",
    //     alignContent: "flex-start",
    //     gap: "10px 8px",
    //     flexWrap: "wrap",
    //     borderRadius: "20px",
    //     // border: `1px solid ${color.Gray}`,
    //     overflow: "auto"
    // }

    // const styleInputCategory = {
    //     width: "40%",
    //     height: "15%",
    //     borderRight: `1px solid ${color.SubGray}`,
    //     borderBottom: `1px solid ${color.SubGray}`,
    //     // background: "red",
    //     // objectFit: "cover",
    //     // width: "fit-content",    
    //     // maxWidth: "100%",
    //     // maxHeight: "100%"
    // }


    // function CategoryButton({ categoryName }) {
    //     const [haveCategory, setHaveCat] = useState(false)
    //     useEffect(() => {
    //         const findCategory = Object.values(category)
    //             .find(el => el === categoryName)
    //         setHaveCat(findCategory)
    //     },
    //         [category]
    //     )

    //     const styleCreateButton = {
    //         display: "flex",
    //         width: "50px",
    //         height: "20px",
    //         padding: "10px",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         gap: "2px",
    //         flexShrink: "0",
    //         borderRadius: "8px",
    //         fontSize: "10px",
    //         color: haveCategory ? color.Orange : color.Gray,
    //         border: `1px solid ${haveCategory ? color.Orange : color.Gray}`,
    //     }

    //     return (
    //         <>
    //             <button style={styleCreateButton} value={categoryName} onClick={handleChangeCategory}>{categoryName}</button>
    //         </>
    //     )
    // }


    return (
        <>
            {loading && <Loading />}
            {/* <div onClick={() => setIsOpen(true)} id="createpostButton" style={styleCreatepostButton}>+ Create Post</div> */}
            {/* {isOpen && */}
            <Container Container backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={clickClose}>
                <form id="postForm" style={stylePostForm} onSubmit={handleSubmitPost}>
                    {/* <textarea
                        onChange={handleChangeMessage}
                        type="textarea"
                        id="messageInput"
                        style={styleMessageInput}
                        cols="72"
                        rows="4"
                        placeholder="What on your mind?"
                    >

                    </textarea> */}
                    <InputMessagePost input={input} setInput={setInput}></InputMessagePost>
                    {/* <div id="inputCategory" style={styleInputCategory}>
                        <p>Category</p>
                        <div style={styleCategoryBox}>
                            {allCategory.map(category => <CategoryButton key={category} categoryName={category} />)}
                        </div>
                    </div> */}
                    {/* <div id="inputFilePost" style={styleInputFilePost}>
                        {
                            <div id="fileShowContainer" style={styleShowFileContainer}>
                                {files?.map((el, index) => {
                                    console.log("🚀 ~ file: CreatepostModal.jsx:167 ~ CreatepostModal ~ files:", files)
                                    return (<FileBox key={el} elFile={el} index={index}></FileBox>)
                                })}
                            </div>
                        }
                        {
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
                                                // alert("have image")
                                                // alert(`files before: ${files}`)
                                                // alert(`precious before: ${previousFile}`)
                                                // console.log("🚀 ~ file: CreatepostModal.jsx:323 ~ previousFile:", previousFile)
                                                // console.log(files)
                                                setFiles([...files, ...Object.values(e.target.files)])
                                                // alert(`files after: ${files}`)
                                                // setPreviousFile(files.length)
                                                // alert(`precious after: ${previousFile}`)
                                                // console.log("🚀 ~ file: CreatepostModal.jsx:328 ~ previousFile:", previousFile)
                                            } else {
                                                // alert("not have")
                                                // alert(`files before: ${files}`)
                                                // alert(`precious before: ${previousFile}`)
                                                // console.log("🚀 ~ file: CreatepostModal.jsx:330 ~ previousFile:", previousFile)
                                                setFiles(Object.values(e.target.files))
                                                // setPreviousFile(files.length)
                                                // alert(`files before: ${files}`)
                                                // alert(`precious after: ${previousFile}`)
                                                // console.log("🚀 ~ file: CreatepostModal.jsx:334 ~ previousFile:", previousFile)
                                            }
                                        }
                                    }
                                    ref={fileEl}
                                />
                            </div>
                        }
                    </div> */}
                    <InputCategoryPost input={input} setInput={setInput}></InputCategoryPost>
                    <InputFilePost input={input} setInput={setInput}></InputFilePost>
                    {/* <input type="file" onChange={(e) => setTest(e.target.files[0])}></input>
                    {test && <img src={URL.createObjectURL(test)}></img>} */}

                    <BoxButton backgroundColor={color.Orange} height={30} fontSize="16" color={color.White}>create post</BoxButton>
                </form>
            </Container >
        </>
    )
}
