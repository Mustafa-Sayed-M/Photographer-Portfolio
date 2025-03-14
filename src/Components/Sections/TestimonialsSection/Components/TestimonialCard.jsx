import React from 'react';
import SocialProfiles from '../../../Atoms/SocialProfiles';

function TestimonialCard({ testimonialData }) {

    const {
        name,
        location,
        rating,
        review
    } = testimonialData;

    return (
        <div
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/testimonial-card-bg.png)`
            }}
            className='testimonial-card bg-dark-color-6 border border-dark-color-12 rounded-md p-5'
        >
            {/* Header */}
            <div className='header flex items-center justify-between mb-4'>
                {/* Text */}
                <div className='text'>
                    {/* Name */}
                    <h3 className='font-medium mb-1'>{name}</h3>
                    {/* Location */}
                    <p className='text-grey-color-70'>{location}</p>
                </div>
                {/* Social Profiles */}
                <SocialProfiles />
            </div>
            {/* Rating */}
            <ul className='flex items-center gap-2 mb-4'>
                {
                    Array.from({ length: rating }).map((_, index) => <li key={index} className='text-star-color'>
                        <i className='fa-solid fa-star'></i>
                    </li>)
                }
            </ul>
            {/* Review */}
            <p className='line-clamp-3'>{review}</p>
        </div>
    )
}

export default TestimonialCard;