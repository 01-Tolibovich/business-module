"use client";

import { Flights, SearchTypes, Segments } from "@/types/searchFlightsResult";
import { ButtonUI, HeadingUI, ModalUI } from "../../../ui";
import { useExtraWindow } from "@/hooks";
import { Dispatch, SetStateAction, useEffect } from "react";

import "./styles.scss";

import {
  BaggageIcon,
  HandLuggageIcon,
  ReloadIcon,
  ReturnPaymentIcon,
} from "@/app/components/ui/icons";
import { useRouter } from "next/navigation";
import searchResult from "@/store/searchResult";
import { RouteDetails } from "../routeDetails";
import { postPrebookData } from "@/services";

interface TicketDetailsInfoProps {
  searchResultData: SearchTypes;
  flight: Flights | null;
  setTicketDatails: Dispatch<SetStateAction<Flights | null>>;
}

export const TicketDetailsInfo: React.FC<TicketDetailsInfoProps> = ({
  flight,
  setTicketDatails,
}) => {
  const searchData = searchResult((state) => state.searchData);
  const { included } = searchData;

  const airport = included?.airport;
  const routes = flight?.routes;

  const { isShowExtraWindow, handleToggleExtraWindow } = useExtraWindow();

  const { active, anim } = isShowExtraWindow;

  useEffect(() => {
    if (!active && !anim) {
      setTicketDatails(null);
    }
  }, [active, anim, setTicketDatails]);

  useEffect(() => {
    if (flight) {
      handleToggleExtraWindow();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flight]); // Нельзя передавать в качесве зависимостей active, anim или handleToggleExtraWindow. Эти зависимости мешают корректной работе модалльного окна

  const segment: Segments[] | undefined = routes
    ?.map((route) => route.segments)
    .flat();

  const modalHeader = () => {
    return (
      <div className="modal-header">
        {airport && segment && (
          <>
            <HeadingUI as="h4" className="title">
              {airport[segment[0].departure.airport].name.ru} -{" "}
              {airport[segment[segment.length - 1].arrival.airport].name.ru}
            </HeadingUI>
          </>
        )}
        <div className="actions-block">
          <div className="items">
            <ButtonUI>Детали рейса</ButtonUI>
            <ButtonUI>Тарифы</ButtonUI>
          </div>
          <div className="items">
            <BaggageIcon />
            <HandLuggageIcon />
            <ReturnPaymentIcon />
            <ReloadIcon />
          </div>
        </div>
      </div>
    );
  };

  const router = useRouter();

  const handlePostPrebookData = (session: string, recId: string) => {
    const data = {
      session_id: session,
      rec_id: recId,
      language: "ru"
    }
    postPrebookData(data);
    router.push(`/booking?session=${session}&rec=${flight?.rec_id}`)
  }

  const modalFooter = () => {
    const { session } = searchData;

    return (
      <div className="modal-footer">
        <p>{flight?.price.TJS} TJS</p>
        <ButtonUI onClick={() => flight && handlePostPrebookData(session, flight?.rec_id)}>
          Забронировать
        </ButtonUI>
      </div>
    );
  };

  if (!flight) return null;

  return (
    <ModalUI
      {...isShowExtraWindow}
      handleCloseModal={handleToggleExtraWindow}
      header={modalHeader()}
      footer={modalFooter()}
    >
      <RouteDetails flight={flight} />
    </ModalUI>
  );
};
