import { InputUI } from "@/app/components/ui";
import "./styles.scss";

interface PassengerAndCabinProps {
  label: string;
}

export const PassengerAndCabin: React.FC<PassengerAndCabinProps> = ({
  label,
}) => {
  return <InputUI label={label} classInputBlock="passenger-and-cabin" />;
};
