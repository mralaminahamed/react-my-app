/* external deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* internal deps */
import "../sass/App.scss";
import Navigation from "./Components/Navitgation";
// import Container from "./Components/AppBody";
import Footer from "./Components/Footer";

function Home() {
	return <h1>test</h1>;
}
function About() {
	return <h1>About</h1>;
}

function Products() {
	return <h1>Products</h1>;
}

function App() {
	return (
		<>
			<BrowserRouter>
				<Navigation />
				<main className="main">
					<section className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/products" element={<Products />} />

							{/* <Route path="/" element={<Home />}>
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
							</Route> */}
						</Routes>
					</section>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
