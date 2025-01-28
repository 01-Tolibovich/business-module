import { HeadingUI } from "@/app/components/ui";
import { TitleTypes } from "@/types";

interface ArrivalTimeProps {
  titleType: TitleTypes;
}

export const ArrivalTime: React.FC<ArrivalTimeProps> = ({ titleType }) => {
  return (
    <div>
      <HeadingUI as={titleType}>Время вылета</HeadingUI>
    </div>
  );
};
