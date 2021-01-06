import { Link } from 'react-router-dom';
export default function Home({ latestProjects = [] }) {
	return (
		<div className="pt-16 h-full lg:mx-40 bg-white px-10 shadow-sm">
			<div className="flex mt-16">
				<img className="w-40 h-40 opacity-75" src="/images/logo.png" alt="logo" />
				<p className="text-2xl font-light px-10 tracking-wide"><strong>Opentechs</strong> is a repository of projects developed by the group of people posted on the website. Here you will find the latest works created by our team along with complementary information on each project.</p>
			</div>
			<br />
			<br />
			<hr />
			<p className="text-3xl pt-10 mb-4">Recent Projects</p>
			{latestProjects.length > 0 && latestProjects.map((p, i) => (
				<div key={i} className="flex bg-white p-2 rounded-sm items-center border-b">
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

			<section id="contact">
				<p className="text-3xl pt-10 mb-4">Contact</p>
				<div className="pb-10">
					<div className="flex">
						<img className="mr-4" src="/images/person.svg" alt="david" />
						<p className="font-light">David Álvarez-Martínez</p>
					</div>
					<div className="flex">
						<img className="mr-4" src="/images/email.svg" alt="email" />
						<p className="font-light">akavallo@gmail.com</p>
					</div>
					<div className="flex">
						<img className="mr-4" src="/images/building.svg" alt="building" />
						<p className="font-light">Mario Laserna Building, Off. 757</p>
					</div>
					<div className="flex">
						<img className="mr-4" src="/images/call.svg" alt="phone" />
						<p className="font-light">+57 (1) 3394949 - Ext: 3870</p>
					</div>
					<div className="flex">
						<img className="mr-4" src="/images/place.svg" alt="place" />
						<p className="font-light">Bogota D.C. - Colombia</p>
					</div>
				</div>
			</section>

		</div>
	)
}