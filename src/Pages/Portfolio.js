import React from 'react';
import PortfolioHeader from '../Components/Headers/PortfolioHeader/PortfolioHeader';
import FaqsSection from '../Components/Sections/FaqsSection/FaqsSection';
import TestimonialsSection from '../Components/Sections/TestimonialsSection/TestimonialsSection';

function Portfolio() {
    return (
        <div className='portfolio-page'>
            {/* Header */}
            <PortfolioHeader />
            {/* Faqs Section */}
            <FaqsSection />
            {/* Testimonials Section */}
            <TestimonialsSection />
        </div>
    )
}

export default Portfolio;