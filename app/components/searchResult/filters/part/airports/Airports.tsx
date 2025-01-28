import { HeadingUI } from "@/app/components/ui";
import { TitleTypes } from "@/types";

interface AirportsProps {
  titleType: TitleTypes;
}

export const Airports: React.FC<AirportsProps> = ({ titleType }) => {
  return (
    <div>
      <HeadingUI as={titleType}>Аэропорты</HeadingUI>
    </div>
  );
};
