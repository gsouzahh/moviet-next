import { useContext } from "react";
import { ChallangerContext } from "../contexts/ChallangerContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallangerContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://loremflickr.com/320/240" alt="guilherme" />
      <div>
        <strong>Guilherme Souza</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
