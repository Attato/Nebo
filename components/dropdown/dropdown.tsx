import { useState, useEffect, useRef } from 'react';
import styles from './dropdown.module.scss';

const Dropdown = ({ options }) => {
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
								onClick={(e) => {
									setSelected(option);
									setIsActive(false);
								}}
							>
								{option}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
