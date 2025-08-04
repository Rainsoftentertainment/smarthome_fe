import { LayoutDashboard, Settings, Users, Phone, Info } from "lucide-react";

export const navbarConfig = {
  logo: {
    url: "/",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "Smart FE",
    title: "Smart FE",
  },
  menu: [
    { title: "Home", url: "/" },
    {
      title: "Features",
      url: "#",
      items: [
        {
          title: "Dashboard",
          description: "View your analytics and performance metrics",
          icon: <LayoutDashboard className="size-5 shrink-0" />,
          url: "/dashboard",
        },
        {
          title: "Settings",
          description: "Manage your account and preferences",
          icon: <Settings className="size-5 shrink-0" />,
          url: "/settings",
        },
        {
          title: "Team",
          description: "Manage your team members and roles",
          icon: <Users className="size-5 shrink-0" />,
          url: "/team",
        },
      ],
    },
    { 
      title: "About", 
      url: "/about",
      icon: <Info className="size-5 shrink-0" />
    },
    { 
      title: "Contact", 
      url: "/contact",
      icon: <Phone className="size-5 shrink-0" />
    },
  ],
  mobileExtraLinks: [
    { name: "Terms", url: "/terms" },
    { name: "Privacy", url: "/privacy" },
    { name: "FAQ", url: "/faq" },
    { name: "Support", url: "/support" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
}; 