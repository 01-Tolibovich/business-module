export const getSearchParamsData = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/search-params-data",
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
