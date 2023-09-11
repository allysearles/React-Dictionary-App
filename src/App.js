import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">Dictionary</header>
				<main>
					<Dictionary />
				</main>
				<footer>
					This project was coded by Ally Searles and is open source on Github.
				</footer>
			</div>
		</div>
	);
}

export default App;
