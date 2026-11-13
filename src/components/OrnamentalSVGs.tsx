import React from 'react';

export const LordGaneshaArtwork: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 150,
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Rotating Sacred Solar Mandala Halo */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full animate-spinSlow opacity-65"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ganeshaHaloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.55" />
            <stop offset="65%" stopColor="#D4AF62" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D4AF62" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="92" fill="url(#ganeshaHaloGrad)" />
        <circle cx="100" cy="100" r="84" fill="none" stroke="#D4AF62" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="#F3E5AB" strokeWidth="0.8" />
        {/* 16 Ashtadala Lotus Petals around the Mandala */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = i * 22.5;
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <path
                d="M100 10 C105 22, 105 28, 100 34 C95 28, 95 22, 100 10 Z"
                fill="#D4AF62"
                fillOpacity="0.45"
              />
              <circle cx="100" cy="7" r="1.8" fill="#FFF8EA" />
            </g>
          );
        })}
      </svg>

      {/* Devotional Lord Ganesha Gold-Leaf Emblem */}
      <svg
        viewBox="0 0 200 200"
        className="relative z-10 w-full h-full drop-shadow-[0_0_15px_rgba(212,175,98,0.65)]"
        role="img"
        aria-label="Sacred Lord Ganesha Illustration"
      >
        <defs>
          <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCF6BA" />
            <stop offset="35%" stopColor="#D4AF62" />
            <stop offset="70%" stopColor="#FBF5B7" />
            <stop offset="100%" stopColor="#AA771C" />
          </linearGradient>
          <linearGradient id="lotusPinkGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F3E5AB" />
            <stop offset="50%" stopColor="#D4AF62" />
            <stop offset="100%" stopColor="#9E1B32" />
          </linearGradient>
        </defs>

        {/* Sacred Temple Arch Frame */}
        <path
          d="M36 165 L36 85 C36 45, 75 22, 100 14 C125 22, 164 45, 164 85 L164 165"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Sacred Lotus Throne Base (Padmasana) */}
        <g transform="translate(0, 4)">
          <path
            d="M45 154 C65 138, 82 142, 100 154 C118 142, 135 138, 155 154 C135 166, 65 166, 45 154 Z"
            fill="url(#lotusPinkGold)"
            stroke="url(#goldLeafGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M62 150 C74 130, 90 132, 100 150 C110 132, 126 130, 138 150"
            fill="none"
            stroke="#FCF6BA"
            strokeWidth="1.6"
          />
          <path
            d="M84 148 C92 128, 108 128, 116 148"
            fill="url(#goldLeafGrad)"
            opacity="0.85"
          />
        </g>

        {/* Royal Mukut (Crown) */}
        <path
          d="M82 65 L88 38 L100 24 L112 38 L118 65 Z"
          fill="url(#goldLeafGrad)"
          stroke="#FFF8EA"
          strokeWidth="1.2"
        />
        <circle cx="100" cy="36" r="3.5" fill="#9E1B32" stroke="#FCF6BA" strokeWidth="1" />
        <circle cx="100" cy="50" r="4.5" fill="#9E1B32" stroke="#FCF6BA" strokeWidth="1.2" />
        <circle cx="100" cy="21" r="3" fill="#FCF6BA" />

        {/* Auspicious Ears */}
        <path
          d="M80 68 C54 60, 48 88, 66 102 C74 106, 80 100, 83 94"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M120 68 C146 60, 152 88, 134 102 C126 106, 120 100, 117 94"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Sacred Tilak on Forehead */}
        <path d="M93 72 Q100 75 107 72" fill="none" stroke="#FCF6BA" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M95 76 Q100 79 105 76" fill="none" stroke="#FCF6BA" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="100" cy="70" r="2.3" fill="#E66C1E" />

        {/* Graceful Head, Curved Trunk & Ekadanta Tusk */}
        <path
          d="M83 68 C82 88, 88 98, 94 108 C99 116, 102 128, 93 134 C86 138, 80 132, 84 126 C87 122, 92 125, 90 129"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M117 68 C118 88, 110 102, 103 114"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Sacred Tusk (Right) */}
        <path d="M107 98 L115 104 L106 104 Z" fill="#FFF8EA" />

        {/* Modak in Trunk Curve */}
        <circle cx="85" cy="127" r="4" fill="#FCF6BA" />

        {/* Blessing Right Hand (Abhaya Mudra) & Left Hand holding Lotus */}
        <path
          d="M116 108 C128 112, 136 104, 136 94"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Abhaya Mudra Palm with Sacred Swastika/Bindu */}
        <ellipse cx="136" cy="90" rx="4.5" ry="6.5" fill="url(#goldLeafGrad)" />
        <circle cx="136" cy="90" r="1.5" fill="#9E1B32" />

        {/* Left Hand & Modak Bowl */}
        <path
          d="M84 108 C72 112, 64 106, 62 96"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="61" cy="92" r="5" fill="url(#goldLeafGrad)" />

        {/* Seated Torso & Sacred Thread (Janeu) */}
        <path
          d="M76 116 C70 132, 76 146, 100 146 C124 146, 130 132, 124 116"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M82 108 Q102 126 118 138"
          fill="none"
          stroke="#FCF6BA"
          strokeWidth="1.2"
          strokeDasharray="3 2"
        />
      </svg>
    </div>
  );
};

