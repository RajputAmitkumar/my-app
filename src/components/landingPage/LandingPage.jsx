import { Link } from "react-router-dom"
import landingImage from "../../images/nature3.jpeg"
import './landingPage.css'
const Landing = () => {
    return <>
        <div className="landing-page-cont">
            <div >
                <img className="landing-image" src={landingImage} alt="image" />
            </div>
            
            <div className="landing-section">
                <div className="landing-title">INSTACLONE</div>
                <Link to= "/postview">
                    <div className="landing-btn">

                <button>Enter</button>
                    </div>
                </Link>

            </div>

        </div>
    </>
}
export default Landing;