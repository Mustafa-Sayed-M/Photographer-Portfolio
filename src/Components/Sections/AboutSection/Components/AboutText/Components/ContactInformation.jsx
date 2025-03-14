import React from 'react';
import { Link } from 'react-router-dom';
import SocialProfiles from '../../../../../Atoms/SocialProfiles';

function ContactInformation() {
    return (
        <div className='contact-info p-5'>
            {/* Contact Information Header */}
            <div className='contact-information-header mb-3 flex items-center gap-3'>
                {/* Pattern */}
                <picture>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/sharp-star.png`} alt='...' width={30} height={30} />
                </picture>
                {/* Introduction Title */}
                <h2 className='font-medium text-xl text-grey-color-80'>Contact Information</h2>
            </div>
            {/*  */}
            <div className='grid sm:grid-cols-2 gap-5'>
                {/* Email */}
                <div className='email'>
                    <h3 className='mb-1 font-medium'>Email</h3>
                    <a
                        target='_blank'
                        rel="noreferrer"
                        className='text-grey-color-70 transition sm:hover:text-white'
                        href='mailto:mustafacoder9@gmail.com'
                    >mustafacoder9@gmail.com</a>
                </div>
                {/* Phone */}
                <div className='phone'>
                    <h3 className='mb-1 font-medium'>Phone</h3>
                    <a
                        target='_blank'
                        rel="noreferrer"
                        href='https://wa.link/v8qkks'
                        className='text-grey-color-70 transition sm:hover:text-white'
                    >+20 0112 2124 968</a>
                </div>
                {/* Social */}
                <SocialProfiles />
                {/* Links */}
                <div className='links flex items-center max-2xl:flex-col gap-2 *:text-nowrap'>
                    {/* Work */}
                    <Link
                        to={``}
                        className='btn 2xl:flex-1 max-2xl:w-full text-center'
                    >Let's Work</Link>
                    {/* Download CV */}
                    <Link
                        to={``}
                        className='btn 2xl:flex-1 max-2xl:w-full text-center'
                    >Download CV</Link>
                </div>
            </div>
        </div>
    )
}

export default ContactInformation;