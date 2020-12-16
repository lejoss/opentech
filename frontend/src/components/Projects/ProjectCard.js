import React from 'react';
import { Link } from 'react-router-dom';


function ProjectCard() {
	return (
		<figure className="project-card m-1 py-6 px-4 bg-white sm:w-72 cursor-pointer shadow-md rounded-md">
			<img className="sm:w-40 my-0 mx-auto" src="/images/tpp.jpeg" alt="tpp" />
			<p className="text-2xl mt-4">Traveling Purchased Problem</p>
			<p className="leading-relaxed tracking-wide font-light my-2 text-xs">(TPP) considers a set of products to be purchased and a set
						of markets that offer the products at different prices.
				</p>
			<Link to="/projects/1/intro">
				<p className="text-right leading-relaxed tracking-wide text-xs uppercase mt-6 hover:text-gray-600">learn more</p>
			</Link>
		</figure>
	);
}

export default ProjectCard;