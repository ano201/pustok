import "../styles/tailwind.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../layout/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
