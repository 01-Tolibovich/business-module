"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ModalUI } from "../components/ui";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [modalShow, setModalShow] = useState({
    active: true,
    anim: false,
  });
  const router = useRouter();
  const pathName = usePathname();

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (pathName === "/") {
      setModalShow((prevState) => ({ ...prevState, active: false }));
      setModalShow((prevState) => ({ ...prevState, anim: false }));
    }
    if (pathName === "/login") {
      setModalShow((prevState) => ({ ...prevState, active: true }));
      timerRef.current = setTimeout(() => {
        setModalShow((prevState) => ({ ...prevState, anim: true }));
      }, 10);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [pathName]);

  const handleCloseModal = () => {
    setModalShow((prevState) => ({ ...prevState, anim: false }));

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    
    timerRef.current = setTimeout(() => {
      setModalShow((prevState) => ({ ...prevState, active: false }));
      router.back();
    }, 400);
  };

  return (
    <ModalUI {...modalShow} handleCloseModal={handleCloseModal}>
      {children}
    </ModalUI>
  );
}
