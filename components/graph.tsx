'use client';
import Spline from '@splinetool/react-spline';

export default function TokenomicsSpline() {
  return (
    <>
      <div className='md:h-[34rem] md:w-[768px] block'>
        <Spline
          className='hidden md:block'
          style={{
            height: 600,
            widows: 600,
          }}
          scene='https://prod.spline.design/cezmvbsVAkkrAs24/scene.splinecode'
        />

        <Spline
          className='block md:hidden'
          style={{
            height: 300,
            widows: 300,
          }}
          scene='https://prod.spline.design/cezmvbsVAkkrAs24/scene.splinecode'
        />
      </div>
    </>
  );
}
