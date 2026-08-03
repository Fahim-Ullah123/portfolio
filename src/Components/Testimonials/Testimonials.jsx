import { useState } from "react";
import "./Testimonials.css"
import testi_1 from "../../assets/testi_1.jpeg"
import testi_2 from "../../assets/testi_2.jpeg"
import testi_3 from "../../assets/testi_3.jpeg"
import testi_4 from "../../assets/testi_4.jpeg"

export default function Testimonials() {

    const [tx, setTx] = useState(0);

    const nextSlide = () => {
        if (tx > -50) {
            setTx(tx - 25);
        }
    };

    const prevSlide = () => {
        if (tx < 0) {
            setTx(tx + 25);
        }
    };
    return (
        <div className="testimonials">
            <i class="fa-solid fa-arrow-left prev-arrow" onClick={prevSlide}></i>
            <i class="fa-solid fa-arrow-right next-arrow" onClick={nextSlide}></i>

            <div className="slider">
                <ul style={{ transform: `translateX(${tx}%)` }}>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={testi_1} alt="Testimonial 1" />
                                <div>
                                    <h3>Fahim Ullah</h3>
                                    <span>Student</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={testi_2} alt="Testimonial 1" />
                                <div>
                                    <h3>Sikandar the great</h3>
                                    <span>Student</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={testi_3} alt="Testimonial 1" />
                                <div>
                                    <h3>Mansoor Akhtar</h3>
                                    <span>Student</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={testi_4} alt="Testimonial 1" />
                                <div>
                                    <h3>Javid Iqbal</h3>
                                    <span>Student</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
