import Link from "next/link";

import empathy from "@/public/blog/empathy.webp";

import { NextSteps } from "@/components/NextSteps/NextSteps";
import { Layout } from "@/components/Layout";

import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/Date";

const steps = [
  {
    title: "Contact us",
    description:
      "Send your questions through our contact form and we'll find the best solution for you",
  },
  {
    title: "Submit GIG",
    description:
      "Looking for Sales Prospecting that actually works? Tired of hiring amateur, scripted telemarketers? Looking for Professionals that can find real, revenue-producing leads? Let's talk.",
  },
  {
    title: "Join our team",
    description:
      "On-Demand economy has allowed for self-employment opportunities unlike any other time in our lives",
  },
];

export default function Posts({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    image: string;
    title: string;
    author: string;
    excerpt: string;
    date: string;
  }[];
}) {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-px bg-gray-900 pb-[1px] text-white md:grid-cols-2 lg:grid-cols-3 lg:pl-14 xl:grid-cols-4">
        {allPostsData.map(
          ({ id, image, title, author, excerpt, date }, key) => {
            switch (key) {
              case 0:
                return (
                  <Link
                    key={key}
                    href={`/blog/${id}`}
                    className="col-span-1 row-span-1 flex flex-col bg-gray-800 hover:bg-gray-700 md:col-span-2 lg:h-[60vw] xl:row-span-2 xl:h-[70vw]"
                  >
                    <div
                      style={{
                        backgroundImage: `url(/blog/${image}.webp)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="h-32 w-full md:h-64 lg:h-1/2"
                    ></div>
                    <div className="p-3 xl:p-6">
                      <h2 className="mb-2 text-2xl font-light text-gray-200 md:mb-4 md:text-5xl">
                        {title}
                      </h2>
                      <p className="mb-2 text-sm text-gray-500 md:mb-4">
                        By: {author}
                      </p>
                      <p className="mb-2 text-sm text-gray-500 md:mb-4">
                        6 min read
                      </p>
                      <p className="text-gray-400">{excerpt}</p>
                    </div>
                    <div className="grow"></div>
                    <div className="flex w-full p-3 xl:p-6">
                      <p className="text-sm text-gray-500">
                        <Date dateString={date} />
                      </p>
                      <div className="grow"></div>
                      <svg
                        fill="currentColor"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                      </svg>
                    </div>
                  </Link>
                );
              case 1:
                return (
                  <Link
                    key={key}
                    href={`/blog/${id}`}
                    className="flex h-full flex-col bg-gray-800 hover:bg-gray-700"
                  >
                    <div
                      style={{
                        backgroundImage: `url(/blog/${image}.webp)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="h-32 w-full lg:h-1/2"
                    ></div>
                    <div className="p-3 xl:p-6">
                      <h2 className="mb-2 text-2xl font-light text-gray-200">
                        {title}
                      </h2>
                      <p className="mb-2 text-sm text-gray-500">By: {author}</p>
                      <p className="mb-2 text-sm text-gray-500">6 min read</p>
                      <p className="text-gray-400">{excerpt}</p>
                    </div>
                    <div className="grow"></div>
                    <div className="flex w-full p-3 xl:p-6">
                      <p className="text-sm text-gray-500">
                        <Date dateString={date} />
                      </p>
                      <div className="grow"></div>
                      <svg
                        fill="currentColor"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                      </svg>
                    </div>
                  </Link>
                );

              default:
                return (
                  <Link
                    key={key}
                    href={`/blog/${id}`}
                    className="flex h-full flex-col bg-gray-800 hover:bg-gray-700"
                  >
                    <div
                      style={{
                        backgroundImage: `url(/blog/${image}.webp)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="h-32 w-full xl:h-1/2"
                    ></div>
                    <div className="p-3 xl:p-6">
                      <h2 className="mb-2 text-2xl font-light text-gray-200">
                        {title}
                      </h2>
                      <p className="mb-2 text-sm text-gray-500">By: {author}</p>
                      <p className="mb-2 text-sm text-gray-500">6 min read</p>
                      <p className="text-gray-400">{excerpt}</p>
                    </div>
                    <div className="grow"></div>
                    <div className="flex w-full p-3 xl:p-6">
                      <p className="text-sm text-gray-500">
                        <Date dateString={date} />
                      </p>
                      <div className="grow"></div>
                      <svg
                        fill="currentColor"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                      </svg>
                    </div>
                  </Link>
                );
            }
          }
        )}
      </div>
      <NextSteps data={steps} />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
