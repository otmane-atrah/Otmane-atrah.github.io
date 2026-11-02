import { PersonalInfo } from "~/types/data";

export const personalInfo: PersonalInfo = {
  name: "Otmane Atrah",
  title: "Systems & Network Technician",
  tagline: "Designing, automating and monitoring reliable networks and systems",
  bio: "Specialized Technician in Digital Infrastructure (Systems & Networks) with hands-on experience on Linux and Windows. I work with network configuration, system services, monitoring, automation and security fundamentals, and I build multi-platform labs that simulate professional environments. Open to new opportunities in systems and networks.",
  email: "otmaneatrah@gmail.com",
  location: "Marrakech, Morocco",
  profileImage: "/profile/profile.jpg",
  resumeUrl: "/resume.pdf",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "B1" },
    { name: "French", level: "A2" },
  ],
  // Leave `url` empty ("") to hide a link. TODO: fill in your real URLs.
  socials: [
    { platform: "GitHub", url: "", icon: "github" },
    { platform: "LinkedIn", url: "", icon: "linkedin" },
  ],
};
