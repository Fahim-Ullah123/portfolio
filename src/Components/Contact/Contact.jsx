import { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [result, setResult] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show success message
        setResult("✅ Form submitted successfully!");

        // Clear the form
        e.target.reset();
    };

    return (
        <div className="contact">
            <div className="contact-left">
                <h3>Send us a message</h3>

                <p>
                    Get in touch with us and we'll get back to you as soon as possible so
                    you can ask any questions and receive assistance.
                </p>

                <ul>
                    <li>Email: info@university.edu</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Address: 123 University Avenue, City, State, ZIP</li>
                </ul>
            </div>

            <div className="contact-right">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                     <input
                        type="text"
                        name="fatherName"
                        placeholder="your Father Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <button type="submit" className="btn dark-btn">
                        Submit Now
                    </button>

                    <p className="result">{result}</p>
                </form>
            </div>
        </div>
    );
}