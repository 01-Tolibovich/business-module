import { prebook } from "@/services";
import { getPrebookData } from "@/services/getPrebookData";
import { Booking } from "../components";

export default async function booking() {
  const sessionAndRecId = await getPrebookData();
  const currentTicket = await prebook(sessionAndRecId);
  
  return (
    <div>
      <Booking currentTicket={currentTicket}/>
    </div>
  )
}