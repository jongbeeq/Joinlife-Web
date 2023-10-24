import { useEffect, useRef, useState } from "react"
import { BoxButton } from "../../components/Button"
import { ImageIcon } from "../../icon/icon"
import themeColor from "../../variables/color"

export default function InputFilePost({ input, setInput }) {

    const color = themeColor()

    const [files, setFiles] = useState([])
    const fileEl = useRef(null)

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
    }

    const styleShowFileContainer = {
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "auto auto",
        gridTemplateRows: "auto auto",
        objectFit: "contain",
        overflow: "auto",
    }

    const styleImagePost = {
        width: "max-content",
        maxWidth: "100%",
        height: "auto",
        objectFit: "cover"
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

    const styleInputButton = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        bottom: "0%",
        zIndex: "150"
    }

    const styleRemoveFileButton = {
        position: "absolute",
        cursor: "pointer",
        top: "3%",
        right: "5%",
        zIndex: "100"
    }


    function FileBox({ elFile, index }) {
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

    const [previousFile, setPreviousFile] = useState(0)

    useEffect(
        () => {
            // alert("useEffect Active")
            setPreviousFile(files.length)
        }
        , [files]
    )

    useEffect(
        () => {
            setInput({ ...input, files: files })
        }, [files]
    )

    return (
        <div id="inputFilePost" style={styleInputFilePost}>
            {
                <div id="fileShowContainer" style={styleShowFileContainer}>
                    {files?.map((el, index) => {
                        return (<FileBox key={index} elFile={el} index={index}></FileBox>)
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
                                    setFiles([...files, ...Object.values(e.target.files)])
                                } else {
                                    setFiles(Object.values(e.target.files))
                                }
                            }
                        }
                        ref={fileEl}
                    />
                </div>
            }
        </div>
    )
}
