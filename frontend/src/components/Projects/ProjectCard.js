import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard() {
	const [hover, setHover] = useState(false);

	function handleOnMouseOver() {
		setHover(true);

	}
	function handleOnMouseOut() {
		setHover(false);
	}
	return (
		<div className="w-1/4 p-4" onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
			<div className="cursor-pointer shadow-md bg-white rounded-sm h-full w-full">
				<Link to="/projects/1">
					{
						hover
							? <div className="h-48 w-full p-6">
								<h3 >Transport Problem</h3>
								<p >The Traveling Purchaser Problem (TPP) considers a set of products to be purchased and a set
								of markets that ...</p>
							</div>
							: <img className="h-48 w-full p-6" src="/images/tpp.jpeg" alt="tpp" />

					}
					<h3 className="ml-6">TPP</h3>
				</Link>
			</div>
		</div>
	);
}

export default ProjectCard;