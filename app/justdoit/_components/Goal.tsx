import "@jdistyles/goal.css"
import Close from "@jdicomponents/Close";

interface GoalProps {
	id: string,
	title: string;
	count: number,
	total: number,
}

interface ProgressBarProps {
	count: number,
	total: number,
}

const StatusBar = ({count, total}: ProgressBarProps) => {
	const width = 15;
	const complete  = total !== 0 ? count/total : 0;
	const incomplete = 1 - complete;
	return (
		<div className='goal-progress'>
			<div className='completed' style={{width:complete*width+'rem'}}>
			</div>
			<div className='pending' style={{width:incomplete*width+'rem'}}>
			</div>
		</div>
	)
}

const Goal: React.FC<GoalProps> = ({
	id,
	title,
	count,
	total,
}: GoalProps) => {
	const pct = () => {
		let pct
		if (total === 0) {
			pct = '¯\\_(ツ)_/¯'
		} else {
			pct = (count/total * 100).toFixed(2).toString() + ' %'
		}
		return pct
	}
	return (
		<div className='goal'>
			{count === total && total !== 0 && <Close id={id}/>}
			<h2>{title}</h2>
			<h3>{pct()}</h3>
			<h6>
				Completed <strong>{count}</strong> of <strong>{total}</strong>
			</h6>
			<StatusBar count={count} total={total} />
		</div>
	)
}

export default Goal;