export const AnimatedDiya: React.FC<{
  size?: number;
  isLit?: boolean;
  onClick?: () => void;
  label?: string;
}> = ({ size = 64, isLit = true, onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className={`group inline-flex flex-col items-center select-none ${
        onClick ? 'cursor-pointer' : ''
      }`}
      title={label || 'Sacred Auspicious Diya'}
    >
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        {/* Warm Radial Glow when Lit */}
        {isLit && (
          <div
            className="absolute -top-2 w-10 h-10 rounded-full bg-amber-400/40 blur-md animate-pulse pointer-events-none"
            style={{ width: size * 0.65, height: size * 0.65 }}
          />
        )}

        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="diyaFlameOuter" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFF8EA" />
              <stop offset="35%" stopColor="#FFD700" />
              <stop offset="75%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="diyaBrassBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCF6BA" />
              <stop offset="40%" stopColor="#D4AF62" />
              <stop offset="75%" stopColor="#9C7A32" />
              <stop offset="100%" stopColor="#5C3A10" />
            </linearGradient>
          </defs>

          {/* Flickering Flame */}
          {isLit && (
            <g className="origin-[50px_52px] animate-flameFlicker">
              {/* Outer Golden Flame */}
              <path
                d="M50 10 C60 26, 63 39, 50 52 C37 39, 40 26, 50 10 Z"
                fill="url(#diyaFlameOuter)"
              />
              {/* Inner Bright Core */}
              <path
                d="M50 24 C55 34, 56 42, 50 50 C44 42, 45 34, 50 24 Z"
                fill="#FFFBEB"
              />
            </g>
          )}

          {/* Cotton Wick */}
          <path d="M50 49 L50 56" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" />

          {/* Ornate Terracotta & Brass Diya Bowl */}
          <path
            d="M14 55 Q50 64 86 55 C82 78, 66 86, 50 86 C34 86, 18 78, 14 55 Z"
            fill="url(#diyaBrassBody)"
            stroke="#FCF6BA"
            strokeWidth="1.5"
          />

          {/* Decorative Carvings on Diya */}
          <path
            d="M22 63 Q50 71 78 63"
            fill="none"
            stroke="#FFF8EA"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <circle cx="50" cy="73" r="3" fill="#9E1B32" stroke="#FCF6BA" strokeWidth="1" />
          <circle cx="36" cy="71" r="2" fill="#FCF6BA" />
          <circle cx="64" cy="71" r="2" fill="#FCF6BA" />

          {/* Diya Pedestal Base */}
          <path
            d="M35 86 L65 86 L70 93 L30 93 Z"
            fill="url(#diyaBrassBody)"
            stroke="#FCF6BA"
            strokeWidth="1"
          />
        </svg>
      </div>
      {label && (
        <span className="mt-1 text-xs font-serif tracking-wider text-gold-light/90 group-hover:text-gold-bright transition-colors">
          {label}
        </span>
      )}
    </div>
  );
};

