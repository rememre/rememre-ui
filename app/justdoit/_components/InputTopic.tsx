"use client"
import { KeyboardEvent, useRef } from "react"
import { generateId } from "@jdiutils"
import { ITopic } from "@jditypes"
import { useDataStore } from "@jdistore"

const InputTopic: React.FC = () => {
	const createTopic = useDataStore(state => state.createTopic)
	const setSelected = useDataStore(state => state.setSelected)
	const ref = useRef<HTMLInputElement>(null)
	const onKeyDown = async (e: KeyboardEvent) => {
		if (e.key !== 'Enter') return
		if (ref.current == null) return
		const title = ref.current?.value.toUpperCase()
		if (title == '' || title == undefined) return
		const topicId = await generateId('tpc')
		const topic: ITopic = {id: topicId, title: title, actions:[], goal: false}
		createTopic(topic)
		ref.current.value = ''
		setSelected(topic.id)
	}
	return (
		<div className='input'>
			<input
				ref={ref}
				enterKeyHint="enter"
				onKeyDown={onKeyDown}
				placeholder='New Topic'
				type='text'
			/>
		</div>
	)
}

export default InputTopic
