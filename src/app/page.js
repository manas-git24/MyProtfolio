import Image from "next/image";
import Header from"./components/Header";
import HomePage from "./components/HomePage"; 
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";

export default function Home() {
  return (
    <>
    <Header />
    <HomePage />
    <AboutPage />
    <ProjectsPage />
    <ContactPage />
    </>
  );
}
