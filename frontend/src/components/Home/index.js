import { Link } from 'react-router-dom';
export default function Home() {
	return (
		<div className="pt-16 h-screen lg:mx-40">
			<h1 className="text-2xl">Recent Projects</h1>

			<div className="flex bg-white p-2 shadow-sm items-center border-b">
				<img className="w-24 h-24" src={"/images/tpp.jpeg"} alt="tpp" />
				<div className="ml-4">
					<Link to="/projects" className="font-bold">Traveling PurchaserProblem</Link>
					<p className="font-light">Cuellar-Usaquen D, Gomez C and Álvarez-Martínez, D. A GRASP/Path-Relinking Algorithm for the Traveling PurchaserProblem</p>
				</div>
			</div>
			<div className="flex bg-white p-2 shadow-sm items-center">
				<img className="w-24 h-24" src={"/images/tpp2.jpg"} alt="tpp" />
				<div className="ml-4">
					<Link to="/projects" className="font-bold">Traveling PurchaserProblem</Link>
					<p className="font-light">Cuellar-Usaquen D, Gomez C and Álvarez-Martínez, D. A GRASP/Path-Relinking Algorithm for the Traveling PurchaserProblem</p>
				</div>
			</div>


		</div>
	)
}