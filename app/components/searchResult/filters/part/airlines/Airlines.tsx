import { HeadingUI } from "@/app/components/ui"
import { TitleTypes } from "@/types"

interface AirlinesProps {
  titleType: TitleTypes
}

export const Airlines: React.FC<AirlinesProps> = ({titleType}) => {

  return (
    <div>
      <HeadingUI as={titleType}>Авиакомпании</HeadingUI>
    </div>
  )
}