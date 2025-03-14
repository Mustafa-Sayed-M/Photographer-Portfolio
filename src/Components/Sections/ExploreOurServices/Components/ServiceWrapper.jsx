import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ServiceWrapper({ serviceData }) {

    const {
        name,
        description,
        images,
        categories
    } = serviceData;

    return (
        <div className='service-wrapper'>
            {/* Header */}
            <div className='header pb-5 mb-5 border-b border-b-dark-color-12'>
                {/* Content Grid */}
                <div className='content-grid grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10 items-center'>
                    {/* Header Text */}
                    <div className='header-text'>
                        {/* Service Name */}
                        <h3 className='text-grey-color-50 font-semibold text-2xl mb-3 uppercase'>{name}</h3>
                        {/* Service Description */}
                        <p className='text-grey-color-70 mb-5'>{description}</p>
                        {/* View Projects */}
                        <Link
                            to={``}
                            className='relative underline'
                        >
                            <span>View Projects</span>
                            <i className='fa-solid fa-arrow-right -rotate-45 ms-2'></i>
                        </Link>
                    </div>
                    {/* Header Slider */}
                    <div className='header-slider'>
                        <Swiper spaceBetween={25}>
                            {
                                images.map((img, index) => <SwiperSlide key={index}>
                                    <picture>
                                        <img
                                            alt='...'
                                            width={500}
                                            height={200}
                                            className='w-full h-auto rounded-xl'
                                            src={`${process.env.PUBLIC_URL}${img}`}
                                        />
                                    </picture>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* Categories */}
            <div className='categories  space-y-5'>
                {
                    categories.map((category, index) => (
                        <div key={index} className='category py-5 border-b border-b-dark-color-12 grid lg:grid-cols-3 gap-7 items-center'>
                            {/* Category Text */}
                            <div className='category-text'>
                                {/* Title */}
                                <h3 className='text-grey-color-80 font-medium mb-4 text-lg'>{category.title}</h3>
                                {/* Price */}
                                <div className='price flex items-center gap-3'>
                                    <div className='text-5xl font-medium'>{category.price}</div>
                                    <Link
                                        to={``}
                                        className='text-nowrap underline'
                                    >
                                        <span>Book a Call</span>
                                        <i className='fa-solid fa-arrow-right -rotate-45 ms-2'></i>
                                    </Link>
                                </div>
                            </div>
                            {/* Category Features */}
                            <div className='lg:col-span-2 space-y-3'>
                                {
                                    category.features.map((feature, index) => <div key={index} className='category-feature p-3 border border-dark-color-12 rounded-md flex items-center gap-3'>
                                        <picture>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/radiant-spark.png`} alt='...' width={30} height={30} />
                                        </picture>
                                        <p className='text-grey-color-70'>{feature}</p>
                                    </div>)
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceWrapper;