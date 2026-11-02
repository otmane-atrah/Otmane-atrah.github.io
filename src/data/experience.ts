import { Experience } from "~/types/data";

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Broadlink Technologies",
    role: "Network & Systems Technical Intern",
    period: "May 2026 - Present",
    location: "Morocco",
    highlights: [
      "Installation, configuration and maintenance of IP video surveillance networks and systems",
      "Structured cabling, cable testing and network configuration on client sites",
      "Installation and configuration of home automation solutions",
      "Installation and configuration of audiovisual systems (home cinema)",
      "Installation and tuning of audio amplifiers, speakers and sound systems",
    ],
    techUsed: ["IP CCTV", "Structured Cabling", "Networking", "Home Automation", "AV Systems"],
  },
  {
    id: "exp-2",
    company: "Hôtel Tigmiza",
    role: "Network & Systems Technical Intern",
    period: "Feb 2026 - Apr 2026",
    location: "Marrakech",
    highlights: [
      "Maintenance of the IT fleet: formatting, repair and optimization",
      "Automation & monitoring: built workflows with n8n and set up network monitoring with Zabbix",
      "Support: technical assistance and network incident resolution",
    ],
    techUsed: ["Zabbix", "n8n", "Windows", "Network Troubleshooting"],
  },
  {
    id: "exp-3",
    company: "Centre Hospitalier Provincial",
    role: "Network & Systems Technical Intern",
    period: "Mar 2025 - Apr 2025",
    location: "Kelaa Des Sraghna",
    highlights: [
      "Assisted the IT support team",
      "Entered and verified patient information",
      "Followed up on medical records",
    ],
    techUsed: ["IT Support", "Data Entry"],
  },
];
