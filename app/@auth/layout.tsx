"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ModalUI } from "../components/ui";

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [modalShow, setModalShow] = useState({
    active: false,
    anim: false,
  });

  const router = useRouter();
  const pathName = usePathname();

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearExistingTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const openModal = () => {
    setModalShow({ active: true, anim: false });

    timerRef.current = setTimeout(() => {
      setModalShow({ active: true, anim: true });
    }, 100);
  };

  const closeModal = () => {
    setModalShow((prevState) => ({ ...prevState, anim: false }));

    clearExistingTimer();

    timerRef.current = setTimeout(() => {
      setModalShow({ active: false, anim: false });
      router.back();
    }, 400);
  };

  useEffect(() => {
    clearExistingTimer();

    if (pathName === "/") {
      setModalShow({ active: false, anim: false });
    } else if (pathName === "/login") {
      openModal();
    }

    return () => clearExistingTimer();
  }, [pathName]);

  return (
    <ModalUI {...modalShow} handleCloseModal={closeModal}>
      {children}
    </ModalUI>
  )
}
