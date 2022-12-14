import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from 'pages/movies/movies.module.scss';

const Filter = () => {
	const filterList = [
		{
			name: 'Cортировка',
			subitems: [
				{ sorting: 'rated', name: 'по популярности' },
				{ sorting: 'popularity', name: 'по рейтингу' },
			],
		},
		{
			name: 'Жанры',
			subitems: [
				{ name: 'Драма' },
				{ name: 'Боевик' },
				{ name: 'Криминал' },
				{ name: 'Триллер' },
			],
		},
		{
			name: 'Год выпуска',
			subitems: [
				{ name: '< 2000' },
				{ name: '2000 - 2010' },
				{ name: '2010 - 2020' },
				{ name: '2010 - 2020' },
				{ name: `2020 - ${new Date().getFullYear()}` },
			],
		},
		{
			name: 'Оценка',
			subitems: [{ name: '< 5' }, { name: '5 - 7' }, { name: '7 +' }],
		},
		{
			name: 'Возрастной рейтинг',
			subitems: [
				{ name: '0+' },
				{ name: '12+' },
				{ name: '16+' },
				{ name: '18+' },
			],
		},
	];

	const [isFilterListOpen, setIsFilterListOpen] = useState(false);
	const [currentFilterListItem, setCurrentFilterListItem] = useState(null);

	const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

	return (
		<div className={styles.filter}>
			{filterList.map((item, id) => {
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
