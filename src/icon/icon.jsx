import styled from 'styled-components'
import themeColor from '../variables/color'

const color = themeColor()

export function JoinlifeLogo({ fontSize = "57px" }) {

    const Logo = styled.div`
    color: ${color.Orange};
    font-size: ${fontSize};
    font-style: normal;
    font-weight: 400;
    lineeight: normal;
    cursor: pointer;
    `

    return (
        <Logo>JoinLife</Logo>
    )
}

export function HomeIcon() {
    return <i className="fi fi-rr-home"></i>
}

export function SearchIcon() {
    return <i className="fi fi-rr-search"></i>
}

export function TrendIcon() {
    return <i className="fi fi-rr-flame"></i>
}

export function LogoutIcon() {
    return <i className="fi fi-rr-exit"></i>
}

export function SuccessIcon() {
    const styleBackground = {
        color: color.Black,
        paddingTop: "35px",
        display: "flex",
        width: "200px",
        height: "200px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        fontSize: "100px",
        background: color.Orange,
    }

    return (
        <div style={styleBackground}>
            <i className="fi fi-rr-check"></i>
        </div >
    )
}

export function FailIcon() {
    const styleBackground = {
        color: color.Orange,
        // paddingTop: "35px",
        display: "flex",
        width: "200px",
        height: "200px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        fontSize: "100px",
        border: `10px solid ${color.Orange}`
        // background: color.Red,
    }

    return (
        <div style={styleBackground}>
            X
        </div >
    )
}

export function SettingIcon() {
    return (
        <i className="fi fi-rr-settings"></i>
    )
}

export function LocationIcon() {
    return (
        <i className="fi fi-rr-marker"></i>
    )
}

export function CreateIcon() {
    return (
        <i className="fi fi-rr-add"></i>
    )
}

export function ImageIcon() {
    return (
        <i className="fi fi-rr-picture"></i>
    )
}

export function DropdownIcon() {
    return (
        <i className="fi fi-rr-menu-dots"></i>
    )
}

export function CategorynIcon() {
    return (
        <i className="fi fi-rr-layers"></i>
    )
}







