import React from "react";

function NoIcon({ text }) {
  return (
    <div className="flex flex-col items-center gap-[2px]">
      {/* Light Mode Line */}
      <svg
        className="w-full h-[1px] dark:hidden"
        viewBox="0 0 500 10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="light-mode-gradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "rgba(0,0,0,0)", stopOpacity: 0 }}
            />
            <stop offset="50%" style={{ stopColor: "black", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(0,0,0,0)", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <rect width="100%" height="10" fill="url(#light-mode-gradient)" />
      </svg>

      {/* Dark Mode Line */}
      <svg
        className="w-full h-[1px] hidden dark:block"
        viewBox="0 0 500 10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="dark-mode-gradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
            />
            <stop offset="50%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <rect width="100%" height="10" fill="url(#dark-mode-gradient)" />
      </svg>
      {/* Icon and Text */}
      <div className="flex items-center gap-2">
        <span className="py-2 text-[14px] md:text-md lg:text-lg font-opensans">
          {text}
        </span>
      </div>

      {/* Bottom Gradient Line */}
      {/* Light Mode Line */}
      <svg
        className="w-full h-[1px] dark:hidden"
        viewBox="0 0 500 10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="light-mode-gradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "rgba(0,0,0,0)", stopOpacity: 0 }}
            />
            <stop offset="50%" style={{ stopColor: "black", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(0,0,0,0)", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <rect width="100%" height="10" fill="url(#light-mode-gradient)" />
      </svg>

      {/* Dark Mode Line */}
      <svg
        className="w-full h-[1px] hidden dark:block"
        viewBox="0 0 500 10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="dark-mode-gradient"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
            />
            <stop offset="50%" style={{ stopColor: "white", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(255,255,255,0)", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <rect width="100%" height="10" fill="url(#dark-mode-gradient)" />
      </svg>
    </div>
  );
}

export default NoIcon;
