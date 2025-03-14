import React from 'react';
import HomeHeader from '../Components/Headers/HomeHeader/HomeHeader';
import AboutSection from '../Components/Sections/AboutSection/AboutSection';
import ServicesSection from '../Components/Sections/ServicesSection/ServicesSection';
import PortfolioSection from '../Components/Sections/PortfolioSection/PortfolioSection';
import FaqsSection from '../Components/Sections/FaqsSection/FaqsSection';
import TestimonialsSection from '../Components/Sections/TestimonialsSection/TestimonialsSection';

function Home() {
  return (
    <div className='home-page'>
      {/* Header */}
      <HomeHeader />
      {/* About Section */}
      <AboutSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Portfolio Section */}
      <PortfolioSection />
      {/* Faqs Section */}
      <FaqsSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  )
}

export default Home;