import { useState } from "react";
import { TextButton } from "../../components/Button";
import Container from "../../components/Container";
import { useAuth } from "../../hooks/use-auth";
import { FailIcon, SuccessIcon } from "../../icon/icon";
import themeColor from "../../variables/color";
import SetProfile from "../user/SetProfile";


export default function StatusLoginModal({ onClick, confirmLogin, isSubmit, setIsSubmit }) {
    const { toHomePage } = useAuth()

    const handleClickLogin = () => {
        toHomePage(confirmLogin)
    }

    const handleBacktoCreate = () => {
        setIsSubmit(false)
    }

    const [toSetProfile, goToSetProfile] = useState(false)

    const handleClickSetProfile = () => {
        goToSetProfile(true)
    }

    const color = themeColor()

    const styleStatusSignup = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "35px",
        position: "absolute"
    }

    const styleStatusText = {
        color: color.Black,
        fontSize: "30px",
        fontHeight: "400",
    }

    const styleDivButton = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    }

    return (
        (isSubmit === "Sign Up Success") ?
            (
                !toSetProfile ? (
                    <Container backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={onClick}>
                        <div style={styleStatusSignup} >
                            <p style={styleStatusText}>{isSubmit}</p>
                            <SuccessIcon />
                            <div style={styleDivButton}>
                                <TextButton color={color.Orange} hoverColor={color.Gray} onClick={handleClickSetProfile}>Set Your Profile</TextButton>
                                <p>or</p>
                                <TextButton color={color.Gray} hoverColor={color.Orange} onClick={handleClickLogin}>Login</TextButton>
                            </div>
                        </ div>
                    </Container>
                ) : (
                    <SetProfile onClick={handleClickLogin} skip={true} />
                )
            ) : (
                <Container backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={handleBacktoCreate}>
                    <div style={styleStatusSignup} >
                        <p style={styleStatusText}>{isSubmit}</p>
                        <FailIcon />
                        <TextButton color={color.Gray} hoverColor={color.Orange} onClick={handleBacktoCreate}>Back to Create Account</TextButton>
                    </ div>
                </Container>
            )

    )
}
