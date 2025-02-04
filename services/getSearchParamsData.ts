import { getHostUrl } from "./utils/getHostUrl";

export const getSearchParamsData = async () => {
  const url = await getHostUrl("/api/search-params-data");
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-cache",
    });

    if (!response) {
      return null;
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
