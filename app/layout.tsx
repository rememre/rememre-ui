import type { Metadata } from 'next'
import { DynaPuff, Poppins, Quicksand } from 'next/font/google';
import '@styles/globals.css'

const dynaPuff= DynaPuff({weight:['400'], subsets:["latin"], variable:'--dynapuff'});
const poppins = Poppins({weight:['400','600','700','800'], subsets:["latin"], variable:'--poppins'});
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400','600','700'], variable:'--quicksand'})

export const metadata: Metadata = {
  title: 'Rememre',
  description: 'A Super App Project',
}

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
	return (
		<html lang="en">
			<body
				className={`${dynaPuff.variable} ${poppins.variable} ${quicksand.variable}`}
			>
				{children}
			</body>
		</html>
	)
}

export default RootLayout
