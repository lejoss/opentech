import React from 'react';
import { Switch, Link, Route, useRouteMatch, useParams } from 'react-router-dom';

function Introduction() {
	return (
		<div className="flex flex-row">
			<div className="w-3/5">
				<p>The Traveling Purchaser Problem (TPP) considers a set of products to be purchased and a set
					of
					markets that
					offer the products at different prices. The objective is to find a tour that minimizes the cost of buying all
					the
					products and the cost of visiting the selected markets. Formally, consider a depot , a set of markets, and a
					set
					of products. The TPP can be defined on a graph where the set of nodes includes the depot and the markets
					(i.e.,),
					and the set of arcs defines a complete graph (i.e., ). Parameter is the price of buying product from market ,
					where as denotes the transportation cost between nodes and . The TPP can be classNameified into symmetric or
					asymmetric depending on the structure of the distance matrix (i.e., whether ). Additionally, the TPP can be
					classNameified as unrestricted when individual markets are assumed to sufficethe demand of products. The opposite
					case, known as the restricted TPP, implies that several markets may have to be visited to comply with demand
					constraints. In this paper, we focus on the Unrestricted Asymmetric Traveling Purchaser Problem (UATPP) and the
							Unrestricted Symmetric Traveling Purchaser Problem (USTPP).</p>
			</div>

			<div className="w-2/5">
				<img src="/images/tpp.jpeg" alt="tpp" />
			</div>
		</div>
	)
}


function Description() {
	return <h1>problem description</h1>
};

function Results() {
	return <h1>resutls</h1>
};


function ProjectDetail() {
	let { path, url } = useRouteMatch();
	// let { projectId } = useParams();

	return (
		<main className="flex-1">
			<section className="h-full mx-16 mt-8">
				<article className="bg-white shadow-sm rounded-md p-8">
					<p className="text-center text-3xl text-gray-700 mb-4">Traveling Purchased Problem</p>
					<hr className="mb-8" />

					<nav className="flex flex-row mb-8 bg-gray-100 rounded-md">
						<Link to={`${url}/intro`} className="text-center cursor-pointer text-lg flex-1 bg-gray-200 p-5 underline rounded-l-md">Introduction</Link>
						<Link to={`${url}/desc`} className="text-center cursor-pointer text-lg flex-1 p-5 underline hover:bg-gray-300 ">Problem Description</Link>
						<Link to={`${url}/res`} className="text-center cursor-pointer text-lg flex-1 p-5 underline hover:bg-gray-300 rounded-r-md">Results</Link>
					</nav>

					<p className="text-gray-700 font-bold mb-4">Traveling Purchaser Problem</p>
					<Switch>
						<Route path="/projects/1/intro" component={Introduction} />
						<Route path="/projects/1/desc" component={Description} />
						<Route path="/projects/1/res" component={Results} />
					</Switch>

				</article>
			</section>
		</main>
	)
}

export default ProjectDetail;

