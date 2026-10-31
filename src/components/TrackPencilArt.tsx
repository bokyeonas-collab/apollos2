interface TrackPencilArtProps {
  className?: string;
  size?: number;
}

export default function TrackPencilArt({ className = 'w-12 h-14', size }: TrackPencilArtProps) {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={size ? { width: `${size}px`, height: `${size * 1.15}px` } : undefined}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-2xs"
      >
        {/* Hand-drawn style pencil matching 학습트랙.jpg */}

        {/* 1. Black Graphite Lead Tip */}
        <path
          d="M 50 8 C 48 8 47 11 46 16 L 54 16 C 53 11 52 8 50 8 Z"
          fill="#1D1D1D"
          stroke="#1D1D1D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 2. Sharpened Wooden Collar with hand-drawn scalloped bottom */}
        <path
          d="M 46 16 L 36 40 C 40 43 45 39 48 40 C 51 41 55 43 64 40 L 54 16 Z"
          fill="#FAF8F5"
          stroke="#1D1D1D"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 3. Pencil Shaft Outer Border */}
        <path
          d="M 36 40 L 36 78 C 36 79 38 80 40 80 L 60 80 C 62 80 64 79 64 78 L 64 40"
          fill="#FAF8F5"
          stroke="#1D1D1D"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 4. Vertical Facet Seams */}
        <path
          d="M 45 40.5 L 45 79.5"
          stroke="#1D1D1D"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M 55 40.5 L 55 79.5"
          stroke="#1D1D1D"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* 5. Hand-drawn sketchy shading lines on outer facets */}
        <line x1="39" y1="44" x2="39" y2="75" stroke="#1D1D1D" strokeWidth="1.2" opacity="0.45" strokeDasharray="4 3" />
        <line x1="61" y1="44" x2="61" y2="75" stroke="#1D1D1D" strokeWidth="1.2" opacity="0.45" strokeDasharray="4 3" />

        {/* 6. Ferrule (metal connector band with horizontal ridge texture) */}
        <rect
          x="35"
          y="79"
          width="30"
          height="14"
          rx="2"
          fill="#FAF8F5"
          stroke="#1D1D1D"
          strokeWidth="2.8"
        />
        {/* Horizontal Ferrule Ribs */}
        <path d="M 36 83 L 64 83" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" />
        <path d="M 36 86.5 L 64 86.5" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" />
        <path d="M 36 90 L 64 90" stroke="#1D1D1D" strokeWidth="2" strokeLinecap="round" />

        {/* 7. Rounded Eraser Block */}
        <path
          d="M 37.5 93 L 37.5 103 C 37.5 107.5 41.5 109.5 50 109.5 C 58.5 109.5 62.5 107.5 62.5 103 L 62.5 93"
          fill="#FAF8F5"
          stroke="#1D1D1D"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
