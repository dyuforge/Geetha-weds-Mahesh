import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
  Flower2,
  Music,
  Flame,
  Crown,
  ExternalLink,
} from 'lucide-react';
import { WeddingData, CeremonyEvent, SideScheduleItem } from '../data/weddingData';
import { GoldCornerOrnament, MandalaDivider } from './OrnamentalSVGs';

interface WeddingDetailsSectionProps {
  data: WeddingData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const WeddingDetailsSection: React.FC<WeddingDetailsSectionProps> = ({ data }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(data.weddingDate.isoDateTime).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [data.weddingDate.isoDateTime]);

  const renderCeremonyIcon = (iconType: CeremonyEvent['iconType'] | SideScheduleItem['iconType']) => {
    switch (iconType) {
      case 'haldi':
        return <Sun className="w-5 h-5 text-amber-600" />;
      case 'mehendi':
        return <Flower2 className="w-5 h-5 text-emerald-700" />;
      case 'sangeet':
        return <Music className="w-5 h-5 text-purple-700" />;
      case 'muhurtham':
        return <Flame className="w-5 h-5 text-[#7A1824]" />;
      case 'reception':
        return <Crown className="w-5 h-5 text-[#8B6508]" />;
    }
  };

  return (
    <section
      id="wedding-details"
      className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16"
    >
      {/* 1. BRIDE & GROOM ROYAL LINEAGE & PARENTS CARDS */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.28em] text-[#8B6508]">
            Sacred Union of Two Families
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-temple-crimson mt-2">
            The Groom &amp; The Bride
          </h2>
          <MandalaDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl pt-20 pb-36 px-6 sm:px-8 border-2 border-[#B8860B]/70 shadow-[0_20px_50px_rgba(61,11,17,0.18)] overflow-hidden bg-no-repeat bg-center"
            style={{
              backgroundColor: '#F7EFE1',
              backgroundImage: `url('./backgrounds/temple-courtyard-lamps.jpg')`,
              backgroundSize: '100% 100%',
            }}
          >
            <div className="relative z-10 text-center space-y-3 bg-[#FFFDF8]/88 backdrop-blur-[2px] p-5 rounded-2xl border border-[#B8860B]/40 shadow-sm">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-widest bg-[#7A1824] text-[#FCF6BA] border border-[#D4AF62]">
                Pelli Koduku • The Groom
              </span>

              <div className="pt-1">
                <p className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Full Name
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-temple-crimson mt-0.5">
                  {data.groom.fullName}
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5E6C8] border border-[#B8860B]/45">
                <span className="text-xs font-sans font-semibold text-[#5C3A10]">Nick Name:</span>
                <span className="font-display text-base font-bold text-[#7A1824]">
                  {data.groom.firstName}
                </span>
              </div>

              <div className="pt-3 mt-3 border-t border-[#B8860B]/35">
                <p className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Parents
                </p>
                <p className="font-serif text-base sm:text-lg font-bold text-[#3D0B11] mt-1">
                  {data.groom.parents.father}
                </p>
                <p className="font-serif text-base sm:text-lg font-bold text-[#3D0B11]">
                  {data.groom.parents.mother}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.55 }}
            className="relative rounded-3xl pt-20 pb-36 px-6 sm:px-8 border-2 border-[#B8860B]/70 shadow-[0_20px_50px_rgba(61,11,17,0.18)] overflow-hidden bg-no-repeat bg-center"
            style={{
              backgroundColor: '#F7EFE1',
              backgroundImage: `url('./backgrounds/temple-gopuram-lotus.jpg')`,
              backgroundSize: '100% 100%',
            }}
          >
            <div className="relative z-10 text-center space-y-3 bg-[#FFFDF8]/88 backdrop-blur-[2px] p-5 rounded-2xl border border-[#B8860B]/40 shadow-sm">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-widest bg-[#7A1824] text-[#FCF6BA] border border-[#D4AF62]">
                Pelli Kuthuru • The Bride
              </span>

              <div className="pt-1">
                <p className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Full Name
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-temple-crimson mt-0.5">
                  {data.bride.fullName}
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5E6C8] border border-[#B8860B]/45">
                <span className="text-xs font-sans font-semibold text-[#5C3A10]">Nick Name:</span>
                <span className="font-display text-base font-bold text-[#7A1824]">
                  {data.bride.firstName}
                </span>
              </div>

              <div className="pt-3 mt-3 border-t border-[#B8860B]/35">
                <p className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#8B6508]">
                  Parents
                </p>
                <p className="font-serif text-base sm:text-lg font-bold text-[#3D0B11] mt-1">
                  {data.bride.parents.mother}
                </p>
                <p className="font-serif text-base sm:text-lg font-bold text-[#3D0B11]">
                  {data.bride.parents.father}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. LIVE COUNTDOWN TIMER & SUBH MUHURTHAM HIGHLIGHT BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#5C0C16] via-[#7A1824] to-[#5C0C16] border-2 border-[#D4AF62] gold-glow-strong text-center overflow-hidden"
      >
        <GoldCornerOrnament position="top-left" className="absolute top-2 left-2" />
        <GoldCornerOrnament position="top-right" className="absolute top-2 right-2" />
        <GoldCornerOrnament position="bottom-left" className="absolute bottom-2 left-2" />
        <GoldCornerOrnament position="bottom-right" className="absolute bottom-2 right-2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#3D0711]/80 border border-[#D4AF62]/60 text-xs font-sans uppercase tracking-[0.22em] text-[#FCF6BA]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF62]" />
            <span>Countdown to the Sacred Subh Muhurtham</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-gold-foil mt-3">
            Saturday, December 12th, 2026 • 7:29 PM
          </h3>
          <p className="text-sm sm:text-base font-serif text-[#FFF8EA] mt-1">
            Venue: <strong className="text-[#FCF6BA]">ASR Convention, Lalpuram, Guntur</strong>
          </p>

          {/* 4 Countdown Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 my-7 max-w-2xl mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="p-4 sm:p-5 rounded-2xl bg-[#3D0711]/90 border border-[#D4AF62]/65 shadow-inner flex flex-col items-center justify-center"
              >
                <span className="font-display text-3xl sm:text-5xl font-bold text-gold-foil tabular-nums">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="mt-1 text-xs font-sans uppercase tracking-[0.22em] text-[#D4AF62]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm font-serif italic text-[#FCF6BA]/90">
            “{data.muhurtham.auspiciousNote}”
          </p>
        </div>
      </motion.div>

      {/* 3. BRIDE'S SIDE (PELLI KUTHURU) & GROOM'S SIDE (PELLI KODUKU) COMPLETE TIMELINES */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.28em] text-[#8B6508]">
            Dec 10th to Dec 14th, 2026
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-temple-crimson mt-2">
            Pelli Kuthuru &amp; Pelli Koduku Events
          </h2>
          <p className="mt-2 text-sm sm:text-base font-serif text-[#4A2C11]">
            Complete schedule of auspicious ceremonies for both Bride’s and Groom’s families
          </p>
          <MandalaDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bride's Side (Pelli Kuthuru) Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-6 sm:p-8 bg-[#FBF5E8] border-2 border-[#B8860B]/70 gold-glow overflow-hidden"
          >
            <GoldCornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" />
            <GoldCornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" />

            <div className="relative z-10">
              <div className="text-center pb-4 mb-5 border-b-2 border-[#B8860B]/40">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#7A1824] text-[#FCF6BA] text-xs font-sans font-bold uppercase tracking-widest">
                  Bride’s Side • Pelli Kuthuru
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-temple-crimson mt-2">
                  Geetha Madhuri’s Festivities
                </h3>
                <p className="text-xs font-serif text-[#5C3A10] mt-0.5">
                  పెళ్లి కూతురు వేడుకల వివరాలు
                </p>
              </div>

              <div className="space-y-4">
                {data.brideSideSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#B8860B]/45 shadow-sm flex items-start gap-3.5"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#F5E6C8] border border-[#B8860B]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {renderCeremonyIcon(item.iconType)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#7A1824]/10 text-[#7A1824]">
                          {item.date} ({item.dayLabel})
                        </span>
                        <span className="text-xs font-sans font-bold text-[#8B6508] flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#3D0B11] mt-1">
                        {item.event}
                      </h4>
                      <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-sans text-[#5C3A10]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#7A1824] flex-shrink-0" />
                          {item.venue}
                        </span>
                        {item.mapUrl && (
                          <a
                            href={item.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1824] underline hover:text-[#5C0C16]"
                          >
                            <span>Map Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Groom's Side (Pelli Koduku) Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-6 sm:p-8 bg-[#FBF5E8] border-2 border-[#B8860B]/70 gold-glow overflow-hidden"
          >
            <GoldCornerOrnament position="top-left" className="absolute top-2 left-2 opacity-80" />
            <GoldCornerOrnament position="top-right" className="absolute top-2 right-2 opacity-80" />

            <div className="relative z-10">
              <div className="text-center pb-4 mb-5 border-b-2 border-[#B8860B]/40">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#7A1824] text-[#FCF6BA] text-xs font-sans font-bold uppercase tracking-widest">
                  Groom’s Side • Pelli Koduku
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-temple-crimson mt-2">
                  Mahesh’s Festivities
                </h3>
                <p className="text-xs font-serif text-[#5C3A10] mt-0.5">
                  పెళ్లి కొడుకు వేడుకల వివరాలు
                </p>
              </div>

              <div className="space-y-4">
                {data.groomSideSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#B8860B]/45 shadow-sm flex items-start gap-3.5"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#F5E6C8] border border-[#B8860B]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {renderCeremonyIcon(item.iconType)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#7A1824]/10 text-[#7A1824]">
                          {item.date} ({item.dayLabel})
                        </span>
                        <span className="text-xs font-sans font-bold text-[#8B6508] flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#3D0B11] mt-1">
                        {item.event}
                      </h4>
                      <div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-sans text-[#5C3A10]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#7A1824] flex-shrink-0" />
                          {item.venue}
                        </span>
                        {item.mapUrl && (
                          <a
                            href={item.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#7A1824] underline hover:text-[#5C0C16]"
                          >
                            <span>Map Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. DETAILED CEREMONY CARDS */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.28em] text-[#8B6508]">
            Auspicious Rituals &amp; Celebrations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-temple-crimson mt-2">
            Ceremony Highlights
          </h2>
          <MandalaDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.ceremonies.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-6 sm:p-7 bg-[#FBF5E8] border-2 border-[#B8860B]/60 gold-glow flex flex-col justify-between overflow-hidden ${
                event.id === 'muhurtham' ? 'md:col-span-2 lg:col-span-2 border-[#7A1824]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-sans font-bold tracking-wider text-[#FCF6BA] px-3 py-1 rounded-full bg-[#7A1824] border border-[#D4AF62]">
                    {event.sideLabel}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#F3E3C6] border border-[#B8860B]/50 flex items-center justify-center shadow-sm">
                    {renderCeremonyIcon(event.iconType)}
                  </div>
                </div>

                <p className="text-xs font-serif font-semibold text-[#8B6508] mb-1">
                  {event.hindiTitle}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-temple-crimson">
                  {event.name}
                </h3>
                <p className="mt-2 text-sm font-serif text-[#4A2C11] leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#B8860B]/35 space-y-2 text-xs sm:text-sm font-sans">
                <div className="flex items-center gap-2.5 text-[#3D0B11]">
                  <Calendar className="w-4 h-4 text-[#7A1824] flex-shrink-0" />
                  <span className="font-bold">{event.date}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#7A1824]">
                  <Clock className="w-4 h-4 text-[#8B6508] flex-shrink-0" />
                  <span className="font-bold">{event.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2 text-[#4A2C11]">
                  <span className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#7A1824] flex-shrink-0" />
                    <span className="font-medium">{event.venueArea}</span>
                  </span>
                  {event.mapUrl && (
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#7A1824] text-[#FCF6BA] text-xs font-semibold hover:bg-[#5C0C16] transition-colors flex-shrink-0"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. WEDDING VENUE (GUNTUR) & RECEPTION VENUE (JANGAREDDYGUDEM) + GOOGLE MAPS LINKS */}
      <div id="venue-section" className="scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-sans font-bold uppercase tracking-[0.28em] text-[#8B6508]">
            Venues &amp; Google Maps Directions
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-temple-crimson mt-2">
            Wedding &amp; Reception Venues
          </h2>
          <MandalaDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wedding Venue Card: ASR Convention, Lalpuram, Guntur */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-6 sm:p-9 bg-[#FBF5E8] border-2 border-[#B8860B] gold-glow flex flex-col justify-between overflow-hidden"
          >
            <GoldCornerOrnament position="top-left" className="absolute top-2 left-2" />
            <GoldCornerOrnament position="top-right" className="absolute top-2 right-2" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A1824] text-xs font-sans font-bold uppercase tracking-widest text-[#FCF6BA]">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF62]" />
                <span>{data.venue.title}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-temple-crimson">
                {data.venue.name}
              </h3>
              <p className="text-sm sm:text-base font-sans font-bold text-[#7A1824]">
                {data.venue.dateTimeLabel}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#B8860B]/45 space-y-1 text-sm font-sans text-[#3D0B11] shadow-sm">
                <p className="font-bold text-base text-[#4A0815]">{data.venue.hallName}</p>
                <p className="font-medium">{data.venue.addressLine1}</p>
                <p className="font-bold text-[#7A1824]">{data.venue.cityStatePin}</p>
              </div>

              <p className="text-xs sm:text-sm font-serif italic text-[#4A2C11]">
                {data.venue.hospitalityNote}
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-4 border-t border-[#B8860B]/35">
              <a
                href={data.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#7A1824] via-[#8F192E] to-[#6B1020] text-[#FCF6BA] font-sans font-bold text-sm tracking-wide shadow-[0_8px_25px_rgba(122,24,36,0.35)] hover:shadow-[0_12px_30px_rgba(122,24,36,0.55)] border border-[#D4AF62] transition-all"
              >
                <Navigation className="w-4 h-4 fill-[#FCF6BA]" />
                <span>Open Wedding Venue in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Reception Venue Card: Raja Rani Function Hall, Jangareddygudem */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-6 sm:p-9 bg-[#FBF5E8] border-2 border-[#B8860B] gold-glow flex flex-col justify-between overflow-hidden"
          >
            <GoldCornerOrnament position="top-left" className="absolute top-2 left-2" />
            <GoldCornerOrnament position="top-right" className="absolute top-2 right-2" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B6508] text-xs font-sans font-bold uppercase tracking-widest text-[#FFF8EA]">
                <Crown className="w-3.5 h-3.5 text-[#FCF6BA]" />
                <span>{data.receptionVenue.title}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-temple-crimson">
                {data.receptionVenue.name}
              </h3>
              <p className="text-sm sm:text-base font-sans font-bold text-[#7A1824]">
                {data.receptionVenue.dateTimeLabel}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF9] border border-[#B8860B]/45 space-y-1 text-sm font-sans text-[#3D0B11] shadow-sm">
                <p className="font-bold text-base text-[#4A0815]">{data.receptionVenue.hallName}</p>
                <p className="font-medium">{data.receptionVenue.addressLine1}</p>
                <p className="font-bold text-[#7A1824]">{data.receptionVenue.cityStatePin}</p>
              </div>

              <p className="text-xs sm:text-sm font-serif italic text-[#4A2C11]">
                {data.receptionVenue.hospitalityNote}
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-4 border-t border-[#B8860B]/35">
              <a
                href={data.receptionVenue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#7A1824] via-[#8F192E] to-[#6B1020] text-[#FCF6BA] font-sans font-bold text-sm tracking-wide shadow-[0_8px_25px_rgba(122,24,36,0.35)] hover:shadow-[0_12px_30px_rgba(122,24,36,0.55)] border border-[#D4AF62] transition-all"
              >
                <Navigation className="w-4 h-4 fill-[#FCF6BA]" />
                <span>Open Reception Venue in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
