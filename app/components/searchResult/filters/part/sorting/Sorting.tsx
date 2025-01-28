import { HeadingUI, InputUI } from "@/app/components/ui";
import { TitleTypes } from "@/types";

interface SortingProps {
  titleType: TitleTypes
}

export const Sorting: React.FC<SortingProps> = ({ titleType }) => {
  return (
    <div>
      <HeadingUI as={titleType}>Сортировка</HeadingUI>
      <InputUI
        type="radio"
        label="Цена (по возрастанию)"
        htmlFor={"up"}
        name="sort"
      />
      <InputUI
        type="radio"
        label="Цена (по убыванию)"
        htmlFor={"down"}
        name="sort"
      />
    </div>
  );
};
