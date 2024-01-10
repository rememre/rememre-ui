"use client"
import Topic from "@jdicomponents/Topic"
import { useDataStore } from "@jdistore"

const TopicList: React.FC = () => {
	const topics = useDataStore((state) => state.topics)
	const selected = useDataStore((state) => state.selected)
	return (
		<ul>
			{topics.map(topic => {
				return (
					<li
						draggable
						key={topic.id}
					>
						<Topic
							id={topic.id}
							title={topic.title}
							goal={topic.goal}
							selected={selected === topic.id}
						/>
					</li>
				)
			})}
		</ul>
	)
}

export default TopicList
