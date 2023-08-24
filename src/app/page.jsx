import AboutMe from "./about";
import Contact from "./contact";
import HomePage from "./home";
import NasaPotd from "./photoNasa";
import HomeProjects from "./projects";
import Quote from "./quote";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen space-y-10 text-white bg-black">
      <HomePage />
      <AboutMe />
      <Quote />
      <HomeProjects />
      <NasaPotd />
      <Contact />
    </main>
  );
}
