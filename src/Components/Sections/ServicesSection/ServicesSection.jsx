import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import { Link } from 'react-router-dom';
import servicesData from '../../../Data/services.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ServicesSection() {
    return (
        <section className='services-section py-10' id='services'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    sectionName={`Services`}
                    title={`My Photography Services`}
                >
                    <Link
                        to={`/services`}
                        className='btn'
                    >
                        <span>View All Services</span>
                        <i className='fa-solid fa-arrow-right ms-2'></i>
                    </Link>
                </SectionHeader>
                {/* Services Slider */}
                <Swiper
                    spaceBetween={25}
                >
                    {
                        servicesData.map((service, index) => <SwiperSlide key={index}>
                            <div className='service-item grid md:grid-cols-2 gap-7 items-center'>
                                {/* Service Text */}
                                <div className='service-text max-md:order-1'>
                                    {/* Service Name */}
                                    <div className='service-name flex items-center gap-3 mb-3'>
                                        <h3 className='text-grey-color-50 font-semibold text-2xl uppercase'>{(service.name).split(' ')[0]}</h3>
                                        <Link
                                            to={``}
                                            className='block py-2 px-8 rounded-full bg-purple-color-55 sm:hover:bg-purple-color-55/50 w-fit text-xl transition'
                                        >
                                            <span className='sr-only'>View Service</span>
                                            <i className='fa-solid fa-arrow-right -rotate-45 fa-fw'></i>
                                        </Link>
                                    </div>
                                    {/* Service Description */}
                                    <p className='text-grey-color-70 mb-5'>{service.description}</p>
                                    {/* Service Highlights */}
                                    <div className='service-highlights'>
                                        {/*  */}
                                        <h4 className='mb-3 font-medium text-lg text-grey-color-80'>Services Highlights</h4>
                                        {/* List of Highlights */}
                                        <ul className='space-y-3'>
                                            {
                                                service.highlights.map((highlight, index) => <li key={index} className='service-highlight p-3 border border-dark-color-12 rounded-md flex items-center gap-3'>
                                                    <picture>
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/radiant-spark.png`} alt='...' width={30} height={30} />
                                                    </picture>
                                                    <p className='text-grey-color-70'>{highlight}</p>
                                                </li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* Service Cover */}
                                <div className='service-cover'>
                                    <picture>
                                        <img src={`${process.env.PUBLIC_URL}${service.cover}`} alt='...' width={500} height={500} className='rounded-3xl md:rounded-bl-[5rem] max-md:rounded-t-xl w-full h-auto' />
                                    </picture>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default ServicesSection;