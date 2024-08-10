import React from "react";
import About from "./Components/About";
import Benifits from "./Components/Benifits";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Payplan from "./Components/Payplan";
import Staticstics from "./Components/Staticstics";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="main flex justify-center items-center">
      <div className=" overflow-hidden bg-[#fafafa] xl:max-w-[1700px] w-full ">
        <Navbar />
        <Hero />
        <Staticstics />
        <Payplan />
        <About />
        <Benifits />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
