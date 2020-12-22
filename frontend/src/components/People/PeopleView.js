import ProfileCard from './ProfileCard';

function PeopleView({ people }) {
	return (
		<main id="people-view" className="h-screen overflow-auto">
			<p className="text-5xl md:mt-40 lg:mx-32 mb-2">People</p>
			<section id="section-people" className="flex flex-col my-20 mx-2 sm:my-0  sm:mx-6 sm:flex-row sm:flex-wrap md:mx-10 lg:mx-32 2xl:mx-64">
				{people && people.list && people.list.map(p => <ProfileCard key={p.id} person={p} />)}
			</section>
		</main>
	);
}

export default PeopleView;