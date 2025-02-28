import { SearchResult } from "@/app/components";
import { getSearchParamsData, searchFlights } from "@/services";
import Loading from "./loading";
import { Suspense } from "react";

export default async function searchId() {
  const paramsData = await getSearchParamsData();

  const searchResultData = await searchFlights(paramsData);

  return (
    <Suspense fallback={<Loading />}>
      <SearchResult searchResultData={searchResultData} />
    </Suspense>
  );
}
