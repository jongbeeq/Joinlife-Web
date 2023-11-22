import themeColor from "../../variables/color"

export default function PostContent({ postObj }) {
    // // console.log(postObj.postFiles)
    // const color = themeColor()

    // const stylePostContent = {
    //     width: "100%",
    //     // height: "60%",
    //     // background: "blue",
    // }

    // const styleShowFileContainer = {
    //     display: "grid",
    //     width: "100%",
    //     height: "100%",
    //     gridTemplateColumns: "auto auto",
    //     gridTemplateRows: "auto auto",
    //     objectFit: "contain",
    //     overflow: "hidden",
    // }

    // const styleImagePost = {
    //     maxWidth: "100%",
    //     height: "auto",
    //     objectFit: "cover"
    // }

    // const styleFileBox = {
    //     border: `0.5px solid ${color.White}`,
    //     position: "relative",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItem: "center",
    //     overFlow: "hidden",
    //     objectFit: "contain",
    // }



    // function FileBox({ filePost, index }) {

    //     let fileContent

    //     const typeFile = filePost?.split("https://")[1].split("/")[2]

    //     if (typeFile === "image") {
    //         fileContent = <img id="imagePost" style={styleImagePost} key={index} src={filePost}></img>
    //     }

    //     if (typeFile === "video") {
    //         fileContent = <video id="imagePost" key={index} src={filePost} controls autoPlay muted></video>
    //     }

    //     return (
    //         (
    //             <div key={index} id="fileBox" style={styleFileBox}>
    //                 {fileContent}
    //             </div>
    //         )
    //     )
    // }

    return (
        <div id="postContent" className="flex w-full h-[66%] bg-white relative overflow-hidden">
            <img className="object-cover w-full" src='https://res.cloudinary.com/dsldd3uhx/image/upload/v1698371154/qutjpavsgiurvfvhf3rs.jpg'></img>
        </div>
        // <div id="postContent" style={stylePostContent}>
        //     <div id="fileShowContainer" style={styleShowFileContainer}>
        //         {postObj.postFiles.map((el, index) => <FileBox key={index} filePost={el.file}></FileBox>)}
        //     </div>
        // </div>
    )
}
