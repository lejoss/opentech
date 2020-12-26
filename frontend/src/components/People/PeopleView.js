import ProfileCard from './ProfileCard';

function PeopleView({ people }) {
	return (
		<main id="people-view" className="h-screen overflow-auto">
			<p className="hidden text-center text-yellow-700 text-5xl mt-40 md:mx-10 lg:text-left lg:mx-24 mb-2 md:mb-6">People</p>
			<section id="section-people" className="flex flex-col justify-center mx-6 mb-4 mt-20 sm:mx-6 sm:flex-row sm:flex-wrap md:mx-10 lg:mx-24 lg:justify-start 2xl:mx-64">
				{people && people.list && people.list.map(p => <ProfileCard key={p.id} person={p} />)}
			</section>
		</main>
	);
}

export default PeopleView;