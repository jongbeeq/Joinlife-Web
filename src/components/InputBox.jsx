import { useRef } from 'react';
import { ImageIcon } from '../icon/icon';
import themeColor from '../variables/color';
import { TextButton } from './Button';

const color = themeColor()

export function InputBox({ type, placeholder, value, onChange, fontSize, circle, width, height, name, error, listArray, ref }) {

    const isDate = type === "date"
    const isList = listArray
    const isTextArea = type === "textarea"

    const styleText = {
        paddingLeft: "10px",
        display: "flex",
        width: `${width}px`,
        height: circle ? `${width}px` : `calc(${fontSize}*3.33px)`,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: circle ? `100%` : `calc(${fontSize}*0.67px)`,
        border: `1px solid ${error ? color.Red : color.Gray}`,
        color: color.Black,
        fontSize: `${fontSize}px`,
        cursor: "pointer",
        overflow: "hidden",
    }

    const styleTextArea = {
        paddingLeft: "10px",
        width: `${width}px`,
        height: circle ? `${width}px` : `${height}px)`,
        borderRadius: circle ? `100%` : `calc(${fontSize}*0.67px)`,
        border: `1px solid ${error ? color.Red : color.Gray}`,
        color: color.Black,
        fontSize: `${fontSize}px`,
        cursor: "pointer",
    }

    const styleData = {
        color: color.Gray
    }

    const styleError = {
        color: color.Red,
        fontSize: `${fontSize * 0.8}px`
    }

    if (isList) {
        return (
            <div className='flex flex-col'>
                <div style={styleText} placeholder={placeholder} value={value} onChange={onChange}>
                    <div className='w-full flex flex-row gap-5 justify-center items-center'>
                        <p style={styleData}>{placeholder}</p>
                        <select className='cursor-pointer' onChange={onChange} name={name}>
                            <option value={""}></option>
                            {listArray.map(listData => (<option key="" value={listData}>{listData}</option>))}
                        </select>
                    </div>
                </div>
                {error && (<p style={styleError}>{error}</p>)}
            </div>
        )
    }

    if (isDate) {
        return (
            <div className='flex flex-col'>
                <div style={styleText} placeholder={placeholder} value={value} onChange={onChange}>
                    <div className='w-full flex flex-row gap-5 justify-center items-center'>
                        <p style={styleData}>{placeholder}</p>
                        <input className='cursor-pointer' type={type} value={value} onChange={onChange} name={name} />
                    </div>
                </div>
                {error && (<p style={styleError}>{error}</p>)}
            </div>
        )
    }

    if (isTextArea) {
        return (
            <textarea style={styleTextArea} ref={ref} placeholder={placeholder} value={value} onChange={onChange} name={name} rows="4" cols="25" ></textarea>
        )
    }

    return (
        <div className='flex flex-col' >
            <input style={styleText} type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
            {error && (<p style={styleError}>{error}</p>)}
        </div >
    )
}

export function InputFile({ width, height, circle, fontSize, multiFile, file, setFile }) {
    const fileEl = useRef(null)
    const style = {
        display: "flex",
        width: `${width}px`,
        height: circle ? `${width}px` : `${height}px)`,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: circle ? `100%` : `${height}px)`,
        border: `1px solid `,
        color: color.Gray,
        fontSize: `${fontSize}px`,
        cursor: "pointer",
        overflow: "hidden",
        // backgroundColor: "red"
    }

    const styleImageButton = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "100px",
        cursor: "pointer",
        width: "100%",
        height: "100%",
        // backgroundColor: "blue"  
    }
    const styleShowImage = {
        width: "100%",
        height: "100%",
        justifyContent: "center"
    }

    const styleImage = {
        objectFit: "cover",
        height: "100%",
        width: "100%"
    }

    const styleCancelImage = {
        position: "absolute",
        right: "58%"
    }

    return (
        <div style={style}>
            {file ? (
                <div style={styleShowImage}>
                    <p style={styleCancelImage} className='absolute text-xl right-' onClick={() => setFile(null)}>X</p>
                    <img src={URL.createObjectURL(file)} style={styleImage} onClick={() => fileEl.current.click()} />
                </div>
            ) : (
                <div style={styleImageButton} onClick={() => fileEl.current.click()}>
                    <TextButton color={color.Gray} onClick={e => e.preventDefault()}>
                        <ImageIcon />
                        Upload Image
                    </TextButton>
                </div>
            )}
            <input
                type="file"
                className="hidden"
                multiple={multiFile && "multiple"}
                onChange={e => {
                    if (e.target.files[0]) {
                        console.log(e.target.files)
                        setFile(e.target.files[0]);
                    }
                }}
                ref={fileEl} />
        </div>
    )
}


