"use client"
import { useDataStore } from "@jdistore"
import Action from "@jdicomponents/Action"
import { IAction, ITopic } from "@jditypes"

const ActionList: React.FC = (): JSX.Element => {
	const selected = useDataStore(state => state.selected)
	const topics = useDataStore(state => state.topics)
	let filterTopics: Array<ITopic> = topics.filter(topic => topic.id === selected)
	const actions = filterTopics.length === 0 ? [] : filterTopics[0].actions
	return (
		<ul>
			{actions.map((action:IAction) => {
					return (
						<li
							key={action.id}
						>
							<Action
								id={action.id}
								title={action.title}
								completed={action.completed}
							/>
						</li>
					)
			})}
		</ul>
	)
}

export default ActionList
