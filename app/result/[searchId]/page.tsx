import { SearchResult } from "@/app/components";
import { getSearchParamsData, searchFlights } from "@/services";

export default async function searchId() {
  const paramsData = await getSearchParamsData();

  const searchResultData = paramsData ? await searchFlights(paramsData) : "Not found";

  return <SearchResult searchResultData={searchResultData} />;
}
