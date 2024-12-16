
import './globals.css'
import React, { ReactNode } from 'react'

export const metadata = {
  title: 'SR-Towing',
  description: 'SR-Towing Motors'
}

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
export default Layout
