import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");

	function search(event) {
		event.preventDefault();
		alert(`Searching for ${keyword}`);
	}
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}
	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<div className="row">
					<div className="col-10">
						{" "}
						<input
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
