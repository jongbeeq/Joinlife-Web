import { useState } from "react";
import themeColor from "../../colors/color"
import { BoxButton } from "../../components/Button"
import InputBox from "../../components/InputBox"
import LoginPageStyles from "../../styles/LoginPageStyles"
import { useAuth } from "../../hooks/use-auth";
import { toast } from 'react-toastify';

export default function LoginForm() {
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const { login } = useAuth();

    const handleSubmitForm = e => {
        e.preventDefault();
        console.log(input)
        login(input).catch(err => {
            toast.error(err.response.data.message)
        });
    };

    const color = themeColor()
    const style = LoginPageStyles()

    return (
        <form style={style.LoginForm} onSubmit={handleSubmitForm}>
            <InputBox fontSize="15" width="345" type="text" placeholder="Username" value={input.username} onChange={e => setInput({ ...input, username: e.target.value })} />
            <InputBox fontSize="15" width="345" type="password" placeholder="Password" value={input.password} onChange={e => setInput({ ...input, password: e.target.value })} />
            <BoxButton fontSize="30" height="50" backgroundColor={color.Orange} color={color.White} fullWidth={true}>Log&nbsp;in</BoxButton>
        </form>
    )
}

