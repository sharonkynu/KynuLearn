import React from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Categories/>
      <AboutUs/>
      <Courses/>
      <WhyChooseUs/>
      <Testimonial/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
