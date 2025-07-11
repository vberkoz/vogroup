import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import idea from "@/public/join_our_team/idea.webp";
import hatFront from "@/public/join_our_team/hatFront.webp";
import hatRear from "@/public/join_our_team/hatRear.webp";
import socialNetwork from "@/public/join_our_team/socialNetwork.webp";

export const GigLife = {
  title: "Gig life",
  slug: "gig-life",
  pageset: "join-our-team",
  isPrimary: false,
  description1: ["A community of taskers or giggers that have chosen the anti-corporation route to make a living in the On-Demand economy"],
  description2: [],
  image: idea.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: ["myGIGlife"],
      title: "Self-employment opportunities",
      svg: null,
      content: [
        "The new On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives. For 1000s of years, before corporations came to be, most individuals were self-employed.",
        "In today's internet age, the Virtual Organization concept that Distributed Sales Force has embraced for years has led to an On-Demand marketplace of professional taskers and freelancers. myGIGlife is a community of taskers or giggers that have chosen the anti-corporation route to make a living in the On-Demand economy.",
        "Distributed Sales Force allows for self-employed sales professionals to work at home. Many of Distributed Sales Force's contractors are women who have chosen a work-at-home lifestyle for a variety of reasons. Some have children, some have elderly parents, some used to be road warriors, and some just have situations at home that do not allow for working outside of the home. If you are looking for Sales Gigs please contact us.",
      ],
      link: "",
      href: "#",
      image: hatFront,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Work-life balance",
      svg: null,
      content: [
        "Distributed Sales Force allows a work-life balance that creates a nice atmosphere for both customers and contractors.",
        "Distributed Sales Force eliminates the roller coaster ride that often comes with being self-employed.",
        "Distributed Sales Force offers a work-at-home sales environment that is completely cloud-based, protects customers' data, allows for collaboration, and gives the customers a virtual team to call on as needed and on demand.",
        "Distributed Sales Force actively seeks out new customers so that the contractors have a steady flow of new business which they can vie for work hours.",
        "Distributed Sales Force offers highly structured processes for the best chance of success working with an account to maintain high customer retention rates.",
      ],
      link: "",
      href: "#",
      image: socialNetwork,
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Team-based atmosphere",
      svg: null,
      content: [
        "Distributed Sales Force has a team-based atmosphere and collaborative environment.",
        "Distributed Sales Force takes care of all the administrative tasks that most self-employed contractors do not want to deal with, such as invoicing, collections, timesheets, reports, recruiting, customer interfacing, and mostly, finding the next contract when the current contract runs out.",
        "Distributed Sales Force takes care of the back-office processes that most self-employed care not to deal with.",
        "Distributed Sales Force has created a virtual, capitalistic environment for the self-employed.",
        "Distributed Sales Force is always looking for great contractors that know sales.",
      ],
      link: "",
      href: "#",
      image: hatRear,
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps
    },
  ],
};
