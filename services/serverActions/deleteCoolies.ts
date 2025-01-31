// "use server";

// import { cookies } from "next/headers";

// export const deleteCookies = async () => {
//   const cookiesStore: ReturnType<typeof cookies> = cookies();

//   cookiesStore.set("token", "", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     expires: new Date(0),
//     path: "/",
//   });
// };
