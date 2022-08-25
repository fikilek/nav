import './App.css'
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Test from './test/Test';

function App() {
	return (
		<div className="App">
      <Header />
			<Home />
			<Test />
		</div>
	);
}

export default App;

// TODO: introduce BrouseRouter and do all pages and components