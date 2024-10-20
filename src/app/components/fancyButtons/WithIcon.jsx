import React from 'react'

function WithIcon({text, style}) {
  return (
    <div className="flex flex-col items-center gap-[2px]">
    {/* Top Gradient Line */}
    <svg
      className="w-fit h-[1px]"
      viewBox="0 0 500 10"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="top-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }} />
          <stop offset="50%" style={{ stopColor: "black", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="10" fill="url(#top-gradient)" />
    </svg>

    {/* Icon and Text */}
    <div className="flex items-center gap-2">
      {/* Icon (Orange Circle with Checkmark) */}
      <div className={`w-5 h-5 border-[1px] rounded-full flex items-center justify-center ${style || ''}`}>
        <svg
          className={`w-2 h-2 ${style}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      {/* Text */}
      <span className="text-xs font-opensans">{text}</span>
    </div>

    {/* Bottom Gradient Line */}
    <svg
      className="w-fit h-[1px]"
      viewBox="0 0 500 10"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="bottom-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }} />
          <stop offset="50%" style={{ stopColor: "black", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="10" fill="url(#bottom-gradient)" />
    </svg>
  </div>
  )
}

export default WithIcon