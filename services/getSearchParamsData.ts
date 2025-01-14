export const getSearchParamsData = async () => {
  try {
    const response = await fetch(
      "https://business-module-self.vercel.app/api/search-params-data",
      {
        method: "GET",
        cache: "no-cache",
      }
    );

    if (!response) {
      return null;
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
