import React from 'react';

interface Props {
  color?: 'yellow' | 'black';
  position?: 'top' | 'bottom';
}

const SpreadPattern: React.FC<Props> = ({ color = 'yellow', position = 'bottom' }) => {
  const id = `spread-${color}-${position}`;
  const isTop = position === 'top';
  const bgColor = color === 'yellow' ? '#FBBF24' : '#000000';
  
  return (
    <div className={`absolute left-0 right-0 ${isTop ? 'top-0' : 'bottom-0'} h-32 overflow-hidden`}>
      <svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`noise-${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
          
          <mask id={`mask-${id}`}>
            <rect width="100%" height="100%" fill="white" />
            <rect
              width="140%"
              height="100%"
              fill="url(#gradient-${id})"
              transform={`rotate(${isTop ? '180' : '0'}) translate(${isTop ? '-20%' : '-20%'}, ${isTop ? '-100%' : '0'})`}
            />
          </mask>
          
          <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'black', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: 'black', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 0 }} />
          </linearGradient>
        </defs>

        <g mask={`url(#mask-${id})`}>
          <rect
            width="100%"
            height="100%"
            fill={bgColor}
            filter={`url(#noise-${id})`}
          />
          <path
            d={isTop ? 
              "M0 192C240 192 480 160 720 160C960 160 1200 192 1440 192V0H0V192Z" :
              "M0 0C240 0 480 32 720 32C960 32 1200 0 1440 0V192H0V0Z"
            }
            fill={bgColor}
          />
        </g>
      </svg>
    </div>
  );
};

export default SpreadPattern;