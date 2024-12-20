import { HeadingUI, InputUI } from "../ui";
import "./styles.scss";

export const SearchForm = () => {

  return (
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
  );
};
