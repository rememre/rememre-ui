import type { Metadata } from 'next'
import '@styles/globals.css'

export const metadata: Metadata = {
  title: 'Musqiue',
  description: 'Play your music anywhere',
}

const MixLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default MixLayout
