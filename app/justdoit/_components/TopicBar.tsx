import "@jdistyles/topic.css"
import InputTopic from "@jdicomponents/InputTopic"
import TopicList from "@jdicomponents/TopicList"

const TopicBar = () => {
	return (
		<section className='topics'>
			<InputTopic />
			<TopicList />
		</section>
	)
}

export default TopicBar
