import React from 'react';

function SectionHeader({ sectionName, title, children }) {
    return (
        <div className='section-header flex items-center gap-10 mb-5 pb-5 border-b border-b-dark-color-12 max-md:flex-col max-lg:items-start max-lg:gap-3'>
            {/* Text Content */}
            <div className='text-content flex-1 font-semibold'>
                <p className='text-grey-color-50 uppercase text-sm'>{sectionName}</p>
                <h2 className='text-2xl uppercase'>{title}</h2>
            </div>
            {/* Other Content */}
            {children}
        </div>
    )
}

export default SectionHeader;