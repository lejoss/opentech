import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Introduction() {
	return (
		<div className="m-1">
			<p className="flex flex-col items-center sm:w-56 float-right sm:ml-4">
				<img className="sm:w-56 h-48 " src="/images/tpp.png" alt="tpp" />
				<span className="italic leading-relaxed font-light text-xs text-gray-700 mb-4 sm:mb-0">Fig 1. Different decisions for the TPP in a layered structure. Picture source: Manerba, D., Mansini, R., & Riera-Ledesma, J. (2017). The traveling purchaser problem and its variants. EJOR, 259(1), 1-18.</span>
			</p>

			<p className="leading-relaxed font-light mb-4 md:text-left ">The Traveling Purchaser Problem (TPP) considers a set of products to be purchased and a set
				of markets that offer the products at different prices. The objective is to find a tour that minimizes the cost of buying all the
				products and the cost of visiting the selected markets. </p>

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

function Results() {
	return (
		<div className="pb-20 sm:pb-0">
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
						<th className="uppercase w-1/3 lg:w-1/2 p-4 font-medium">Alternative GRASP ID</th>
						<th className="uppercase w-2/3 lg:w-1/2 p-4 text-left font-medium">Description</th>
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

const renderEndpointCuttingProblem = (
	<main className="overflow-auto max-w-screen-md m-auto">
		<section className="sm:rounded sm:shadow-sm p-4 sm:mx-6 md:mx-10 bg-white">
			<article className="">
				<p className="text-5xl mt-12 md:mt-32 mb-4 text-center lg:text-left">Endpoint Cutting Problem</p>
				<p className="mx-1 italic leading-relaxed font-light text-xs text-gray-700 mb-6">
					This website is intended to be served as a supplement to the paper submitted: Cuellar-Usaquen D., Palacio A., Ospina E., Botero M., and Álvarez-Martínez, D. “Modeling and solving the endpoint cutting problem” whose text is available in PDF and PS formats. We provide here all the results and the description solutions that we have obtained by the MIPs and the Algorithm GRASP in our experiments. Below there is a brief description of the problem we consider in this work.
				</p>

				<IntroductionECP />

				<br />
				<hr />

				<ResultsECP />
			</article>
		</section>
	</main>

)


function IntroductionECP() {
	return (
		<div className="m-1">
			<p className="flex flex-col items-center sm:w-56 float-right sm:ml-4">
				<img className="sm:w-56 h-48 " src="/images/ecp.jpeg" alt="tpp" />
				<span className="italic leading-relaxed font-light text-xs text-gray-700 mb-4 sm:mb-0">Fig 1. Cutting path of the instance GCUT8_fb_moderate</span>
			</p>

			<p className="leading-relaxed font-light mb-4 md:text-left ">
				The material cutting process can be divided into two stages: the first stage consists of finding the cutting pattern of the pieces (layout of the pieces on the plate); this phase is known as the Two-Dimensional Cutting Problem. The second stage consists of finding the sequence of the cuts on the material (the path to follow by the cutting tool to remove the pieces from the plate); this stage is known as the Cutting Path Problem (CPP). In this work, we will focus only on the second stage of the process.
			</p>

			<p className="leading-relaxed font-light mb-4">
				Cutting Path Problem is classified into different variants, the variant tackle here is the Endpoint Cutting Problem (ECP), where the cutter can enter and exit the pieces in predefined points allowing the piece to be cut in sections. The objective is to find a sequence of cuts required to reach the set of pieces already placed on the plate so that the cutting task's total time is minimized, to increase productivity, meet customer requirements, and reduce costs associated with machinery, workforce, and infrastructure.
			</p>

			<p className="leading-relaxed font-light mb-4">
				This study is motivated by a real application of a chipboard cutting process, which takes place inside the cutting workshop of a large Colombian warehouse (similar to HomeDepot® or Lowe′s®) where customers require the cutting of a set of rectangular pieces from the predetermined boards offered by the warehouse.
			</p>

		</div>

	)
}

function ResultsECP() {
	return (
		<div className="pb-20 sm:pb-0">
			<p className="text-center text-5xl pt-10 mb-4 lg:text-left">Results</p>
			<p className="leading-relaxed font-light mb-4">
				There is no benchmark in the literature for the Endpoint Cutting Problem, nor is there a set of instances of a problem available to take care of our own. One hundred ninety-four cutting patterns were selected to solve the classic instances of the two-dimensional cutting problem from the literature. The best performing algorithms in the literature generated these cutting patterns (Birgin et al., 2012; Carvajal et al.,2018).
			</p>

			<p className="leading-relaxed font-light mb-4">
				In the <strong>SuplementaryResults.xls</strong> file are the performances and details (computational efficiency and the quality of the solution) of:
			</p>

			<ul className="leading-relaxed font-light mb-4">
				<li style={{ listStyle: 'circle', marginLeft: '2em' }}>default and calibrated MIP,</li>
				<li style={{ listStyle: 'circle', marginLeft: '2em' }}>the best version of the GRASP algorithm,</li>	
				<li style={{ listStyle: 'circle', marginLeft: '2em' }}>the Warm-start’s selected variations, and</li>	
				<li style={{ listStyle: 'circle', marginLeft: '2em' }}>the heuristics (GCA and GCA+BI).</li>	
			</ul>


			<ul className="leading-relaxed font-light mb-4">
				<li>Instances can be downloaded <Link to="/files/instancesECP.zip" className="underline text-indigo-700" target="_blank" download>here</Link></li>
				<li>Results can be downloaded <Link to="/files/SuplementaryResults.xlsx" className="underline text-indigo-700" target="_blank" download>here</Link>.</li>
			</ul>
		
			<table className="table-fixed bg-white shadow-sm rounded-md w-full">
				<thead className="border-b">
					<tr>
						<th className="uppercase w-1/7 lg:w-1/2 py-4 font-medium text-xs">CLASS</th>
						<th className="uppercase w-1/7 lg:w-1/2 py-4 text-left font-medium text-xs">CUT EDGES</th>
						<th className="uppercase w-1/7 lg:w-1/2 py-4 text-left font-medium text-xs">VERTEX</th>
						<th className="uppercase w-1/7 lg:w-1/2 py-4 text-left font-medium text-xs">R COMPONENTS</th>
						<th className="uppercase w-1/7 lg:w-1/2 py-4 text-left font-medium text-xs">QUANTITY</th>
						<th className="uppercase w-1/7 lg:w-1/2 py-4 text-left font-medium text-xs">TYPES</th>
						<th className="uppercase w-1/7 lg:w-1/2 py-4 text-left font-medium text-xs">TOTAL</th>
					</tr>
				</thead>


				<tbody>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">1</td>
						<td className="font-light">[8 - 41]</td>
						<td className="font-light">[12 - 66]</td>
						<td className="font-light">[1 - 24]</td>
						<td className="font-light">[4 - 29]</td>
						<td className="font-light">[1 - 9]</td>
						<td className="font-light">96</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">2</td>
						<td className="font-light">[43 - 100]</td>
						<td className="font-light">[46 - 126]</td>
						<td className="font-light">[2 - 42]</td>
						<td className="font-light">[16 - 68]</td>
						<td className="font-light">[2 - 11]</td>
						<td className="font-light">57</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">3</td>
						<td className="font-light">[101 - 194]</td>
						<td className="font-light">[96 - 206]</td>
						<td className="font-light">[1 - 49]</td>
						<td className="font-light">[56 - 122]</td>
						<td className="font-light">[1 - 12]</td>
						<td className="font-light">31</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">4</td>
						<td className="font-light">[214 - 340]</td>
						<td className="font-light">[190 - 259]</td>
						<td className="font-light">[1 - 63]</td>
						<td className="font-light">[131 - 185]</td>
						<td className="font-light">[1 - 8]</td>
						<td className="font-light">7</td>
					</tr>
					<tr className="border-b hover:bg-gray-100">
						<td className="text-center p-4 font-light">5</td>
						<td className="font-light">[1367 - 45556]</td>
						<td className="font-light">[1172-23472]</td>
						<td className="font-light">[4 -207]</td>
						<td className="font-light">[827 - 22793]</td>
						<td className="font-light">[4 - 10]</td>
						<td className="font-light">3</td>
					</tr>
				</tbody>
			</table>
			
			<p className="text-5xl mt-12 md:mt-32 mb-4 text-center lg:text-left">References</p>
		
			<p className="leading-relaxed font-light mb-4">
				Birgin, E.G., Lobato, R.D., Morabito, R., 2012.  Generating unconstrained two-dimensional non-guillotine cutting patterns by a recursive partitioning algorithm. Journal of the Operational Research Society, 63, 2, 183–200.
			</p>

			<p className="leading-relaxed font-light mb-4">
				Carvajal, P.A.V., Munoz, G.A.C., Usaquen, D.C., Alvarez-Martinez, D., 2018. Solving the two-dimensional knapsack problem considering cutting time and emission of particulate matter in the metalworking industry. IEEE Latin America Transactions16, 12, 2888–2895.
			</p>
		</div>
	)
};


function ProjectDetail({ projects }) {
	let { projectId } = useParams();
	// const projectDetail = projects[projectId] || {};

	if (projectId === '2') {
		return renderEndpointCuttingProblem
	}

	return (
		<main className="overflow-auto max-w-screen-md m-auto">
			<section className="sm:rounded sm:shadow-sm p-4 sm:mx-6 md:mx-10 bg-white">
				<article className="">
					<p className="text-5xl mt-12 md:mt-32 mb-4 text-center lg:text-left">Traveling Purchased Problem</p>
					<p className="mx-1 italic leading-relaxed font-light text-xs text-gray-700 mb-6">
						This Web site is intended to be served as a supplement to the paper submitted:
	Cuellar-Usaquen D, Gomez C and Álvarez-Martínez, D. A GRASP/Path-Relinking Algorithm for the Traveling PurchaserProblem
	whose text is available in PDF and PS formats. We provide here all the results and the description solutions that we have obtained by the Algorithm GRASP + Filtering/PR in our experiments. Below there is a brief description of the problem we consider in this work.
					</p>

					<Introduction />

					<br />
					<hr />

					<Results />
				</article>
			</section>
		</main>
	)
}

export default ProjectDetail
