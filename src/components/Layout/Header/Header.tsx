import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';

import Menu from '../../../components/Menu/Menu'
import { UserLogin } from '../../UserLogin/UserLogin';
import Input from '../../Common/Input/Input';
import Logo from '../../../assets/Logo';


import styles from './Header.module.css';
import imageMain from '../../../assets/headerMain.jpg'


const Header = () => {
	const [openSignIn, setOpenSignIn] = useState(false);
	const [openLogIn, setOpenLogIn] = useState(false);
	const [dataUser, setDataUser] = useState({
		name: '',
		email: '',
		password: '',
		phone: '',
	})
	const [userLogin, setUserLogin] = useState<boolean>(false)

  	const handleOpenSignIn = () => setOpenSignIn(true);
  	const handleCloseSignIn = () => setOpenSignIn(false); 
	const handleOpenLogIn = () => setOpenLogIn(true);
  	const handleCloseLogIn = () => setOpenLogIn(false); 

	useEffect(() => {
		const dataUser = JSON.parse(localStorage.getItem('user') as string);

		if(dataUser) {
			setDataUser(dataUser)
			setUserLogin(true)
		}
	}, [userLogin])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setDataUser({
		...dataUser,
		[name]: value
		});
  	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()

		localStorage.setItem('user', JSON.stringify(dataUser))
		handleCloseSignIn()
		setUserLogin(true)
	}

	const changeFormSignToLog = () => {
		handleCloseSignIn();
		handleOpenLogIn()
	}

	const changeFormLogToSign = () => {
		handleCloseLogIn()
		handleOpenSignIn();
	}


  return (
	<>
		<header className={styles.header}>
			<div className={styles.headerTop}>
				<Logo />
				<Menu/>
				{
					userLogin ? (
						<UserLogin name={dataUser.name}/>
					) : (
						<div className={styles.login}>
							<button onClick={handleOpenLogIn}>LogIn</button>
							<span className={styles.line}></span>
							<button onClick={handleOpenSignIn}>SignIn</button>
						</div>
					)
				}
			</div>
			<div className={styles.headerContent}>
				<div className={styles.contentLeft}>
					<span className={styles.nameBlog}>Xceed Blog</span>
					<h1 className={styles.title}>10 Web Design Mistakes and How to AvoidThem</h1>
					<p className={styles.subTitle}>Looking for more daily inspiration? Download Muzli extension—your go-to source for discovering design ideas from world’s top creators!</p>
					<span className={styles.timeBlog}>13.06, 2024 · 2:15 PM · medium.muz.li</span>
				</div>
				<img className={styles.img} src={imageMain} alt="mainImg" />
			</div>
		</header>
		<Modal
        	open={openSignIn}
        	onClose={handleCloseSignIn}
        	aria-labelledby="modal-title"
        	aria-describedby="modal-description"
      	>
			<div className={styles.modalWrapper}>
				<h2 className={styles.titleSignIn}>Sign In</h2>
				<form onSubmit={handleSubmit} className={styles.form} action="">
					<div>
						<label className={styles.label} htmlFor="name">Name:</label>
						<Input
							onChange={handleChange}
							className={styles.input}
							type="text"
							id="name"
							name="name"
							placeholder='Name Surname'
						/>
					</div>
					<div>
						<label className={styles.label} htmlFor="email">Email:</label>
						<Input
							onChange={handleChange}
							className={styles.input}
							type="email"
							id="email"
							name="email"
							placeholder='Mail'
						/>
					</div>
					<div>
						<label className={styles.label} htmlFor="password">Password:</label>
						<Input
							onChange={handleChange}
							className={styles.input}
							type="password"
							id="password"
							name="password"
							placeholder='Password'
						/>
					</div>
					<div>
						<label className={styles.label} htmlFor="phone">Your phone:</label>
						<Input
							onChange={handleChange}
							className={styles.input}
							type="phone"
							id="phone"
							name="phone"
							placeholder='Phone'
						/>
					</div>
					<div className={styles.customCheckbox}>
						<Input
							onChange={handleChange}
							className={styles.checkbox}
							type="checkbox"
							id="checkbox"
							name="checkbox"
						/>
						<label className={styles.label} htmlFor="checkbox">Yes, I have read and agree to Privacy Policy</label>
					</div>

					<button className={styles.formBtn} type='submit'>SignIn</button>
					<div className={styles.haveAccount}>already have an account? <span><button onClick={changeFormSignToLog} className={styles.signIn}>LogIn</button></span></div>
				</form>
			</div>
		</Modal>
		<Modal
        	open={openLogIn}
        	onClose={handleCloseLogIn}
        	aria-labelledby="modal-title"
        	aria-describedby="modal-description"
      	>
			<div className={styles.modalWrapperLogIn}>
				<h2 className={styles.titleSignIn}>Log In</h2>
				<form onSubmit={handleSubmit} className={styles.form} action="">
					<div>
						<label className={styles.label} htmlFor="email">Your Email:</label>
						<Input
							onChange={handleChange}
							className={styles.input}
							type="text"
							id="email"
							name="email"
							placeholder='Email'
						/>
					</div>
					<div>
						<label className={styles.label} htmlFor="password">Password:</label>
						<Input
							onChange={handleChange}
							className={styles.input}
							type="password"
							id="password"
							name="password"
							placeholder='Password'
						/>
					</div>

					<button className={styles.formBtn} type='submit'>Log In</button>

					<div className={styles.haveAccount}>Don`t have an account?<span><button onClick={changeFormLogToSign} className={styles.signIn}>SignUp</button></span></div>
				</form>
			</div>
		</Modal>
	</>
  )
}



 

export default Header