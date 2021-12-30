import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<header>
			<nav className="navigation">
				<section className="BrandArea">
					<Link to="/">
						<img
							src="https://diviedge.com/layout-design/design-005/wp-content/uploads/sites/4/2021/01/Logo.png"
							alt="logo"
						/>
						{/* Anatomy */}
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
