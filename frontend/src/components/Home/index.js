import { Link } from 'react-router-dom';
export default function Home({ latestProjects = [] }) {
	return (
		<div className="pt-16 h-screen lg:mx-40">
			<h1 className="text-2xl">Recent Projects</h1>

			{latestProjects.length > 0 && latestProjects.map((p, i) => (
				<div key={i} className="flex bg-white p-2 shadow-sm rounded-sm items-center border-b">
					<img className="w-20 h-20" src={p.img} alt="tpp" />
					<div className="ml-4">
						<Link to="/projects" className="flex items-center font-bold text-indigo-700">
							<img src={p.type === 'packing' ? "/images/packing.svg" : "/images/routing.svg"} alt="" className="w-4 h-4 mr-2" />
							<p>{p.title}</p>
							<p className="ml-2 italic font-light text-sm">({p.type})</p>
						</Link>
						<p className="font-light">{p.subTitle}</p>
					</div>
				</div>
			))}



		</div>
	)
}