import { createContext, useState, ReactNode } from "react";

interface ChallengerProviderProps {
  children: ReactNode;
}

interface ChallengerDataProps {
  level: number;
  currentXp: number;
  completeChallenger: number;
  levelUp: () => void;
  SetNewChallenger: () => void;
}

export const ChallangerContext = createContext({} as ChallengerDataProps);

export function ChallangerProvider({ children }: ChallengerProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentXp, setCurrentXp] = useState(0);
  const [completeChallenger, setCompleteChallenger] = useState(0);

  function SetNewChallenger() {
    console.log("finalizou");
  }

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallangerContext.Provider
      value={{
        level,
        currentXp,
        completeChallenger,
        levelUp,
        SetNewChallenger,
      }}
    >
      {children}
    </ChallangerContext.Provider>
  );
}
