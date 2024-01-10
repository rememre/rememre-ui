import type { Metadata } from 'next'
import '@styles/globals.css'

export const metadata: Metadata = {
  title: 'Pog',
  description: 'Learn anything & everything',
}

const PogLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default PogLayout
