import { getHostUrl } from "./utils/getHostUrl";

export const getPrebookData = async () => {
  const url = await getHostUrl("/api/session-recId");

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
    console.log(error);
  }
};
