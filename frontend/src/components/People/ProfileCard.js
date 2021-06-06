import React from 'react';
import { Link } from 'react-router-dom';


function ProfileCard({ person }) {
	return (
		<figure className="flex flex-col sm:mr-2 mb-2 py-2 bg-white sm:w-5/12 lg:w-48 shadow-md rounded-md">
			<div className="flex-1">
				<img className="mx-auto w-20 h-20 border-2 border-indigo-700 rounded-full" src={person.img || '/images/user.svg'} alt={person.name} />
				<p className="text-center font-bold text-lg mt-4">{person.name || ''}</p>
				<p className="text-center font-light mb-4 text-sm text-gray-600 font-light">{person.jobTitle || ''}</p>
			</div>
			<div className="mx-2">
				<div className="hidden flex items-start ml-0 mb-1">
					<img className="mr-4" src="/images/call.svg" alt="contact pbx" />
					<div className="">
						<p className="text-sm font-light">{person.phone || ''}</p>
						<p className=" text-gray-600 text-xs font-light">Mobile</p>
					</div>
				</div>
				<div className="flex flex-1 items-start ml-0 mb-1">
					<img className="mr-2" src="/images/email.svg" alt="contact email" />
					<div className="">
						<p className="break-all text-xs font-light">{person.email || ''}</p>
						<p className="text-gray-600 text-xs font-light">Work</p>
					</div>
				</div>
			</div>
			{person.projects && person.projects.length > 0 && (
				<Link to={`/projects?person=${person.id}`} className="rounded-full border border-indigo-600 hover:bg-indigo-100 flex justify-center p-1 mx-8 shadow-sm cursor-pointer mt-1 mb-2">
					<p className="font-bold text-sm capitalize text-indigo-600 font-medium">Projects</p>
				</Link>
			)}

		</figure>
	);
}

export default ProfileCard;