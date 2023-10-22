import { useEffect, useState } from "react";
import { TextButton } from "../../components/Button";
import Container from "../../components/Container";
import { InputBox, InputFile } from "../../components/InputBox";
import themeColor from "../../variables/color";
import axios from "../../configs/axios";
import Loading from "../../components/Loading";
import { useAuth } from "../../hooks/use-auth";

export default function SetProfile({ onClick, onSuccess }) {
    const color = themeColor()

    const styleSetProfile = {
        display: "flex",
        width: "80%",
        height: "80%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    const styleRow = {
        display: "flex",
        width: "100%",
        height: "50%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
    const styleInput = {
        display: "flex",
        width: "50%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "baseline",
        alignItems: "center",
        gap: "10px",
        flexShrink: "0",
        fontSize: "16px",
    }
    const styleCategoryBox = {
        display: "flex",
        width: "95%",
        height: "50%",
        padding: "10px",
        alignItems: "flex-start",
        alignContent: "flex-start",
        gap: "39px 8px",
        flexWrap: "wrap",
        borderRadius: "20px",
        border: `1px solid ${color.Gray}`,
        overflow: "auto"
    }

    const { setAuthUser } = useAuth()

    const [allCategory, setAllCategory] = useState([])
    const [description, setDescription] = useState(null)
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState({})
    const [interest, setInterest] = useState({})
    const [isLoading, setLoading] = useState(false)

    useEffect(
        () => {
            axios.get("/category")
                .then(
                    res => {
                        console.log(res.data.category)
                        setAllCategory(res.data.category)
                    }
                )
                .catch(
                    console.log
                )
        }
        , [])

    const handleChangeCategory = async (e) => {
        try {
            setCategory(
                category[e.target.value]
                    ?
                    { ...category, [e.target.value]: null }
                    :
                    { ...category, [e.target.value]: e.target.value })

            console.log("🚀 ~ file: SetProfile.jsx:50 ~ handleChangeCategory ~ category:", category)
        } catch (err) {
            console.log(err)
        }
    }
    const handleChangeInterest = async (e) => {
        try {
            setInterest(
                interest[e.target.value]
                    ?
                    { ...interest, [e.target.value]: null }
                    :
                    { ...interest, [e.target.value]: e.target.value })

            console.log("🚀 ~ file: SetProfile.jsx:50 ~ handleChangeCategory ~ category:", interest)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
        console.log(description)
    }

    function CategoryButton({ categoryName }) {
        const [haveCategory, setHaveCat] = useState(false)
        useEffect(() => {
            const findCategory = Object.values(category)
                .find(el => el === categoryName)
            setHaveCat(findCategory)
        },
            [category]
        )

        const styleCreateButton = {
            display: "flex",
            width: "60px",
            height: "30px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: "0",
            borderRadius: "8px",
            fontSize: "14px",
            color: haveCategory ? color.Orange : color.Gray,
            border: `1px solid ${haveCategory ? color.Orange : color.Gray}`,
        }

        return (
            <>
                <button style={styleCreateButton} value={categoryName} onClick={handleChangeCategory}>{categoryName}</button>
            </>
        )
    }

    function InterestButton({ categoryName }) {
        const [haveInterest, setHaveInterest] = useState(false)
        useEffect(() => {
            const findInterest = Object.values(interest)
                .find(el => el === categoryName)
            setHaveInterest(findInterest)
        },
            [interest]
        )

        const styleCreateButton = {
            display: "flex",
            width: "60px",
            height: "30px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: "0",
            borderRadius: "8px",
            fontSize: "14px",
            color: haveInterest ? color.Orange : color.Gray,
            border: `1px solid ${haveInterest ? color.Orange : color.Gray}`,
        }

        return (
            <>
                <button style={styleCreateButton} value={categoryName} onClick={handleChangeInterest}>{categoryName}</button>
            </>
        )
    }

    const handleSubmitForm = async e => {
        try {
            e.preventDefault()

            const formData = new FormData()
            if (file) {
                formData.append('image', file)
            }
            if (description) {
                formData.append('description', description)
            }
            if (category) {
                const categoryArray = Object.values(category).filter(el => el !== null)
                formData.append('category', null)
                categoryArray.map(el => formData.append('category', el))
            }
            if (interest) {
                const interestArray = Object.values(interest).filter(el => el !== null)
                interestArray.map(el => formData.append('interest', el))
            }
            setLoading(true)
            const res = await axios.patch('/user', formData)
            const newProfile = res.data
            setAuthUser(res.data)
            console.log(newProfile)
            onSuccess(false)
        } catch (err) {
            alert(err)
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const styleButtonZone = {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "5%"
    }


    return (
        <>
            {isLoading && <Loading />}
            <Container backgroundColor={color.White} width="800" height="675" popUp={true} clickClose={onClick}>
                <form style={styleSetProfile} onSubmit={handleSubmitForm}>
                    <div style={styleRow}>
                        <div style={styleInput}>
                            <p>Image Profile</p>
                            <InputFile fontSize="50" width="150" circle={true} file={file} setFile={setFile} />
                        </div>
                        <div style={styleInput}>
                            <p>Description Profile</p>
                            <InputBox type="textarea" fontSize="16" width="300" name="description" placeholder="about you" onChange={handleChangeDescription} />
                        </div>
                    </div>
                    <div style={styleRow}>
                        <div style={styleInput}>
                            <p>Category Profile</p>
                            <div style={styleCategoryBox}>
                                {allCategory.map(category => <CategoryButton key={category} categoryName={category} />)}
                            </div>
                        </div>
                        <div style={styleInput}>
                            <p>Interest</p>
                            <div style={styleCategoryBox}>
                                {allCategory.map(category => <InterestButton key={category} categoryName={category} />)}
                            </div>
                        </div>
                    </div>
                    <div id="buttonZone" style={styleButtonZone}>
                        <TextButton color={color.Orange}>Set Profile</TextButton>
                        <TextButton color={color.Gray} onClick={(e) => { e.preventDefault; onSuccess() }}>Skip and Login</TextButton>
                    </div>
                </form>
            </Container >
        </>
    )
}