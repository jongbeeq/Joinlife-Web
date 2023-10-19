export default function Loading() {
    const styleLoading = {
        position: "absolute",
        zIndex: "1000",
        width: "100vw",
        height: "100vh",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "41%"
    }

    return (
        <>
            <div style={styleLoading} className="absolute inset-0 bg-black opacity-30 z-150"></div>
            <div className="inset-0 z-200">
                <div className="flex items-center justify-center min-h-full">
                    <p className="fill-blue-600 animate-spin">Loading</p>
                </div>
            </div>
        </>
    )
}
