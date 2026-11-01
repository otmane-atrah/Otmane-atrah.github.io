import { SkillCategory } from "~/types/data";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

// `icon` is optional: skills without an icon are shown as text-only badges.
export const skillCategories: SkillCategory[] = [
  {
    category: "Hardware & Cabling",
    skills: [
      { name: "Structured Cabling" },
      { name: "Fiber Splicing" },
      { name: "Cable Management" },
      { name: "Network Racks / Armoires" },
      { name: "Switch & Router Mounting" },
    ],
  },
  {
    category: "Network Equipment",
    skills: [
      { name: "Cisco", icon: `${DI}/cisco/cisco-original.svg` },
      { name: "Huawei" },
      { name: "MikroTik" },
      { name: "UniFi" },
      { name: "Ruijie" },
      { name: "Hikvision" },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Linux", icon: `${DI}/linux/linux-original.svg` },
      { name: "RHEL", icon: `${DI}/redhat/redhat-original.svg` },
      { name: "Ubuntu", icon: `${DI}/ubuntu/ubuntu-plain.svg` },
      { name: "Windows Server", icon: `${DI}/windows8/windows8-original.svg` },
    ],
  },
  {
    category: "Network Services",
    skills: [
      { name: "DNS" },
      { name: "DHCP" },
      { name: "DDNS" },
      { name: "FTP / SFTP" },
      { name: "Samba" },
      { name: "NFS" },
      { name: "SSH" },
      { name: "Active Directory" },
      { name: "GPO" },
      { name: "IPAM" },
    ],
  },
  {
    category: "Network Security",
    skills: [
      { name: "ACL" },
      { name: "OSPF" },
      { name: "BGP" },
      { name: "PPP" },
      { name: "Port Security" },
      { name: "Site-to-Site VPN" },
      { name: "pfSense" },
      { name: "WLC / Wireless" },
    ],
  },
  {
    category: "Monitoring & Analysis",
    skills: [
      { name: "Zabbix", icon: `${SI}/zabbix/ef4444` },
      { name: "Nagios" },
      { name: "SNMP" },
      { name: "Wireshark", icon: `${SI}/wireshark/ef4444` },
      { name: "Nmap", icon: `${SI}/nmap/ef4444` },
      { name: "tcpdump" },
      { name: "netstat" },
    ],
  },
  {
    category: "Automation & Scripting",
    skills: [
      { name: "Ansible", icon: `${DI}/ansible/ansible-original.svg` },
      { name: "n8n", icon: `${SI}/n8n/ef4444` },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "Bash", icon: `${DI}/bash/bash-original.svg` },
      { name: "PowerShell", icon: `${DI}/powershell/powershell-original.svg` },
    ],
  },
  {
    category: "Virtualization & Labs",
    skills: [
      { name: "Proxmox", icon: `${SI}/proxmox/ef4444` },
      { name: "VMware", icon: `${SI}/vmware/ef4444` },
      { name: "GNS3" },
      { name: "EVE-NG" },
      { name: "MS Office" },
    ],
  },
];
