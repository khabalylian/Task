import Card from '../../Card/Card';

import { CARD_DATA } from './constants';

import styles from './OurValues.module.css';


const OurValues = () => {
  return (
	<div className={styles.OurValues}>
		<h2 className={styles.title}>Our Values</h2>
		<div className={styles.cards}>
			{CARD_DATA.map((data, index) => (
				<Card key={index + data.img} title={data.title} description={data.description} img={data.img}/>
			))}
		</div>
	</div>
  )
}

export default OurValues