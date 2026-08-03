import { useEffect, useState } from "react";
import femo from "../../assets/femo.jpeg";
import "./Navbar.css";
import { Link } from "react-scroll";



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
        <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="campus" smooth={true} duration={500}>Campus</Link></li>
        <li>
          <Link to="Testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li><Link to="program" smooth={true} duration={500}>Program</Link></li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}