import "./Campus.css"
import gallery_1 from "../../assets/gallery_1.jpeg"
import gallery_2 from "../../assets/gallery_2.jpeg"
import gallery_3 from "../../assets/gallery_3.jpeg"
import gallery_4 from "../../assets/gallery_4.avif"
import arrow from "../../assets/arrow.jpeg"

export default function Campus() {
    return (
        <div className="campus">
            <div className="gallery">
                <img src={gallery_1} alt="gallery_1" />
                <img src={gallery_2} alt="gallery_2" />
                <img src={gallery_3} alt="gallery_3" />
                <img src={gallery_4} alt="gallery_4" />
            </div>
        <button className="btn dark-btn">See more here <img src={arrow} alt="" /></button>
        </div>
    )
}

    
