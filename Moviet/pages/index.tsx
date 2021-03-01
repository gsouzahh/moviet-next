import { ExperienceBar } from "../public/components/ExperienceBar";
import { CompletedChallanger } from "../src/components/CompletedChallanger";
import { Countdown } from "../src/components/Countdown";
import { Profile } from "../src/components/Profile";
import styles from '../src/styles/pages/Home.module.css';

import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | NLW</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallanger />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
