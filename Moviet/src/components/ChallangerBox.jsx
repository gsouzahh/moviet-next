import styles from '../styles/components/ChallangerBox.module.css';

export function ChallangerBox() {
    const hasActiveChallanger = true;

    return (
        <div className={styles.ChallangerBoxContainer}>
            {hasActiveChallanger ? (
                <div className={styles.ChallangerActive}>
                    <header>Ganhe 400xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.ChallangerFailedButton}>Falhei
                        </button>

                        <button
                            type="button"
                            className={styles.ChallangerSucceededButton}>Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.ChallangerNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>

                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avançe de level completando desafios.
                        </p>
                    </div>
                )
            }

        </div >
    );
}