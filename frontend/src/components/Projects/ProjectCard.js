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
		<div className="md:w-1/4 pb-4 sm:pb-0 sm:m-4" onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
			<Link to="/projects/1/intro">
				<div className="cursor-pointer shadow-md bg-white rounded-lg">
					{
						hover
							? <div className="h-48 p-6">
								<h3 >Transport Problem</h3>
								<p >The Traveling Purchaser Problem (TPP) considers a set of products to be purchased and a set
								of markets that ...</p>
							</div>
							: <img className="w-full h-48 p-6" src="/images/tpp.jpeg" alt="tpp" />

					}
					<h3 className="ml-6">TPP</h3>
				</div>
			</Link>
		</div>
	);
}

export default ProjectCard;