interface TrackAirplaneArtProps {
  className?: string;
  size?: number;
}

export default function TrackAirplaneArt({ className = 'w-12 h-14', size }: TrackAirplaneArtProps) {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={size ? { width: `${size}px`, height: `${size * 0.9}px` } : undefined}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-2xs"
      >
        {/* Hand-drawn minimal line paper airplane matching 활동트랙.jpg */}

        {/* 1. Main Wings Plane */}
        <path
          d="M 86 16 L 16 52 L 62 68 Z"
          fill="#FAF8F5"
          stroke="#1D1D1D"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 2. Center Spine Crease */}
        <path
          d="M 16 52 L 86 16"
          stroke="#1D1D1D"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 3. Underside Keel / Fold */}
        <path
          d="M 16 52 L 48 68 L 54 58"
          fill="#F2EEE6"
          stroke="#1D1D1D"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 4. Bottom Wing Fold Line */}
        <path
          d="M 48 68 L 62 68"
          stroke="#1D1D1D"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
