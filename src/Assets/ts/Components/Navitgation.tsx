import { Link } from "react-router-dom";

import routes from "../../../routes.json";

export default function Navigation() {
	return (
		<header>
			<nav className="container navigation">
				<section className="BrandArea">
					<Link to="/">
						{/* <img
							src="https://www.mishusoft.com/favicon.ico"
							alt="logo"
						/> */}
						Anatomy
					</Link>
				</section>
				<section className="MenuArea">
					<ul>
						{routes.map((route) => (
							<li key={route.number}>
								<Link to={`${route.url}`} key={route.number}>
									{route.title}
								</Link>
							</li>
						))}
					</ul>
				</section>
			</nav>
		</header>
	);
}
