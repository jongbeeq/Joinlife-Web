import themeColor from '../colors/color';

export default function InputBox({ type, placeholder, value, onChange, fontSize, width, name }) {

    const color = themeColor()

    const isDate = type === "date"

    const style = {
        paddingLeft: "10px",
        display: "flex",
        width: `${width}px`,
        height: `calc(${fontSize}*3.33px)`,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: `calc(${fontSize}*0.67px)`,
        border: `1px solid ${color.Gray}`,
        color: color.Black,
        fontSize: `${fontSize}px`,
    }


    const dateStyle = {
        color: color.Gray
    }

    return (
        isDate ? (
            <div style={style} placeholder={placeholder} value={value} onChange={onChange}>
                <p style={dateStyle}>{placeholder}</p>
                <input type={type} value={value} onChange={onChange} name={name} />
            </div>
        ) :
            (<input style={style} type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />)
    )
}
