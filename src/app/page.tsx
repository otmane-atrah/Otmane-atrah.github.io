import { CursorFollower } from "~/components/effects/CursorFollower";
import { Hero } from "~/components/sections/Hero";
import { About } from "~/components/sections/About";
import { Projects } from "~/components/sections/Projects";
import { TechStack } from "~/components/sections/TechStack";
import { Experience } from "~/components/sections/Experience";
import { Education } from "~/components/sections/Education";
import { Certificates } from "~/components/sections/Certificates";
import { Gallery } from "~/components/sections/Gallery";
import { ResumeCTA } from "~/components/sections/ResumeCTA";
import { Contact } from "~/components/sections/Contact";
import { getProfileImages } from "~/lib/profile";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <Hero />
      <About profileImages={getProfileImages()} />
      <Projects />
      <TechStack />
      <Experience />
      <Education />
      <Gallery />
      <Certificates />
      <ResumeCTA />
      <Contact />
    </>
  );
}
