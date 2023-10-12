export default function LoginPageStyles() {

    const LoginPage = {
        display: "flex",
        width: "1200px",
        height: "800px",
        padding: "20px 30px",
        flexDirection: "column",
        alignItems: "flex-start",
    }

    const LoginContent = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        paddingTop: "80px",
        flex: "1 0 0",
        alignSelf: "stretch",
    }

    const LoginForm = {
        display: "flex",
        width: "342px",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        paddingBottom: "10px",
    }

    return { LoginPage, LoginContent, LoginForm }
}
