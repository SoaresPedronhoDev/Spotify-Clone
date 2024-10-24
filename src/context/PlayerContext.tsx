import {
  createContext,
  useContext,
  RefObject,
  ReactNode,
  useRef,
  useState,
  useEffect,
} from "react";
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
  playWithId: (id: number) => void;
  previous: () => void;
  next: () => void;
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
  playWithId: (id: number) => {},
  previous: () => {},
  next: () => {},
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
      audioRef.current
        .play()
        .then(() => {
          setPlayStatus(true);
          console.log("Play status set to true");
        })
        .catch((error) => {
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
    } else {
      console.log("Audio Element is not found");
    }
  };

  const playWithId = (id: number) => {
    const selectedTrack = songsData.find((song) => song.id === id);
    if (selectedTrack) {
      setTrack(selectedTrack);
      if (audioRef.current) {
        audioRef.current.src = selectedTrack.file;

        audioRef.current.addEventListener(
          "canplaythrough",
          () => {
            audioRef.current
              ?.play()
              .then(() => {
                setPlayStatus(true);
              })
              .catch((error) => {
                console.error("Error playing audio:", error);
              });
          },
          { once: true }
        );
      }
    } else {
      console.error("Track not found with id:", id);
    }
  };

  const previous = () => {
    if (track.id > 0) {
      const prevTrack = songsData[track.id - 1];
      setTrack(prevTrack);
    }
  };
  
  const next = () => {
    if (track.id < songsData.length - 1) {
      const nextTrack = songsData[track.id + 1];
      setTrack(nextTrack);
    }
  };
  
  useEffect(() => {
    if (audioRef.current && track.file) {
      audioRef.current.src = track.file;
  
      audioRef.current.addEventListener(
        "canplaythrough",
        () => {
          if (playStatus) {
            audioRef.current?.play();
          }
        },
        { once: true }
      );
    }
  }, [track, playStatus]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        if (seekBar.current && audioRef.current) {
          seekBar.current.style.width =
            Math.floor(
              (audioRef.current.currentTime / audioRef.current.duration) * 100
            ) + "%";
          const current = audioRef.current;
          setTime({
            currentTime: {
              second: Math.floor(current.currentTime % 60),
              minute: Math.floor(current.currentTime / 60),
            },
            totalTime: {
              second: Math.floor(current.duration % 60),
              minute: Math.floor(current.duration / 60),
            },
          });
        }
      };
    }
  }, [audioRef]);

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
    playWithId,
    previous,
    next,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
      <audio ref={audioRef} preload="metadata"></audio>
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
