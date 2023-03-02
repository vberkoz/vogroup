type Props = {
  content: {
    caption: string;
    title1: string;
    title2: string;
    col1: (string[] | string)[];
    col2: (string[] | string)[];
  };
};

/*

{
  id: "Content1111",
  data: {
    caption: "",
    title1: "",
    title2: "",
    col1: [],
    col2: [],
  }
},
*/

export default function Content1111({ content }: Props) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8 text-gray-900 dark:text-gray-100 lg:pl-14 xl:pr-[108px]">
      <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="font-bold sm:col-span-2 lg:col-span-1">
          {content.caption}
        </div>

        <div className="flex flex-col text-gray-600 dark:text-gray-400">
          <div className="mb-4 text-3xl text-gray-900 dark:text-gray-100 min-h-[36px]">{content.title1}</div>
          {content.col1.map((i, k) => {
            if (Array.isArray(i)) {
              return (
                <ul key={k}>
                  {i.map((li, lKey) => (
                    <li key={lKey}>{li}</li>
                  ))}
                </ul>
              );
            } else {
              return <div key={k}>{i}</div>;
            }
          })}
        </div>

        <div className="flex flex-col text-gray-600 dark:text-gray-400">
          <div className="mb-4 text-3xl text-gray-900 dark:text-gray-100 min-h-[36px]">{content.title2}</div>
          {content.col2.map((i, k) => {
            if (Array.isArray(i)) {
              return (
                <ul key={k}>
                  {i.map((li, lKey) => (
                    <li key={lKey}>{li}</li>
                  ))}
                </ul>
              );
            } else {
              return <div key={k}>{i}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
}
