import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const AudioController: React.FC = () => {
  const [audioState, setAudioState] = useState(soundEngine.getState());

  useEffect(() => {
    return soundEngine.subscribe(() => {
      setAudioState(soundEngine.getState());
    });
  }, []);

  const handleToggleSound = () => {
    if (!audioState.isPlaying) {
      soundEngine.togglePlay();
      if (audioState.isMuted) {
        soundEngine.toggleMute();
      }
      return;
    }
    soundEngine.toggleMute();
  };

  const isSoundActive = audioState.isPlaying && !audioState.isMuted;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        onClick={handleToggleSound}
        aria-label={isSoundActive ? 'Mute audio' : 'Unmute audio'}
        title={isSoundActive ? 'Mute Audio' : 'Unmute Audio'}
        className="p-2.5 rounded-full bg-[#240309]/90 hover:bg-[#3D0711] backdrop-blur-md text-[#FCF6BA] border border-[#D4AF62]/70 shadow-[0_0_20px_rgba(212,175,98,0.35)] transition-all"
      >
        {isSoundActive ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

