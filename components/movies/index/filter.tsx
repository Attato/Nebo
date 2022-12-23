import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from 'pages/movies/movies.module.scss';

const Filter = ({ content }) => {
	const [isFilterListOpen, setIsFilterListOpen] = useState(false);
	const [currentFilterListItem, setCurrentFilterListItem] = useState(null);

	const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

	return (
		<div className={styles.filter}>
			{content.map((item, id) => {
				return (
					<div className={styles.button__wrap} key={id}>
						<button
							onClick={() => {
								setIsFilterListOpen(!isFilterListOpen);
								currentFilterListItem === id
									? setCurrentFilterListItem(null)
									: setCurrentFilterListItem(id);
							}}
						>
							{currentFilterListItem === id ? (
								<Image
									src="/svg/movies/arrow.svg"
									width={16}
									height={16}
									alt="svg"
									style={{ transform: 'rotate(90deg)' }}
								></Image>
							) : (
								<Image
									src="/svg/movies/arrow.svg"
									width={16}
									height={16}
									alt="svg"
								></Image>
							)}
							{item.name}
						</button>

						<div
							className={
								currentFilterListItem === id
									? styles.subitems__active
									: styles.subitems
							}
						>
							{item.subitems.map((subitem, id, sorting) => {
								return (
									<Link
										href={{
											pathname: '/movies',
											query: { sorting: `${subitem.name}` },
										}}
										key={id}
										onClick={() => {
											setIsCheckBoxChecked(!isCheckBoxChecked);
											// setCurrentCheckBoxItem(...currentCheckBoxItem);
										}}
									>
										<span
											className={
												isCheckBoxChecked
													? styles.checkbox__checked
													: styles.checkbox
											}
										>
											<input type="checkbox" id={subitem.name} />

											<Image
												src="/svg/movies/check.svg"
												width={16}
												height={16}
												alt="svg"
											></Image>
										</span>
										{subitem.name}
									</Link>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Filter;