export const FloralToranGarland: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1200 135"
        preserveAspectRatio="none"
        className="w-full h-20 sm:h-28 drop-shadow-[0_6px_14px_rgba(61,11,17,0.45)]"
      >
        <defs>
          <linearGradient id="goldRod" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9C7A32" />
            <stop offset="50%" stopColor="#FCF6BA" />
            <stop offset="100%" stopColor="#9C7A32" />
          </linearGradient>
        </defs>

        {/* Top Golden Toran Rod */}
        <rect x="0" y="0" width="1200" height="7" fill="url(#goldRod)" />

        {/* Repeating Dense Mango Leaves, Thick Marigold & Jasmine Garlands, and Hanging Temple Bells */}
        {[0, 200, 400, 600, 800, 1000].map((offset) => (
          <g key={offset} transform={`translate(${offset}, 0)`}>
            {/* Dense Overlapping Mango Leaves along top */}
            {[10, 30, 50, 70, 90, 110, 130, 150, 170, 190].map((lx, idx) => (
              <path
                key={lx}
                d={`M${lx} 6 C${lx - 9} 26, ${lx - 5} 42, ${lx} 52 C${lx + 5} 42, ${lx + 9} 26, ${lx} 6 Z`}
                fill={idx % 2 === 0 ? '#15803D' : '#166534'}
                stroke="#D4AF62"
                strokeWidth="0.9"
              />
            ))}

            {/* Thick Top Horizontal Marigold & Rose Flower Chain */}
            {[15, 35, 55, 75, 95, 115, 135, 155, 175, 195].map((fx, idx) => (
              <g key={`top-${fx}`}>
                <circle
                  cx={fx}
                  cy={14}
                  r={idx % 3 === 0 ? 9 : 7.5}
                  fill={idx % 3 === 0 ? '#DC2626' : idx % 2 === 0 ? '#F59E0B' : '#FBBF24'}
                  stroke="#92400E"
                  strokeWidth="0.6"
                />
                <circle cx={fx} cy={14} r={2.5} fill="#FFF8EA" />
              </g>
            ))}

            {/* Thick Swooping Outer & Inner Flower Garland Swags */}
            <path
              d="M0 18 Q100 108 200 18"
              fill="none"
              stroke="#FFF8EA"
              strokeWidth="12"
              strokeDasharray="1 10"
              strokeLinecap="round"
            />
            <path
              d="M0 22 Q100 112 200 22"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="15"
              strokeDasharray="2 11"
              strokeLinecap="round"
            />
            <path
              d="M0 20 Q100 110 200 20"
              fill="none"
              stroke="#DC2626"
              strokeWidth="10"
              strokeDasharray="1 24"
              strokeLinecap="round"
            />

            {/* Side Jasmine & Marigold Hanging Strings */}
            {[45, 155].map((sx) => (
              <g key={`side-${sx}`}>
                <line x1={sx} y1="36" x2={sx} y2="76" stroke="#D4AF62" strokeWidth="1.4" />
                <circle cx={sx} cy="48" r="5.5" fill="#FBBF24" />
                <circle cx={sx} cy="59" r="4.5" fill="#FFF8EA" />
                <circle cx={sx} cy="70" r="5.5" fill="#DC2626" />
              </g>
            ))}

            {/* Center Hanging Golden Temple Bell & Thick Flower Tassel at Each Arch */}
            <line x1="100" y1="60" x2="100" y2="106" stroke="#D4AF62" strokeWidth="2" />
            <circle cx="100" cy="70" r="7.5" fill="#F59E0B" stroke="#92400E" strokeWidth="0.7" />
            <circle cx="100" cy="83" r="6" fill="#DC2626" />
            <circle cx="100" cy="94" r="5" fill="#FFF8EA" />
            <path
              d="M89 116 L111 116 L106 101 L94 101 Z"
              fill="#D4AF62"
              stroke="#FCF6BA"
              strokeWidth="1.2"
            />
            <circle cx="100" cy="120" r="3" fill="#FFF8EA" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export const GoldCornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const rotationMap = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 sm:w-16 sm:h-16 pointer-events-none select-none ${rotationMap[position]} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cornerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCF6BA" />
          <stop offset="50%" stopColor="#D4AF62" />
          <stop offset="100%" stopColor="#9C7A32" />
        </linearGradient>
      </defs>
      <path
        d="M4 92 L4 14 C4 8, 8 4, 14 4 L92 4"
        fill="none"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 76 L12 20 C12 15, 15 12, 20 12 L76 12"
        fill="none"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.4"
        strokeDasharray="3 3"
      />
      {/* Corner Paisley / Mango Filigree */}
      <path
        d="M16 16 C34 16, 44 26, 36 38 C28 46, 16 36, 16 16 Z"
        fill="url(#cornerGoldGrad)"
        fillOpacity="0.35"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.5"
      />
      <circle cx="25" cy="25" r="3" fill="#FCF6BA" />
      <circle cx="46" cy="20" r="2" fill="#D4AF62" />
      <circle cx="20" cy="46" r="2" fill="#D4AF62" />
    </svg>
  );
};

export const MandalaDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center w-full my-6 select-none ${className}`}>
      <div className="h-[1px] flex-1 max-w-[180px] bg-gradient-to-r from-transparent via-[#D4AF62] to-[#FCF6BA]" />
      <svg viewBox="0 0 120 40" className="w-28 h-9 mx-3 flex-shrink-0">
        <defs>
          <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF62" />
            <stop offset="50%" stopColor="#FCF6BA" />
            <stop offset="100%" stopColor="#D4AF62" />
          </linearGradient>
        </defs>
        {/* Center Lotus */}
        <path
          d="M60 4 C66 14, 66 26, 60 36 C54 26, 54 14, 60 4 Z"
          fill="url(#divGold)"
        />
        <path
          d="M60 8 C72 12, 76 24, 60 32 C44 24, 48 12, 60 8 Z"
          fill="none"
          stroke="url(#divGold)"
          strokeWidth="1.5"
        />
        <path
          d="M60 12 C82 14, 86 24, 60 28 C34 24, 38 14, 60 12 Z"
          fill="none"
          stroke="url(#divGold)"
          strokeWidth="1.2"
        />
        <circle cx="25" cy="20" r="3" fill="#D4AF62" />
        <circle cx="95" cy="20" r="3" fill="#D4AF62" />
        <circle cx="12" cy="20" r="1.8" fill="#FCF6BA" />
        <circle cx="108" cy="20" r="1.8" fill="#FCF6BA" />
      </svg>
      <div className="h-[1px] flex-1 max-w-[180px] bg-gradient-to-l from-transparent via-[#D4AF62] to-[#FCF6BA]" />
    </div>
  );
};

export const PalaceSilhouetteParallax: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="w-full h-14 sm:h-20 opacity-25"
      >
        <defs>
          <linearGradient id="palaceSilGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#D4AF62" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#240309" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Left Temple Gopuram & Chhatri Domes */}
        <path
          d="M0 220 L0 140 L40 140 L55 80 L75 45 L95 80 L110 140 L160 140 C160 100, 200 75, 220 55 C240 75, 280 100, 280 140 L340 140 L340 110 C340 85, 370 65, 385 45 C400 65, 430 85, 430 110 L430 140 L520 140 C520 75, 640 30, 720 10 C800 30, 920 75, 920 140 L1010 140 L1010 110 C1010 85, 1040 65, 1055 45 C1070 65, 1100 85, 1100 110 L1100 140 L1160 140 C1160 100, 1200 75, 1220 55 C1240 75, 1280 100, 1280 140 L1330 140 L1345 80 L1365 45 L1385 80 L1400 140 L1440 140 L1440 220 Z"
          fill="url(#palaceSilGrad)"
        />
        {/* Intricate Jharokha Arch Cutouts */}
        {[120, 260, 460, 620, 720, 820, 980, 1180, 1320].map((x, idx) => (
          <path
            key={idx}
            d={`M${x - 18} 220 L${x - 18} 168 C${x - 18} 150, ${x} 142, ${x} 135 C${x} 142, ${x + 18} 150, ${x + 18} 168 L${x + 18} 220 Z`}
            fill="#240309"
            opacity="0.7"
          />
        ))}
      </svg>
    </div>
  );
};

export const GoogleMapsIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill="#1a73e8" d="M24 4C15.16 4 8 11.16 8 20c0 10.5 16 24 16 24s16-13.5 16-24c0-8.84-7.16-16-16-16z" />
    <path fill="#ea4335" d="M24 4c-4.42 0-8.42 1.79-11.31 4.69L24 20V4z" />
    <path fill="#fbbc04" d="M12.69 8.69C9.79 11.58 8 15.58 8 20c0 4.2 1.61 8.01 4.25 10.87L24 20 12.69 8.69z" />
    <path fill="#34a853" d="M24 20l-11.75 10.87C15.89 34.81 24 44 24 44s10.22-8.63 14.11-16.58L24 20z" />
    <circle cx="24" cy="20" r="6.5" fill="#ffffff" />
  </svg>
);

export const IndianBrideIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    className={`shrink-0 ${className}`}
    aria-label="Indian Bride"
  >
    <circle cx="40" cy="40" r="37" fill="#5C0C16" stroke="#D4AF62" strokeWidth="2.5" />
    {/* Bridal Dupatta / Pallu */}
    <path d="M19 68 C21 50, 27 42, 40 42 C53 42, 59 50, 61 68 Z" fill="#B91C1C" stroke="#FCF6BA" strokeWidth="1.5" />
    <path d="M24 44 C26 24, 32 16, 40 16 C48 16, 54 24, 56 44" fill="#9E1B32" stroke="#D4AF62" strokeWidth="1.5" />
    {/* Face */}
    <circle cx="40" cy="31" r="10.5" fill="#F4C7A1" />
    {/* Hair & Jasmine Gajra */}
    <path d="M29.5 30 C29.5 21, 35 18, 40 18 C45 18, 50.5 21, 50.5 30 C48 25, 44 24, 40 24 C36 24, 32 25, 29.5 30 Z" fill="#1F1209" />
    <path d="M28 24 Q40 15 52 24" fill="none" stroke="#FFFBEB" strokeWidth="2.5" strokeDasharray="2 2.5" strokeLinecap="round" />
    {/* Maang Tikka & Bindi */}
    <line x1="40" y1="19" x2="40" y2="24" stroke="#FFD700" strokeWidth="1.3" />
    <circle cx="40" cy="24.5" r="1.8" fill="#FFD700" />
    <circle cx="40" cy="28.5" r="1.1" fill="#DC2626" />
    {/* Eyes & Smile */}
    <circle cx="36.2" cy="31" r="1" fill="#2D160B" />
    <circle cx="43.8" cy="31" r="1" fill="#2D160B" />
    <path d="M37.5 35.5 Q40 37.5 42.5 35.5" fill="none" stroke="#991B1B" strokeWidth="1.2" strokeLinecap="round" />
    {/* Gold Jhumkas & Necklace */}
    <circle cx="29" cy="33" r="1.8" fill="#FFD700" />
    <circle cx="51" cy="33" r="1.8" fill="#FFD700" />
    <path d="M32 45 Q40 53 48 45" fill="none" stroke="#FFD700" strokeWidth="2.2" />
    <path d="M30 48 Q40 57 50 48" fill="none" stroke="#FCF6BA" strokeWidth="1.4" strokeDasharray="2 2" />
  </svg>
);

export const IndianGroomIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 56,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    className={`shrink-0 ${className}`}
    aria-label="Indian Groom"
  >
    <circle cx="40" cy="40" r="37" fill="#5C0C16" stroke="#D4AF62" strokeWidth="2.5" />
    {/* Royal Ivory & Gold Sherwani */}
    <path d="M19 68 C21 50, 27 42, 40 42 C53 42, 59 50, 61 68 Z" fill="#FFF8EA" stroke="#D4AF62" strokeWidth="1.6" />
    <path d="M40 43 L40 68" stroke="#D4AF62" strokeWidth="1.5" />
    {/* Garland */}
    <path d="M31 44 Q40 58 49 44" fill="none" stroke="#DC2626" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M32 44 Q40 56 48 44" fill="none" stroke="#FBBF24" strokeWidth="1.4" strokeDasharray="2 3" />
    {/* Face */}
    <circle cx="40" cy="32" r="10.2" fill="#EBB68A" />
    {/* Royal Pagdi / Turban & Kalgi */}
    <path d="M27 27 C27 17, 34 14, 40 14 C46 14, 53 17, 53 27 C47 24, 33 24, 27 27 Z" fill="#9E1B32" stroke="#D4AF62" strokeWidth="1.5" />
    <path d="M29 24 Q40 19 51 24" fill="none" stroke="#FCF6BA" strokeWidth="1.5" />
    <path d="M40 15 L43 8 L45 13 Z" fill="#FFD700" />
    <circle cx="40" cy="17" r="2" fill="#FCF6BA" stroke="#B8860B" strokeWidth="0.8" />
    {/* Tilak, Eyes & Smile */}
    <line x1="40" y1="26.5" x2="40" y2="29.5" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="36.2" cy="32" r="1" fill="#2D160B" />
    <circle cx="43.8" cy="32" r="1" fill="#2D160B" />
    <path d="M37.5 36 Q40 37.8 42.5 36" fill="none" stroke="#5C2B14" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const SacredKalashIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className = '',
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={`shrink-0 ${className}`} aria-hidden="true">
    {/* Mango Leaves */}
    <path d="M24 14 C16 8, 10 10, 12 18 C16 16, 20 16, 24 18 Z" fill="#15803D" />
    <path d="M24 14 C32 8, 38 10, 36 18 C32 16, 28 16, 24 18 Z" fill="#16A34A" />
    {/* Coconut */}
    <circle cx="24" cy="15" r="5.5" fill="#78350F" stroke="#D4AF62" strokeWidth="1" />
    {/* Brass Kalash Pot */}
    <path d="M16 20 L32 20 C35 25, 36 35, 30 41 L18 41 C12 35, 13 25, 16 20 Z" fill="#D4AF62" stroke="#7A1824" strokeWidth="1.4" />
    <path d="M14 20 L34 20" stroke="#7A1824" strokeWidth="2" strokeLinecap="round" />
    {/* Swastik / Sacred Dot */}
    <circle cx="24" cy="31" r="2.2" fill="#9E1B32" />
    <path d="M17 41 L31 41 L33 44 L15 44 Z" fill="#9C7A32" />
  </svg>
);

