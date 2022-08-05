import { useState } from "react";

const useFetching = (callback) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetching = async(...arg) => {
		try {
			setIsLoading(true)
			await callback()
		} catch (e) {
		} finally {
			setIsLoading(false);
		}
	}
	return [fetching, isLoading, error]
}

export default useFetching;