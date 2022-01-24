import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Footer from "../components/Shared/Footer";
import Loading from "../components/Shared/Loading";
import Navigation from "../components/Shared/Navigation";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const check = Cookies.get("name");
  const router = useRouter();

  useEffect(() => {
    if (check == "Murad") {
      setLoading(false);
    } else {
      setLoading(true);
      Cookies.set("name", "Murad");
      setTimeout(() => {
        router.reload(window.location.pathname);
      }, 4000);
    }
  }, []);
  return (
    <div className="relative">
      {loading && (
        <div className="absolute">
          <Loading></Loading>
        </div>
      )}
      {!loading && (
        <div>
          <Navigation></Navigation>
          {children}
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Layout;
