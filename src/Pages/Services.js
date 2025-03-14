import React from 'react';
import ServicesHeader from '../Components/Headers/ServicesHeader/ServicesHeader';
import ExploreOurServices from '../Components/Sections/ExploreOurServices/ExploreOurServices';
import FaqsSection from '../Components/Sections/FaqsSection/FaqsSection';

function Services() {
    return (
        <div className='services-page'>
            {/* Header */}
            <ServicesHeader />
            {/* Explore Our Services */}
            <ExploreOurServices />
            {/* Faqs Section */}
            <FaqsSection />
        </div>
    )
}

export default Services;