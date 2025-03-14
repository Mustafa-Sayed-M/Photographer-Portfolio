import React from 'react';
import SectionHeader from '../Components/SectionHeader';
import storyData from '../../../Data/story.json';
import StoryCard from './Components/StoryCard';

function StorySection() {
    return (
        <section className='story-section py-10' id='story'>
            <div className='container'>
                {/* Section Header */}
                <SectionHeader
                    sectionName={`Journey`}
                    title={`Damien's Journey - A Timeline`}
                />
                {/* Story Cards Grid */}
                <div className='grid lg:grid-cols-2 gap-5'>
                    {
                        storyData.map((story, index) => <StoryCard key={index} storyData={story} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default StorySection;