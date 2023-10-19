export default function message() {
    return {
        passwordPattenCondition: (inputPassword) => `"password" with value "${inputPassword}" fails to match the required pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[a-zA-Z0-9#?!@$%^&*-]{6,}$/`,
        passwordPattenMessage: "password must have uppercase text , lowercase text , number and special character at least one of each"
    }
}
