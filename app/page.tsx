import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/users/Hero";
import { Team } from "./components/users/Team";
import { About } from "./components/users/About";
import { Contact } from "./components/users/Contact";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Team id="team" />
        <About id="about" />
        <Contact id="contact" />
        <Footer/>
    </>
  );
}
