import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom ";

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full">
        <Navbar />
        <main className="flex-grow w-full flex justify-center items-center">
          <Outlet />
        </main>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  );
};

export default MainLayout;
