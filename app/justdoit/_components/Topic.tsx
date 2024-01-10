"use client"
import { FaPencil } from "react-icons/fa6"
import { RiDeleteBin6Fill } from "react-icons/ri"
import { LuTarget } from "react-icons/lu";
import { GiAbstract050 } from "react-icons/gi";
import { KeyboardEvent, useRef, useState } from "react";
import { useDataStore } from "@jdistore";

interface TopicProps {
	id: string;
	goal: boolean
	title: string;
	selected: boolean;
}

const Topic: React.FC<TopicProps> = ({
	id,
	goal,
	title,
	selected,
}: TopicProps): JSX.Element => {
	const selectTopic = useDataStore(state => state.setSelected)
	const deleteTopic = useDataStore((state) => state.deleteTopic)
	const updateTopic = useDataStore((state) => state.updateTopic)
	const toggleGoal = useDataStore((state) => state.toggleGoal)

	const [modal, toggle] = useState<boolean>(false)
	const ref = useRef<HTMLInputElement>(null)

	const onDelete = () => {if (confirm('Are you sure you want to delete this topic?')) deleteTopic(id)}
	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key !== 'Enter') return
		const newTitle = ref.current?.value
		if (newTitle === '' || newTitle === null || newTitle === undefined) return
		updateTopic(id, newTitle)
		toggle(false)
	}

	return (
		<div
			className='topic'
			style={{backgroundColor: selected?'#27272A':'transparent'}}
			onClick={() => selectTopic(id)}
		>
			<span>
				<GiAbstract050 />
				{modal
				? <input
					autoFocus
					ref={ref}
					type='text'
					size={15}
					defaultValue={title}
					placeholder='new name'
					onKeyDown={onKeyDown}
				/>
				: title}
			</span>
			<span>
				<FaPencil
					onClick={() => toggle((prev) => prev?false:true)}
					style={{color: modal?'orange':'yellow'}}
					className='icon edit'
				/>
				{goal 
				? <span onClick={() => toggleGoal(id)}>🎯</span>
				: <LuTarget onClick={() => toggleGoal(id)} className='icon target'/>}
				<RiDeleteBin6Fill onClick={onDelete} className='icon delete'/>
			</span>
		</div>
	)
}

export default Topic;
