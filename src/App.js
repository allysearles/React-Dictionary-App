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
					<p>
						This project was coded by @allysearles and is {""}
						<a
							href="https://github.com/allysearles/React-Dictionary-App.git"
							target="_blank"
							rel="noopener noreferrer"
						>
							open sourced
						</a>
						{""} on Github.
					</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
