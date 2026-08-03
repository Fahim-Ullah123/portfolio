import { useEffect, useState } from "react";
import femo from "../../assets/femo.jpeg";
import "./Navbar.css";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={femo} alt="Logo" className="logo" />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li>Program</li>
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
}