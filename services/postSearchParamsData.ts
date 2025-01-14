export const postSearchParamsData = async (data: object) => {
  try {
    const res = await fetch("/api/search-params-data", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({data})
    });

    if (res.ok) {
      console.log('Данные успешно отправлены');
    } else {
      console.error('Ошибка при отправке данных');
    }
  } catch (error) {
    console.error(error);
  }
};