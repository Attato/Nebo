import { useState } from 'react';

export const useFilterList = () => {
	const filterList = [
		{
			name: 'Cортировка',
			subitems: [{ name: 'по популярности' }, { name: 'по рейтингу' }],
		},
		{
			name: 'Жанры',
			subitems: [{ name: 'Драма' }, { name: 'Ногть' }, { name: 'Верёвка' }],
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
	const [currentfilterItem, setCurrentFilterItem] = useState(null);

	return {
		filterList,
		isFilterListOpen,
		setIsFilterListOpen,
		currentfilterItem,
		setCurrentFilterItem,
	};
};
