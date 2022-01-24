import "../styles/tailwind.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../layout/Layout";
import { AnimatePresence } from "framer-motion";
import AuthProvider from "../context/authProvider/AuthProvider";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-200">
      <AuthProvider>
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
