export interface Sponsor {
  name: string
  role: string
  link?: string
  icon?: string
  isAnonymous?: boolean
}

export const sponsors: Sponsor[] = [
  {
    name: "V6Direct",
    role: "IPv4/6 Sponsor & Provider",
    link: "v6direct.org",
    icon: "Heart"
  },
  {
    name: "Mallowshallow",
    role: "Money Sponsor (15$)", 
    icon: "Star"
  },
  {
    name: "Dennis Kidman",
    role: "Hardware and Domain Sponsor",
    icon: "Sparkles"
  }
]

// Add more sponsors here as needed
// Example:
// {
//   name: "Your Name",
//   role: "Your Role",
//   link: "your-link.com",
//   icon: "Heart" // or any Lucide icon name
// }
