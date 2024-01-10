"use client"
import { useState } from "react"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { FaPencil } from "react-icons/fa6"
import { SiConvertio } from "react-icons/si"
import { generateId } from "@jdiutils"
import Edit from "@jdicomponents/Edit"
import { useDataStore } from "@jdistore"

interface ActionProps {
	id: string;
	title: string;
	completed: boolean;
}

const Action: React.FC<ActionProps> = ({
	id,
	title,
	completed,
}: ActionProps) => {
	const [modal, toggle] = useState<boolean>(false)
	const toggleCompleted = useDataStore(state => state.toggleCompleted)
	const createTopic = useDataStore(state => state.createTopic)
	const deleteAction = useDataStore(state => state.deleteAction)
	const updateAction = useDataStore(state => state.updateAction)
	const onConvert = async () => {
		if (confirm('Are you sure you want to convert this action into a topic / goal?')) {
			createTopic({id: await generateId('tpc'), title:title, goal: true, actions: []})
			deleteAction(id)
		}
	}
	const callback = (newTitle: string):void => {
		if (newTitle === '' || newTitle === null || newTitle === undefined) return
		updateAction(id, newTitle)
		toggle(false)
	}
	return (
		<div className='action'>
			<span className={completed?'content checked':'content unchecked'}>
				<div className='checkbox'>
					<input type='checkbox' defaultChecked={completed} onChange={(e) => toggleCompleted(id, e.target.checked)}/>
				</div>
				{modal
				? <Edit
					placeholder='new name'
					defaultValue={title}
					autoFocus={true}
					callback={callback}
				/> : title}
			</span>
			<span>
				<FaPencil className='edit' style={{color: modal?'orange':'yellow'}} onClick={() => toggle((prev) => prev?false:true)}/>
				<SiConvertio className='convert' onClick={onConvert} />
				<RiDeleteBin6Fill className='delete' onClick={() => deleteAction(id)} />
			</span>
		</div>
	)
}

export default Action
