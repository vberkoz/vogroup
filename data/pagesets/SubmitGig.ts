import submitGig from "@/public/submitGig.webp";
import { DefaultNextSteps } from "../DefaultNextSteps";

export const SubmitGig = {
  title: "Submit GIG",
  slug: "submit-gig",
  pageset: "submit-gig",
  isPrimary: true,
  description1: [
    "Looking for Sales Prospecting that actually works?",
    "Tired of hiring amateur, scripted telemarketers?",
  ],
  description2: [
    "Looking for Professionals that can find real, revenue-producing leads?",
    "Let's talk.",
  ],
  image: submitGig.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps,
    },
  ],
};
