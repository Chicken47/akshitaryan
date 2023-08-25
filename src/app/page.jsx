import AboutMe from "./about";
import Bored from "./bored";
import Contact from "./contact";
import HomePage from "./home";
import NasaPotd from "./photoNasa";
import HomeProjects from "./projects";
import Quote from "./quote";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen space-y-10 text-white bg-black selection:text-black selection:bg-red-700">
      <HomePage />
      <AboutMe />
      <Quote />
      <Bored />
      <HomeProjects />
      <NasaPotd />
      <Contact />
    </main>
  );
}
