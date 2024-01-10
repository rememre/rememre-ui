"use client"
import { useDataStore } from "@jdistore"
import Goal from "@jdicomponents/Goal"

const GoalList: React.FC = () => {
	const topics = useDataStore(state => state.topics).filter(topic => topic.goal)
	return (
		<section className='goals'>
			<ul>
				{topics.map((topic) => {
						return (
							<li key={topic.id}>
								<Goal
									id={topic.id}
									title={topic.title}
									count={topic.actions.filter(action => action.completed).length}
									total={topic.actions.length}
								/>
							</li>
						)
				})}
			</ul>
		</section>
	)
}

export default GoalList
