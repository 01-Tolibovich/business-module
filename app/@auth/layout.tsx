"use client"

import { useState } from "react";
// import { useRouter } from "next/router";
import { ModalUI } from "../components/ui";

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
  const [modalShow, setModalShow] = useState(true);
  // const router = useRouter();

  const handleCloseModal = () => {
    setModalShow(false);
    window.history.back()
  }

  return (
    <ModalUI modalShow={modalShow} handleCloseModal={handleCloseModal}>
      {children}
    </ModalUI>
  )
}