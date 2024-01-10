"use client"
import { useEffect } from "react"
import { useDataStore } from "@jdistore"

interface MainProps {
	children:React.ReactNode
}

const Main: React.FC<MainProps> = ({children}) => {
	const setTopics = useDataStore(state => state.setTopics)
	const setSelected = useDataStore(state => state.setSelected)
	useEffect(() => {
		if (localStorage != undefined) {
			const data = localStorage.getItem("JDI")
			if (data != null) {
				const { state } = JSON.parse(data)
				setTopics(state.topics, true)
				setSelected(state.selected)
			}
		}
	})
	return (
		<main>
			{children}
		</main>
	)
}

export default Main
