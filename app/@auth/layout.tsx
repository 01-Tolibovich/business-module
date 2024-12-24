"use client"

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ModalUI } from "../components/ui";

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
  const [modalShow, setModalShow] = useState({
    active: true,
    anim: false
  });
  const router = useRouter();
  const pathName = usePathname()

  useEffect(() => {
    if (pathName === "/login") {
      setModalShow(prevState => ({...prevState, active: true}));
      setModalShow(prevState => ({...prevState, anim: true}));
    }
  }, [pathName])

  const handleCloseModal = () => {
    setModalShow(prevState => ({...prevState, anim: false}));
    setTimeout(() => {
      setModalShow(prevState => ({...prevState, active: false}));
      router.back();
    }, 400);
  }

  return (
    <ModalUI {...modalShow} handleCloseModal={handleCloseModal}>
      {children}
    </ModalUI>
  )
}