import { ChallangerProvider } from "../contexts/ChallangerContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChallangerProvider>
      <Component {...pageProps} />;
    </ChallangerProvider>
  );
}

export default MyApp;
