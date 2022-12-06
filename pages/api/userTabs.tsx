import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from 'pages/user/user.module.scss';

const Profile = (
    <div>
        Профиль
    </div>
)

const Friends = (
    <div>
        Друзья
    </div>
)

const Subscription = (
    <div>
        Подписка
    </div>
)


const Settings = (
    <div>
        Настройки
    </div>
)


export const tabs = [
	{ wrap:[Profile], tab: 'Профиль', name: 'profile' },
	{ wrap:[Friends], tab: 'Друзья', name: 'friends' },
    { wrap:[Subscription], tab: 'Подписка', name: 'subscription' },
    { wrap:[Settings], tab: 'Настройки', name: 'settings' }
];

