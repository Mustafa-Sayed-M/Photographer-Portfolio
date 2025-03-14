import React from 'react';
import AboutHeader from '../Components/Headers/AboutHeader/AboutHeader';
import StorySection from '../Components/Sections/StorySection/StorySection';
import TestimonialsSection from '../Components/Sections/TestimonialsSection/TestimonialsSection';

function About() {
    return (
        <div className='about-page'>
            {/* Header */}
            <AboutHeader />
            {/* Story Section */}
            <StorySection />
            {/* Testimonials Section */}
            <TestimonialsSection />
        </div>
    )
}

export default About;