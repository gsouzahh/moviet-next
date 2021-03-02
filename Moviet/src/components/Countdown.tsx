import { useContext, useEffect, useState } from "react";
import style from "../styles/components/Countdown.module.css";
import { ChallangerContext } from "../contexts/ChallangerContext";

export function Countdown() {
  const { SetNewChallenger } = useContext(ChallangerContext);
  const quantosMinutos = 0.1;
  const [time, setTime] = useState(quantosMinutos * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  let countdownTimeout: NodeJS.Timeout;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  function CountDown() {
    setIsActive(true);
  }

  function ResetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(quantosMinutos * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      SetNewChallenger();
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={style.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={style.countDownButton}>
          Ciclo Finalizado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${style.countDownButton} ${style.countDownButtonActive}`}
              onClick={ResetCountdown}
            >
              Abandonar o ciclo
            </button>
          ) : (
            <button
              type="button"
              className={style.countDownButton}
              onClick={CountDown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
