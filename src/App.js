import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/Header";
import Nav from "./pages/header/Nav";
import Home from "./pages/home/Home";
import Test from "./test/Test";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/test" element={<Test />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

// TODO: introduce BrouseRouter and do all pages and components
