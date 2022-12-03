import { useState, useEffect } from 'react';

export const useRatedMovies = () => {
	const [ratedMovies, setRatedMovies] = useState([]);

	const fetchRatedMovies = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/top_rated?api_key=4506fc01a7d9f8d5b35ff79dc50bf10c&language=ru-RU'
		);

		const movies = await data.json();
		setRatedMovies(movies.results);
	};

	useEffect(() => {
		fetchRatedMovies();
	}, []);

	return { ratedMovies };
};
