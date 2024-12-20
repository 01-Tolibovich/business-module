"use client"

import { ButtonUI } from "../ui"

import "./styles.scss"
import Link from "next/link"

export const Auth = () => {
  return (
    <div className="auth">
      <ButtonUI>Стать партнерем</ButtonUI>
      <Link href="/login"><ButtonUI>Войти</ButtonUI></Link>
    </div>
  )
}