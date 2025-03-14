import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import faqsData from '../../../Data/faqs.json';
import FaqCard from './Components/FaqCard';

function FaqsSection() {
    return (
        <section className='faqs-section py-10' id='faqs'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    sectionName={`FAQ’s`}
                    title={`Frequently Asked Questions`}
                />
                {/* Faqs Cards Grid */}
                <div className='cards-grid grid md:grid-cols-2 items-start gap-3'>
                    {
                        faqsData.map((faq, index) => <FaqCard key={index} faqData={faq} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default FaqsSection;