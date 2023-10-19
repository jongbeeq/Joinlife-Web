import { useState } from "react";
import themeColor from "../../variables/color"
import { BoxButton } from "../../components/Button"
import { InputBox } from "../../components/InputBox"
import LoginPageStyles from "../../styles/LoginPageStyles"
import { useAuth } from "../../hooks/use-auth";

export default function LoginForm() {
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState(null)

    const { login } = useAuth();

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        console.log(input)
        login(input).catch(err => {
            setError(err.response.data.message)
        });
    };

    const color = themeColor()
    const style = LoginPageStyles()

    return (
        <form style={style.LoginForm} onSubmit={handleSubmitForm}>
            <InputBox fontSize="15" width="345" type="text" placeholder="Username" onChange={handleChangeInput} name="username" error={error?.username} />
            <InputBox fontSize="15" width="345" type="password" placeholder="Password" onChange={handleChangeInput} name="password" error={error?.password} />
            <BoxButton fontSize="30" height="50" backgroundColor={color.Orange} color={color.White} fullWidth={true}>Log&nbsp;in</BoxButton>
        </form>
    )
}

