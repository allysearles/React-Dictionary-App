import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultkeyword);
	let [results, setResults] = useState("");
	let [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setResults(response.data);
	}
	function search() {
		//Documentation: https://dictionaryapi.dev/

		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=bf3ac0311d9084536tao67043b4313ef`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleSubmit(event) {
		event.preventDefault();
		search();
	}
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}
	function load() {
		setLoaded(true);
		search();
	}
	if (loaded) {
		return (
			<div className="Dictionary">
				<form id="search-form" onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-10">
							<input
								type="search"
								placeholder="Search . . ."
								className="form-control"
								onChange={handleKeywordChange}
								defaultValue={props.defaultkeyword}
								autoFocus={true}
							/>
						</div>
						<div className="col-2">
							<input
								type="submit"
								value="Search"
								className="btn btn-primary w-100"
								id="search-button"
							/>
						</div>
					</div>
				</form>
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return "Searching...";
	}
}
