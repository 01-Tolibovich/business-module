import { HeadingUI } from "@/app/components/ui";
import { TitleTypes } from "@/types";

interface DepartureTimeProps {
  titleType: TitleTypes;
}

export const DepartureTime: React.FC<DepartureTimeProps> = ({ titleType }) => {
  return (
    <div>
      <HeadingUI as={titleType}>Время вылета</HeadingUI>
    </div>
  );
};
