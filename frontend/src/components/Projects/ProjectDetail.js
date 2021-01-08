import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';

function Introduction() {
	return (
		<div className="m-1">
			<p className="leading-relaxed font-light mb-4 md:text-left ">The Traveling Purchaser Problem (TPP) considers a set of products to be purchased and a set
				of markets that offer the products at different prices. The objective is to find a tour that minimizes the cost of buying all the
				products and the cost of visiting the selected markets. </p>

			<p className="sm:w-56 float-right ml-4">
				<img className="sm:w-56 h-auto bg-transparent" src="/images/tpp.png" alt="tpp" />
				<p className="italic leading-relaxed font-light text-xs text-gray-700">Fig 1. Different decisions for the TPP in a layered structure. Picture source: Manerba, D., Mansini, R., & Riera-Ledesma, J. (2017). The traveling purchaser problem and its variants. EJOR, 259(1), 1-18.</p>
			</p>
			<p className="leading-relaxed font-light mb-4">Formally, consider a depot , a set of markets, and a set
			of products. The TPP can be defined on a graph where the set of nodes includes the depot and the markets (i.e.,),
			and the set of arcs defines a complete graph (i.e., ). </p>

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
	return (
		<div>
			<p className="text-center text-5xl pt-10 mb-4 lg:text-left">Results</p>
			<p className="leading-relaxed font-light mb-4">
				For the Asymmetric TPP the main instances we use in the experiments come from the Class 6 Asymmetric Instances without Capacities for the TPP, proposed by Singh and van Oudheusden (1997) and available at <a className="underline text-indigo-700" href="http://webpages.ull.es/users/jriera/TPP.htm">http://webpages.ull.es/users/jriera/TPP.htm</a>. This set contains 855 randomly generated instances for the asymmetric TPP, with sizes ranging from ten markets and ten products to 300 markets and 200 products.
	Here we present results that we have obtained for the 855 instances during the all search process. Results are divided into two categories.
			</p>
			<ul className="leading-relaxed font-light mb-4">
				<li><strong>Closed instances:</strong> These are instances with known optimal solutions. Results can be downloaded <Link to="/files/ResultsClass6Closed.xlsx" className="underline text-indigo-700" target="_blank" download>here</Link></li>
				<li><strong>Open instances:</strong> These are instances without known optimal solutions, for which best found solutions are reported. Results can be downloaded <Link to="/files/ResultsClass6Open.xlsx" className="underline text-indigo-700" target="_blank" download>here</Link>.</li>
			</ul>

			<p className="leading-relaxed font-light mb-4">
				For each instance we report the objective function value (Sol) and the time in seconds required to find the solution (T (s)). For closed instances we report the Gap (%) against the optimal solution. Some of the computational times for the MIP are not reported due to information loss.
			</p>
			<p className="leading-relaxed font-light mb-4">
				Both files have the columns GRASP + Filtering/PR – TotalIter = 4500 with their respective constructive approach (P: Purchased, R: Route). These columns refer to the chosen variant of the GRASP algorithm.
			</p>
			<p className="leading-relaxed font-light mb-4">
				Both files have the column “Best solutions obtained with alternative GRASP configurations", which refers to the best solution obtained with a GRASP configuration different to the ones reported in the paper; these alternative approaches are identified in the column Alternative GRASP ID.
			</p>
			<p className="leading-relaxed font-light mb-4">
				The following definitions apply for the variants of the algorithm. Filtering means the approach includes Filtrado. PR indicates the approach uses Path Relinking. Each ID describes the chosen algorithm alternative, followed by the chosen construction approach and for the parameter TotalIter.
			</p>
			<table className="table-fixed bg-white shadow-sm rounded-md w-full">
				<thead className="border-b">
					<tr>
						<th className="uppercase w-1/3 lg:w-1/2 p-4 ">Alternative GRASP ID</th>
						<th className="uppercase w-2/3 lg:w-1/2 p-4 text-left">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">1</td>
						<td className="font-light">GRASP\PR - (P) - TotalIter = 2500</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">2</td>
						<td className="font-light">GRASP\PR - (R) - TotalIter = 2500</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">3</td>
						<td className="font-light">GRASP\PR - (P) - TotalIter = 4500</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">4</td>
						<td className="font-light">GRASP\PR - (R) - TotalIter = 4500</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">5</td>
						<td className="font-light">GRASP\PR - (P&R) - TotalIter = 4500</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">6</td>
						<td className="font-light">GRASP+Filtering\PR - (P) - TotalIter = 2500</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">7</td>
						<td className="font-light">GRASP+Filtering\PR - (R) - TotalIter = 2500</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">8</td>
						<td className="font-light">GRASP+Filtering\PR - (P&R) - TotalIter = 4500</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">9</td>
						<td className="font-light">GRASP+Filtering\PR - (P) - TotalIter = 9000</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">10</td>
						<td className="font-light">GRASP+Filtering\PR - (R) - TotalIter = 9000</td>
					</tr>
					<tr className="hover:bg-gray-100">
						<td className="text-center p-4 font-light">11</td>
						<td className="font-light">GRASP+Filtering\PR - (P&R) - TotalIter = 9000</td>
					</tr>
				</tbody>
			</table>
			<br />
			<p className="leading-relaxed font-light mb-4 text-xs text-center">As mentioned in the paper, all GRASP configurations have parameter values. LocalIter = 3850 y E = 20. </p>
		</div>
	)
};


function ProjectDetail({ projects }) {
	let { path, url } = useRouteMatch();
	let { projectId } = useParams();
	const projectDetail = projects[projectId] || {};

	return (
		<main className="overflow-auto">
			<section className="rounded shadow-sm p-4  mx-6 sm:mx-6 md:mx-10 lg:mx-40 2xl:mx-64 bg-white">
				<article className="">
					<p className="text-5xl md:mt-32 mb-4">Traveling Purchased Problem</p>
					<p className="mx-1 italic leading-relaxed font-light text-xs text-gray-700 mb-6">
						This Web site is intended to be served as a supplement to the paper submitted:
	Cuellar-Usaquen D, Gomez C and Álvarez-Martínez, D. A GRASP/Path-Relinking Algorithm for the Traveling PurchaserProblem
	whose text is available in PDF and PS formats. We provide here all the results and the description solutions that we have obtained by the Algorithm GRASP + Filtering/PR in our experiments. Below there is a brief description of the problem we consider in this work.
					</p>

					<Introduction />
					<hr />
					<Results />
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