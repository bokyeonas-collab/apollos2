interface CabinSymbolProps {
  className?: string;
  size?: number;
  color?: string;
  doorColor?: string;
}

export default function CabinSymbol({
  className = 'w-16 h-12',
  size,
  color,
  doorColor
}: CabinSymbolProps) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={size ? { width: `${size * 1.4}px`, height: `${size}px` } : undefined}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 70 50"
        className="w-full h-full fill-current overflow-visible"
        style={color ? { color } : undefined}
      >
        {/* Open book / cabin roof lines */}
        <path d="M5 25 L25 5 L45 25 L41 27 L25 11 L9 27 Z" />
        <path d="M12 28 L25 15 L38 28 L35 30 L25 20 L15 30 Z" opacity="0.6" />
        {/* Solid roof plane */}
        <polygon points="25,5 65,18 48,28 25,11" />
        {/* Cabin portal */}
        <polygon points="25,18 42,28 42,42 25,42" fill="currentColor" />
        <rect
          x="29"
          y="30"
          width="7"
          height="12"
          rx="3"
          fill={doorColor || '#FBF9F4'}
        />
      </svg>
    </div>
  );
}
