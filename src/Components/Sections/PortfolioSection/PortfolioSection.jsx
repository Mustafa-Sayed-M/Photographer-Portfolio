import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import { Link } from 'react-router-dom';

function PortfolioSection() {
    return (
        <section className='portfolio-section' id='portfolio'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    sectionName={`Portfolio`}
                    title={`Explore My photography work.`}
                >
                    <Link
                        to={`/portfolio`}
                        className='btn'
                    >
                        <span>View All Works</span>
                        <i className='fa-solid fa-arrow-right ms-2'></i>
                    </Link>
                </SectionHeader>
            </div>
        </section>
    )
}

export default PortfolioSection;