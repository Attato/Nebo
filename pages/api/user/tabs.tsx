const Profile = (
	<div key={Date.now()}>
		<h3>Профиль - тут пока ничего нет</h3>
	</div>
);

const Friends = (
	<div key={Date.now()}>
		<h3>Друзья - тут пока ничего нет</h3>
	</div>
);

const Messages = (
	<div key={Date.now()}>
		<h3>Сообщения - тут пока ничего нет</h3>
	</div>
);

const Settings = (
	<div key={Date.now()}>
		<h3>Настройки - тут пока ничего нет</h3>
	</div>
);

export const tabs = [
	{ wrap: [Profile], title: "Профиль", name: 'profile' },
	{ wrap: [Friends], title: "Друзья", name: 'friends' },
	{ wrap: [Messages], title: "Сообщения", name: 'messages' },
	{ wrap: [Settings], title: "Настройки", name: 'settings' },
];
