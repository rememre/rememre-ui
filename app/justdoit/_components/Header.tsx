import "@jdistyles/header.css"
import About from "@jdicomponents/About"
import Export from "@jdicomponents/Export"
import Info from "@jdicomponents/Info"
import Import from "@jdicomponents/Import"

const Header = () => {
	return (
		<header>
			<h1>Just Do It</h1>
			<ul>
				<li><Import /></li>
				<li><Export /></li>
				<li>
					<Info>
						<About />
					</Info>
				</li>
			</ul>
		</header>
	)
}
					
export default Header
