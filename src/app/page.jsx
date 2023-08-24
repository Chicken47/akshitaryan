import AboutMe from "./about";
import Contact from "./contact";
import HomePage from "./home";
import NasaPotd from "./photoNasa";
import HomeProjects from "./projects";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen text-white bg-black">
      <HomePage />
      <AboutMe />
      <HomeProjects />
      <NasaPotd />
      <Contact />
    </main>
  );
}
