import smartphone from "@/public/about/smartphone.webp";
import { DefaultNextSteps } from "@/data/DefaultNextSteps";

export const ContactUs = {
  title: "Contact us",
  slug: "contact-us",
  pageset: "about-us",
  isPrimary: false,
  description1: [
    "Distributed Sales Force Louisville, KY",
    "Phone: 502.899.3227",
    "Fax: 866.510.0690",
  ],
  description2: [],
  image: smartphone.src,
  sections: [
    {
      id: "HeroTabs",
    },
    {
      id: "ContactUsForm",
    },
    {
      id: "NextSteps3",
      steps: DefaultNextSteps,
    },
  ],
};
