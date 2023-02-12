import { NextStep } from "./NextStep";
import { NextStepData } from "./NextStepData";

export const NextSteps = () => (
  <div className="bg-gray-900 text-white lg:pl-14">
    <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-1 mb-8 mt-8 xl:mt-0 p-3 font-bold lg:col-span-3 xl:col-span-1">
        Next steps
      </div>
      {NextStepData.map((item, key) => NextStep({ item, key }))}
    </div>
  </div>
);
