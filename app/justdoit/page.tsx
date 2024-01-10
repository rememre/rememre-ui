import "react-toastify/ReactToastify.css"
import { ToastContainer } from "@jdicomponents/toast"
import TopicBar from "@jdicomponents/TopicBar"
import ActionBar from "@jdicomponents/ActionBar"
import GoalList from "@jdicomponents/GoalList"
import Main from "@jdicomponents/Main"
import Header from "@jdicomponents/Header"
import { Fragment } from "react"

const Jdi: React.FC = () => {
	return (
		<Fragment>
			<Header />
			<Main>
				<ToastContainer />
				<TopicBar />
				<ActionBar />
				<GoalList />
			</Main>
		</Fragment>
	)
}

export default Jdi;
