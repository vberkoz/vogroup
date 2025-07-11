import { DefaultNextSteps } from "@/data/DefaultNextSteps";
import typing from "@/public/join_our_team/typing.webp";

export const SalesTeamTestimonials = {
  title: "Sales team testimonials",
  slug: "sales-team-testimonials",
  pageset: "join-our-team",
  isPrimary: false,
  description1: ["Why I work at Distributed Sales Force"],
  description2: [],
  image: typing.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "SectionC2TI",
      caption: [],
      title: "Looking to work for Distributed Sales Force?",
      svg: null,
      content: [
        "Learn about what it's like to be part of the Distributed Sales Force Team. Click on each avatar in the map below to hear our Sales team's stories.",
      ],
      link: "",
      href: "#",
      image: null,
    },
    {
      id: "Map",
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps
    },
  ],
};
