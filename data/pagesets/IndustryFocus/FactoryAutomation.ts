import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import factory from "@/public/industry_focus/factory.webp";
import conveyor from "@/public/industry_focus/conveyor.webp";

export const FactoryAutomation = {
  title: "Factory automation",
  slug: "factory-automation",
  pageset: "industry-focus",
  isPrimary: false,
  description1: [
    [
      "Demand Planning",
      "Robotics",
      "Cobots",
      "Material Handling",
      "Kitting",
      "Labor Management",
    ],
  ],
  description2: [["Packaging", "RPA", "IIoT", "MRP", "MES"]],
  image: factory.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Factory Automation Prospecting",
      svg: null,
      content: [
        "Are you looking for Factory Automation Lead Generation? Are you looking for Sales Prospecting?",
        "Sales Prospecting is Sales when your solution is $100K or better. VO Sales Group's company roots come from the Supply Chain space. Over time we have provided Sales Opportunities in",
        "There are Solutions and Technologies.",
      ],
      link: "All Things Industrial Automation",
      href: "/channel-development",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Industrial Automation Solutions",
      svg: null,
      content: [
        [
          "Industrial IIoT",
          "MES (Manufacturing Execution Systems",
          "MRP Management",
          "Advanced Planning & Scheduling (APS)",
          "Demand Planning /Forecasting",
        ],
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Robotic Process Automation (RPA)",
      svg: null,
      content: [
        [
          "Intralogistics",
          "Automation and Robotics",
          "AGVs / AMR / SGVs",
          "Cobots",
          "Machine Tending",
          "Visioning Systems",
          "Voice Picking for piece picking",
          "Fulfillment Solutions",
          "Supply Chain Consulting",
          "eCommerce Supply Chain Solutions",
        ],
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Material Handling Systems",
      svg: null,
      content: [["Intralogistics", "Inbound Supply Chains/Sourcing"]],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Industrial Automation Markets",
      svg: null,
      content: [
        "Supply Chain, Automation, Robotics  & Factory Automation Sales Opportunities.",
        [
          "Industrial Manufacturing",
          "Food Manufacturing",
          "Apparel / Footwear",
          "CPG",
          "Pharma",
          "Automotive",
          "Electronics",
          "Industrial",
          "Discrete Manufacturing",
        ],
        "Let us show you what we are doing for others to fill their Sales Pipeline.",
      ],
      link: "All Things Industrial Automation",
      href: "/channel-development",
      image: conveyor,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Jump Start the Channel",
      svg: null,
      content: [
        "VO is involved in Sales Development as well as Business Development activities for Supply Chain Solution Providers.",
        "Our differentiation is that we are not trying to be all things to all people.",
        "Most of our customers have solutions that start at $100K and upwards to Millions, as well as those with Enterprise Level Solutions.",
        "Our customers have web pages, case studies, testimonials, and the need for both Professional Sales and Marketing teams.",
        "In most cases, our customers have long sales cycles.",
        "Most of VO Sales Group's customers have technology-based solutions.",
        "Most of our customers have a handful of seasoned salespeople that need leads and sales pipe.",
        "We specialize in End-User Prospecting. VO Sales Group also can help with Leads, Appointments, Referral Programs, Channel Development, and more.",
      ],
      link: "All Things Industrial Automation",
      href: "/channel-development",
      image: null,
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps,
    },
  ],
};
