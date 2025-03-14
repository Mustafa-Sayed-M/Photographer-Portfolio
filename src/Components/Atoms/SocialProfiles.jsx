import React from 'react';
import socialProfilesData from '../../Data/socialProfiles.json';

function SocialProfiles() {
    return (
        <ul className='flex items-center gap-2 border bg-dark-color-3 border-dark-color-12 max-sm:justify-center sm:w-fit p-3 rounded-full self-start'>
            {
                socialProfilesData.map((socialProfile, index) => <li key={index}>
                    <a
                        href={socialProfile.href}
                        className='circle-btn'
                    >
                        <span className='sr-only'>{socialProfile.name}</span>
                        <i className={socialProfile.icon}></i>
                    </a>
                </li>)
            }
        </ul>
    )
}

export default SocialProfiles;