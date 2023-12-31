import { useEffect, useState } from "react"
import themeColor from "../../variables/color"
import axios from "../../configs/axios"

export default function InputCategoryPost({ input, setInput }) {
    const color = themeColor()
    const styleCategoryBox = {
        display: "flex",
        width: "100%",
        height: "40%",
        padding: "10px",
        alignItems: "flex-start",
        alignContent: "flex-start",
        gap: "10px 8px",
        flexWrap: "wrap",
        borderRadius: "20px",
        overflow: "auto"
    }

    const styleInputCategory = {
        width: "40%",
        height: "15%",
        borderRight: `1px solid ${color.SubGray}`,
        borderBottom: `1px solid ${color.SubGray}`,
    }

    const [allCategory, setAllCategory] = useState([])
    const [category, setCategory] = useState(0)

    useEffect(
        () => {
            axios.get("/category")
                .then(
                    res => {
                        setAllCategory(res.data.category)
                    }
                )
                .catch(
                    err => alert(err.response.data.message)
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
        } catch (err) {
            alert(err)
        }
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
            width: "50px",
            height: "20px",
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            flexShrink: "0",
            borderRadius: "8px",
            fontSize: "10px",
            color: haveCategory ? color.Orange : color.Gray,
            border: `1px solid ${haveCategory ? color.Orange : color.Gray}`,
        }

        return (
            <>
                <button style={styleCreateButton} value={categoryName} onClick={handleChangeCategory}>{categoryName}</button>
            </>
        )
    }

    useEffect(
        () => {
            setInput({ ...input, category: category })
        }, [category]
    )

    return (
        <div id="inputCategory" style={styleInputCategory}>
            <p>Category</p>
            <div style={styleCategoryBox}>
                {allCategory.map(category => <CategoryButton key={category} categoryName={category} />)}
            </div>
        </div>
    )
}
