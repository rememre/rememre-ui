import { useDataStore } from "@jdistore";
import { FaCircleXmark } from "react-icons/fa6";

interface CloseProps {
	id: string;
}

const Close:React.FC<CloseProps> = ({id}) => {
	const deleteTopic = useDataStore(state => state.deleteTopic)
	const onClick = ():void => {confirm('Are you sure you want to delete this topic?') && deleteTopic(id)}
	return (
		<div className='close-bin' onClick={onClick}>
			<FaCircleXmark className='close-icon'/>
		</div>
	)
}

export default Close
