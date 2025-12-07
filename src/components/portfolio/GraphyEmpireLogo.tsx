import React from 'react';

interface GraphyEmpireLogoProps {
    size?: number;
    className?: string;
}

const GraphyEmpireLogo: React.FC<GraphyEmpireLogoProps> = ({ size = 80, className = '' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                {/* Gradient for the Outer Ring (Vibrant) */}
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#d946ef', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#f43f5e', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
                </linearGradient>

                {/* Gradient for the Badge "Thickness" (Side view simulation) */}
                <linearGradient id="sideGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#e5e7eb', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#9ca3af', stopOpacity: 1 }} />
                </linearGradient>

                {/* Gradient for the White Face (Subtle curvature) */}
                <radialGradient id="faceGradient" cx="30%" cy="30%" r="80%" fx="30%" fy="30%">
                    <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
                </radialGradient>

                {/* Drop Shadow Filter for the whole object */}
                <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
                    <feOffset in="blur" dx="10" dy="15" result="offsetBlur" />
                    <feFlood floodColor="#000000" floodOpacity="0.3" result="shadowColor" />
                    <feComposite in="shadowColor" in2="offsetBlur" operator="in" result="coloredShadow" />
                    <feMerge>
                        <feMergeNode in="coloredShadow" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Inner Shadow for the Ring to look embedded */}
                <filter id="ringInnerShadow">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="table" tableValues="1 0" />
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="2" />
                    <feOffset dx="1" dy="2" result="offsetblur" />
                    <feFlood floodColor="black" floodOpacity="0.2" result="color" />
                    <feComposite in2="offsetblur" operator="in" />
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feMerge>
                        <feMergeNode in="SourceGraphic" />
                        <feMergeNode />
                    </feMerge>
                </filter>
            </defs>

            {/* Group for the whole 3D Badge Object */}
            <g filter="url(#dropShadow)" transform="translate(0, -10)">
                {/* The "Side/Thickness" of the coin (Offset circle) */}
                <circle cx="255" cy="260" r="230" fill="url(#sideGradient)" />

                {/* The Main Face Background */}
                <circle cx="250" cy="250" r="230" fill="url(#faceGradient)" />

                {/* The Colorful Gradient Ring (Stroke) */}
                <circle
                    cx="250"
                    cy="250"
                    r="224"
                    stroke="url(#ringGradient)"
                    strokeWidth="12"
                    fill="none"
                    filter="url(#ringInnerShadow)"
                />

                {/* Content Group (Centered) */}
                <g>
                    {/* Crown Group */}
                    <g transform="translate(250, 155) scale(1.6)">
                        {/* Crown Body */}
                        <path
                            d="M -45 30 
                 Q 0 45 45 30 
                 L 50 -8 
                 L 35 15 
                 L 22 -18 
                 L 10 15 
                 L 0 -33
                 L -10 15
                 L -22 -18
                 L -35 15
                 L -50 -8
                 Z"
                            fill="#1a1a1a"
                        />

                        {/* Crown Tip Circles */}
                        <circle cx="0" cy="-35" r="3.5" fill="#1a1a1a" />
                        <circle cx="-22" cy="-20" r="3.5" fill="#1a1a1a" />
                        <circle cx="-50" cy="-10" r="3.5" fill="#1a1a1a" />
                        <circle cx="22" cy="-20" r="3.5" fill="#1a1a1a" />
                        <circle cx="50" cy="-10" r="3.5" fill="#1a1a1a" />
                    </g>

                    {/* Main Text */}
                    <text
                        x="250"
                        y="275"
                        textAnchor="middle"
                        fontFamily="'Montserrat', sans-serif"
                        fontWeight="700"
                        fontSize="54"
                        letterSpacing="4"
                        fill="#000000"
                    >
                        GRAPHY
                    </text>
                    <text
                        x="250"
                        y="330"
                        textAnchor="middle"
                        fontFamily="'Montserrat', sans-serif"
                        fontWeight="700"
                        fontSize="54"
                        letterSpacing="4"
                        fill="#000000"
                    >
                        EMPIRE
                    </text>

                    {/* Subtext */}
                    <text
                        x="250"
                        y="370"
                        textAnchor="middle"
                        fontFamily="'Montserrat', sans-serif"
                        fontWeight="300"
                        fontSize="24"
                        fill="#333333"
                    >
                        classy &amp; elegant
                    </text>

                    {/* Dots */}
                    <g transform="translate(250, 400)" fill="#000000">
                        <circle cx="-60" cy="0" r="4" />
                        <circle cx="-40" cy="0" r="4" />
                        <circle cx="-20" cy="0" r="4" />
                        <circle cx="0" cy="0" r="4" />
                        <circle cx="20" cy="0" r="4" />
                        <circle cx="40" cy="0" r="4" />
                        <circle cx="60" cy="0" r="4" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default GraphyEmpireLogo;
