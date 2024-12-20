import "./styles.scss"

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {

  return (
    <div className="auth-layout">
      <div>{children}</div>
    </div>
  )
}