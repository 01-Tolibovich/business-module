import { HeadingUI, InputUI } from "@/app/components/ui";
import { TitleTypes } from "@/types";

interface PriceProps {
  titleType: TitleTypes;
}
export const Price: React.FC<PriceProps> = ({titleType}) => {
  return (
    <div>
      <HeadingUI as={titleType}>Цена</HeadingUI>
      <InputUI />
    </div>
  );
};
