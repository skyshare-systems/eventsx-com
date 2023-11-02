import React from 'react';

const Glow = ({ color, className }: any) => {
  return (
    <svg viewBox='0 0 320 320' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
      <g id='glow'>
        <g id='Ellipse 251' opacity='0.5' filter='url(#filter0_f_128_3484)'>
          <circle cx='160' cy='160' r='32' fill={color} />
        </g>
        <g id='Ellipse 252' filter='url(#filter1_f_128_3484)'>
          <circle cx='160' cy='160' r='16' fill={color} />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_f_128_3484'
          x='0'
          y='0'
          width='320'
          height='320'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='64' result='effect1_foregroundBlur_128_3484' />
        </filter>
        <filter
          id='filter1_f_128_3484'
          x='88'
          y='88'
          width='144'
          height='144'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='28' result='effect1_foregroundBlur_128_3484' />
        </filter>
      </defs>
    </svg>
  );
};

export default Glow;
