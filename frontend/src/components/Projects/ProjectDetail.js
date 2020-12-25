import React from 'react';
import { Switch, Link, Route, useRouteMatch, useParams } from 'react-router-dom';

function Introduction() {
	return (
		<div className="m-1">

			<p className="leading-relaxed font-light mb-4 md:text-left ">The Traveling Purchaser Problem (TPP) considers a set of products to be purchased and a set
				of markets that offer the products at different prices. The objective is to find a tour that minimizes the cost of buying all the
				products and the cost of visiting the selected markets. </p>
			<p className="leading-relaxed font-light mb-4">Formally, consider a depot , a set of markets, and a set
			of products. The TPP can be defined on a graph where the set of nodes includes the depot and the markets (i.e.,),
			and the set of arcs defines a complete graph (i.e., ). </p>

			<img className="sm:w-56 h-auto float-right ml-4" src="/images/tpp.jpeg" alt="tpp" />

			<p className="leading-relaxed font-light mb-4">Parameter is the price of buying product from market ,
			where as denotes the transportation cost between nodes and . The TPP can be classNameified into symmetric or
			asymmetric depending on the structure of the distance matrix (i.e., whether ). Additionally, the TPP can be
			classNameified as unrestricted when individual markets are assumed to sufficethe demand of products. </p>


			<p className="leading-relaxed font-light mb-4">The opposite
			case, known as the restricted TPP, implies that several markets may have to be visited to comply with demand
			constraints. In this paper, we focus on the Unrestricted Asymmetric Traveling Purchaser Problem (UATPP) and the
							Unrestricted Symmetric Traveling Purchaser Problem (USTPP).</p>

		</div>

	)
}


function Description() {
	return <h1>problem description</h1>
};

function Results() {
	return <h1>resutls</h1>
};


function ProjectDetail({ projects }) {
	let { path, url } = useRouteMatch();
	let { projectId } = useParams();
	const projectDetail = projects[projectId] || {};

	return (
		<main className="overflow-auto">
			<section className="my-20 mx-6 sm:mx-6 md:mx-10 lg:mx-32 2xl:mx-64">
				<article className="">
					<p className="text-5xl md:mt-40 mb-1">Traveling Purchased Problem</p>
					<p className="mx-1 italic leading-relaxed font-light text-xs text-gray-700 mb-6">
						This Web site is intended to be served as a supplement to the paper submitted:
	Cuellar-Usaquen D, Gomez C and Álvarez-Martínez, D. A GRASP/Path-Relinking Algorithm for the Traveling PurchaserProblem
	whose text is available in PDF and PS formats. We provide here all the results and the description solutions that we have obtained by the Algorithm GRASP + Filtering/PR in our experiments. Below there is a brief description of the problem we consider in this work.
					</p>

					<Introduction />


				</article>
			</section>
		</main>
	)
}

export default ProjectDetail;

// <nav className="flex justify-between mx-2 sm:mx-6 md:mx-10 lg:mx-32 2xl:mx-64">
// <Link to={`${url}/intro`} className="flex-1 m-1 p-1 text-center cursor-pointer uppercase text-gray-700 text-md rounded-sm border-gray-500 bg-gray-300">Introduction</Link>
// <Link to={`${url}/desc`} className="flex-1 m-1 p-1 text-center cursor-pointer uppercase text-gray-700 text-md rounded-sm bg-gray-300">Description</Link>
// <Link to={`${url}/res`} className="flex-1 m-1 p-1 text-center cursor-pointer uppercase text-gray-700 text-md rounded-sm bg-gray-300 active:bg-gray-700">Results</Link>
// </nav>

// <p className="text-center text-gray-700 font-bold mb-4">Traveling Purchaser Problem</p>
// <Switch>
// <Route path="/projects/1/intro" component={Introduction} />
// <Route path="/projects/1/desc" component={Description} />
// <Route path="/projects/1/res" component={Results} />
// </Switch>