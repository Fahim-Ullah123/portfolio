import "./About.css"
import femoh from "../../assets/femoh.jpeg"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={femoh} alt="Femoh" className="femoh-img" />
              <i class="fa-solid fa-square-caret-right image-icon"></i>
            </div>

            <div className="about-right">
                <h3>About University</h3>
                < h2>We are the best University in the world</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt excepturi nulla, suscipit cupiditate iste nisi impedit illum beatae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt excepturi nulla, suscipit cupiditate iste nisi impedit illum beatae .</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt excepturi nulla, suscipit cupiditate iste nisi impedit illum beatae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt excepturi nulla, suscipit cupiditate iste nisi impedit illum beatae .</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt excepturi nulla, suscipit cupiditate iste nisi impedit illum beatae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt excepturi nulla, suscipit cupiditate iste nisi impedit illum beatae .</p>
            </div>

        </div>
    )
}
export default About