/* eslint-disable react-hooks/exhaustive-deps */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import WelcomeModal from "./components/WelcomeModal/WelcomeModal";
import BottomNavBar from "./components/BottomNavBar";
import { useAppContext } from "./contexts/useAppContext";

function App() {
  const { showOtherSideBar, modalState } = useAppContext();

  useEffect(() => {
    document.getElementById("bottom").style.display = "none";
    function scrollFunction() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("scrollBar").style.width = scrolled + "%";

      if (
        document?.body.scrollTop > 100 ||
        document?.documentElement.scrollTop > 100
      ) {
        document.getElementById("bottom").style.display = "block";
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("bottom").style.display = "none";
        document.getElementById("navbar").style.top = "-500px";
      }
    }

    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <> 
      <div className="dark:bg-[#1f1f38] w-full bg-[#ffffff] overflow-hidden">
        <ScrollIndicator />
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
        {!showOtherSideBar && (
          <>
            <SocialLinks />
            <BottomNavBar />
          </>
        )}
        {modalState && <WelcomeModal isModalOpen={modalState} />}
        <BackToTop />
      </div>
    </>
  );
}

export default App;
