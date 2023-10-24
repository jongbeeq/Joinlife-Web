import themeColor from "../variables/color"
import { TextButton } from "../components/Button"
import LoginForm from "../features/auth/LoginForm"
import { JoinlifeLogo } from "../icon/icon"
import LoginPageStyles from "../styles/LoginPageStyles"
import CreateAccountContainer from "../features/auth/CreateAccountContainer"
import Container from "../components/Container"


export default function LoginPage() {
    const color = themeColor()
    const style = LoginPageStyles()

    return (
        <div style={style.LoginPage}>
            <div className="w-full pl-14">
                <JoinlifeLogo />
            </div>
            <div style={style.LoginContent}>
                {/* <Container width="395" height="395" hasBorder={true} hasShadow={false} >Content</Container> */}
                <Container width="395" height="395" backgroundColor={color.White}>
                    <div className="flex flex-col items-center">
                        <LoginForm />
                        <TextButton fontSize="15" color={color.Orange}>Forget&nbsp;Password?</TextButton>
                    </div>
                    <CreateAccountContainer />
                </Container>
            </div>
        </div>
    )
}
