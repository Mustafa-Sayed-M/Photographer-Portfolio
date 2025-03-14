import React from 'react';

function StoryCard({ storyData }) {

    const { year, description } = storyData;

    return (
        <div
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/testimonial-card-bg.png)`
            }}
            className='stor-card p-5 bg-dark-color-6 rounded-md border border-dark-color-12'
        >
            {/* Year */}
            <h3 className='text-grey-color-50 font-semibold mb-2 text-xl lg:text-3xl uppercase'>Year - {year}</h3>
            {/* Description */}
            <p className='text-grey-color-70'>{description}</p>
        </div>
    )
}

export default StoryCard;