import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { defaultWeddingData, WeddingData, WeddingThemeId } from './data/weddingData';
import { WeddingEnvelope3D } from './components/WeddingEnvelope3D';
import { MainInvitationHero } from './components/MainInvitationHero';
import { WeddingDetailsSection } from './components/WeddingDetailsSection';
import { FooterSection } from './components/FooterSection';
import { AudioController } from './components/AudioController';

export function App() {
  const [weddingData, setWeddingData] = useState<WeddingData>(defaultWeddingData);
  const [activeTheme, setActiveTheme] = useState<WeddingThemeId>('temple-arch');
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState<boolean>(false);

  const handleEnvelopeOpenComplete = () => {
    setIsEnvelopeOpened(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayEnvelope = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsEnvelopeOpened(false);
  };

  return (
    <div className="relative min-h-screen w-full text-[#3D0B11] overflow-x-hidden bg-gradient-to-b from-[#EFE1C6] via-[#F7EFE0] to-[#EAD7B7]">
      {/* Persistent Classical Instrumental Music Controls (Play/Pause & Mute/Unmute) */}
      <AudioController />

      {/* Sequence Controller: Screen 1 (3D Envelope) -> Screen 2 (Full Traditional Invitation) */}
      <AnimatePresence mode="wait">
        {!isEnvelopeOpened ? (
          <WeddingEnvelope3D
            key="envelope-landing"
            data={weddingData}
            activeTheme={activeTheme}
            onSelectTheme={setActiveTheme}
            onOpenComplete={handleEnvelopeOpenComplete}
          />
        ) : (
          <motion.main
            key="main-wedding-invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {/* Section 2: Main Wedding Invitation — Crisp Reference Temple Arch & Kalash Scroll */}
            <MainInvitationHero
              data={weddingData}
              activeTheme={activeTheme}
              onSelectTheme={setActiveTheme}
              onReplayEnvelope={handleReplayEnvelope}
            />

            {/* Section 3: Wedding Details, Countdown, Bride & Groom Side Ceremonies, Wedding & Reception Venues */}
            <WeddingDetailsSection data={weddingData} />

            {/* Footer */}
            <FooterSection
              data={weddingData}
              onUpdateData={setWeddingData}
              onReplayEnvelope={handleReplayEnvelope}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
