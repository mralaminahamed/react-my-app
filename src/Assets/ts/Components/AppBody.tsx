import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
	return <h1>test</h1>;
}
function About() {
	return <h1>About</h1>;
}

function Products() {
	return <h1>Products</h1>;
}

// https://reactrouter.com/docs/en/v6/getting-started/tutorial

export default function Container() {
	return (
		<main className="main">
			<section className="container">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />}>
							<Route path="about" element={<About />} />
							<Route path="products" element={<Products />} />
							<Route
								path="*"
								element={
									<main style={{ padding: "1rem" }}>
										<p>There's nothing here!</p>
									</main>
								}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
				, This is body section This is body section
				<br />
			</section>
		</main>
	);
}
