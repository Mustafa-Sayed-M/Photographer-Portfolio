import React from 'react';
import statisticsData from '../../../Data/statistics.json';

function AboutHeader() {
    return (
        <header>
            <div className='container py-10'>
                <div className='content relative'>
                    {/* Head Text */}
                    <div className='head-text absolute top-0 left-0 w-[41.5%]'>
                        <p className='text-grey-color-50 uppercase text-sm'>About</p>
                        <h2 className='md:text-2xl uppercase'>About Mustafa Sayed</h2>
                    </div>
                    {/* Statistics */}
                    <div className='statistics absolute top-[81px] left-0 w-full h-[135px] flex items-center gap-3 flex-wrap'>
                        {
                            statisticsData.map((statistic, index) => <div key={index} className='flex-1 bg-dark-color-6 border border-dark-color-12 p-5 rounded-md'>
                                <h3 className='font-semibold text-xl mb-2'>{statistic.value}</h3>
                                <p className='text-grey-color-70 line-clamp-1'>{statistic.label}</p>
                            </div>)
                        }
                    </div>
                    {/* Image */}
                    <picture>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/about-header.webp`} alt='...' width={700} height={500} className='w-full h-auto' />
                    </picture>
                </div>
            </div>
        </header>
    )
}

export default AboutHeader;