import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import categoriesData from '../../../Data/categories.json';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function HomeHeader() {
    return (
        <header>
            {/* 1 */}
            <div className='border-b-2 border-b-dark-color-12'>
                <div className='container flex max-md:flex-col items-center justify-between uppercase font-semibold relative min-h-[200px] max-md:py-10 gap-y-5 max-md:items-start'>
                    {/*  */}
                    <div>
                        <p className='text-grey-color-70 mb-2 font-normal'>Stunning Photography by</p>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Mustafa Sayed</h1>
                    </div>
                    {/*  */}
                    <picture className='absolute left-1/2 top-0 -translate-x-1/2 max-lg:hidden'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/wave-arc.png`} alt='...' width={200} height={200} className='w-auto h-auto' />
                    </picture>
                    {/*  */}
                    <div className='text-xl'>
                        <div className='flex items-center gap-2 mb-3'>
                            <p>Let’s</p>
                            <Link
                                to={``}
                                className='block py-2 px-8 rounded-full bg-purple-color-55 w-fit'
                            >
                                <span className='sr-only'>...</span>
                                <i className='fa-solid fa-arrow-right -rotate-45 fa-fw'></i>
                            </Link>
                        </div>
                        <h1>Work Together</h1>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className='border-b border-b-dark-color-12 py-5 bg-dark-color-6'>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2000,
                        pauseOnHover: true,
                        loop: true,
                    }}
                    spaceBetween={25}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                        1441: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {
                        categoriesData.map((category, index) => <SwiperSlide key={index} className={`${index === 0 ? "ml-[-40px]" : ""} text-center`}>
                            {/*  */}
                            <picture>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/radiant-spark.png`} alt='...' width={30} height={30} className='inline me-2' />
                            </picture>
                            {/* Category Text */}
                            <p className='text-grey-color-70 inline'>{category}</p>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            {/* 3 */}
            <div className=''>
                <div className='container'>
                    <picture>
                        <img fetchpriority="high" src={`${process.env.PUBLIC_URL}/assets/images/home-header.webp`} alt='...' width={700} height={500} className='w-full h-auto' />
                    </picture>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;