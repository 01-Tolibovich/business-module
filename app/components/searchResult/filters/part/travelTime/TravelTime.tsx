import { HeadingUI } from "@/app/components/ui";
import { TitleTypes } from "@/types";

interface TravelTimeProps {
  titleType: TitleTypes;
}

export const TravelTime: React.FC<TravelTimeProps> = ({ titleType }) => {
  return (
    <div>
      <HeadingUI as={titleType}>Аэропорты</HeadingUI>
    </div>
  );
};
