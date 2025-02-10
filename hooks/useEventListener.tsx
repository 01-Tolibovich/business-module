"use client"

import { useEffect } from "react";

type EventListenerOptions = boolean | AddEventListenerOptions;

export const useEventListener = <K extends keyof WindowEventMap> (
  eventType?: K,
  handler?: (event: WindowEventMap[K]) => void,
  element?: EventTarget | null,
  options: EventListenerOptions = {}) => {
    
  useEffect(() => {
    const target = element ?? window
    if (!target || !eventType || (typeof handler !== "function")) return;

    const eventListener: EventListener = (event) => handler(event as WindowEventMap[K]);
    target.addEventListener(eventType, eventListener, options);

    return () => {
      target.removeEventListener(eventType, eventListener, options)
    }
  }, [element, eventType, handler, options])
}