import { useContext } from "react";
import { ChallangerContext } from "../contexts/ChallangerContext";
import styles from "../styles/components/CompletedChallenger.module.css";

export function CompletedChallanger() {
  const { completeChallenger } = useContext(ChallangerContext);

  return (
    <div className={styles.completedChallangerContainer}>
      <span>Completed Challanger</span>
      <span>{completeChallenger}</span>
    </div>
  );
}
