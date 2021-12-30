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
					{/* <Router> */}
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/products">Products</Link>
						</li>
						<li>
							<Link to="/services">Services</Link>
						</li>
						<li>
							<Link to="/blogs">Blogs</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
					{/* </Router> */}
				</section>
			</nav>
		</header>
	);
}
