import React from 'react';
import { Link } from 'react-router-dom';


function ProjectCard() {
	return (
		<figure className="m-2 p-4 bg-white sm:w-64 cursor-pointer shadow-md rounded-md m-0">
			<img className="sm:w-56 h-auto" src="/images/tpp.jpeg" alt="tpp" />
			<p className="text-xl mt-4 text-gray-900">Traveling Purchased Problem</p>
			<p className="leading-relaxed font-light my-2 text-sm">The Traveling Purchaser Problem (TPP) considers a set of products to be purchased and a set
						of markets that offer the products at different prices.
				</p>
			<Link to="/projects/1/intro">
				<p className="leading-relaxed tracking-wide text-xs uppercase mt-6 text-gray-600 hover:text-gray-900">learn more</p>
			</Link>
		</figure>
	);
}

export default ProjectCard;