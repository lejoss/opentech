import React from 'react';
import { Link } from 'react-router-dom';


function ProfileCard({ person }) {
	return (
		<figure className="flex flex-col profile-card m-1 py-6 px-4 bg-white sm:w-72 shadow-md rounded-md">
			<img className="my-0 mx-auto w-24 h-24 rounded-full" src={person.img} alt="tpp" />
			<p className="text-center leading-relaxed tracking-wide text-2xl mt-4">{person.name}</p>
			<p className="text-center leading-relaxed tracking-wide mb-8 text-xs text-gray-600 font-light">{person.jobTitle}</p>

			<div className="flex items-start ml-0 mb-1">
				<img className="mr-4" src="/images/call.svg" alt="contact pbx" />
				<div className="">
					<p className="leading-relaxed tracking-wide text-xs font-light">{person.phone}</p>
					<p className="leading-relaxed text-gray-600 tracking-wide text-xs font-light">Mobile</p>
				</div>
			</div>
			<div className="flex flex-1 items-start ml-0 mb-1">
				<img className="mr-4" src="/images/email.svg" alt="contact email" />
				<div className="">
					<p className="break-all leading-relaxed tracking-wide text-xs font-light">{person.email}</p>
					<p className="leading-relaxed text-gray-600 tracking-wide text-xs font-light">Work</p>
				</div>
			</div>

			<Link to="/projects?person=david" style={{ backgroundColor: '#212121' }} className="flex justify-center rounded p-2 shadow-md cursor-pointer">
				<p className="leading-relaxed tracking-wide text-xs uppercase text-white hover:text-gray-300 font-medium">Projects</p>
			</Link>

		</figure>
	);
}

export default ProfileCard;