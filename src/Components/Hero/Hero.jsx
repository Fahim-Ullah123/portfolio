import "./Hero.css"
import arrow from "../../assets/arrow.jpeg"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text container">
                <div>
                    <h1>this is me fahim Ullah</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt excepturi nulla, suscipit cupiditate iste nisi impedit illum beatae .</p>
                    <button className="btn">Explore more <img src={arrow} alt="" /></button>
                </div>
            </div>

        </div>
    )
}
