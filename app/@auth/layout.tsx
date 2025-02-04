"use client";

import { useState, useEffect, useRef, ReactNode, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ModalUI } from "../components/ui";
import useAuth from "@/store/userAuth";

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

  const isAuth = useAuth((state) => state.isAuth);

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
    }, 350);
  };

  const closeModal = useCallback(() => {
    setModalShow((prevState) => ({ ...prevState, anim: false }));

    clearExistingTimer();

    timerRef.current = setTimeout(() => {
      setModalShow({ active: false, anim: false });

      if (!isAuth) {
        router.back();
      }
    }, 350);
  }, [isAuth, router]);

  useEffect(() => {
    clearExistingTimer();

    if (pathName !== "/login") {
      closeModal();
    } else if (pathName === "/login") {
      openModal();
    }

    return () => clearExistingTimer();
  }, [closeModal, pathName]);

  return (
    <ModalUI {...modalShow} handleCloseModal={closeModal}>
      {children}
    </ModalUI>
  );
}
