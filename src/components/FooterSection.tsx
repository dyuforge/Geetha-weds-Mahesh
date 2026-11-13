import React from 'react';
import { Heart } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { IndianBrideIcon, IndianGroomIcon, MandalaDivider, PalaceSilhouetteParallax } from './OrnamentalSVGs';

interface FooterSectionProps {
  data: WeddingData;
  onUpdateData: (updated: WeddingData) => void;
  onReplayEnvelope: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ data }) => {
  return (
    <footer className="relative z-20 mt-10 border-t-2 border-[#B8860B] bg-gradient-to-b from-[#4A0815] via-[#3D0711] to-[#240309] text-center overflow-hidden text-[#FFF8EA]">
      <PalaceSilhouetteParallax className="opacity-45" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-10 pt-2 space-y-3.5">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <IndianBrideIcon size={58} />
          <div className="w-20 h-20 rounded-full border-2 border-[#D4AF62] bg-gradient-to-br from-[#7A1824] to-[#3D0711] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(212,175,98,0.4)]">
            <span className="text-[10px] font-serif text-[#FCF6BA]">శుభ వివాహం</span>
            <span className="font-display text-lg font-bold text-gold-foil">
              {data.bride.firstName[0]} &amp; {data.groom.firstName[0]}
            </span>
          </div>
          <IndianGroomIcon size={58} />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-foil tracking-widest" style={{ fontVariantLigatures: 'none' }}>
          {data.bride.firstName} &amp; {data.groom.firstName}
        </h2>
        <p className="text-sm sm:text-base font-serif font-semibold text-[#FCF6BA]">
          {data.bride.fullName} &amp; {data.groom.fullName}
        </p>

        <p className="text-sm sm:text-base font-serif italic text-[#FFF8EA]/85 max-w-xl mx-auto">
          “Two souls with a single thought, two hearts that beat as one — blessed by the divine grace
          of Lord Ganesha and our beloved families.”
        </p>

        <MandalaDivider />

        <div className="space-y-1.5 text-xs sm:text-sm font-serif text-[#F3E5AB]/90">
          <p className="uppercase tracking-[0.25em] text-[#D4AF62] font-sans text-xs">
            With Best Compliments &amp; Warm Regards From
          </p>
          <p className="font-semibold text-base sm:text-lg text-[#FFF8EA]">
            The Rangu &amp; Sriramula Families
          </p>
          <p className="text-xs text-[#FFF8EA]/80">
            Wedding: Dec 12th, Saturday 7:29 PM • {data.venue.name}, Lalpuram, Guntur
          </p>
        </div>

        <div className="pt-3 flex justify-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#3D0711] via-[#590B1A] to-[#3D0711] border border-[#D4AF62]/70 shadow-[0_0_25px_rgba(212,175,98,0.3)] text-sm sm:text-base font-sans text-[#FFF8EA] tracking-wide">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline animate-pulse" />
            <span>
              for <strong className="text-[#FCF6BA] font-semibold">{data.bride.firstName}</strong> and{' '}
              <strong className="text-[#FCF6BA] font-semibold">{data.groom.firstName}</strong> from{' '}
              <a
                href="https://www.dyuforge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gold-foil underline decoration-[#D4AF62] underline-offset-4 hover:opacity-90 transition-opacity"
              >
                DYUFORGE
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
