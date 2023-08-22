import AboutMe from "./about";
import Contact from "./contact";
import HomePage from "./home";
import HomeProjects from "./projects";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen text-white bg-black">
      <HomePage />
      <AboutMe />
      <HomeProjects />
      <Contact />
    </main>
  );
}
