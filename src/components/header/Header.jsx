import "./header.css"

const Header = () => {
    return <>
        <nav className="header">
            <div className="logo">
                <img src={require("../../images/10xlogo.png")} alt="10xlogo" />
            </div>
            <div className="camera-icon">
                <img src={require("../../images/cameraIcon.png")} alt="cameraIcon" />
            </div>
        </nav>
    </>
}

export default Header;