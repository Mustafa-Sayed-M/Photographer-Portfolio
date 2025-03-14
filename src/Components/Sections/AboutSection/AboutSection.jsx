import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import { Link } from 'react-router-dom';
import AboutHero from './Components/AboutHero/AboutHero';
import AboutText from './Components/AboutText/AboutText';

function AboutSection() {
    return (
        <section className='about-section py-10' id='about'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    sectionName={`About`}
                    title={`I am Ba7R`}
                >
                    <Link
                        to={`/about`}
                        className='btn'
                    >
                        <span>Know More</span>
                        <i className='fa-solid fa-arrow-right ms-2'></i>
                    </Link>
                </SectionHeader>
                {/* Content Grid */}
                <div className='content-grid grid lg:grid-cols-2 gap-7 items-start'>
                    {/* About Hero */}
                    <AboutHero />
                    {/* About Text */}
                    <AboutText />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;