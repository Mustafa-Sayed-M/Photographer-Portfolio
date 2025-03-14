import React from 'react';
import ContactInformation from './Components/ContactInformation';
import Introduction from './Components/Introduction';

function AboutText() {
    return (
        <div className='about-text border border-dark-color-12 rounded-md'>
            {/* Introduction */}
            <Introduction />
            {/* Contact Information */}
            <ContactInformation />
        </div>
    )
}

export default AboutText;