import { useState, useEffect, useRef } from 'react';

const Filter = ({
	setActiveGenre,
	activeGenre,
	setFiltered,
	popular,
	options,
}) => {
	const [isActive, setIsActive] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const closeDropdown = (e) => {
			if (e.path[0] !== ref.current) {
				setIsActive(false);
			}
		};

		document.body.addEventListener('click', closeDropdown);

		return () => document.body.removeEventListener('click', closeDropdown);
	}, []);

	useEffect(() => {
		if (activeGenre === 'любой') {
			setFiltered(popular);
			return;
		}

		const filtered = popular.filter((movie) => {
			return movie.genre.includes(activeGenre);
		});

		setFiltered(filtered);
		
	}, [activeGenre]);

	return (
		<div className="dropdown">
			<div
				className={isActive ? 'dropdown__btn__active' : 'dropdown__btn'}
				onClick={() => setIsActive(!isActive)}
				ref={ref}
			>
				{activeGenre}
			</div>
			{isActive && (
				<div className="dropdown__content">
					{options.map((option, id) => {
						return (
							<a
								className="dropdown__item"
								key={id}
								onClick={() => {
									setActiveGenre(option);
									setIsActive(false);
								}}
							>
								{option}
							</a>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Filter;
