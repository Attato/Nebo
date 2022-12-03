import { useState, useEffect } from 'react';

export const usePopularMovies = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	const fetchPopularMovies = async () => {
		const data = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=4506fc01a7d9f8d5b35ff79dc50bf10c&language=ru-RU'
		);

		const movies = await data.json();
		setPopularMovies(movies.results);
	};

	useEffect(() => {
		fetchPopularMovies();
	}, []);

	return { popularMovies };
};
