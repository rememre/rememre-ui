import "@jdistyles/about.css"

const About:React.FC = ():JSX.Element => {
	return (
		<article className='about'>
			<h3>ABOUT</h3>
			<p>
				This is my ToDo list manager in NextJS.
				<br/>
				For feedbacks, please <a href='https://github.com/liminalminds/jdi' target='_blank' className='underline'>raise an issue</a> or <a href='mailto:liminalminds@protonmail.com' target='_blank' className='underline'>email</a>.
				<br/>
				Happy Tasking.
			</p>
		</article>
	)
}

export default About
