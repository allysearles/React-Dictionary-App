import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<section>
				<h3>{props.meaning.partOfSpeech}</h3>
				<div className="definition">
					<strong>Definition: </strong>
					{props.meaning.definition}
				</div>
				<div className="example">
					<strong>Example: </strong>
					{props.meaning.example}
				</div>
				<Synonyms synonyms={props.meaning.synonyms} />
			</section>
		</div>
	);
}
