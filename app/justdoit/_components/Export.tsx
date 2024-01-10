"use client"
import { useDataStore } from "@jdistore"
import { FaFloppyDisk } from "react-icons/fa6"

const Export:React.FC = ():JSX.Element => {
	const topics = useDataStore(state => state.topics)
	const url = ():string => {
		let href = '#'
		let blob = null
		if (topics.length !== 0) {
			blob = new Blob([JSON.stringify(topics, null, 2)], {type: 'application/json'})
			href = URL.createObjectURL(blob)
		}
		return href
	}

	return (
		<a className='nav-icon' href={url()} target='_blank' download='jdi_data.json' tabIndex={-1}><FaFloppyDisk/></a>
	)
}

export default Export
