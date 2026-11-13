import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Flame, ExternalLink } from 'lucide-react';
import { WeddingData, WeddingThemeId } from '../data/weddingData';
import {
  LordGaneshaArtwork,
  AnimatedDiya,
  MandalaDivider,
} from './OrnamentalSVGs';
import { soundEngine } from '../utils/soundEngine';

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
  const [litDiyas, setLitDiyas] = useState<boolean[]>([true, true, true, true, true]);
  const [blessingsCount, setBlessingsCount] = useState<number>(108);

  const handleOfferDiyaBlessing = (index: number) => {
    soundEngine.playTempleBellChime();
    setLitDiyas((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
    setBlessingsCount((prev) => prev + 1);
  };

  return (
    <section
      id="invitation-top"
      className="relative w-full pt-4 sm:pt-10 pb-12 px-2 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* THE ROYAL SOUTH INDIAN TEMPLE WEDDING INVITATION SCROLL — FULL CLARITY & PROPORTIONAL ALIGNMENT */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-[740px] mx-auto rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-[#D4AF62] via-[#8B6508] to-[#B8860B] shadow-[0_25px_80px_rgba(61,11,17,0.32)]"
      >
        <div
          className="relative rounded-[20px] overflow-hidden text-center"
          style={{
            backgroundColor: '#F7EFE1',
          }}
        >
          {/* Top Temple Arch, Jasmine Garlands & Bells — Native Aspect Ratio, Zero Zoom/Stretch */}
          <div
            className="w-full aspect-[682/245] bg-top bg-no-repeat relative pointer-events-none"
            style={{
              backgroundImage: `url('./backgrounds/temple-arch-kalash.jpg')`,
              backgroundSize: '100% auto',
            }}
          >
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#F7EFE1] to-transparent" />
          </div>

          {/* Center Parchment Content Area — Expands Cleanly on Any Screen Size */}
          <div className="relative px-4 sm:px-14 -mt-10 sm:-mt-16 z-10">
            {/* Subtle Gold Side Frame Lines Matching the Temple Arch */}
            <div className="hidden sm:block absolute inset-y-0 left-10 right-10 border-x border-[#B8860B]/35 pointer-events-none" />
          {/* 1. DEVOTIONAL LORD GANESHA PRESENTATION */}
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

          <MandalaDivider className="my-4" />

          {/* 2. PARENTS' BLESSINGS & ROYAL INVITATION PROCLAMATION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="relative z-10 max-w-xl mx-auto space-y-3"
          >
            <p className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#7A1824]">
              With the Divine Blessings of Lord Ganesha &amp; Our Revered Elders
            </p>

            {/* Parents' Names Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 px-4 rounded-2xl bg-[#FFFDF8]/85 border border-[#B8860B]/45 shadow-sm">
              <div className="text-center sm:border-r border-[#B8860B]/35 sm:pr-3">
                <p className="text-[10px] uppercase tracking-widest text-[#8B6508] font-sans font-bold">
                  Groom’s Parents
                </p>
                <p className="font-serif text-sm sm:text-base font-bold text-[#4A0815] mt-0.5">
                  {data.groom.parents.father}
                </p>
                <p className="font-serif text-sm sm:text-base font-bold text-[#4A0815]">
                  {data.groom.parents.mother}
                </p>
              </div>
              <div className="text-center sm:pl-3">
                <p className="text-[10px] uppercase tracking-widest text-[#8B6508] font-sans font-bold">
                  Bride’s Parents
                </p>
                <p className="font-serif text-sm sm:text-base font-bold text-[#4A0815] mt-0.5">
                  {data.bride.parents.father}
                </p>
                <p className="font-serif text-sm sm:text-base font-bold text-[#4A0815]">
                  {data.bride.parents.mother}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-lg font-serif italic font-semibold text-[#3D0B11]">
              Cordially request the honour of your gracious presence with family and friends on the
              auspicious occasion of the wedding ceremony of
            </p>
          </motion.div>

          {/* 3. BRIDE & GROOM ROYAL NAMES IN TEMPLE CRIMSON & GOLD TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="relative z-10 my-5 py-5 px-4 sm:px-6 rounded-2xl bg-[#FFFDF8]/90 border-2 border-[#B8860B]/55 shadow-sm max-w-xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
              {/* Groom Block */}
              <div className="text-center flex-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#7A1824]/10 border border-[#7A1824]/25 text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-[#7A1824]">
                  The Groom
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-temple-crimson tracking-wide mt-1.5">
                  {data.groom.firstName}
                </h1>
                <p className="text-xs sm:text-sm font-serif font-bold text-[#4A2C11] mt-0.5">
                  Chi. {data.groom.fullName}
                </p>
              </div>

              {/* Weds Emblem */}
              <div className="my-1 md:my-0 flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-[#D4AF62] bg-gradient-to-br from-[#7A1824] to-[#4A0815] flex items-center justify-center shadow-md">
                  <span className="font-script text-xl sm:text-2xl text-[#FCF6BA]">weds</span>
                </div>
              </div>

              {/* Bride Block */}
              <div className="text-center flex-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#7A1824]/10 border border-[#7A1824]/25 text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-[#7A1824]">
                  The Bride
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-temple-crimson tracking-wide mt-1.5">
                  {data.bride.firstName}
                </h1>
                <p className="text-xs sm:text-sm font-serif font-bold text-[#4A2C11] mt-0.5">
                  Chi. La. Sow. {data.bride.fullName}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. KEY AUSPICIOUS WEDDING & RECEPTION SUMMARY BADGES */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto my-5">
            {/* Sumuhurtham Badge */}
            <div className="p-3.5 rounded-2xl bg-[#FFFDF8]/90 border border-[#B8860B]/50 shadow-sm flex flex-col items-center justify-between">
              <div className="flex flex-col items-center">
                <Calendar className="w-4 h-4 text-[#7A1824] mb-1" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Subh Muhurtham
                </span>
                <p className="font-serif text-sm sm:text-base font-bold text-[#4A0815] mt-0.5">
                  Dec 12th, Saturday
                </p>
                <p className="text-xs font-sans font-bold text-[#7A1824] mt-0.5">
                  7:29 PM IST
                </p>
              </div>
              <span className="text-[11px] font-serif text-[#5C3A10] mt-1">
                12th December 2026
              </span>
            </div>

            {/* Wedding Venue Badge */}
            <div className="p-3.5 rounded-2xl bg-[#FFFDF8]/90 border border-[#B8860B]/50 shadow-sm flex flex-col items-center justify-between">
              <div className="flex flex-col items-center">
                <MapPin className="w-4 h-4 text-[#7A1824] mb-1" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Wedding Venue
                </span>
                <p className="font-serif text-sm sm:text-base font-bold text-[#4A0815] mt-0.5">
                  ASR Convention
                </p>
                <span className="text-[11px] font-sans font-medium text-[#5C3A10]">
                  Lalpuram, Guntur
                </span>
              </div>
              <a
                href={data.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7A1824] hover:bg-[#5C0C16] text-[#FCF6BA] text-[11px] font-sans font-semibold transition-colors shadow-sm"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Reception Venue Badge */}
            <div className="p-3.5 rounded-2xl bg-[#FFFDF8]/90 border border-[#B8860B]/50 shadow-sm flex flex-col items-center justify-between">
              <div className="flex flex-col items-center">
                <Sparkles className="w-4 h-4 text-[#7A1824] mb-1" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Reception
                </span>
                <p className="font-serif text-sm sm:text-base font-bold text-[#4A0815] mt-0.5">
                  Raja Rani Hall
                </p>
                <span className="text-[11px] font-sans font-semibold text-[#7A1824]">
                  Dec 14 • 11 AM • Jangareddygudem
                </span>
              </div>
              <a
                href={data.receptionVenue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#7A1824] hover:bg-[#5C0C16] text-[#FCF6BA] text-[11px] font-sans font-semibold transition-colors shadow-sm"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 5. INTERACTIVE CEREMONIAL DIYAS — OFFER A BLESSING */}
          <div className="relative z-10 mt-5 pt-3.5 px-4 pb-3 rounded-2xl bg-[#5C0C16]/95 border border-[#D4AF62] max-w-md mx-auto shadow-md">
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-sans uppercase tracking-wider text-[#FCF6BA]">
              <Flame className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Tap Any Sacred Diya to Offer Blessings</span>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-6 my-2">
              {litDiyas.map((isLit, idx) => (
                <AnimatedDiya
                  key={idx}
                  size={44}
                  isLit={isLit}
                  onClick={() => handleOfferDiyaBlessing(idx)}
                />
              ))}
            </div>

            <p className="text-[11px] font-serif text-[#FCF6BA]">
              ✨ <strong className="text-white">{blessingsCount}</strong> Auspicious Diya
              Blessings Offered for {data.groom.firstName} &amp; {data.bride.firstName}
            </p>
          </div>
          </div>

          {/* Bottom Temple Brass Lamps, Lotus Urli, Kalash & Kolam — Native Aspect Ratio, Zero Zoom/Stretch */}
          <div
            className="w-full aspect-[682/290] bg-bottom bg-no-repeat relative -mt-6 sm:-mt-10 pointer-events-none"
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
