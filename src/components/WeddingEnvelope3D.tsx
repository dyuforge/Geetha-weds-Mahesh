import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { WeddingData, WeddingThemeId } from '../data/weddingData';
import {
  LordGaneshaArtwork,
  AnimatedDiya,
  FloralToranGarland,
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
  activeTheme,
  onOpenComplete,
}) => {
  const [stage, setStage] = useState<EnvelopeStage>('idle');
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const currentTheme = data.themes[activeTheme];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (stage !== 'idle') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: -y * 12,
      rotateY: x * 14,
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
    }, 380);

    window.setTimeout(() => {
      setStage('card-emerge');
    }, 1050);

    window.setTimeout(() => {
      onOpenComplete();
    }, 2650);
  };

  const isFlapOpen = stage === 'flap-open' || stage === 'card-emerge';
  const isCardEmerging = stage === 'card-emerge';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(8px)' }}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
      className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden py-4 px-4 sm:px-6 select-none bg-[#F5E9D4]"
    >
      {/* Full-Screen Reference Temple Courtyard & Gopuram Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url('${currentTheme.bgImage}')`,
        }}
      />

      {/* Soft Warm Parchment Radial Vignette for Crisp Readability while Preserving Pillars, Lamps & Lotuses */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 48%, rgba(247, 239, 225, 0.45) 0%, rgba(245, 233, 212, 0.62) 55%, rgba(232, 213, 181, 0.78) 100%)',
        }}
      />

      {/* Top Traditional Floral Toran Garland */}
      <div className="w-full fixed top-0 left-0 right-0 z-20 pointer-events-none">
        <FloralToranGarland />
      </div>

      {/* Top Sacred Invocation in Telugu */}
      <div className="relative z-20 mt-14 sm:mt-20 flex flex-col items-center text-center px-4 py-2 rounded-2xl bg-[#FBF5E8]/85 border border-[#B8860B]/40 shadow-sm backdrop-blur-sm">
        <motion.p
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg font-serif font-bold tracking-[0.16em] text-[#7A1824]"
        >
          ॥ ఓం శ్రీ గణేశాయ నమః ॥
        </motion.p>
        <p className="text-xs sm:text-sm text-[#5C3A10] font-serif font-semibold tracking-wider mt-0.5">
          Sriramula &amp; Rangu Families Cordially Invite You
        </p>
      </div>

      {/* Center 3D Interactive Wedding Envelope Stage */}
      <div
        className="relative z-20 my-auto py-6 sm:py-10 w-full max-w-[580px] flex flex-col items-center justify-center perspective-2000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={{
            rotateX: isCardEmerging ? 8 : tilt.rotateX,
            rotateY: isCardEmerging ? 0 : tilt.rotateY,
            y: isCardEmerging ? 85 : 0,
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
          aria-label="Open Your Wedding Invitation Envelope"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              triggerOpenEnvelope();
            }
          }}
          className="relative w-full aspect-[16/11] max-w-[540px] cursor-pointer preserve-3d group"
        >
          {/* 1. Envelope Back Plate & Warm Temple Shadow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6B1020] via-[#7A1824] to-[#4A0815] border-2 border-[#D4AF62] shadow-[0_28px_70px_rgba(61,11,17,0.55),0_0_40px_rgba(184,134,11,0.35)] overflow-hidden">
            {/* Inner Silk Brocade Lining */}
            <div className="absolute inset-2 rounded-xl border border-[#D4AF62]/40 bg-gradient-to-b from-[#8F192E] via-[#6B1020] to-[#4A0815] bg-brocade-pattern" />
          </div>

          {/* 2. THE EMERGING WEDDING INVITATION CARD INSIDE THE ENVELOPE */}
          <motion.div
            initial={{ y: 10, scale: 0.9, opacity: 0.95 }}
            animate={
              isCardEmerging
                ? {
                    y: -165,
                    scale: 1.03,
                    opacity: 1,
                    rotateX: -4,
                  }
                : isFlapOpen
                ? {
                    y: -30,
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
              duration: 1.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              zIndex: isCardEmerging ? 35 : 15,
              backgroundImage: `url('./backgrounds/temple-arch-kalash.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="absolute inset-x-4 sm:inset-x-7 top-3 bottom-3 rounded-xl text-[#4A0815] border-2 border-[#B8860B] shadow-[0_20px_50px_rgba(61,11,17,0.65)] p-4 sm:p-6 flex flex-col items-center justify-between text-center overflow-hidden"
          >
            {/* Warm Parchment Overlay inside Emerging Card */}
            <div className="absolute inset-0 bg-[#FBF5E8]/80 pointer-events-none" />
            <div className="absolute inset-2 border border-[#B8860B]/60 rounded-lg pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="text-[11px] sm:text-xs font-serif font-bold tracking-[0.15em] text-[#7A1824]">
                ॥ ఓం శ్రీ గణేశాయ నమః ॥
              </span>
              <LordGaneshaArtwork size={64} className="my-0.5" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B1020] font-sans font-semibold">
                Subha Vivaha Mahotsavam
              </p>
            </div>

            <div className="relative z-10 my-1">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#6B1020] tracking-wide">
                {data.groom.firstName}{' '}
                <span className="text-[#B8860B] font-script font-normal">&amp;</span>{' '}
                {data.bride.firstName}
              </h2>
              <p className="mt-0.5 text-[11px] sm:text-xs font-serif font-semibold text-[#4A2C11]">
                {data.groom.fullName} &amp; {data.bride.fullName}
              </p>
            </div>

            <div className="relative z-10 w-full pt-2 border-t border-[#B8860B]/60 flex items-center justify-between text-[10px] sm:text-xs font-sans font-bold text-[#6B1020]">
              <span>Dec 12, 2026 • 7:29 PM</span>
              <span className="text-[#B8860B]">•</span>
              <span>ASR Convention, Guntur</span>
            </div>
          </motion.div>

          {/* 3. ENVELOPE FRONT POCKET (Warm Sandstone Parchment & Royal Crimson/Gold Flap) */}
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

              {/* Side Flaps in Warm Temple Sandstone Parchment */}
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

              {/* Bottom Royal Parchment Flap */}
              <polygon
                points="0,412 300,195 600,412"
                fill="url(#envBottomGrad)"
                stroke="url(#goldTrim)"
                strokeWidth="3"
              />

              {/* Subtle Gold Foil Inner Seam Lines */}
              <polyline
                points="18,402 300,208 582,402"
                fill="none"
                stroke="#8B6508"
                strokeWidth="1.2"
                strokeDasharray="5 5"
                opacity="0.65"
              />
            </svg>

            {/* Four Gold Zardozi Filigree Corners on Envelope Front */}
            <GoldCornerOrnament position="top-left" className="absolute top-2 left-2 opacity-90" />
            <GoldCornerOrnament position="top-right" className="absolute top-2 right-2 opacity-90" />
            <GoldCornerOrnament position="bottom-left" className="absolute bottom-2 left-2 opacity-90" />
            <GoldCornerOrnament position="bottom-right" className="absolute bottom-2 right-2 opacity-90" />

            {/* Prominent Couple Names & Wedding Date Plaque on the Envelope Front */}
            <div className="absolute inset-x-0 bottom-3 sm:bottom-5 flex flex-col items-center justify-center text-center px-4">
              <div className="px-6 sm:px-10 py-3 sm:py-3.5 rounded-xl bg-gradient-to-b from-[#7A1824] via-[#5C0C16] to-[#3D0711] border-2 border-[#D4AF62] shadow-[0_10px_28px_rgba(61,11,17,0.6),0_0_20px_rgba(212,175,98,0.35)]">
                <p className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#FCF6BA] mb-0.5">
                  శుభ వివాహ ఆహ్వాన పత్రిక
                </p>
                {/* Bride & Groom Names Prominently on the Envelope */}
                <h1 className="font-display text-2xl sm:text-4xl font-bold text-gold-foil tracking-wider">
                  {data.groom.firstName} &amp; {data.bride.firstName}
                </h1>
                {/* Wedding Date Elegantly Below Their Names */}
                <div className="mt-1 flex items-center justify-center gap-2 text-xs sm:text-sm font-serif tracking-[0.14em] text-[#FFF8EA]">
                  <span className="h-[1px] w-5 bg-[#D4AF62]" />
                  <span>Dec 12th, Saturday • 7:29 PM</span>
                  <span className="h-[1px] w-5 bg-[#D4AF62]" />
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
              duration: 0.85,
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

              {/* Royal Scalloped / Pointed Envelope Flap */}
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

            {/* Embossed Royal Gold Wax Seal at Tip of the Flap */}
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
              className="absolute left-1/2 -translate-x-1/2 bottom-1 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#FCF6BA] via-[#D4AF62] to-[#8A5A10] p-1 shadow-[0_8px_25px_rgba(0,0,0,0.6),0_0_25px_rgba(212,175,98,0.75)] flex items-center justify-center border-2 border-[#FFF8EA]"
            >
              <div className="w-full h-full rounded-full border border-[#6B1020]/60 bg-gradient-to-br from-[#D4AF62] to-[#9C7A32] flex flex-col items-center justify-center text-[#3D0711]">
                <span className="text-[10px] font-serif font-bold leading-none">ఓం</span>
                <span className="font-display text-xs sm:text-sm font-black tracking-tighter">
                  M &amp; G
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Prominent "Open Your Invitation 💌" Interactive Button + Flanking Diyas */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-8">
          <AnimatedDiya size={54} isLit={true} />

          <motion.button
            type="button"
            onClick={triggerOpenEnvelope}
            disabled={stage !== 'idle'}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative group px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#7A1824] via-[#8F192E] to-[#6B1020] text-[#FCF6BA] font-display font-bold text-sm sm:text-lg tracking-wider shadow-[0_12px_35px_rgba(122,24,36,0.45)] hover:shadow-[0_15px_45px_rgba(122,24,36,0.65)] border-2 border-[#D4AF62] transition-all cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FCF6BA]" />
              <span>
                {stage === 'idle'
                  ? 'Open Wedding Invitation 💌'
                  : 'Unfolding Sacred Invitation...'}
              </span>
            </span>
          </motion.button>

          <AnimatedDiya size={54} isLit={true} />
        </div>

        <p className="mt-3 px-4 py-1 rounded-full bg-[#FBF5E8]/85 border border-[#B8860B]/30 text-xs font-sans font-semibold text-[#5C3A10] tracking-wider uppercase text-center shadow-sm">
          Tap the royal envelope or button above • Traditional Nadaswaram music starts on open
        </p>
      </div>
    </motion.section>
  );
};
