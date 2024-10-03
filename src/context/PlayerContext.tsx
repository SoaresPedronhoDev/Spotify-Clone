import { createContext, ReactNode } from "react";

interface PlayerContextType {
}

const defaultValue: PlayerContextType = {

};

export const PlayerContext = createContext<PlayerContextType>(defaultValue);

interface Props {
  children: ReactNode;
}

const PlayerContextProvider = ({ children }: Props) => {

  const contextValue = {
    
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
