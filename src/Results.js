import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
	if (props.results) {
		return (
			<div className="Results">
				<section>
					<h2 id="word-searched">{props.results.word}</h2>
					{props.results.phonetic}
				</section>

				{props.results.meanings.map(function(meaning, index) {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
