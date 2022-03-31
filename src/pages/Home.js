import React, { useState, useEffect } from "react";
import Comment from "../components/Comment";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderBottom from "../components/HeaderBottom";
import Nav from "../components/Nav";
import Partner from "../components/Partner";
import Aos from "aos";
import Sliders from "../components/Slider/Slider";
import Welcome from "../components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interers from "../components/Interers";
import IntererItem from "../components/IntererItem";
import Finishings from "../components/Finishings";
import About from "../components/About";
import Servis from "../components/Servis";
import ServiceItem from "../components/ServiceItem";

function Home() {
  const [welcome, setWelcome] = useState(true);
  React.useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  function Body() {
    return (
      <>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Sliders />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Partner />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Comment />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Contact />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Footer />
        </div>
      </>
    );
  }
  function Interer() {
    return <Interers />;
  }
  function Finishing() {
    return <Finishings />;
  }
  function Parts() {
    return (
      <>
        <div style={{ marginTop: "5vw" }}></div>
        <Partner />
        <Contact />
        <Footer />
      </>
    );
  }

  return (
    <div>
      {welcome ? (
        <Welcome setWelcome={setWelcome} />
      ) : (
        <div className="container">
          <BrowserRouter>
            <Nav />
            <Header />
            <HeaderBottom />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/interer" element={<Interer />} />
              <Route path="/finishing" element={<Finishing />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Servis />} />
              <Route path="/partners" element={<Parts />} />
              <Route path="/interer/:id" element={<IntererItem />} />
              <Route path="/finishing/:id" element={<IntererItem />} />
              <Route path="/service/:id" element={<ServiceItem />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default Home;
