import React from 'react';

function AboutHero() {
    return (
        <div className='about-hero'>
            <picture>
                <img src={`${process.env.PUBLIC_URL}/assets/images/about-hero.webp`} alt='...' width={500} height={500} className='w-full h-auto' />
            </picture>
        </div>
    )
}

export default AboutHero;