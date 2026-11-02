import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "network-monitoring-automation",
    title: "Network-Wide Monitoring & Alerting Automation",
    description:
      "Automated monitoring of the whole network — Cisco and Huawei switches/routers, unmanaged switches, Windows and Linux (Ubuntu, RHEL) clients and servers — with Zabbix. n8n workflows send alert emails automatically with a suggested fix, and Python, Bash and PowerShell scripts handle data collection and remediation checks, deployed with Ansible.",
    techStack: ["Zabbix", "n8n", "Python", "Bash", "PowerShell", "Ansible", "Cisco", "Huawei"],
    image: "",
    featured: true,
    highlights: [
      {
        icon: "Server",
        label: "Full Device Coverage",
        detail: "Cisco, Huawei, switches, Windows and Linux hosts in one Zabbix instance",
      },
      {
        icon: "Workflow",
        label: "Automated Alerting",
        detail: "n8n sends email alerts with a suggested fix as soon as an issue is detected",
      },
      {
        icon: "Sparkles",
        label: "Scripted Remediation",
        detail: "Python, Bash and PowerShell scripts for checks and first-response actions",
      },
      {
        icon: "ShieldCheck",
        label: "Ansible Deployment",
        detail: "Agents and configuration rolled out consistently across all hosts",
      },
    ],
  },
  {
    id: "atx-network-lab",
    title: "Core Network Services Deployment (atx.local)",
    description:
      "A multi-server enterprise lab deploying the fundamental network services — DNS, DHCP, DDNS, NFS, FTP, SFTP, Telnet, Samba, NTP and Apache — one service per RHEL 9 server, managed remotely over SSH and deployed with Ansible.",
    techStack: ["RHEL 9", "Ansible", "DNS", "DHCP", "DDNS", "NFS", "FTP", "SFTP", "Samba", "NTP", "Apache", "SSH"],
    image: "",
    featured: true,
    highlights: [
      {
        icon: "Server",
        label: "One Service Per Server",
        detail: "Dedicated servers for DNS (x2), DHCP, web, FTP/SFTP, NFS, Samba, Telnet and NTP",
      },
      {
        icon: "ShieldCheck",
        label: "Hardened SSH",
        detail: "The same SSH hardening deployed identically on every server",
      },
      {
        icon: "Workflow",
        label: "Ansible Automation",
        detail: "One role per server plus a shared SSH-hardening role",
      },
      {
        icon: "Network",
        label: "Mixed Clients",
        detail: "Windows and Linux clients getting addresses from DHCP",
      },
    ],
  },
  {
    id: "windows-active-directory",
    title: "Windows Server Infrastructure (AD, GPO, IPAM)",
    description:
      "A Windows Server environment with Active Directory, Group Policy (GPO), DNS and DHCP, including IP address management (IPAM) and DHCP failover/clustering for high availability.",
    techStack: ["Windows Server", "Active Directory", "GPO", "DNS", "DHCP", "IPAM"],
    image: "",
    featured: true,
  },
  {
    id: "enterprise-network-security",
    title: "Enterprise Network Security Design",
    description:
      "Security-focused network design covering ACLs, PPP, OSPF, port security, and a site-to-site VPN linking two locations, plus enterprise wireless networking with a Wireless LAN Controller (WLC).",
    techStack: ["ACL", "PPP", "OSPF", "Port Security", "Site-to-Site VPN", "WLC", "Wireless"],
    image: "",
    featured: true,
  },
  {
    id: "cisco-mini-labs",
    title: "Cisco Routing & Switching Mini-Labs",
    description:
      "A collection of hands-on Cisco labs: ACLs, RIP, OSPF, BGP basics, port security, base device configuration, GRE VPN, HSRP, STP/PVST, DHCP, SSH, EtherChannel, VTP, switching and routing fundamentals.",
    techStack: ["Cisco", "ACL", "RIP", "OSPF", "BGP", "HSRP", "STP/PVST", "EtherChannel", "VTP"],
    image: "",
    featured: false,
  },
  {
    id: "site-to-site-vpn",
    title: "Site-to-Site VPN Configuration",
    description:
      "VPN configuration linking two network sites securely, covering both GRE-over-IPsec and policy-based VPN setups.",
    techStack: ["VPN", "GRE", "IPsec", "Cisco"],
    image: "",
    featured: false,
  },
  {
    id: "automation-scripting",
    title: "Admin Automation Scripting",
    description:
      "Bash and PowerShell scripts automating day-to-day Linux and Windows administration tasks: checks, reports and repetitive configuration steps.",
    techStack: ["Bash", "PowerShell", "Linux", "Windows"],
    image: "",
    featured: false,
  },
  {
    id: "python-network-tools",
    title: "Python Network Programming",
    description:
      "Python tools and scripts for network programming and lab-based security testing: packet crafting and analysis, connectivity and service checks, and authorized Wi-Fi security testing in a controlled lab environment.",
    techStack: ["Python", "Sockets", "Scapy"],
    image: "",
    featured: false,
  },
  {
    id: "ansible-network-automation",
    title: "Network Automation with Ansible",
    description:
      "Ansible playbooks and roles automating repetitive network and server configuration tasks across multiple devices and hosts from a single inventory.",
    techStack: ["Ansible", "YAML", "Linux", "Networking"],
    image: "",
    featured: false,
  },
  {
    id: "pfsense-firewall",
    title: "pfSense Firewall Configuration",
    description:
      "Firewall rules, NAT and VPN configuration on pfSense to secure a lab network's perimeter and segment traffic between zones.",
    techStack: ["pfSense", "Firewall", "NAT", "VPN"],
    image: "",
    featured: false,
  },
  {
    id: "hikvision-provisioning",
    title: "Automatic CCTV Provisioning (Hikvision)",
    description:
      "Automation that detects new Hikvision IP cameras on the network, provisions them through the ISAPI interface with HTTP Digest authentication, and registers them to the NVR automatically — no manual setup per camera.",
    techStack: ["Bash", "ISAPI", "HTTP Digest Auth", "Hikvision", "NVR", "Linux"],
    image: "",
    featured: true,
  },
  {
    id: "zabbix-docs",
    title: "Zabbix Monitoring Documentation",
    description:
      "Step-by-step documentation for installing and running a Zabbix 7.0 LTS monitoring server natively (no Docker) on Ubuntu and RHEL, with Apache and MySQL, structured directory layouts and OS-specific guides.",
    techStack: ["Zabbix 7.0 LTS", "Apache", "MySQL", "Ubuntu", "RHEL"],
    image: "",
    featured: false,
  },
];
