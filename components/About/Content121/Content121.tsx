import { Content121Data } from "./Content121Data";
import Image from "next/image";

export const Content121 = () => {
  const content = Content121Data;
  return (
    <div className="bg-gray-900 py-8 lg:pl-14">
      {content.map((item, key) => (
        <div
          key={key}
          className="mb-16 grid gap-4 p-3 text-gray-400 md:grid-cols-4"
        >
          <div className="font-bold text-white">{item.caption}</div>
          <div className="grid grid-cols-1 gap-4 md:col-span-3 xl:col-span-2">
            <div className="text-3xl text-white">{item.title}</div>

            {item.content.map((item, pKey) => (
              <div key={pKey}>{item.p}</div>
            ))}
          </div>
          <div className={`${!item.image && "hidden"} xl:hidden`}></div>
          {item.image && <div className="md:col-span-3 xl:col-span-1 flex flex-col justify-end">
            <Image src={item.image} alt={""} />
            </div>}
        </div>
      ))}
    </div>
  );
};
