import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { WeddingData, WeddingThemeId } from '../data/weddingData';
import {
  LordGaneshaArtwork,
  AnimatedDiya,
  GoldCornerOrnament,
} from './OrnamentalSVGs';
import { soundEngine } from '../utils/soundEngine';

interface WeddingEnvelope3DProps {
  data: WeddingData;
  activeTheme: WeddingThemeId;
  onSelectTheme: (theme: WeddingThemeId) => void;
  onOpenComplete: () => void;
}

type EnvelopeStage = 'idle' | 'seal-unlock' | 'flap-open' | 'card-emerge';

export const WeddingEnvelope3D: React.FC<WeddingEnvelope3DProps> = ({
  data,
  onOpenComplete,
}) => {
  const [stage, setStage] = useState<EnvelopeStage>('idle');
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (stage !== 'idle') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: -y * 10,
      rotateY: x * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const triggerOpenEnvelope = () => {
    if (stage !== 'idle') return;
    setTilt({ rotateX: 0, rotateY: 0 });

    soundEngine.playEnvelopeOpenSound();
    soundEngine.startMusic();

    setStage('seal-unlock');

    window.setTimeout(() => {
      setStage('flap-open');
    }, 100);

    window.setTimeout(() => {
      setStage('card-emerge');
    }, 340);

    window.setTimeout(() => {
      onOpenComplete();
    }, 880);
  };

  const isFlapOpen = stage === 'flap-open' || stage === 'card-emerge';
  const isCardEmerging = stage === 'card-emerge';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative min-h-screen w-full flex items-center justify-center py-3 sm:py-6 px-2.5 sm:px-4 select-none bg-gradient-to-b from-[#E8D5B5] via-[#F5E9D4] to-[#E2CBA4]"
    >
      {/* Exact 2:3 Portrait Temple Frame — Matches 682x1024 Image Ratio on All Screens (No Zoom/Stretch) */}
      <div
        className="relative w-full max-w-[540px] aspect-[2/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(61,11,17,0.3)] border-2 border-[#B8860B]/70 flex flex-col items-center justify-center gap-3.5 sm:gap-6 pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./backgrounds/temple-courtyard-lamps.jpg')`,
        }}
      >
        {/* Top Sacred Invocation in Telugu — Positioned Cleanly Below the Hanging Temple Bells */}
        <div className="relative z-20 flex flex-col items-center text-center px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-[#FBF5E8]/92 border border-[#B8860B]/50 shadow-sm">
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-lg font-serif font-bold tracking-[0.12em] sm:tracking-[0.14em] text-[#7A1824]"
          >
            ॥ ఓం శ్రీ గణేశాయ నమః ॥
          </motion.p>
          <p className="text-[10px] sm:text-xs text-[#5C3A10] font-serif font-semibold tracking-wider mt-0.5">
            Rangu &amp; Sriramula Families Cordially Invite You
          </p>
        </div>

        {/* Center 3D Interactive Wedding Envelope Stage */}
        <div
          className="relative z-20 w-full max-w-[270px] sm:max-w-[400px] flex flex-col items-center justify-center perspective-2000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            animate={{
              rotateX: isCardEmerging ? 8 : tilt.rotateX,
              rotateY: isCardEmerging ? 0 : tilt.rotateY,
              y: isCardEmerging ? 70 : 0,
              scale: isCardEmerging ? 0.96 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 90,
              damping: 18,
            }}
            onClick={triggerOpenEnvelope}
            role="button"
            tabIndex={0}
            aria-label="Open Wedding Invitation Envelope"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                triggerOpenEnvelope();
              }
            }}
            className="relative w-full aspect-[16/11] cursor-pointer preserve-3d group"
          >
            {/* 1. Envelope Back Plate & Warm Temple Shadow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6B1020] via-[#7A1824] to-[#4A0815] border-2 border-[#D4AF62] shadow-[0_24px_60px_rgba(61,11,17,0.5),0_0_30px_rgba(184,134,11,0.3)] overflow-hidden">
              <div className="absolute inset-2 rounded-xl border border-[#D4AF62]/40 bg-gradient-to-b from-[#8F192E] via-[#6B1020] to-[#4A0815] bg-brocade-pattern" />
            </div>

            {/* 2. THE EMERGING WEDDING INVITATION CARD INSIDE THE ENVELOPE */}
            <motion.div
              initial={{ y: 10, scale: 0.9, opacity: 0.95 }}
              animate={
                isCardEmerging
                  ? {
                      y: -145,
                      scale: 1.02,
                      opacity: 1,
                      rotateX: -4,
                    }
                  : isFlapOpen
                  ? {
                      y: -25,
                      scale: 0.95,
                      opacity: 1,
                    }
                  : {
                      y: 8,
                      scale: 0.9,
                      opacity: 0.92,
                    }
              }
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                zIndex: isCardEmerging ? 35 : 15,
              }}
              className="absolute inset-x-3 sm:inset-x-5 top-2.5 bottom-2.5 rounded-xl bg-gradient-to-b from-[#FFFDF8] via-[#FBF3E2] to-[#F3E2C3] text-[#4A0815] border-2 border-[#B8860B] shadow-[0_20px_50px_rgba(61,11,17,0.6)] p-3 sm:p-5 flex flex-col items-center justify-between text-center overflow-hidden"
            >
              <div className="absolute inset-1.5 border border-[#B8860B]/50 rounded-lg pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[10px] sm:text-xs font-serif font-bold tracking-[0.14em] text-[#7A1824]">
                  ॥ ఓం శ్రీ గణేశాయ నమః ॥
                </span>
                <LordGaneshaArtwork size={54} className="my-0.5" />
                <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.18em] text-[#6B1020] font-sans font-semibold">
                  Subha Vivaha Mahotsavam
                </p>
              </div>

              <div className="relative z-10 my-0.5">
                <h2 className="font-display text-xl sm:text-3xl font-bold text-[#6B1020] tracking-wider">
                  {data.bride.firstName}{' '}
                  <span className="text-[#B8860B] font-script font-normal">&amp;</span>{' '}
                  {data.groom.firstName}
                </h2>
                <p className="mt-0.5 text-[10px] sm:text-xs font-serif font-semibold text-[#4A2C11]">
                  {data.bride.fullName} &amp; {data.groom.fullName}
                </p>
              </div>

              <div className="relative z-10 w-full pt-1.5 border-t border-[#B8860B]/50 flex items-center justify-between text-[9px] sm:text-[11px] font-sans font-bold text-[#6B1020]">
                <span>Dec 12, 2026 • 7:29 PM</span>
                <span className="text-[#B8860B]">•</span>
                <span>ASR Convention, Guntur</span>
              </div>
            </motion.div>

            {/* 3. ENVELOPE FRONT POCKET */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
              style={{ zIndex: 25 }}
            >
              <svg
                viewBox="0 0 600 412"
                preserveAspectRatio="none"
                className="w-full h-full drop-shadow-[0_-8px_20px_rgba(61,11,17,0.45)]"
              >
                <defs>
                  <linearGradient id="envPocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5E6C8" />
                    <stop offset="50%" stopColor="#EAD4AE" />
                    <stop offset="100%" stopColor="#DEC092" />
                  </linearGradient>
                  <linearGradient id="envBottomGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#FBF3E4" />
                    <stop offset="45%" stopColor="#F0DEC0" />
                    <stop offset="100%" stopColor="#DFC496" />
                  </linearGradient>
                  <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B6508" />
                    <stop offset="50%" stopColor="#D4AF62" />
                    <stop offset="100%" stopColor="#8B6508" />
                  </linearGradient>
                </defs>

                <polygon
                  points="0,0 290,215 0,412"
                  fill="url(#envPocketGrad)"
                  stroke="url(#goldTrim)"
                  strokeWidth="2.5"
                />
                <polygon
                  points="600,0 310,215 600,412"
                  fill="url(#envPocketGrad)"
                  stroke="url(#goldTrim)"
                  strokeWidth="2.5"
                />
                <polygon
                  points="0,412 300,195 600,412"
                  fill="url(#envBottomGrad)"
                  stroke="url(#goldTrim)"
                  strokeWidth="3"
                />
                <polyline
                  points="18,402 300,208 582,402"
                  fill="none"
                  stroke="#8B6508"
                  strokeWidth="1.2"
                  strokeDasharray="5 5"
                  opacity="0.65"
                />
              </svg>

              <GoldCornerOrnament position="top-left" className="absolute top-2 left-2 opacity-90" />
              <GoldCornerOrnament position="top-right" className="absolute top-2 right-2 opacity-90" />
              <GoldCornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-90" />
              <GoldCornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-90" />

              {/* Prominent Couple Names & Wedding Date Plaque on the Envelope Front */}
              <div className="absolute inset-x-0 bottom-2 sm:bottom-3.5 flex flex-col items-center justify-center text-center px-2.5 sm:px-3">
                <div className="px-3.5 sm:px-7 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-b from-[#7A1824] via-[#5C0C16] to-[#3D0711] border border-[#D4AF62] sm:border-2 shadow-[0_8px_22px_rgba(61,11,17,0.6)]">
                  <p className="text-[8px] sm:text-[10px] font-sans uppercase tracking-[0.2em] text-[#FCF6BA] mb-0.5">
                    శుభ వివాహ ఆహ్వాన పత్రిక
                  </p>
                  <h1 className="font-display text-base sm:text-2xl font-bold text-gold-foil tracking-widest" style={{ fontVariantLigatures: 'none' }}>
                    {data.bride.firstName} &amp; {data.groom.firstName}
                  </h1>
                  <div className="mt-0.5 sm:mt-1 flex items-center justify-center gap-1.5 sm:gap-2 text-[9px] sm:text-xs font-serif tracking-[0.1em] text-[#FFF8EA]">
                    <span className="h-[1px] w-3 sm:w-4 bg-[#D4AF62]" />
                    <span>Dec 12th, Sat • 7:29 PM</span>
                    <span className="h-[1px] w-3 sm:w-4 bg-[#D4AF62]" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. 3D TOP HINGED ENVELOPE FLAP */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{
                rotateX: isFlapOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d',
                zIndex: isFlapOpen ? 10 : 30,
              }}
              className="absolute inset-x-0 top-0 h-[58%] pointer-events-none"
            >
              <svg
                viewBox="0 0 600 245"
                preserveAspectRatio="none"
                className="w-full h-full drop-shadow-[0_14px_22px_rgba(61,11,17,0.45)]"
              >
                <defs>
                  <linearGradient id="topFlapGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#5C0C16" />
                    <stop offset="60%" stopColor="#7A1824" />
                    <stop offset="100%" stopColor="#8F192E" />
                  </linearGradient>
                  <linearGradient id="flapGoldEdge" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9C7A32" />
                    <stop offset="50%" stopColor="#FCF6BA" />
                    <stop offset="100%" stopColor="#9C7A32" />
                  </linearGradient>
                </defs>

                <path
                  d="M0,0 L600,0 L600,12 L325,228 C308,240 292,240 275,228 L0,12 Z"
                  fill="url(#topFlapGrad)"
                  stroke="url(#flapGoldEdge)"
                  strokeWidth="3.5"
                />
                <path
                  d="M24,8 L576,8 L318,210 C305,220 295,220 282,210 Z"
                  fill="none"
                  stroke="#FCF6BA"
                  strokeWidth="1.2"
                  strokeDasharray="6 4"
                  opacity="0.75"
                />
              </svg>

              {/* Embossed Royal Gold Wax Seal — Centered via flex wrapper so Framer scale never shifts it */}
              <div className="absolute inset-x-0 bottom-1 flex justify-center pointer-events-none">
                <motion.div
                  animate={
                    stage !== 'idle'
                      ? { scale: 0.7, opacity: 0 }
                      : { scale: [1, 1.05, 1], opacity: 1 }
                  }
                  transition={{
                    duration: stage !== 'idle' ? 0.35 : 2.8,
                    repeat: stage === 'idle' ? Infinity : 0,
                  }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FCF6BA] via-[#D4AF62] to-[#8A5A10] p-1 shadow-[0_8px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,98,0.75)] flex items-center justify-center border-2 border-[#FFF8EA]"
                >
                  <div className="w-full h-full rounded-full border border-[#6B1020]/60 bg-gradient-to-br from-[#D4AF62] to-[#9C7A32] flex flex-col items-center justify-center text-[#3D0711]">
                    <span className="text-[9px] font-serif font-bold leading-none">ఓం</span>
                    <span className="font-display text-xs font-black tracking-tighter">
                      G &amp; M
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Single-Line Aligned "Open Wedding Invitation" Button & Flanking Diyas */}
        <div className="relative z-20 w-full flex flex-row items-center justify-center gap-2.5 sm:gap-5 whitespace-nowrap">
          <div className="flex-shrink-0 flex items-center justify-center">
            <AnimatedDiya size={40} isLit={true} />
          </div>

          <motion.button
            type="button"
            onClick={triggerOpenEnvelope}
            disabled={stage !== 'idle'}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex flex-row items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#7A1824] via-[#8F192E] to-[#6B1020] text-[#FCF6BA] font-display font-bold text-xs sm:text-base tracking-wider shadow-[0_10px_30px_rgba(122,24,36,0.45)] hover:shadow-[0_14px_40px_rgba(122,24,36,0.65)] border-2 border-[#D4AF62] transition-all cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-[#FCF6BA] flex-shrink-0" />
            <span className="whitespace-nowrap">
              {stage === 'idle'
                ? 'Open Wedding Invitation 💌'
                : 'Unfolding Invitation...'}
            </span>
          </motion.button>

          <div className="flex-shrink-0 flex items-center justify-center">
            <AnimatedDiya size={40} isLit={true} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
