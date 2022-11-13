import { useState, useEffect, useRef } from 'react';
import styles from 'components/ui_styles/dropdown.module.scss';

const Filter = ({
	setActiveGenre,
	activeGenre,
	setFiltered,
	popular,
	options,
}) => {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState(options[0]);
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
		<div className={styles.dropdown}>
			<div
				className={
					isActive ? styles.dropdown__btn__active : styles.dropdown__btn
				}
				onClick={(e) => setIsActive(!isActive)}
				ref={ref}
			>
				{selected}
			</div>
			{isActive && (
				<div className={styles.dropdown__content}>
					{options.map((option, id) => {
						return (
							<div
								className={styles.dropdown__item}
								key={id}
								onClick={() => {
									setSelected(option);
									setIsActive(false);
								}}
							>
								<a onClick={() => setActiveGenre(option)}>{option}</a>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Filter;
