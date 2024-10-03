import { createContext, useContext, RefObject, ReactNode, useRef } from "react";

interface PlayerContextType {
  audioRef: RefObject<HTMLAudioElement>; 
}

const defaultValue: PlayerContextType = {
  audioRef: { current: null } // Inicialmente nulo
};

export const PlayerContext = createContext<PlayerContextType>(defaultValue);

interface Props {
  children: ReactNode;
}

const PlayerContextProvider = ({ children }: Props) => {
  // Cria a referência ao elemento de áudio
  const audioRef = useRef<HTMLAudioElement>(null);

  const contextValue = {
    audioRef
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;