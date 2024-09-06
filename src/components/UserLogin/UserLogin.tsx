import { IUserLogin } from '../../interface/interface';

import userPhoto from '../../assets/userPhoto.png';

import styles from './UserPhoto.module.css'


export const UserLogin = ({name}: IUserLogin) => {
	console.log(name)
  return (
	<div className={styles.userLogin}>
		<img src={userPhoto} alt='userPhoto' />
		<p>{name}</p>
	</div>
  )
}
