import React from 'react';
import Tilt from 'react-parallax-tilt';

const Card = ({ imageUrl, title, description, rgb }) => {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.015}>
      <div className="bg-[#F2F2F2] dark:bg-[#1d1d1d] rounded-[27px] flex px-7 relative lg:max-w-[26.3vw] md:max-w-[23rem] mb-8 pb-[2.6rem] py-1">
        <div className={`absolute top-0 left-8 transform -translate-y-1/2 bg-[#FCFCFC] dark:bg-[#262626] ${rgb ? 'shadow-[0_2px_4px_rgba(255,56,56,0.25)]' : 'shadow-[0_2px_4px_rgba(3,175,0,0.25)]'} shadow-[0_2px_4px_rgba(182,182,182,0.25)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.25)] rounded-[20px] px-4 py-3 `}>
          <img src={imageUrl} alt="" className="w-8 h-8" />
        </div>
        <div className="space-y-2.5 pt-12 font-[poppins]">
          <h2 className="text-[28px] dark:text-white">{title}</h2>
          <p className="text-[#7e7e7e] dark:text-gray-300 font-medium lg:text-[14.5px] sm:text-[16px] xss:text-[13.5px]">{description}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
