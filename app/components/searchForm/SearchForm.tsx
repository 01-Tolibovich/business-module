"use client";

import { logoutRequest } from "@/services";
import { useRouter } from "next/navigation";
import { HeadingUI, InputUI } from "../ui";
import "./styles.scss";

export const SearchForm = () => {
  const router = useRouter();
  const logoutHandler = () => {
    logoutRequest()
    .then(() => {
      router.push("/info");
    });
  };
  return (
    <div>
      <div className="search-form">
        <HeadingUI as="h3" className="title">
          Поиск авиабилетов
        </HeadingUI>
        <InputUI type="text" />
        <InputUI type="text" />
        <InputUI type="text" />
        <InputUI type="text" />
        <InputUI type="text" />
      </div>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};
