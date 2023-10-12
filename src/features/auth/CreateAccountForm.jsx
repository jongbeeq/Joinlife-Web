import { useState } from "react";
import themeColor from "../../colors/color";
import { BoxButton } from "../../components/Button";
import Container from "../../components/Container";
import InputBox from "../../components/InputBox";
import { useAuth } from "../../hooks/use-auth";
import validateRegister from "./ValidateRegister";
import { toast } from "react-toastify";

export default function CreateAccountForm({ onClick }) {
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        emailOrMobile: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
        birthDate: ""
    })

    const [error, setError] = useState({})

    const { register } = useAuth();

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        console.log(input)
        const validationError = validateRegister(input);
        if (validationError) {
            return setError(validationError)
        }
        setError({});
        console.log(error)
        register(input)
            .catch(err => {
                console.log(err.message)
                toast(err.response?.data.message)
            })
    }


    const color = themeColor()

    const styleForm = {
        width: "610px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
    }

    return (
        <Container backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={onClick}>
            <form style={styleForm} onSubmit={handleSubmitForm}>
                <InputBox fontSize={16} placeholder={"Firstname"} width={300} onChange={handleChangeInput} name="firstName"></InputBox>
                <InputBox fontSize={16} placeholder={"LastName"} width={300} onChange={handleChangeInput} name="lastName"></InputBox>
                <InputBox fontSize={16} placeholder={"Email or mobile"} width={610} onChange={handleChangeInput} name="emailOrMobile"></InputBox>
                <InputBox fontSize={16} placeholder={"Username"} width={610} onChange={handleChangeInput} name="username"></InputBox>
                <InputBox type="password" fontSize={16} placeholder={"Password"} width={610} onChange={handleChangeInput} name="password"></InputBox>
                <InputBox type="password" fontSize={16} placeholder={"ConfirmPassword"} width={610} onChange={handleChangeInput} name="confirmPassword"></InputBox>
                <InputBox fontSize={16} placeholder={"Gender"} width={300} onChange={handleChangeInput} name="gender"></InputBox>
                <InputBox type="date" fontSize={16} placeholder={"Birth Date"} width={300} onChange={handleChangeInput} name="birthDate"></InputBox>
                <BoxButton fontSize="16" color={"white"} backgroundColor={"black"} height={53.27} >Sign&nbsp;up</BoxButton>
            </form>
        </Container>
    )
}
