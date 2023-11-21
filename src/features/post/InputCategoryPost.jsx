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

    // console.log(input)
    const styleInputCategory = {
        width: "40%",
        height: "15%",
        borderRight: `1px solid ${color.SubGray}`,
        borderBottom: `1px solid ${color.SubGray}`,
    }

    const previousCategoryArray = input?.postCategorys?.map(el => {
        const obj = {}
        obj[el.categoryName] = el.categoryName
        return obj
    })

    // console.log("🚀 ~ file: InputCategoryPost.jsx:29 ~ InputCategoryPost ~ previousCategory:", { ...previousCategoryArray })


    const [allCategory, setAllCategory] = useState([])
    const [category, setCategory] = useState("aaaa")
    console.log("🚀 ~ file: InputCategoryPost.jsx:39 ~ InputCategoryPost ~ category:", category)


    useEffect(
        () => {
            axios.get("/category")
                .then(
                    res => {
                        setAllCategory(res.data.category)
                        console.log(allCategory)

                    }
                )
                .catch(
                    err => alert(err.response.data.message)
                )
            setCategory({ ...previousCategoryArray })
            console.log(category)
        }
        , [])

    console.log(category)
    console.log(allCategory)

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
        console.log(category)
        useEffect(() => {
            const findCategory = Object.values(category)
                .find(el => {
                    console.log(el)
                    el === categoryName
                })
            console.log("🚀 ~ file: InputCategoryPost.jsx:75 ~ useEffect ~ findCategory:", findCategory)
            setHaveCat(findCategory)
            console.log(haveCategory)
            console.log(categoryName)
            console.log(category === categoryName)
            console.log(category)
        },
            [category]
        )

        console.log("aft useEffect", categoryName)
        console.log("aft useEffect", category)
        console.log("aft useEffect", category === categoryName)
        console.log("aft useEffect", haveCategory)

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
