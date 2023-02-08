import nyc from "@/public/home/nyc.webp";
import map from "@/public/home/map.webp";
import road from "@/public/home/road.webp";

import { Slide } from "./Slide";
import { useEffect, useState } from "react";

const slides = [
  {
    image: nyc.src,
    title: "The On-Demand Economy",
    description:
      "VO Sales Group offers a full suite of Lead Generation Solutions, Sales Development, Digital Marketing and Channel Solutions.",
    button: "VO Solutions",
    href: "#",
  },
  {
    image: map.src,
    title: "Sales Prospecting",
    description:
      "VO Sales Group offers a unique sales approach to generate high quality opportunities for your organization.",
    button: "Learn More",
    href: "#",
  },
  {
    image: road.src,
    title: "The Gig Economy",
    description:
      "The On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives.",
    button: "Sales Prospecting",
    href: "#",
  },
];

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul>
      {slides.map((item, key) => {
        const isActive = activeIndex === key;
        const length = slides.length;
        return Slide({
          item,
          key,
          isActive,
          length,
          onShow(index: number) {
            setActiveIndex(index);
          },
        });
      })}
    </ul>
  );
};
