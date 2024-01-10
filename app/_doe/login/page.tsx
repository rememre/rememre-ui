"use client"
import { useRef, useState } from "react";
import { FaEye, FaUser, FaEyeSlash } from "react-icons/fa";
import '@mixstyles/login.css'

const App = () => {
	const [show, setShow] = useState(false)
	const ref = useRef<HTMLInputElement>(null)
	const onClick = () => {
		setShow(prev => !prev)
		ref.current?.focus()
	}

	return (
		<section>
			<main>
				<div>
					<h1>Musique</h1>
					<form method="POST">
						<FaUser className='icon'/>
						<input autoFocus type='text' placeholder='Username / Email'/>
						<br/>
						{show
						? <FaEyeSlash className='icon' onClick={onClick}/>
						: <FaEye className='icon' onClick={onClick}/>
						}
						<input ref={ref} type={show?'text':'password'} placeholder='Password'/>
						<p>
							<a href='#'>Forgot Password</a>
						</p>
						<br/>
						<button type='submit'>Login</button>
						<br/>
					</form>
					<div className='actions'>
						<p>
							Don't have an account?
							<a href='#'> Click here</a>
						</p>
					</div>
				</div>
			</main>
		</section>
	)
}

export default App;
