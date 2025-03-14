import React from 'react';
import servicesData from '../../../Data/services.json';
import ServiceWrapper from './Components/ServiceWrapper';

function ExploreOurServices() {
    return (
        <div className='explore-our-services py-10'>
            <div className='container space-y-10'>
                {
                    servicesData.map((service, index) => <ServiceWrapper key={index} serviceData={service} />)
                }
            </div>
        </div>
    )
}

export default ExploreOurServices;