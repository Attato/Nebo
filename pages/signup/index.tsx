import { useState, useEffect } from 'react';

import { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';

import styles from './signup.module.scss';

const SignUp: NextPage = () => {
	// Validation
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [usernameError, setUsernameError] = useState('Это обязательное поле.');
	const [emailError, setEmailError] = useState('Это обязательное поле.');
	const [passwordError, setPasswordError] = useState('Это обязательное поле.');

	const [invalidUsername, setInvalidUsername] = useState(false);
	const [invalidEmail, setInvalidEmail] = useState(false);
	const [invalidPassword, setInvalidPassword] = useState(false);

	const [formValid, setFormValid] = useState(false);

	useEffect(() => {
		if (usernameError || emailError || passwordError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [usernameError, emailError, passwordError]);

	const usernameHandler = (e) => {
		setUsername(e.target.value);
		setUsername(e.target.value);
		if (e.target.value.length < 3 || e.target.value.length > 15) {
			setUsernameError('Это поле должно быть длиной от 3 до 15 символов.');
			if (!e.target.value) {
				setUsernameError('Это поле не может быть пустым.');
			}
		} else {
			setUsernameError('');
		}
	};

	const emailHandler = (e) => {
		setEmail(e.target.value);
		const regexp =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!regexp.test(String(e.target.value).toLowerCase())) {
			setEmailError('Некорректный email.');
		} else {
			setEmailError('');
		}
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < 4 || e.target.value.length > 16) {
			setPasswordError('Это поле должно быть длиной от 4 до 16 символов.');
			if (!e.target.value) {
				setPasswordError('Это поле не может быть пустым.');
			}
		} else {
			setPasswordError('');
		}
	};

	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'username':
				setInvalidUsername(true);
			case 'email':
				setInvalidEmail(true);
			case 'password':
				setInvalidPassword(true);
		}
	};

	return (
		<div className="container">
			<Head>
				<title>Регистрация</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className={styles.main}>
				<div className={styles.auth}>
					<h1>Регистрация</h1>
					<span>Имя</span>
					<div className={styles.input}>
						<input
							onChange={(e) => usernameHandler(e)}
							value={username}
							onBlur={(e) => blurHandler(e)}
							name="username"
							type="text"
							placeholder="username"
						/>
						{invalidUsername && username && <p>{usernameError}</p>}
					</div>
					<span>Почта</span>
					<div className={styles.input}>
						<input
							onChange={(e) => emailHandler(e)}
							value={email}
							onBlur={(e) => blurHandler(e)}
							name="email"
							type="text"
							placeholder="example@mail.ru"
						/>
						{invalidEmail && emailError && <p>{emailError}</p>}
					</div>
					<span>Пароль</span>
					<div className={styles.input}>
						<input
							onChange={(e) => passwordHandler(e)}
							value={password}
							onBlur={(e) => blurHandler(e)}
							name="password"
							type="password"
							placeholder="password"
						/>
						{invalidPassword && passwordError && <p>{passwordError}</p>}
					</div>
					<button
						onClick={() => alert('Эта функция пока недоступна.')}
						disabled={!formValid}
						type="submit"
					>
						Регистрация
					</button>

					<div className={styles.sign__up}>
						<small>У вас уже есть аккаунт?</small>
						<Link href="/signIn">Войти</Link>.
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default SignUp;
