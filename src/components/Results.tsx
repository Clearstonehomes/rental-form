import type { DealFormValues, DealResult } from "../types/dealTypes";
import DealModelResult from "./DealModelResult";

interface Props {
  values: DealFormValues;
  results: DealResult;
}

export default function ResultsDisplay({ values, results }: Props) {
  if (!values) return <></>;
  return values.model.length == 0 ? (
    <></>
  ) : (
    <div className="bg-white sm:p-6 p-4 rounded-lg shadow-md space-y-4 lg:w-md w-full">
      <h2 className="sm:text-2xl text-xl font-semibold text-[#112956]">
        Results
      </h2>
      <div className=" mt-6">
        {values?.model.includes("PRS") && (
          <DealModelResult model="PRS" result={results} values={values} />
        )}

        {values?.model.includes("Nightly Let") && (
          <DealModelResult
            model="Nightly Let"
            result={results}
            values={values}
          />
        )}

        {values?.model.includes("Standard Management") && (
          <DealModelResult
            model="Standard Management"
            result={results}
            values={values}
          />
        )}
      </div>
    </div>
  );
}
