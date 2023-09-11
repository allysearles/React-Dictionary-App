import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");

	function handleResponse(response) {
		console.log(response.data[0]);
	}
	function search(event) {
		event.preventDefault();

		//Documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}
	return (
		<div className="Dictionary">
			<form id="search-form" onSubmit={search}>
				<div className="row">
					<div className="col-10">
						<input
							id="search-bar"
							type="search"
							placeholder="Search . . ."
							className="form-control"
							onChange={handleKeywordChange}
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
		</div>
	);
}
