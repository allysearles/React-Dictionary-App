import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultkeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function handleDictionaryResponse(response) {
		setResults(response.data);
	}

	function handlePexelsResponse(response) {
		console.log(response);
		setPhotos(response.data.photos);
	}

	function search() {
		//Documentation: https://dictionaryapi.dev/

		let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=bf3ac0311d9084536tao67043b4313ef`;
		axios.get(apiUrl).then(handleDictionaryResponse);

		let pexelsApiKey =
			"hcFZ15ByewstyPL5RHS6EaAHkc9d2mVo0iyhq0uJ0UYlPYq0BIminNyy";

		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
		let headers = { Authorization: ` ${pexelsApiKey}` };
		axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
				<section>
					<form id="search-form" onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-10">
								<input
									type="search"
									placeholder="Search . . ."
									className="form-control custom-input"
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
					<div id="search-example">
						(Ex. Search: Apples, Ice Cream, Sunset, etc.)
					</div>
				</section>
				<Results results={results} />
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}
