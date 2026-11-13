import React from 'react';
import { motion } from 'framer-motion';
import { WeddingData, WeddingThemeId } from '../data/weddingData';
import { FloralToranGarland, LordGaneshaArtwork } from './OrnamentalSVGs';

interface MainInvitationHeroProps {
  data: WeddingData;
  activeTheme: WeddingThemeId;
  onSelectTheme: (theme: WeddingThemeId) => void;
  onReplayEnvelope: () => void;
}

export const MainInvitationHero: React.FC<MainInvitationHeroProps> = ({
  data,
  activeTheme,
}) => {
  const theme = data.themes[activeTheme];

  return (
    <section
      id="invitation-top"
      className="relative w-full pt-0 pb-6 px-2.5 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Traditional Mango Leaves & Marigold Flower Toran at Top */}
      <div className="relative z-30 -mx-2.5 sm:-mx-6 lg:-mx-8 mb-2">
        <FloralToranGarland />
      </div>

      {/* Devotional Lord Ganesha Header Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-20 max-w-[680px] mx-auto rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-[#D4AF62] via-[#8B6508] to-[#B8860B] shadow-[0_25px_80px_rgba(61,11,17,0.3)]"
      >
        <div
          className="relative rounded-[20px] overflow-hidden text-center"
          style={{
            backgroundColor: '#F7EFE1',
          }}
        >
          {/* Top Temple Arch, Jasmine Garlands & Bells */}
          <div
            className="w-full aspect-[682/245] bg-top bg-no-repeat relative pointer-events-none"
            style={{
              backgroundImage: `url('./backgrounds/temple-arch-kalash.jpg')`,
              backgroundSize: '100% auto',
            }}
          >
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#F7EFE1] to-transparent" />
          </div>

          {/* Center Devotional Lord Ganesha Presentation */}
          <div className="relative px-4 sm:px-12 -mt-10 sm:-mt-16 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#7A1824] border border-[#D4AF62] text-[11px] sm:text-xs font-serif font-semibold tracking-[0.14em] text-[#FCF6BA] mb-2.5 shadow-sm">
                <span>{theme.invocation}</span>
              </div>

              <div className="p-1.5 rounded-full bg-[#7A1824] border-2 border-[#D4AF62] shadow-[0_8px_24px_rgba(122,24,36,0.3)]">
                <LordGaneshaArtwork size={105} />
              </div>

              <div className="mt-4 px-5 py-3.5 rounded-2xl bg-gradient-to-br from-[#FFFDF7] via-[#FDF4DC] to-[#F7E7B8] border-2 border-[#D4AF62] shadow-[0_8px_24px_rgba(122,24,36,0.12)] max-w-lg">
                <p className="text-xs sm:text-sm font-serif italic font-bold text-[#6B1020] leading-relaxed">
                  “Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvada”
                </p>
                <div className="my-2 flex items-center justify-center gap-2">
                  <span className="h-[1px] w-8 bg-[#B8860B]/60" />
                  <span className="text-[#B8860B] text-xs">✦</span>
                  <span className="h-[1px] w-8 bg-[#B8860B]/60" />
                </div>
                <span className="block text-[11px] sm:text-xs font-sans font-extrabold uppercase tracking-[0.16em] text-[#7A1824]">
                  {theme.invocationMeaning}
                </span>
              </div>

              {/* Highlighted Geetha weds Mahesh Centerpiece */}
              <div className="mt-5 px-6 sm:px-10 py-4 rounded-2xl bg-gradient-to-r from-[#5C0C16] via-[#7A1824] to-[#5C0C16] border-2 border-[#D4AF62] shadow-[0_12px_32px_rgba(92,12,22,0.32)] relative overflow-hidden">
                <div className="absolute inset-1 border border-[#FCF6BA]/35 rounded-xl pointer-events-none" />
                <p className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.26em] text-[#FCF6BA]/90 mb-1">
                  శుభ వివాహ ఆహ్వానము • Subha Vivaham
                </p>
                <h1 className="font-display text-2xl sm:text-4xl font-bold text-gold-foil tracking-wider flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                  <span>{data.bride.firstName}</span>
                  <span className="font-script text-xl sm:text-3xl text-[#FCF6BA] font-normal lowercase">weds</span>
                  <span className="tracking-wider">{data.groom.firstName}</span>
                </h1>
              </div>
            </motion.div>
          </div>

          {/* Bottom Temple Brass Lamps, Lotus Urli, Kalash & Kolam */}
          <div
            className="w-full aspect-[682/290] bg-bottom bg-no-repeat relative -mt-4 sm:-mt-8 pointer-events-none"
            style={{
              backgroundImage: `url('./backgrounds/temple-arch-kalash.jpg')`,
              backgroundSize: '100% auto',
            }}
          >
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#F7EFE1] to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
