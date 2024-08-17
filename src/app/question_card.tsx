import React from 'react';

export default function QuestionCard({title, description, height}) {
    return (
        <div className={"group bg-white rounded-lg p-5 mx-10 lg:mx-0 md:w-1/2 hover:bg-[#1D7C82] group-hover:text-white duration-300 " + height}>
            <h1 className='text-center font-bold text-3xl group-hover:text-white text-[#34BEC6]'>{title}</h1>
            <p className='text-center group-hover:text-white mt-5'>{description}</p>
        </div>
    );
}