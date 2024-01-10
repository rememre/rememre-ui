import "@jdistyles/action.css"
import InputAction from "@jdicomponents/InputAction";
import ActionList from "@jdicomponents/ActionList";

const ActionBar: React.FC = () => {
	return (
		<section className='actions'>
			<InputAction />
			<ActionList />
		</section>
	)
}

export default ActionBar;
