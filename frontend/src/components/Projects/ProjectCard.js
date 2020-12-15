import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ProjectCard() {
	const [hover, setHover] = useState(false);

	function handleOnMouseOver() {
		return setHover(true);

	}
	function handleOnMouseOut() {
		return setHover(false);
	}
	return (
		<figure className="m-2 sm:w-56 fig" onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
			<Link to="/projects/1/intro">
				<div className="cursor-pointer shadow-sm rounded-md m-0">
					{
						hover
							? <dl className="h-48 p-6">
								<dt>Transport Problem</dt>
								<dd>The Traveling Purchaser Problem (TPP) considers a set of products to be purchased and a set
								of markets that ...</dd>
							</dl>
							: <img className="sm:w-56 h-auto" src="/images/tpp.jpeg" alt="tpp" />

					}
					<h3 className="ml-6">TPP</h3>
				</div>
			</Link>
		</figure>
	);
}

export default ProjectCard;