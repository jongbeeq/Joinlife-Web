import { useState } from "react";
import { BoxButton } from "../../components/Button";
import Container from "../../components/Container";
import { InputBox } from "../../components/InputBox";
import { useAuth } from "../../hooks/use-auth";
import validateRegister from "./ValidateRegister";
import themeColor from "../../variables/color";
import dataList from "../../variables/dataList";
import StatusLoginModal from "./StatusLoginModal";

export default function CreateAccountForm({ onClick }) {
    const { genderList } = dataList()

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        emailOrMobile: "",
        username: "",
        password: "",
        confirmPassword: "",
    })

    const [isSubmit, setIsSubmit] = useState(false)

    const [error, setError] = useState({})

    const { register, confirmLogin } = useAuth();

    const handleChangeInput = e => {
        setInput(e.target.value ? { ...input, [e.target.name]: e.target.value } : input)
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        const validationError = validateRegister(input);
        if (validationError) {
            return setError(validationError)
        }
        setError({});
        register(input).then(() => {
            setIsSubmit("Sign Up Success")
        })
            .catch(err => {
                setIsSubmit(err.response.data.message)
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
        !isSubmit ? (
            <Container backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={onClick}>
                <form style={styleForm} onSubmit={handleSubmitForm}>
                    <InputBox fontSize={16} placeholder={"Firstname"} width={300} onChange={handleChangeInput} name="firstName" error={error.firstName}></InputBox>
                    <InputBox fontSize={16} placeholder={"LastName"} width={300} onChange={handleChangeInput} name="lastName" error={error.lastName}></InputBox>
                    <InputBox fontSize={16} placeholder={"Email or mobile"} width={610} onChange={handleChangeInput} name="emailOrMobile" error={error.emailOrMobile}></InputBox>
                    <InputBox fontSize={16} placeholder={"Username"} width={610} onChange={handleChangeInput} name="username" error={error.username}></InputBox>
                    <InputBox type="password" fontSize={16} placeholder={"Password"} width={610} onChange={handleChangeInput} name="password" error={error.password}></InputBox>
                    <InputBox type="password" fontSize={16} placeholder={"ConfirmPassword"} width={610} onChange={handleChangeInput} name="confirmPassword" error={error.confirmPassword}></InputBox>
                    <InputBox listArray={genderList} fontSize={16} placeholder={"Gender"} width={300} onChange={handleChangeInput} name="gender" error={error.gender}></InputBox>
                    <InputBox type="date" fontSize={16} placeholder={"Birth Date"} width={300} onChange={handleChangeInput} name="birthDate" error={error.birthDate}></InputBox>
                    <BoxButton fontSize="16" color={"white"} backgroundColor={"black"} height={53.27} >Sign&nbsp;up</BoxButton>
                </form>
            </Container>
        ) : (
            <StatusLoginModal onClick={onClick} confirmLogin={confirmLogin} isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
        )
    )
}
