import { HeadingUI, InputUI } from "@/app/components/ui"
import { TitleTypes } from "@/types"

interface TransplantsProps {
  titleType: TitleTypes;
}

export const Transplants: React.FC<TransplantsProps> = ({titleType}) => {

  return (
    <div>
      <HeadingUI as={titleType}>Пересадки</HeadingUI>
      <InputUI type="checkbox" label="Все рейсы" htmlFor="all-flights"/>
      <InputUI type="checkbox" label="Без пересадок" htmlFor="no-transfers"/>
      <InputUI type="checkbox" label="1 пересадка" htmlFor="one-transfer"/>
      <InputUI type="checkbox" label="2 пересадки и более" htmlFor="two-transfer"/>
    </div>
  )
}