import Footer from "../components/Shared/Footer";
import Navigation from "../components/Shared/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
