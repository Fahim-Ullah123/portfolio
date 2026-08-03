import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Programs' title='What We Offer' />
        <Programs />
        <About />
         <Title subtitle='Gallery' title='Campus Photos' />
         <Campus />
         <Title subtitle='Testimonials' title='What Our Students Say' />
         <Testimonials />
         <Title subtitle='Contact' title='Stay In Touch' />
         <Contact/>
      </div>

    </>
  )
}
