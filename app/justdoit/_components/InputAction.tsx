"use client"
import { KeyboardEvent, useRef } from "react"
import { generateId } from "@jdiutils"
import { toast } from "react-toastify"
import { ToastConfig } from "@jdicomponents/toast"
import { useDataStore } from "@jdistore"

const InputAction: React.FC = (): JSX.Element => {
	const createAction = useDataStore((state) => state.createAction)
	const ref = useRef<HTMLInputElement>(null)
	const onKeyDown = async (e: KeyboardEvent) => {
		if (e.key !== 'Enter') return
		const title = ref.current?.value
		if (ref.current == null) return
		if (title == null || title.trimStart() === '') {
			toast.info('Name Your Task', ToastConfig)
			return
		}
		const actionId = await generateId('act')
		createAction({
			id: actionId,
			title: title,
			completed: false
		})
		ref.current.value = ''
	}

	return (
		<div className='input'>
			<input
				ref={ref}
				enterKeyHint="enter"
				onKeyDown={onKeyDown}
				placeholder='Write an action item ...'
				type='text'
			/>
		</div>
	)
}

export default InputAction
