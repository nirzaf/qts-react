import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
    width: 32,
    height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" width="400" height="400">
                <defs>
                    <linearGradient id="gradTop" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#66b3ff', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#3385ff', stopOpacity: 1 }} />
                    </linearGradient>

                    <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#0052cc', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#003380', stopOpacity: 1 }} />
                    </linearGradient>

                    <linearGradient id="gradRight" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#0047b3', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#002966', stopOpacity: 1 }} />
                    </linearGradient>

                    <linearGradient id="gradRing" x1="20%" y1="0%" x2="80%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#4d94ff', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#005ce6', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#002966', stopOpacity: 1 }} />
                    </linearGradient>

                    <linearGradient id="gradSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.1 }} />
                    </linearGradient>
                </defs>

                <g transform="translate(200, 190)">
                    <path d="M0,-60 L52,-30 L0,0 L-52,-30 Z" fill="url(#gradTop)" stroke="#80c1ff" strokeWidth="1" />
                    <path d="M-52,-30 L0,0 L0,60 L-52,30 Z" fill="url(#gradLeft)" stroke="#3377ff" strokeWidth="1" />
                    <path d="M0,0 L52,-30 L52,30 L0,60 Z" fill="url(#gradRight)" stroke="#003d99" strokeWidth="1" />
                    <path d="M-52,-30 L0,0 L52,-30" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                    <line x1="0" y1="0" x2="0" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                </g>

                <g transform="translate(200, 190)">
                    <path
                        d="M0,-135 L117,-67 L117,67 L0,135 L-117,67 L-117,-67 Z M0,-100 L-87,-50 L-87,50 L0,100 L87,50 L87,-50 Z"
                        fill="url(#gradRing)"
                        fillRule="evenodd"
                        stroke="#002966"
                        strokeWidth="1"
                    />
                    <path d="M0,-100 L-87,-50 L-87,50 L0,100 L87,50 L87,-50 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <path d="M0,-135 L117,-67 L117,67 L0,135 L-117,67 L-117,-67 Z" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                    <path d="M-117,-67 L0,-135 L117,-67" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
                </g>
            </svg>
        ),
        {
            ...size,
        }
    );
}
