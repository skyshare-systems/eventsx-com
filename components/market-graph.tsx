'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';

const MarketGraph = () => {
  return (
    <div className='md:h-[34rem] md:w-[768px] block'>
      <Spline
        className='hidden md:block'
        style={{
          height: 600,
          widows: 600,
        }}
        scene='https://prod.spline.design/vGCMZQfN19wmPcIQ/scene.splinecode'
      />
      <Spline
        className='block md:hidden'
        style={{
          height: 300,
          widows: 300,
        }}
        scene='https://prod.spline.design/vGCMZQfN19wmPcIQ/scene.splinecode'
      />
    </div>
  );
};

export default MarketGraph;
