import ProfileCard from './ProfileCard';

function PeopleView() {
	return (
		<main id="projects-view" className="h-screen overflow-auto">
			<p className="text-5xl text-gray-900 md:mt-40 lg:mx-32 mb-2">People</p>
			<section id="section-projects" className="flex flex-col my-20 mx-2 sm:my-0 sm:justify-center sm:mx-6 sm:flex-row sm:flex-wrap md:mx-10 lg:mx-24 2xl:mx-64">
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
			</section>
		</main>
	);
}

export default PeopleView;