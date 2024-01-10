"use client"
import { FaCircleInfo } from "react-icons/fa6"
import { Fragment, useState } from "react"

interface InfoProps {
	children: React.ReactNode;
}

const Info: React.FC<InfoProps> = ({children}) => {
	const [modal, toggle] = useState<boolean>(false)
	const onClick = () => toggle(prev => !prev)
	return (
		<Fragment>
			<FaCircleInfo className='nav-icon' onClick={onClick}/>
			{modal && children}
		</Fragment>
	)
}

export default Info
