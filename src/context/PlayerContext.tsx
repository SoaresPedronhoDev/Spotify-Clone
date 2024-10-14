import { createContext, useContext, RefObject, ReactNode, useRef, useState } from "react";
import { songsData } from "../assets/assets";

interface PlayerContextType {
  audioRef: RefObject<HTMLAudioElement>;
  seekBar: RefObject<HTMLDivElement>;
  seekBg: RefObject<HTMLDivElement>;
  track: any;
  setTrack: (track: any) => void;
  playStatus: boolean;
  setPlayStatus: (status: boolean) => void;
  time: {
    currentTime: {
      second: number;
      minute: number;
    };
    totalTime: {
      second: number;
      minute: number;
    };
  };
  setTime: (time: any) => void;
  play: () => void;
  pause: () => void;
}

const defaultValue: PlayerContextType = {
  audioRef: { current: null },
  seekBar: { current: null },
  seekBg: { current: null },
  track: null,
  setTrack: () => {},
  playStatus: false,
  setPlayStatus: () => {},
  time: {
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  },
  setTime: () => {},
  play: () => {},
  pause: () => {},
};

export const PlayerContext = createContext<PlayerContextType>(defaultValue);

interface Props {
  children: ReactNode;
}

const PlayerContextProvider = ({ children }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const seekBar = useRef<HTMLDivElement>(null);
  const seekBg = useRef<HTMLDivElement>(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    if (audioRef.current && track.file) {
      audioRef.current.src = track.file; 
      audioRef.current.play().then(() => {
        setPlayStatus(true);
        console.log("Play status set to true");
      }).catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      console.log("Audio Element or Track is not found");
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
      console.log("Play status set to false");
    }else{
      console.log("Audio Element is not found")
    }
  };

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
      <audio ref={audioRef} src={track.file} preload="metadata"></audio>
      </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
