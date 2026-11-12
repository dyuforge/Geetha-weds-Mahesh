import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Flame, ExternalLink, RotateCcw, Palette } from 'lucide-react';
import { WeddingData, WeddingThemeId } from '../data/weddingData';
import {
  LordGaneshaArtwork,
  AnimatedDiya,
  FloralToranGarland,
  GoldCornerOrnament,
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
  onSelectTheme,
  onReplayEnvelope,
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

  const themeOptions: { id: WeddingThemeId; label: string }[] = [
    { id: 'temple-arch', label: '1. Temple Arch & Kalash' },
    { id: 'gopuram-lotus', label: '2. Temple Gopuram & Lotus' },
    { id: 'courtyard-lamps', label: '3. Temple Courtyard & Lamps' },
  ];

  return (
    <section
      id="invitation-top"
      className="relative min-h-screen w-full pt-14 pb-16 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Top Hanging Floral Toran Garland */}
      <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
        <FloralToranGarland />
      </div>

      {/* Top Reference Background Switcher & Replay Envelope Bar */}
      <div className="relative z-20 max-w-4xl mx-auto mb-5 flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-[#FBF5E8]/90 border border-[#B8860B]/45 shadow-md backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#7A1824] mr-1">
            <Palette className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Temple Backdrop:</span>
          </span>
          {themeOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectTheme(opt.id)}
              className={`px-3 py-1 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
                activeTheme === opt.id
                  ? 'bg-[#7A1824] text-[#FCF6BA] border border-[#D4AF62] shadow-sm'
                  : 'bg-[#EAD7B7]/60 text-[#4A2C11] hover:bg-[#EAD7B7] border border-[#B8860B]/30'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onReplayEnvelope}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-semibold bg-[#F3E3C6] hover:bg-[#E6CFA6] text-[#5C0C16] border border-[#B8860B]/40 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay Envelope</span>
        </button>
      </div>

      {/* THE ROYAL SOUTH INDIAN TEMPLE WEDDING INVITATION PARCHMENT / SCROLL */}
      <motion.div
        initial={{ opacity: 0, y: 45, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-4xl mx-auto rounded-3xl p-1.5 sm:p-2.5 bg-gradient-to-b from-[#D4AF62] via-[#8B6508] to-[#B8860B] shadow-[0_30px_90px_rgba(61,11,17,0.4),0_0_50px_rgba(184,134,11,0.3)]"
      >
        <div
          className="relative rounded-[22px] px-4 py-12 sm:px-14 sm:py-20 text-center overflow-hidden"
          style={{
            backgroundColor: theme.primaryBg,
          }}
        >
          {/* Authentic Reference Temple Image Background Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 pointer-events-none"
            style={{
              backgroundImage: `url('${theme.bgImage}')`,
            }}
          />

          {/* Soft Center Parchment Veil so the Edge Pillars, Garlands, Gopuram, Lamps & Lotuses Frame the Text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 48%, rgba(251, 245, 232, 0.9) 0%, rgba(248, 239, 222, 0.78) 54%, rgba(245, 232, 208, 0.25) 100%)',
            }}
          />

          {/* Inner Double Gold Filigree Frame */}
          <div className="absolute inset-3 sm:inset-5 border-2 border-[#B8860B]/55 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-6 border border-[#7A1824]/25 rounded-xl pointer-events-none" />

          {/* Four Ornate Gold Corners */}
          <GoldCornerOrnament position="top-left" className="absolute top-3 left-3 sm:top-5 sm:left-5" />
          <GoldCornerOrnament position="top-right" className="absolute top-3 right-3 sm:top-5 sm:right-5" />
          <GoldCornerOrnament position="bottom-left" className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5" />
          <GoldCornerOrnament position="bottom-right" className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5" />

          {/* 1. DEVOTIONAL LORD GANESHA PRESENTATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#7A1824] border border-[#D4AF62] text-xs sm:text-sm font-serif font-semibold tracking-[0.18em] text-[#FCF6BA] mb-3 shadow-md">
              <span>{theme.invocation}</span>
            </div>

            <div className="p-2 rounded-full bg-[#7A1824]/90 border-2 border-[#D4AF62] shadow-[0_10px_30px_rgba(122,24,36,0.35)]">
              <LordGaneshaArtwork size={135} />
            </div>

            <p className="mt-3 text-xs sm:text-sm font-serif italic font-semibold text-[#5C0C16] max-w-md">
              “Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvada”
            </p>
            <span className="mt-1 text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#8B6508]">
              {theme.invocationMeaning}
            </span>
          </motion.div>

          <MandalaDivider />

          {/* 2. PARENTS' BLESSINGS & ROYAL INVITATION PROCLAMATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative z-10 max-w-2xl mx-auto space-y-4"
          >
            <p className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.22em] text-[#7A1824]">
              With the Divine Blessings of Lord Ganesha &amp; Our Revered Elders
            </p>

            {/* Parents' Names Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 pb-4 px-4 rounded-2xl bg-[#FBF6EC]/90 border-2 border-[#B8860B]/45 shadow-sm backdrop-blur-sm">
              <div className="text-center sm:border-r border-[#B8860B]/35 sm:pr-3">
                <p className="text-[11px] uppercase tracking-widest text-[#8B6508] font-sans font-bold">
                  Groom’s Parents
                </p>
                <p className="font-serif text-base sm:text-lg font-bold text-[#4A0815] mt-1">
                  {data.groom.parents.father}
                </p>
                <p className="font-serif text-base sm:text-lg font-bold text-[#4A0815]">
                  {data.groom.parents.mother}
                </p>
              </div>
              <div className="text-center sm:pl-3">
                <p className="text-[11px] uppercase tracking-widest text-[#8B6508] font-sans font-bold">
                  Bride’s Parents
                </p>
                <p className="font-serif text-base sm:text-lg font-bold text-[#4A0815] mt-1">
                  {data.bride.parents.father}
                </p>
                <p className="font-serif text-base sm:text-lg font-bold text-[#4A0815]">
                  {data.bride.parents.mother}
                </p>
              </div>
            </div>

            <p className="text-base sm:text-xl font-serif italic font-semibold text-[#3D0B11] pt-1">
              Cordially request the honour of your gracious presence with family and friends on the
              auspicious occasion of the wedding ceremony of
            </p>
          </motion.div>

          {/* 3. BRIDE & GROOM ROYAL NAMES IN TEMPLE CRIMSON & GOLD TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 my-7 py-6 px-4 sm:px-6 rounded-3xl bg-gradient-to-b from-[#FFFDF8]/95 via-[#FBF3E2]/95 to-[#F5E4C5]/95 border-2 border-[#B8860B]/60 shadow-[0_12px_35px_rgba(74,44,17,0.16)]"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* Groom Block */}
              <div className="text-center flex-1">
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#7A1824]/10 border border-[#7A1824]/25 text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#7A1824]">
                  The Groom (Pelli Koduku)
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-temple-crimson tracking-wide mt-2">
                  {data.groom.firstName}
                </h1>
                <p className="text-sm sm:text-base font-serif font-bold text-[#4A2C11] mt-1">
                  Chi. {data.groom.fullName}
                </p>
                <p className="text-xs font-serif text-[#6E471B] mt-0.5">
                  S/o {data.groom.parents.father} &amp; {data.groom.parents.mother}
                </p>
              </div>

              {/* Weds Emblem */}
              <div className="my-1 md:my-0 flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 rounded-full border-2 border-[#D4AF62] bg-gradient-to-br from-[#7A1824] to-[#4A0815] flex items-center justify-center shadow-[0_6px_20px_rgba(122,24,36,0.4)]">
                  <span className="font-script text-2xl sm:text-3xl text-[#FCF6BA]">weds</span>
                </div>
              </div>

              {/* Bride Block */}
              <div className="text-center flex-1">
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#7A1824]/10 border border-[#7A1824]/25 text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#7A1824]">
                  The Bride (Pelli Kuthuru)
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-temple-crimson tracking-wide mt-2">
                  {data.bride.firstName}
                </h1>
                <p className="text-sm sm:text-base font-serif font-bold text-[#4A2C11] mt-1">
                  Chi. La. Sow. {data.bride.fullName}
                </p>
                <p className="text-xs font-serif text-[#6E471B] mt-0.5">
                  D/o {data.bride.parents.father} &amp; {data.bride.parents.mother}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. KEY AUSPICIOUS WEDDING & RECEPTION SUMMARY BADGES */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto my-6">
            {/* Sumuhurtham Badge */}
            <div className="p-4 rounded-2xl bg-[#FBF6EC]/95 border-2 border-[#B8860B]/50 shadow-sm flex flex-col items-center justify-between">
              <div className="flex flex-col items-center">
                <Calendar className="w-5 h-5 text-[#7A1824] mb-1.5" />
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Subh Muhurtham (Pelli)
                </span>
                <p className="font-serif text-base sm:text-lg font-bold text-[#4A0815] mt-1">
                  Dec 12th, Saturday
                </p>
                <p className="text-sm font-sans font-bold text-[#7A1824] mt-0.5">
                  7:29 PM IST
                </p>
              </div>
              <span className="text-xs font-serif text-[#5C3A10] mt-1">
                12th December 2026
              </span>
            </div>

            {/* Wedding Venue Badge */}
            <div className="p-4 rounded-2xl bg-[#FBF6EC]/95 border-2 border-[#B8860B]/50 shadow-sm flex flex-col items-center justify-between">
              <div className="flex flex-col items-center">
                <MapPin className="w-5 h-5 text-[#7A1824] mb-1.5" />
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Wedding Venue
                </span>
                <p className="font-serif text-base sm:text-lg font-bold text-[#4A0815] mt-1">
                  ASR Convention
                </p>
                <span className="text-xs font-sans font-medium text-[#5C3A10] mt-0.5">
                  Lalpuram, Guntur
                </span>
              </div>
              <a
                href={data.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#7A1824] hover:bg-[#5C0C16] text-[#FCF6BA] text-xs font-sans font-semibold transition-colors shadow-sm"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Reception Venue Badge */}
            <div className="p-4 rounded-2xl bg-[#FBF6EC]/95 border-2 border-[#B8860B]/50 shadow-sm flex flex-col items-center justify-between">
              <div className="flex flex-col items-center">
                <Sparkles className="w-5 h-5 text-[#7A1824] mb-1.5" />
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Vratham &amp; Reception
                </span>
                <p className="font-serif text-base sm:text-lg font-bold text-[#4A0815] mt-1">
                  Raja Rani Function Hall
                </p>
                <span className="text-xs font-sans font-semibold text-[#7A1824] mt-0.5">
                  Dec 14th • 11:00 AM • Jangareddygudem
                </span>
              </div>
              <a
                href={data.receptionVenue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#7A1824] hover:bg-[#5C0C16] text-[#FCF6BA] text-xs font-sans font-semibold transition-colors shadow-sm"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <MandalaDivider />

          {/* 5. INTERACTIVE CEREMONIAL DIYAS — OFFER A BLESSING */}
          <div className="relative z-10 mt-6 pt-4 px-4 pb-3 rounded-2xl bg-[#5C0C16]/90 border-2 border-[#D4AF62] max-w-xl mx-auto shadow-lg">
            <div className="flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-widest text-[#FCF6BA]">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Tap Any Sacred Diya to Offer Your Ashirwad (Blessings)</span>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-8 my-3">
              {litDiyas.map((isLit, idx) => (
                <AnimatedDiya
                  key={idx}
                  size={52}
                  isLit={isLit}
                  onClick={() => handleOfferDiyaBlessing(idx)}
                />
              ))}
            </div>

            <p className="text-xs font-serif text-[#FCF6BA]">
              ✨ <strong className="text-white">{blessingsCount}</strong> Auspicious Diya
              Blessings Offered for {data.groom.firstName} &amp; {data.bride.firstName}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
