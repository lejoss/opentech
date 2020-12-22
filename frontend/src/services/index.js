export function mapToKeys(arr = []) {
	return arr.reduce((prev, current, index, array) => {
		return {
			...prev,
			[current.id]: array[index]
		}
	}, {});
}