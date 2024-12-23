"use client"

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ModalUI } from "../components/ui";

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
  const [modalShow, setModalShow] = useState(true);
  const router = useRouter();
  const pathName = usePathname()

  useEffect(() => {
    if (pathName === "/" || pathName !== "/login") {
      setModalShow(false);
    }
  }, [pathName])

  const handleCloseModal = () => {
    setModalShow(false);
    router.back();
  }

  return (
    <ModalUI modalShow={modalShow} handleCloseModal={handleCloseModal}>
      {children}
    </ModalUI>
  )
}