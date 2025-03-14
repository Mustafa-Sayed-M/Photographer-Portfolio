import React from 'react';

function Introduction() {
    return (
        <div className='introduction p-5 border-b border-b-dark-color-12'>
            {/* Introduction Header */}
            <div className='introduction-header mb-3 flex items-center gap-3'>
                {/* Pattern */}
                <picture>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/sharp-star.png`} alt='...' width={30} height={30} />
                </picture>
                {/* Introduction Title */}
                <h2 className='font-medium text-xl text-grey-color-80'>Introduction</h2>
            </div>
            <p className='text-grey-color-70'>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary,
                to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes
                of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey,
                where each photograph tells a story, and every frame is a piece of my heart.</p>
        </div>
    )
}

export default Introduction;