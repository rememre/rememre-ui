import type { Metadata } from 'next'
import '@styles/globals.css'
import '@jdistyles/layout.css'

export const metadata: Metadata = {
  title: 'JDI: Todo App',
  description: "A minimalist ToDo manager",
}

const JdiLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default JdiLayout
