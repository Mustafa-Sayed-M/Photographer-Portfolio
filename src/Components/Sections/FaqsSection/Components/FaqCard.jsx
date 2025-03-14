import React from 'react';

function FaqCard({ faqData }) {

    const [isOpen, setIsOpen] = React.useState(false);

    const {
        question,
        answer
    } = faqData;

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className='faq-card p-5 border-b border-b-dark-color-12 cursor-pointer'
        >
            {/* Header */}
            <div className='header flex items-center gap-3'>
                {/* Question */}
                <h3 className='font-medium flex-1'>{question}</h3>
                {/* Arrow State */}
                <div className='w-10 h-10 leading-10 text-center rounded-full border border-dark-color-12 text-xl'>
                    <i className={`fa-solid fa-angle-${isOpen ? 'up' : 'down'}`}></i>
                </div>
            </div>
            {/* Answer */}
            {isOpen && (<p className='text-grey-color-70 mt-3'>{answer}</p>)}
        </div>
    )
}

export default FaqCard;