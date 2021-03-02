import Head from "next/head";

import { CompletedChallanger } from "../components/CompletedChallanger";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallangerBox } from "../components/ChallangerBox";
import { Countdown } from "../components/Countdown";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <ExperienceBar />
      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallanger />
          <Countdown />
        </div>
        <div className={styles.rightContainer}>
          <ChallangerBox />
        </div>
      </section>
    </div>
  );
}
