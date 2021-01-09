import ProfileCard from './ProfileCard';
import useQuery from '../../hooks/useQuery';

function PeopleView({ people }) {
	const query = useQuery();
	const conditionToRender = people && people.list && people.list.length > 0;

	return (
		<main id="people-view" className="h-screen overflow-auto">
			<p className="hidden text-center text-yellow-700 text-5xl mt-40 md:mx-10 lg:text-left lg:mx-24 mb-2 md:mb-6">People</p>
			<section id="section-people" className="flex flex-col justify-center mx-6 mb-4 mt-20 sm:mx-6 sm:flex-row sm:flex-wrap md:mx-10 lg:mx-40 2xl:mx-64">
				{query.get('person')
					? conditionToRender && people.list.map(p => p.id === parseInt(query.get('person')) && <ProfileCard key={p.id} person={p} />)
					: conditionToRender && people.list.map(p => <ProfileCard key={p.id} person={p} />)
				}
			</section>
		</main>
	);
}

export default PeopleView;