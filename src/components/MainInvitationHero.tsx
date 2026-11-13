import React from 'react';
import { motion } from 'framer-motion';
import { WeddingData, WeddingThemeId } from '../data/weddingData';
import { LordGaneshaArtwork } from './OrnamentalSVGs';

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
      className="relative w-full pt-4 sm:pt-8 pb-6 px-2.5 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Devotional Lord Ganesha Header Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
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

              <p className="mt-2.5 text-xs sm:text-sm font-serif italic font-semibold text-[#5C0C16] max-w-md">
                “Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvada”
              </p>
              <span className="mt-0.5 text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-[#8B6508]">
                {theme.invocationMeaning}
              </span>
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
