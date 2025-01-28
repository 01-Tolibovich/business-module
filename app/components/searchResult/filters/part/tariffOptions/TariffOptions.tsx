import { HeadingUI, InputUI } from "@/app/components/ui"
import { TitleTypes } from "@/types"

interface TariffOptionsProps {
  titleType: TitleTypes;
} 

export const TariffOptions: React.FC<TariffOptionsProps> = ({titleType}) => {

  return (
    <div>
      <HeadingUI as={titleType}>Опции тарифа</HeadingUI>
      <InputUI type="checkbox" label="С багажом" htmlFor="with-baggage"/>
      <InputUI type="checkbox" label="Без багажа" htmlFor="without-baggage"/>
    </div>
  )
}