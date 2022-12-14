import mysql from 'mysql2/promise';

const getData = async (req, res) => {
	const dbconnection = await mysql.createConnection({
		host: 'localhost',
		database: 'cinema',
		user: 'root',
		password: '',
	});

	try {
		const query =
			'SELECT adult, vote_average, release_date, title, original_title, original_language, duration, overview, backdrop_path, poster_path, video, slug FROM movies';
		const values = [];
		const [data] = await dbconnection.execute(query, values);
		dbconnection.end();
		res.status(200).json({ movies: data });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export default getData;
