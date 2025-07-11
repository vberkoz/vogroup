import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import trucks from "@/public/industry_focus/trucks.webp";

export const EnterpriseMobility = {
  title: "Enterprise mobility",
  slug: "enterprise-mobility",
  pageset: "industry-focus",
  isPrimary: false,
  description1: [
    [
      "Logistics",
      "POD / DSD",
      "Device Management / BYOD",
      "YMS",
      "Asset Tracking",
    ],
  ],
  description2: [
    [
      "TMS",
      "GPS",
      "Filed Service / Field Worker",
      "Fleet Management",
    ],
  ],
  image: trucks.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Enterprise Mobility Solution Selling",
      svg: null,
      content: [
        [
          "M2M Applications",
          "Fleet Management",
          "Field Service",
          "Field Worker",
          "Transportation Logistics",
          "Asset Tracking",
          "EAM - Enterprise Asset Management ",
          "eTicketing/eCitation",
          "mHealth",
          "Courier/Delivery",
          "DSD/POD",
          "Public Safety",
          "Mobile Device Management",
        ],
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Distributed Sales Force Solutions",
      svg: null,
      content: [
        "DSF is involved in Business Development activities for Enterprise Mobility companies in a variety of ways.",
        [
          "Lead Generation",
          "Sales Prospecting",
          "Helping with Messaging and Focus",
          "Channel Development",
          "Mergers/Acquisitions",
          "Helping Raise Capital",
        ],
        "DSF is focused on Sales Planning and Sales Development to push an emerging company to the next level, and maybe to the level of gaining investments, or even a liquidity event. Revenue is king. Distributed Sales Force’s Prospecting efforts help to define the audience – the market, to stuff your sales pipe, and to identify revenue.",
        "Distributed Sales Force knows Enterprise Mobility. We can help with Branding, Messaging, and Sales.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Examples of Sales Opportunities",
      svg: null,
      content: [
        "Leads turned in recently include:",
        [
          "DSD with 300 Vehicles & 300 Routes",
          "Food Service company - 1200 Vehicles",
          "eCitation - Municipality with 800 Patrols",
          "Field Service - 50 Field Workers",
          "POD with 200 Vehicles",
          "Asset Tracking - 1000s of field assets",
          "Construction company with 50 Supervisors",
          "Field Asset Management integrating with an enterprise EAM",
          "Inside the 4 walls performing inventory collection or counting",
        ],
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps,
    },
  ],
};
