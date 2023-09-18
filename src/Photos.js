import React from "react";
import "./Photos.css";

export default function Photos(props) {
	if (props.photos) {
		return (
			<section className="Photos">
				<div className="row">
					{props.photos.map(function(photo, index) {
						console.log(props.photos);
						return (
							<div className="col-4" key={index}>
								<a
									href={photo.src.original}
									rel="noopener noreferrer"
									target="_blank"
								>
									<img
										className="img-fluid"
										src={photo.src.landscape}
										alt={photo.src.photographer}
									/>
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return null;
	}
}
