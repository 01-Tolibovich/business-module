export const postPrebookData = async (data: object) => {
  try {
    const response = await fetch("/api/session-recId", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });

    if (response.ok) {
      console.log("Данные успешно отправлены", data);
    } else {
      console.log("Ошибка при отправке данных");
    }
  } catch (error) {
    console.log(error);
  }
};
