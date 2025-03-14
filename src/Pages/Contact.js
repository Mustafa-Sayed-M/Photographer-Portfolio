import React from 'react';
import ContactHeader from '../Components/Headers/ContactHeader/ContactHeader';
import TestimonialsSection from '../Components/Sections/TestimonialsSection/TestimonialsSection';

function Contact() {
    return (
        <div className='contact-page'>
            {/* Header */}
            <ContactHeader />
            {/* Testimonials Section */}
            <TestimonialsSection />
        </div>
    )
}

export default Contact;