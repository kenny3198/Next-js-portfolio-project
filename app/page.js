import AboutSection from "./components/AboutSection";
import Achievments from "./components/Achievments";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return <main className="flex min-h-screen flex-col bg-[#121212]">
    <NavBar/>
    <div className="container mx-auto mt-24 px-12 py-4">
    <HeroSection/>
    <Achievments/>
    <AboutSection/>
    <ProjectSection/>
    <EmailSection/>
    <Footer/>
    </div>
  </main>
}
 