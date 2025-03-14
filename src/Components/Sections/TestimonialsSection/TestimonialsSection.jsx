import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from '../Components/SectionHeader';
import testimonialData from '../../../Data/testimonials.json';
import TestimonialCard from './Components/TestimonialCard';
import 'swiper/css';

function TestimonialsSection() {
    return (
        <section className='testimonials-section py-10' id='testimonials'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    sectionName={`Testimonials`}
                    title={`What My Clients Say`}
                >
                    <Link
                        to={``}
                        className='btn'
                    >
                        <span>View All Testimonials</span>
                        <i className='fa-solid fa-arrow-right ms-2'></i>
                    </Link>
                </SectionHeader>
                {/* Testimonials Slider */}
                <Swiper
                    spaceBetween={25}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {
                        testimonialData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard testimonialData={testimonial} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default TestimonialsSection;