import Header from "@/components/web/header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "Feather Ui - Open Source Component Library",
    default: "Feather Ui - Open Source Component Library",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
