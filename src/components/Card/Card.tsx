import { ICardData } from '../../interface/interface';

import first from '../../assets/OurValues/1.jpg'

import styles from './Card.module.css';

const Card = ({title, description, img}: ICardData) => {


  return (
	<div className={styles.card}>
		<h3 className={styles.title}>{title}</h3>
		<img className={styles.img} src={first} alt={img} />
		<p className={styles.descr}>{description}</p>
		<button className={styles.btn}>View More</button>
	</div>
  )
}

export default Card